"use client";

import { useState } from "react";
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
  Filter,
  Search,
  Calendar,
  BarChart3,
  Award,
  Clock,
  Flame,
  TrendingDown,
  Eye,
  Heart,
  Share2,
  Download,
  Home,
  ChevronDown,
} from "lucide-react";

export default function StatsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("all-time");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const topPlayers = [
    {
      rank: 1,
      name: "Aarav",
      elo: 1870,
      wins: 342,
      losses: 89,
      winRate: 79.3,
      streak: 15,
      avatar: "👑",
      badge: <Crown className="h-6 w-6 text-yellow-400" />,
      trend: "up",
      change: "+45",
      country: "🇮🇳",
      specialty: "Dynamic Programming",
      recentActivity: "2 hours ago",
    },
    {
      rank: 2,
      name: "Ishita",
      elo: 1824,
      wins: 298,
      losses: 67,
      winRate: 81.6,
      streak: 8,
      avatar: "⚡",
      badge: <Medal className="h-6 w-6 text-gray-300" />,
      trend: "up",
      change: "+32",
      country: "🇮🇳",
      specialty: "Graph Algorithms",
      recentActivity: "1 hour ago",
    },
    {
      rank: 3,
      name: "Kunal",
      elo: 1792,
      wins: 276,
      losses: 94,
      winRate: 74.6,
      streak: 12,
      avatar: "🎯",
      badge: <Trophy className="h-6 w-6 text-amber-600" />,
      trend: "down",
      change: "-12",
      country: "🇺🇸",
      specialty: "Data Structures",
      recentActivity: "30 minutes ago",
    },
  ];

  const leaderboardData = [
    {
      rank: 4,
      name: "Zara",
      elo: 1768,
      wins: 234,
      losses: 78,
      winRate: 75.0,
      streak: 5,
      country: "🇨🇦",
      specialty: "Greedy Algorithms",
      trend: "up",
      change: "+28",
    },
    {
      rank: 5,
      name: "Alex",
      elo: 1745,
      wins: 198,
      losses: 89,
      winRate: 69.0,
      streak: 3,
      country: "🇬🇧",
      specialty: "Binary Search",
      trend: "up",
      change: "+67",
    },
    {
      rank: 6,
      name: "Maya",
      elo: 1721,
      wins: 187,
      losses: 92,
      winRate: 67.0,
      streak: 7,
      country: "🇦🇺",
      specialty: "Sorting",
      trend: "down",
      change: "-8",
    },
    {
      rank: 7,
      name: "David",
      elo: 1698,
      wins: 165,
      losses: 87,
      winRate: 65.5,
      streak: 4,
      country: "🇩🇪",
      specialty: "Recursion",
      trend: "up",
      change: "+15",
    },
    {
      rank: 8,
      name: "Emma",
      elo: 1675,
      wins: 143,
      losses: 76,
      winRate: 65.3,
      streak: 2,
      country: "🇫🇷",
      specialty: "Backtracking",
      trend: "up",
      change: "+23",
    },
    {
      rank: 9,
      name: "Lucas",
      elo: 1652,
      wins: 134,
      losses: 69,
      winRate: 66.0,
      streak: 6,
      country: "🇧🇷",
      specialty: "Two Pointers",
      trend: "down",
      change: "-5",
    },
    {
      rank: 10,
      name: "Sophia",
      elo: 1629,
      wins: 128,
      losses: 71,
      winRate: 64.3,
      streak: 1,
      country: "🇯🇵",
      specialty: "Sliding Window",
      trend: "up",
      change: "+19",
    },
  ];

  const stats = [
    {
      label: "Total Players",
      value: "12,847",
      icon: <Users className="h-5 w-5" />,
      color: "from-blue-500/20 to-cyan-500/20",
      change: "+12%",
    },
    {
      label: "Active Today",
      value: "1,847",
      icon: <TrendingUp className="h-5 w-5" />,
      color: "from-green-500/20 to-emerald-500/20",
      change: "+5%",
    },
    {
      label: "Matches Today",
      value: "3,421",
      icon: <Target className="h-5 w-5" />,
      color: "from-purple-500/20 to-pink-500/20",
      change: "+8%",
    },
    {
      label: "Avg ELO",
      value: "1,245",
      icon: <Trophy className="h-5 w-5" />,
      color: "from-yellow-500/20 to-orange-500/20",
      change: "+3%",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Header */}
      <div className="border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Home Button */}
              <Link
                href="/"
                className="group flex-col justify-center items-center gap-2 px-2 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <Home className="h-8 w-8 text-white/80 flex justify-center items-center group-hover:text-white transition-colors" />
                {/* <span className="text-sm text-white/80 group-hover:text-white transition-colors">
                  Home
                </span> */}
              </Link>

              <div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Leaderboard &{" "}
                  <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                    Statistics
                  </span>
                </h1>
                <p className="mt-2 text-white/70">
                  Track your progress, compare with others, and climb the ranks
                </p>
              </div>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="appearance-none px-4 py-2 pr-10 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all duration-300 cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: "right 0.5rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1.5em 1.5em",
                  }}
                >
                  <option
                    value="all-time"
                    className="bg-neutral-900 text-white"
                  >
                    All Time
                  </option>
                  <option
                    value="this-month"
                    className="bg-neutral-900 text-white"
                  >
                    This Month
                  </option>
                  <option
                    value="this-week"
                    className="bg-neutral-900 text-white"
                  >
                    This Week
                  </option>
                  <option value="today" className="bg-neutral-900 text-white">
                    Today
                  </option>
                </select>
              </div>

              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none px-4 py-2 pr-10 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all duration-300 cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: "right 0.5rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1.5em 1.5em",
                  }}
                >
                  <option value="all" className="bg-neutral-900 text-white">
                    All Categories
                  </option>
                  <option value="dp" className="bg-neutral-900 text-white">
                    Dynamic Programming
                  </option>
                  <option value="graph" className="bg-neutral-900 text-white">
                    Graph Algorithms
                  </option>
                  <option value="greedy" className="bg-neutral-900 text-white">
                    Greedy
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 gap-6 mb-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 border border-white/20">
                    {stat.icon}
                  </div>
                  <div className="text-sm text-green-400 font-medium">
                    {stat.change}
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Olympic Style Top 3 */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-16 text-center">
            🏆 Top Champions
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {topPlayers.map((player, index) => (
              <div
                key={player.rank}
                className={`relative group ${
                  index === 0
                    ? "lg:order-2 lg:scale-110"
                    : index === 1
                    ? "lg:order-1"
                    : "lg:order-3"
                }`}
              >
                {/* Background decoration */}
                <div
                  className={`absolute inset-0 rounded-3xl ${
                    index === 0
                      ? "bg-gradient-to-br from-yellow-500/20 via-orange-500/10 to-red-500/20"
                      : index === 1
                      ? "bg-gradient-to-br from-gray-500/20 via-slate-500/10 to-zinc-500/20"
                      : "bg-gradient-to-br from-amber-500/20 via-yellow-500/10 to-orange-500/20"
                  } blur-xl opacity-50`}
                />

                <div
                  className={`relative rounded-3xl border-2 p-8 ${
                    index === 0
                      ? "border-yellow-500/50 bg-gradient-to-br from-yellow-500/10 to-orange-500/10"
                      : index === 1
                      ? "border-gray-400/50 bg-gradient-to-br from-gray-500/10 to-slate-500/10"
                      : "border-amber-600/50 bg-gradient-to-br from-amber-500/10 to-yellow-500/10"
                  } hover:scale-105 transition-all duration-300`}
                >
                  {/* Rank Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold ${
                        index === 0
                          ? "bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg shadow-yellow-500/25"
                          : index === 1
                          ? "bg-gradient-to-br from-gray-300 to-slate-400 text-white shadow-lg shadow-gray-500/25"
                          : "bg-gradient-to-br from-amber-500 to-yellow-500 text-white shadow-lg shadow-amber-500/25"
                      }`}
                    >
                      {player.rank}
                    </div>
                  </div>

                  {/* Player Info */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <span className="text-2xl">{player.country}</span>
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center text-3xl">
                        {player.avatar}
                      </div>
                      <div className="absolute top-4 right-4">
                        {player.badge}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {player.name}
                    </h3>
                    <p className="text-sm text-white/60 mb-2">
                      {player.specialty}
                    </p>
                    <div className="text-3xl font-bold text-white mb-2">
                      {player.elo}
                    </div>
                    <div
                      className={`flex items-center justify-center gap-1 text-sm ${
                        player.trend === "up"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {player.trend === "up" ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                      {player.change}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-white/60">Win Rate</span>
                      <span className="text-sm font-semibold text-white">
                        {player.winRate}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-white/60">Wins</span>
                      <span className="text-sm font-semibold text-white">
                        {player.wins}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-white/60">Streak</span>
                      <div className="flex items-center gap-1">
                        <Flame className="h-4 w-4 text-orange-400" />
                        <span className="text-sm font-semibold text-white">
                          {player.streak}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-white/60">Last Active</span>
                      <span className="text-sm text-white/80">
                        {player.recentActivity}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-center gap-2 mt-6">
                    <button className="p-2 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-colors">
                      <Eye className="h-4 w-4 text-white/80" />
                    </button>
                    <button className="p-2 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-colors">
                      <Heart className="h-4 w-4 text-white/80" />
                    </button>
                    <button className="p-2 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-colors">
                      <Share2 className="h-4 w-4 text-white/80" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Leaderboard Table */}
        <div className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden">
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Complete Leaderboard</h3>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
                  <input
                    type="text"
                    placeholder="Search players..."
                    className="pl-10 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:border-white/20"
                  />
                </div>
                <button className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <Download className="h-4 w-4 text-white/80" />
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">
                    Rank
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">
                    Player
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">
                    ELO
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">
                    Win Rate
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">
                    Streak
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">
                    Specialty
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">
                    Trend
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((player, index) => (
                  <tr
                    key={player.rank}
                    className="border-t border-white/10 hover:bg-white/5 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            player.rank <= 3
                              ? "bg-gradient-to-br from-yellow-400 to-orange-500 text-white"
                              : "bg-white/10 text-white/80"
                          }`}
                        >
                          {player.rank}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{player.country}</span>
                        <div>
                          <div className="font-semibold text-white">
                            {player.name}
                          </div>
                          <div className="text-sm text-white/60">
                            {player.wins}W / {player.losses}L
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-lg font-bold text-white">
                        {player.elo}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-white/10 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full"
                            style={{ width: `${player.winRate}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold text-white">
                          {player.winRate}%
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <Flame className="h-4 w-4 text-orange-400" />
                        <span className="font-semibold text-white">
                          {player.streak}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80">
                        {player.specialty}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div
                        className={`flex items-center gap-1 ${
                          player.trend === "up"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {player.trend === "up" ? (
                          <TrendingUp className="h-4 w-4" />
                        ) : (
                          <TrendingDown className="h-4 w-4" />
                        )}
                        <span className="text-sm font-medium">
                          {player.change}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                          <Eye className="h-3 w-3 text-white/80" />
                        </button>
                        <button className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                          <Heart className="h-3 w-3 text-white/80" />
                        </button>
                        <button className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                          <Share2 className="h-3 w-3 text-white/80" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
