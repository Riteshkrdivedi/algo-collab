import Link from "next/link";
import {
  Trophy,
  Medal,
  Crown,
  TrendingUp,
  Users,
  Target,
  Zap,
  Star,
} from "lucide-react";

export default function LeaderboardPreview() {
  const topPlayers = [
    {
      rank: 1,
      name: "Aarav",
      elo: 1870,
      wins: 342,
      streak: 15,
      avatar: "👑",
      badge: <Crown className="h-4 w-4 text-yellow-400" />,
      trend: "up",
      change: "+45",
    },
    {
      rank: 2,
      name: "Ishita",
      elo: 1824,
      wins: 298,
      streak: 8,
      avatar: "⚡",
      badge: <Medal className="h-4 w-4 text-gray-300" />,
      trend: "up",
      change: "+32",
    },
    {
      rank: 3,
      name: "Kunal",
      elo: 1792,
      wins: 276,
      streak: 12,
      avatar: "🎯",
      badge: <Trophy className="h-4 w-4 text-amber-600" />,
      trend: "down",
      change: "-12",
    },
    {
      rank: 4,
      name: "Zara",
      elo: 1768,
      wins: 234,
      streak: 5,
      avatar: "⭐",
      badge: <Star className="h-4 w-4 text-blue-400" />,
      trend: "up",
      change: "+28",
    },
    {
      rank: 5,
      name: "Alex",
      elo: 1745,
      wins: 198,
      streak: 3,
      avatar: "🚀",
      badge: <Zap className="h-4 w-4 text-green-400" />,
      trend: "up",
      change: "+67",
    },
    {
      rank: 6,
      name: "Maya",
      elo: 1721,
      wins: 187,
      streak: 7,
      avatar: "💎",
      badge: <Target className="h-4 w-4 text-purple-400" />,
      trend: "down",
      change: "-8",
    },
  ] as const;

  const stats = [
    {
      label: "Total Players",
      value: "12,847",
      icon: <Users className="h-5 w-5" />,
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      label: "Active Today",
      value: "1,847",
      icon: <TrendingUp className="h-5 w-5" />,
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      label: "Matches Today",
      value: "3,421",
      icon: <Target className="h-5 w-5" />,
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      label: "Avg ELO",
      value: "1,245",
      icon: <Trophy className="h-5 w-5" />,
      color: "from-yellow-500/20 to-orange-500/20",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Leaderboard{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Champions
          </span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-white/70 mb-8">
          Climb the ladder in ranked matches. Win ELO by solving faster with
          cleaner complexity and strategic thinking.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
              <div className="relative z-10 flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 border border-white/20">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/60">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Left Column - Top Players */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold tracking-tight">
              Top Players
            </h3>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Live Rankings
            </div>
          </div>

          <div className="space-y-4">
            {topPlayers.map((player, index) => (
              <div
                key={player.rank}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20 ${
                  index === 0
                    ? "bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/20"
                    : index === 1
                    ? "bg-gradient-to-r from-gray-500/10 to-slate-500/10 border-gray-500/20"
                    : index === 2
                    ? "bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border-amber-500/20"
                    : ""
                }`}
              >
                {/* Rank Badge */}
                <div className="absolute top-4 right-4">{player.badge}</div>

                <div className="flex items-center gap-4">
                  {/* Avatar and Rank */}
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center text-2xl">
                        {player.avatar}
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-neutral-900 border-2 border-white/20 flex items-center justify-center text-xs font-bold text-white">
                        {player.rank}
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-white group-hover:text-white transition-colors">
                        {player.name}
                      </div>
                      <div className="text-sm text-white/60">
                        {player.wins} wins • {player.streak} streak
                      </div>
                    </div>
                  </div>

                  {/* ELO and Trend */}
                  <div className="ml-auto text-right">
                    <div className="text-xl font-bold text-white">
                      {player.elo}
                    </div>
                    <div
                      className={`flex items-center gap-1 text-sm ${
                        player.trend === "up"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {player.trend === "up" ? (
                        <TrendingUp className="h-3 w-3" />
                      ) : (
                        <TrendingUp className="h-3 w-3 rotate-180" />
                      )}
                      {player.change}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <Link
              href="/stats"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20 px-6 py-3 text-white/80 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
            >
              <span>View full leaderboard</span>
              <div className="w-0 h-px bg-white/60 group-hover:w-4 transition-all duration-300" />
            </Link>
          </div>
        </div>

        {/* Right Column - Recent Activity & Achievements */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold tracking-tight">
            Recent Activity
          </h3>

          {/* Recent Matches */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white/80">
              Latest Matches
            </h4>
            <div className="space-y-3">
              {[
                {
                  winner: "Aarav",
                  loser: "Ishita",
                  time: "2m ago",
                  score: "3-1",
                },
                {
                  winner: "Kunal",
                  loser: "Zara",
                  time: "5m ago",
                  score: "2-1",
                },
                { winner: "Alex", loser: "Maya", time: "8m ago", score: "3-0" },
                {
                  winner: "Ishita",
                  loser: "Kunal",
                  time: "12m ago",
                  score: "2-2",
                },
              ].map((match, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <div>
                      <div className="text-sm text-white">
                        <span className="font-medium">{match.winner}</span> vs{" "}
                        <span className="text-white/70">{match.loser}</span>
                      </div>
                      <div className="text-xs text-white/50">{match.time}</div>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-white/80">
                    {match.score}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white/80">
              Recent Achievements
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  title: "Speed Demon",
                  desc: "Solved in < 30s",
                  icon: "⚡",
                  color: "from-yellow-500/20 to-orange-500/20",
                },
                {
                  title: "Perfect Score",
                  desc: "100% accuracy",
                  icon: "🎯",
                  color: "from-green-500/20 to-emerald-500/20",
                },
                {
                  title: "Streak Master",
                  desc: "10 wins in a row",
                  icon: "🔥",
                  color: "from-red-500/20 to-pink-500/20",
                },
                {
                  title: "Complexity King",
                  desc: "O(1) solution",
                  icon: "👑",
                  color: "from-purple-500/20 to-indigo-500/20",
                },
              ].map((achievement, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  <div className="relative z-10">
                    <div className="text-2xl mb-2">{achievement.icon}</div>
                    <div className="text-sm font-medium text-white">
                      {achievement.title}
                    </div>
                    <div className="text-xs text-white/60">
                      {achievement.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6">
            <h4 className="text-lg font-medium text-white/80 mb-4">
              This Week
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl font-bold text-white">1,247</div>
                <div className="text-sm text-white/60">Matches Played</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">847</div>
                <div className="text-sm text-white/60">New Players</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">234</div>
                <div className="text-sm text-white/60">Tournaments</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">89%</div>
                <div className="text-sm text-white/60">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
