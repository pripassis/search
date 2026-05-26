"use client";

import { useEffect, useState } from "react";
import type { SearchResultItem } from "@/lib/types";

type Filters = {
  q?: string;
  type?: string;
  origin?: string;
  status?: string;
  extension?: string;
  from?: string;
};

type ToastState = { type: "success" | "error"; message: string } | null;
type TableItem = Omit<SearchResultItem, "discoveredAt"> & { discoveredAt: string | Date };

export function LibraryItemsTable({ items, filters }: { items: TableItem[]; filters: Filters }) {
  const [rows, setRows] = useState(items);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [bulkBusy, setBulkBusy] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);

  useEffect(() => {
    setRows(items);
    setSelectedIds([]);
  }, [items]);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 2500);
    return () => clearTimeout(timer);
  }, [toast]);

  function showToast(type: "success" | "error", message: string) {
    setToast({ type, message });
  }

  function removeRows(ids: string[]) {
    setRows((current) => current.filter((row) => !ids.includes(row.id)));
    setSelectedIds((current) => current.filter((id) => !ids.includes(id)));
  }

  async function requestJson(url: string, init?: RequestInit) {
    const response = await fetch(url, {
      ...init,
      headers: {
        "content-type": "application/json",
        ...(init?.headers ?? {}),
      },
    });

    const payload = await response.json().catch(() => null);
    if (!response.ok) {
      throw new Error(payload?.error ?? "Nao foi possivel concluir a exclusao.");
    }
    return payload as { success: boolean; deleted?: number };
  }

  async function deleteOne(id: string) {
    if (!window.confirm("Tem certeza?")) return;
    setBusyId(id);
    try {
      await requestJson(`/api/files/${id}`, { method: "DELETE" });
      removeRows([id]);
      showToast("success", "Item excluido.");
    } catch (error) {
      showToast("error", error instanceof Error ? error.message : "Erro ao excluir item.");
    } finally {
      setBusyId(null);
    }
  }

  async function deleteSelected() {
    if (selectedIds.length === 0) return;
    if (!window.confirm("Excluir os selecionados?")) return;
    setBulkBusy(true);
    try {
      const result = await requestJson("/api/files/delete-many", {
        method: "POST",
        body: JSON.stringify({ ids: selectedIds }),
      });
      removeRows(selectedIds);
      showToast("success", `${result.deleted ?? selectedIds.length} item(ns) excluido(s).`);
    } catch (error) {
      showToast("error", error instanceof Error ? error.message : "Erro ao excluir selecionados.");
    } finally {
      setBulkBusy(false);
    }
  }

  async function clearAll() {
    const confirmation = window.prompt('Digite CONFIRMAR para limpar o indice.');
    if (confirmation !== "CONFIRMAR") return;
    setBulkBusy(true);
    try {
      const result = await requestJson("/api/files/clear", { method: "DELETE" });
      setRows([]);
      setSelectedIds([]);
      showToast("success", `${result.deleted ?? 0} item(ns) removido(s).`);
    } catch (error) {
      showToast("error", error instanceof Error ? error.message : "Erro ao limpar o indice.");
    } finally {
      setBulkBusy(false);
    }
  }

  async function deleteByFilter() {
    const confirmation = window.prompt('Digite CONFIRMAR para excluir pelo filtro atual.');
    if (confirmation !== "CONFIRMAR") return;
    setBulkBusy(true);
    try {
      const result = await requestJson("/api/files/delete-by-filter", {
        method: "POST",
        body: JSON.stringify(filters),
      });
      setRows([]);
      setSelectedIds([]);
      showToast("success", `${result.deleted ?? 0} item(ns) removido(s) pelo filtro.`);
    } catch (error) {
      showToast("error", error instanceof Error ? error.message : "Erro ao excluir pelo filtro.");
    } finally {
      setBulkBusy(false);
    }
  }

  const allSelected = rows.length > 0 && selectedIds.length === rows.length;

  return (
    <div className="relative">
      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-50 rounded-2xl border px-4 py-3 text-sm shadow-xl ${
            toast.type === "success"
              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-100"
              : "border-rose-500/30 bg-rose-500/10 text-rose-100"
          }`}
        >
          {toast.message}
        </div>
      )}

      <div className="mb-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={deleteSelected}
          disabled={bulkBusy || selectedIds.length === 0}
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          Excluir selecionados
        </button>
        <button
          type="button"
          onClick={deleteByFilter}
          disabled={bulkBusy}
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          Excluir filtro atual
        </button>
        <button
          type="button"
          onClick={clearAll}
          disabled={bulkBusy}
          className="rounded-2xl border border-rose-500/20 bg-rose-500/10 px-4 py-2 text-sm text-rose-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Limpar índice
        </button>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10">
        <table className="min-w-full divide-y divide-white/10 text-left text-sm">
          <thead className="bg-white/5 text-slate-400">
            <tr>
              <th className="w-10 px-4 py-3">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={(event) => setSelectedIds(event.target.checked ? rows.map((row) => row.id) : [])}
                />
              </th>
              <th className="px-4 py-3 font-medium">Titulo</th>
              <th className="px-4 py-3 font-medium">Tipo</th>
              <th className="px-4 py-3 font-medium">Origem</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Descoberta</th>
              <th className="px-4 py-3 font-medium">Acoes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 bg-slate-950/40">
            {rows.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-slate-400">
                  Nenhum arquivo indexado com esses filtros.
                </td>
              </tr>
            ) : (
              rows.map((item) => {
                const checked = selectedIds.includes(item.id);
                return (
                  <tr key={item.id}>
                    <td className="px-4 py-4 align-top">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={(event) =>
                          setSelectedIds((current) =>
                            event.target.checked ? [...current, item.id] : current.filter((id) => id !== item.id),
                          )
                        }
                      />
                    </td>
                    <td className="px-4 py-4">
                      <p className="font-medium text-white">{item.title}</p>
                      <p className="mt-1 break-all text-xs text-slate-400">{item.normalizedUrl}</p>
                    </td>
                    <td className="px-4 py-4 text-slate-300">{item.estimatedType}</td>
                    <td className="px-4 py-4 text-slate-300">{item.origin}</td>
                    <td className="px-4 py-4 text-slate-300">{item.status}</td>
                    <td className="px-4 py-4 text-slate-300">{new Date(item.discoveredAt).toLocaleDateString("pt-BR")}</td>
                    <td className="px-4 py-4">
                      <div className="flex flex-wrap gap-2">
                        <a
                          href={item.originalUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white hover:bg-white/10"
                        >
                          Abrir
                        </a>
                        {item.downloadUrl && (
                          <a
                            href={item.downloadUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full bg-cyan-400 px-3 py-1.5 text-xs font-medium text-slate-950 hover:bg-cyan-300"
                          >
                            Download
                          </a>
                        )}
                        <button
                          type="button"
                          onClick={() => deleteOne(item.id)}
                          disabled={busyId === item.id}
                          className="rounded-full border border-rose-500/20 bg-rose-500/10 px-3 py-1.5 text-xs text-rose-100 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          Excluir
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
