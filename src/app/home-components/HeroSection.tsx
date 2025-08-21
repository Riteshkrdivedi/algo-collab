import Link from "next/link";
import {
  Trophy,
  Swords,
  LineChart,
  PlayCircle,
  ShieldCheck,
  BarChart3,
  Sparkles,
  Users,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-16">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
          <Sparkles className="h-3.5 w-3.5" />
          Live algorithm battles • Collaborative • Replayable
        </div>
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Code. Compete.{" "}
          <span className="bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
            Analyze.
          </span>
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          AlgoCollab is a multiplayer arena for real‑time DSA battles with a
          collaborative editor, sandboxed judge, replays, and in‑depth analytics
          like Big‑O and Algorithm DNA.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/match"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-neutral-900 hover:bg-white/90"
          >
            <Swords className="h-5 w-5" /> Find Match
          </Link>
          <Link
            href="/stats"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 hover:bg-white/10"
          >
            <BarChart3 className="h-5 w-5" /> View Stats
          </Link>
          <Link
            href="/replay/demo"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 hover:bg-white/10"
          >
            <PlayCircle className="h-5 w-5" /> Watch Replay
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
          <Stat label="Active players" value="1.8k+" />
          <Stat label="Matches played" value="42k+" />
          <Stat label="Avg. queue time" value="< 5s" />
          <Stat label="Languages" value="C++ / JS / Py" />
        </div>
      </div>

      <div className="relative" data-testid="hero-visual">
        <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-fuchsia-500/20 via-cyan-400/10 to-indigo-400/20 blur-2xl" />
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/70 shadow-2xl">
          {/* Hero visual mock: editor + metrics */}
          <div className="grid grid-cols-12 gap-0">
            <div className="col-span-8 border-r border-white/10 p-4">
              <div className="mb-3 flex items-center gap-2 text-xs text-white/70">
                <div className="size-2 rounded-full bg-emerald-500" />
                CRDT‑Synced Monaco
              </div>
              <div className="h-64 w-full rounded-lg bg-neutral-800 flex items-center justify-center">
                <div className="text-center text-white/60">
                  <div className="text-4xl mb-2">💻</div>
                  <div className="text-sm">Code Editor Preview</div>
                </div>
              </div>
            </div>
            <div className="col-span-4 p-4">
              <div className="space-y-3">
                <MetricCard
                  icon={<LineChart className="h-4 w-4" />}
                  label="Big‑O Estimate"
                  value="O(n log n)"
                />
                <MetricCard
                  icon={<ShieldCheck className="h-4 w-4" />}
                  label="Sandbox"
                  value="Isolated"
                />
                <MetricCard
                  icon={<Users className="h-4 w-4" />}
                  label="Room"
                  value="#4F2A"
                />
                <MetricCard
                  icon={<Trophy className="h-4 w-4" />}
                  label="ELO"
                  value="1520"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
      <div className="text-xl font-semibold tracking-tight sm:text-2xl">
        {value}
      </div>
      <div className="text-xs text-white/60">{label}</div>
    </div>
  );
}

function MetricCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm">
      <div className="flex items-center gap-2 text-white/80">
        {icon}
        <span>{label}</span>
      </div>
      <span className="font-medium text-white">{value}</span>
    </div>
  );
}
