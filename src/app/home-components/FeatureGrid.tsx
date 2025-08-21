import {
  Swords,
  Users,
  LineChart,
  ShieldCheck,
  Zap,
  Target,
  Cpu,
  Globe,
} from "lucide-react";

export default function FeatureGrid() {
  const features = [
    {
      title: "Real‑time Battles",
      desc: "Ranked 1v1 or group rooms with ELO matchmaking. Compete in real-time algorithm challenges with live leaderboards and instant feedback.",
      icon: <Swords className="h-8 w-8" />,
      gradient: "from-red-500/20 to-orange-500/20",
      size: "large",
      stats: "1v1 & Group",
    },
    {
      title: "Collaborative Editor",
      desc: "CRDT‑synced Monaco with replayable op‑log. Work together seamlessly with conflict-free editing and real-time collaboration.",
      icon: <Users className="h-8 w-8" />,
      gradient: "from-blue-500/20 to-cyan-500/20",
      size: "medium",
      stats: "CRDT Sync",
    },
    {
      title: "Big‑O + DNA",
      desc: "Static + empirical complexity & AST fingerprints. Get detailed algorithm analysis with complexity estimation and performance insights.",
      icon: <LineChart className="h-8 w-8" />,
      gradient: "from-green-500/20 to-emerald-500/20",
      size: "large",
      stats: "O(n) Analysis",
    },
    {
      title: "Secure Sandbox",
      desc: "Containerized judge with progressive tests. Safe execution environment with isolated containers and comprehensive testing.",
      icon: <ShieldCheck className="h-8 w-8" />,
      gradient: "from-purple-500/20 to-pink-500/20",
      size: "medium",
      stats: "Isolated",
    },
    {
      title: "Live Performance",
      desc: "Real-time performance monitoring with detailed metrics. Track execution time, memory usage, and optimization opportunities.",
      icon: <Zap className="h-8 w-8" />,
      gradient: "from-yellow-500/20 to-orange-500/20",
      size: "small",
      stats: "Live Metrics",
    },
    {
      title: "Smart Matching",
      desc: "AI-powered matchmaking based on skill level and preferences. Find the perfect opponent for balanced and challenging matches.",
      icon: <Target className="h-8 w-8" />,
      gradient: "from-indigo-500/20 to-purple-500/20",
      size: "small",
      stats: "AI Match",
    },
    {
      title: "Code Intelligence",
      desc: "Advanced code analysis with syntax highlighting, autocomplete, and intelligent suggestions powered by machine learning.",
      icon: <Cpu className="h-8 w-8" />,
      gradient: "from-teal-500/20 to-cyan-500/20",
      size: "medium",
      stats: "ML Powered",
    },
    {
      title: "Global Community",
      desc: "Connect with developers worldwide. Join tournaments, share solutions, and learn from the global algorithm community.",
      icon: <Globe className="h-8 w-8" />,
      gradient: "from-rose-500/20 to-pink-500/20",
      size: "large",
      stats: "Worldwide",
    },
  ] as const;

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Powerful Features for{" "}
          <span className="bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
            Algorithm Warriors
          </span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
          Everything you need to compete, collaborate, and conquer in the world
          of competitive programming.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, index) => (
          <div
            key={f.title}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-white/20 ${
              f.size === "large"
                ? "lg:col-span-2 lg:row-span-2"
                : f.size === "medium"
                ? "lg:col-span-2"
                : ""
            }`}
          >
            {/* Gradient background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
            />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col">
              {/* Icon and stats */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-white/10 border border-white/20 group-hover:bg-white/20 transition-colors">
                  {f.icon}
                </div>
                <span className="text-xs font-medium text-white/60 bg-white/10 px-2 py-1 rounded-full">
                  {f.stats}
                </span>
              </div>

              {/* Title and description */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-white transition-colors">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/70 group-hover:text-white/80 transition-colors">
                  {f.desc}
                </p>
              </div>

              {/* Hover effect indicator */}
              <div className="mt-4 flex items-center text-xs text-white/60 group-hover:text-white/80 transition-colors">
                <span>Learn more</span>
                <div className="ml-2 w-0 h-px bg-white/60 group-hover:w-4 transition-all duration-300" />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors" />
            <div className="absolute bottom-4 left-4 w-1 h-1 rounded-full bg-white/30 group-hover:bg-white/50 transition-colors" />
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/80 hover:bg-white/10 transition-colors cursor-pointer">
          <span>Explore all features</span>
          <div className="w-0 h-px bg-white/60 group-hover:w-4 transition-all duration-300" />
        </div>
      </div>
    </section>
  );
}
