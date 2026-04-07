import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ClipboardList,
  LogOut,
  RefreshCw,
  Search,
  ShieldCheck,
} from "lucide-react";

interface Lead {
  id: number;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  source: string;
  goal: string;
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filtered, setFiltered] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchLeads = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Failed to fetch leads:", error.message);
      setLeads([]);
      setFiltered([]);
    } else {
      setLeads(data ?? []);
      setFiltered(data ?? []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  useEffect(() => {
    if (!search.trim()) {
      setFiltered(leads);
      return;
    }
    const q = search.toLowerCase();
    setFiltered(
      leads.filter(
        (l) =>
          l.name?.toLowerCase().includes(q) ||
          l.email?.toLowerCase().includes(q) ||
          l.phone?.includes(q) ||
          l.source?.toLowerCase().includes(q) ||
          l.goal?.toLowerCase().includes(q),
      ),
    );
  }, [search, leads]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin", { replace: true });
  };

  const formatDate = (iso: string) => {
    try {
      return new Date(iso).toLocaleString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return iso;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-border/60 bg-white/80 backdrop-blur-glass-strong">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-full border border-brand-glass-border bg-gradient-to-br from-secondary/25 to-primary/20 backdrop-blur-glass">
              <ShieldCheck className="h-5 w-5 text-secondary" />
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              CRM Панель
            </span>
          </div>

          <Button
            variant="outline"
            onClick={handleLogout}
            className="gap-2 border-border/70 text-muted-foreground transition-all duration-200 hover:border-destructive/40 hover:text-destructive"
          >
            <LogOut className="h-4 w-4" />
            Выйти
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Stats row */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              label: "Всего заявок",
              value: leads.length,
              color: "from-secondary/25 to-primary/20",
            },
            {
              label: "За сегодня",
              value: leads.filter((l) => {
                const d = new Date(l.created_at);
                const now = new Date();
                return d.toDateString() === now.toDateString();
              }).length,
              color: "from-primary/25 to-secondary/15",
            },
            {
              label: "Найдено",
              value: filtered.length,
              color: "from-secondary/15 to-primary/25",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-card border border-border/60 bg-white/70 p-5 shadow-glass-soft backdrop-blur-glass-strong transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glass"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {stat.label}
              </p>
              <p className="mt-1 text-3xl font-extrabold tracking-tight text-foreground">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Toolbar */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <ClipboardList className="h-5 w-5 text-secondary" />
            <h1 className="text-xl font-bold tracking-tight text-foreground">
              Заявки
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Поиск по имени, email, телефону..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-10 w-64 border-border/70 bg-background/85 pl-10"
              />
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={fetchLeads}
              disabled={loading}
              className="border-border/70"
              title="Обновить"
            >
              <RefreshCw
                className={`h-4 w-4 ${loading ? "animate-spin" : ""}`}
              />
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="rounded-card border border-border/60 bg-white/70 shadow-glass backdrop-blur-glass-strong">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <RefreshCw className="h-6 w-6 animate-spin text-secondary" />
              <span className="ml-3 text-sm text-muted-foreground">
                Загрузка заявок...
              </span>
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <ClipboardList className="mb-3 h-10 w-10 text-muted-foreground/40" />
              <p className="text-sm font-medium text-muted-foreground">
                {search ? "Ничего не найдено" : "Заявок пока нет"}
              </p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="w-[160px]">Дата</TableHead>
                  <TableHead>Имя</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Телефон</TableHead>
                  <TableHead>Курс / Источник</TableHead>
                  <TableHead className="max-w-[260px]">Сообщение</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell className="whitespace-nowrap text-muted-foreground">
                      {formatDate(lead.created_at)}
                    </TableCell>
                    <TableCell className="font-medium text-foreground">
                      {lead.name || "—"}
                    </TableCell>
                    <TableCell>{lead.email || "—"}</TableCell>
                    <TableCell className="whitespace-nowrap">
                      {lead.phone || "—"}
                    </TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-pill bg-secondary/10 px-2.5 py-0.5 text-xs font-semibold text-secondary">
                        {lead.source || "—"}
                      </span>
                    </TableCell>
                    <TableCell className="max-w-[260px] truncate text-muted-foreground">
                      {lead.goal || "—"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </main>
    </div>
  );
}
