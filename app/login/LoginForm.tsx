import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const messages: Record<string, string> = {
  missing: "Preencha e-mail e senha.",
  invalid: "Credenciais invalidas.",
};

export function LoginForm({
  error,
  callbackUrl,
}: {
  error?: string;
  callbackUrl?: string;
}) {
  return (
    <form action="/api/auth/login" method="post" className="space-y-5">
      <input type="hidden" name="callbackUrl" value={callbackUrl ?? "/admin"} />
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Acesso privado</p>
        <h2 className="text-2xl font-semibold text-white">Entrar na biblioteca</h2>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-slate-200">
          E-mail
        </Label>
        <Input id="email" name="email" type="email" autoComplete="email" required className="border-white/10 bg-white/5 text-white" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-slate-200">
          Senha
        </Label>
        <Input id="password" name="password" type="password" autoComplete="current-password" required className="border-white/10 bg-white/5 text-white" />
      </div>

      {error && (
        <p role="alert" className="rounded-2xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-100">
          {messages[error] ?? "Nao foi possivel entrar."}
        </p>
      )}

      <Button type="submit" className="w-full bg-cyan-400 text-slate-950 hover:bg-cyan-300">
        Entrar
      </Button>
    </form>
  );
}
