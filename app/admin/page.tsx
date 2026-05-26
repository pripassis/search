import { requireAuth } from "@/lib/auth";
import { listIndexJobs, listIndexSummary, listIndexTerms } from "@/lib/admin";
import { WebSearchPanel } from "./WebSearchPanel";
import type { ReactNode } from "react";

export default async function AdminPage() {
  await requireAuth();

  const [summary, terms, jobs] = await Promise.all([
    listIndexSummary(),
    listIndexTerms(),
    listIndexJobs(),
  ]);

  return (
    <div className="space-y-6">
      <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">Dashboard protegido</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-semibold text-white md:text-5xl">Indice proprio de arquivos publicos encontrado na internet.</h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 md:text-base">
            A pesquisa consulta apenas o banco local. O indexador trabalha com links publicos, normaliza URLs e marca arquivos perigosos como download somente ou bloqueados para preview.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard label="Termos ativos" value={summary.terms} />
            <StatCard label="Jobs pendentes" value={summary.jobs} />
            <StatCard label="Itens indexados" value={summary.items} />
            <StatCard label="Bloqueados" value={summary.blocked} />
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-slate-950/65 p-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Acoes rapidas</p>
            <h2 className="text-xl font-semibold text-white">Indexacao</h2>
          </div>
          <form action="/api/admin/reindex" method="post" className="mt-4">
            <button className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white hover:bg-white/10">
              Reindexar tudo
            </button>
          </form>
          <form action="/api/admin/index-terms" method="post" className="mt-5 space-y-3">
            <input name="term" placeholder="Ex.: relatorio financeiro" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" />
            <button className="w-full rounded-2xl bg-cyan-400 px-4 py-3 text-sm font-medium text-slate-950 hover:bg-cyan-300">Salvar termo</button>
          </form>
        </div>
      </section>

      <WebSearchPanel />

      <section className="grid gap-6 xl:grid-cols-2">
        <Panel title="Termos cadastrados" description="Base da indexacao">
          <div className="space-y-3">
            {terms.map((term) => (
              <div key={term.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-medium text-white">{term.term}</p>
                <p className="mt-1 text-xs text-slate-400">{term.source?.name ?? "Sem fonte"}{term.sourceHint ? ` â€¢ ${term.sourceHint}` : ""}</p>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Jobs recentes" description="Fila local de indexacao">
          <div className="space-y-3">
            {jobs.map((job) => (
              <div key={job.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-medium text-white">{job.term}</p>
                <p className="mt-1 break-all text-xs text-slate-400">{job.query}</p>
                <p className="mt-3 text-xs text-slate-400">{formatJobStatus(job.status)} â€¢ resultados {job.resultCount}</p>
              </div>
            ))}
          </div>
        </Panel>
      </section>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
    </div>
  );
}

function Panel({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    <section className="rounded-[28px] border border-white/10 bg-slate-950/65 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">{description}</p>
      <h2 className="mt-2 text-xl font-semibold text-white">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function formatJobStatus(status: string) {
  if (status === "COMPLETED") return "DONE";
  if (status === "FAILED") return "ERROR";
  return status;
}
