import { requireAuth } from "@/lib/auth";
import type { ReactNode } from "react";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = await requireAuth();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.14),_transparent_34%),linear-gradient(180deg,_#08111f_0%,_#0f172a_38%,_#020617_100%)] text-white">
      <header className="border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-200/80">Biblioteca Publica Indexada</p>
            <p className="mt-1 text-sm text-slate-300">Indice privado, busca local e controle de seguranca.</p>
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">{user.email}</div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-7xl px-4 py-6 md:px-6 lg:px-8">{children}</main>
    </div>
  );
}
