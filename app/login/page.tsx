import { LoginForm } from "./LoginForm";

type LoginSearchParams = {
  error?: string;
  callbackUrl?: string;
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams?: Promise<LoginSearchParams> | LoginSearchParams;
}) {
  const params: LoginSearchParams = await Promise.resolve(searchParams ?? {});

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#0f172a_0%,_#0f172a_22%,_#111827_58%,_#020617_100%)] px-4 py-10 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl items-center">
        <div className="grid w-full gap-6 rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-[0_30px_120px_rgba(15,23,42,0.55)] backdrop-blur-xl lg:grid-cols-[1.2fr_0.8fr] lg:p-6">
          <section className="flex flex-col justify-between rounded-[28px] bg-[linear-gradient(135deg,_rgba(56,189,248,0.22),_rgba(34,197,94,0.12),_rgba(14,165,233,0.18))] p-6">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/90">
                Biblioteca Publica Indexada
              </p>
              <h1 className="max-w-xl text-4xl font-semibold leading-tight text-white md:text-6xl">
                Indice privado de arquivos publicos encontrados na web.
              </h1>
              <p className="max-w-xl text-sm leading-6 text-slate-200/90 md:text-base">
                Login proprio, busca no indice local, metadados seguros e download somente para arquivos nao confiaveis.
              </p>
            </div>
          </section>

          <section className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6">
            <LoginForm error={params.error} callbackUrl={params.callbackUrl} />
          </section>
        </div>
      </div>
    </main>
  );
}
