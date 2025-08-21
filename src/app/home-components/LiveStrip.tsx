import { TrendingUp, Zap, Star, Award } from "lucide-react";

export default function LiveStrip() {
  const items = [
    {
      tag: "Tournament",
      text: "Weekly Brackets start Friday 7 PM IST",
      icon: <Award className="h-4 w-4" />,
      color: "from-yellow-500/20 to-orange-500/20",
    },
    {
      tag: "Update",
      text: "New constraint mode: Single‑Pass Only",
      icon: <Zap className="h-4 w-4" />,
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      tag: "Feature",
      text: "Replay exports now include GIFs",
      icon: <Star className="h-4 w-4" />,
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      tag: "Live",
      text: "1,847 players online now",
      icon: <TrendingUp className="h-4 w-4" />,
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      tag: "Challenge",
      text: "Daily coding challenge: Binary Tree Traversal",
      icon: <Award className="h-4 w-4" />,
      color: "from-red-500/20 to-pink-500/20",
    },
    {
      tag: "Leaderboard",
      text: "Top player this week: Alex with 2,450 ELO",
      icon: <Star className="h-4 w-4" />,
      color: "from-indigo-500/20 to-purple-500/20",
    },
  ] as const;

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-gradient-to-r from-neutral-900/40 via-neutral-800/40 to-neutral-900/40">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 via-cyan-500/5 to-sky-500/5" />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="animate-pulse-slow absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/30 rounded-full blur-sm" />
          <div className="animate-pulse-slow-delayed absolute top-3/4 right-1/3 w-1 h-1 bg-fuchsia-400/40 rounded-full blur-sm" />
          <div className="animate-pulse-slow absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-sky-400/35 rounded-full blur-sm" />
        </div>
      </div>

      {/* Main content container with 30-degree angle */}
      <div className="relative transform -skew-x-12">
        <div className="transform skew-x-12">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
            <div className="flex items-center">
              {/* Live indicator - Fixed on the left */}
              <div className="flex shrink-0 items-center gap-2 mr-8 z-10 relative">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />
                    <div className="absolute inset-0 h-3 w-3 rounded-full bg-red-500 animate-ping" />
                  </div>
                  <span className="text-sm font-semibold text-white/90 tracking-wide">
                    LIVE
                  </span>
                </div>
              </div>

              {/* Animated scrolling items - Takes remaining space */}
              <div className="flex-1 overflow-hidden">
                <div className="flex items-center gap-8 animate-scroll">
                  {/* First set of items */}
                  {items.map((item, index) => (
                    <div
                      key={`first-${index}`}
                      className="group flex shrink-0 items-center gap-3 cursor-pointer hover:scale-105 transition-transform duration-300"
                    >
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} border border-white/20 group-hover:border-white/40 transition-colors`}
                      >
                        {item.icon}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 group-hover:bg-white/20 transition-colors">
                          {item.tag}
                        </span>
                        <span className="text-sm text-white/80 group-hover:text-white transition-colors whitespace-nowrap">
                          {item.text}
                        </span>
                      </div>
                    </div>
                  ))}

                  {/* Duplicate set for seamless loop */}
                  {items.map((item, index) => (
                    <div
                      key={`second-${index}`}
                      className="group flex shrink-0 items-center gap-3 cursor-pointer hover:scale-105 transition-transform duration-300"
                    >
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} border border-white/20 group-hover:border-white/40 transition-colors`}
                      >
                        {item.icon}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 group-hover:bg-white/20 transition-colors">
                          {item.tag}
                        </span>
                        <span className="text-sm text-white/80 group-hover:text-white transition-colors whitespace-nowrap">
                          {item.text}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive join button - Fixed on the right */}
              <div className="flex shrink-0 items-center ml-8 z-10 relative">
                <button className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-2 text-sm font-medium text-white hover:from-fuchsia-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10">Join Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
