import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Mail, ShieldCheck } from "lucide-react";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (authError) {
      setError("Неверный email или пароль");
      return;
    }

    navigate("/admin/dashboard", { replace: true });
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background px-4">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/4 h-[420px] w-[420px] rounded-full bg-secondary/15 blur-glow opacity-60" />
        <div className="absolute -bottom-32 right-1/4 h-[420px] w-[420px] rounded-full bg-primary/15 blur-glow opacity-60" />
      </div>

      <Card className="w-full max-w-md border-border/60 bg-white/70 shadow-glass backdrop-blur-glass-strong">
        <CardHeader className="items-center text-center">
          <div className="mb-4 grid h-16 w-16 place-items-center rounded-full border border-brand-glass-border bg-gradient-to-br from-secondary/25 to-primary/20 backdrop-blur-glass">
            <ShieldCheck className="h-8 w-8 text-secondary" />
          </div>
          <CardTitle className="text-2xl font-extrabold tracking-tight text-foreground">
            Панель администратора
          </CardTitle>
          <CardDescription>Войдите, чтобы управлять заявками</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 border-border/70 bg-background/85 pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">
                Пароль
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 border-border/70 bg-background/85 pl-10"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="rounded-md border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="h-12 w-full rounded-md bg-secondary text-base font-semibold text-secondary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary/90 hover:shadow-xl"
            >
              {loading ? "Вход..." : "Войти"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
