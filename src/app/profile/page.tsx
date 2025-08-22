"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Swords,
  Star,
  Target,
  Sparkles,
  Shield,
  Timer,
  History,
  Settings,
  Share2,
  Edit3,
  Medal,
  Crown,
  Home,
} from "lucide-react";
import { useState } from "react";

function GlassTile({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
      {children}
    </div>
  );
}

function TileIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
      {children}
    </div>
  );
}

function TileValue({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={("text-2xl font-semibold " + className).trim()}>
      {children}
    </div>
  );
}

function TileLabel({ children }: { children: React.ReactNode }) {
  return <div className="text-xs text-white/70">{children}</div>;
}

export default function ProfilePage() {
  const user = {
    name: "Ritesh",
    tagline: "Algorithm Heist Master 🕵️‍♂️",
    avatar: "https://api.dicebear.com/7.x/identicon/svg?seed=ritesh",
    level: 12,
    xp: 3200,
    xpForNext: 4000,
    rank: "Platinum II",
    leaderboardPos: 5,
    battlesWon: 42,
    battlesLost: 18,
    achievements: [
      { name: "Stack Slayer", unlocked: true },
      { name: "Graph Guru", unlocked: true },
      { name: "DP Dominator", unlocked: false },
      { name: "Recursion Raider", unlocked: false },
    ],
    history: [
      { opponent: "Arjun", result: "Win", points: +50 },
      { opponent: "Neha", result: "Loss", points: -20 },
      { opponent: "Ankit", result: "Win", points: +30 },
    ],
  };

  const xpProgress = (user.xp / user.xpForNext) * 100;
  const [activeTab, setActiveTab] = useState<
    "overview" | "achievements" | "history"
  >("overview");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Decorative background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-[-10%] left-[10%] h-72 w-72 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[10%] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.05]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Header */}
      <section className="relative mx-auto max-w-6xl px-6 pt-10">
        {/* Home icon fixed at top-left of the screen */}
        <div className="fixed left-6 top-6 z-50">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Home"
            title="Home"
          >
            <Home className="h-7 w-7" />
          </Link>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 via-cyan-500/10 to-sky-500/10" />
          <div className="relative flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-5">
              <div className="relative">
                <div className="absolute inset-0 animate-pulse rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 blur-lg" />
                <img
                  src={user.avatar}
                  alt="avatar"
                  className="relative h-20 w-20 rounded-2xl ring-2 ring-white/10"
                />
                <div className="absolute -bottom-2 -right-2 inline-flex items-center gap-1 rounded-xl bg-yellow-400 px-2 py-1 text-xs font-bold text-black shadow">
                  <Sparkles className="h-3.5 w-3.5" /> Lv {user.level}
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">
                  {user.name}
                </h1>
                <p className="text-white/80">{user.tagline}</p>
                <div className="mt-3 w-64">
                  <Progress value={xpProgress} className="h-2" />
                  <p className="mt-1 text-xs text-white/70">
                    {user.xp}/{user.xpForNext} XP to next level
                  </p>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Graphs", "DP", "Greedy", "Sorting"].map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:from-fuchsia-600 hover:to-cyan-600">
                Start Match
              </Button>
              <Button
                variant="outline"
                className="border-white/20 hover:bg-white/10"
              >
                <Edit3 className="mr-2 h-4 w-4" /> Edit Profile
              </Button>
            </div>
          </div>
          <div className="relative border-t border-white/10">
            <div className="flex gap-1 px-3 py-2">
              {[
                { key: "overview", label: "Overview", icon: Crown },
                { key: "achievements", label: "Achievements", icon: Medal },
                { key: "history", label: "History", icon: History },
              ].map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as typeof activeTab)}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                    activeTab === key
                      ? "bg-white/10 text-white"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="h-4 w-4" /> {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-8 lg:grid-cols-3">
        {/* Left: Stats, Achievements, History */}
        <div className="space-y-6 lg:col-span-2">
          {/* Stats */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <GlassTile>
                <TileIcon>
                  <Swords className="h-5 w-5 text-red-300" />
                </TileIcon>
                <TileValue>{user.battlesWon}</TileValue>
                <TileLabel>Wins</TileLabel>
              </GlassTile>
              <GlassTile>
                <TileIcon>
                  <Target className="h-5 w-5 text-blue-300" />
                </TileIcon>
                <TileValue>{user.battlesLost}</TileValue>
                <TileLabel>Losses</TileLabel>
              </GlassTile>
              <GlassTile>
                <TileIcon>
                  <Trophy className="h-5 w-5 text-yellow-300" />
                </TileIcon>
                <TileValue className="text-base">{user.rank}</TileValue>
                <TileLabel>Rank</TileLabel>
              </GlassTile>
              <GlassTile>
                <TileIcon>
                  <Star className="h-5 w-5 text-green-300" />
                </TileIcon>
                <TileValue>#{user.leaderboardPos}</TileValue>
                <TileLabel>Leaderboard</TileLabel>
              </GlassTile>
            </div>
          )}

          {/* Achievements */}
          {(activeTab === "overview" || activeTab === "achievements") && (
            <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-white drop-shadow">
                    Achievements
                  </h2>
                  <div className="text-xs text-white/70 flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Prestige: 2
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {user.achievements.map((ach, i) => (
                    <div
                      key={i}
                      className={`rounded-xl border p-4 text-center transition-colors ${
                        ach.unlocked
                          ? "border-white/10 bg-white/10"
                          : "border-white/5 bg-transparent opacity-60"
                      }`}
                    >
                      <p className="text-sm font-medium text-white">
                        {ach.name}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* History */}
          {(activeTab === "overview" || activeTab === "history") && (
            <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-white drop-shadow">
                    Recent Battles
                  </h2>
                  <div className="text-xs text-white/70 flex items-center gap-2">
                    <History className="h-4 w-4" />
                    Last 24h
                  </div>
                </div>
                <div className="space-y-3">
                  {user.history.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-white/10 p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center">
                          <Timer className="h-4 w-4 text-white/80" />
                        </div>
                        <p className="text-sm">
                          vs{" "}
                          <span className="font-semibold text-white">
                            {h.opponent}
                          </span>
                        </p>
                      </div>
                      <span
                        className={`text-sm font-semibold ${
                          h.result === "Win" ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {h.result} ({h.points > 0 ? `+${h.points}` : h.points})
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Right: Quick actions */}
        <div className="space-y-6">
          <Card className="border-white/10 bg-white/10 backdrop-blur-xl">
            <CardContent className="p-6">
              <h2 className="mb-4 text-lg font-semibold text-white drop-shadow">
                Quick Actions
              </h2>
              <div className="grid gap-3">
                <Button className="w-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:from-fuchsia-600 hover:to-cyan-600">
                  <Swords className="mr-2 h-4 w-4" /> Start New Battle
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-white/30 hover:bg-white/10"
                >
                  <Share2 className="mr-2 h-4 w-4" /> Share Profile
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-white/30 hover:bg-white/10"
                >
                  <Settings className="mr-2 h-4 w-4" /> Settings
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/10 backdrop-blur-xl">
            <CardContent className="p-6">
              <h2 className="mb-2 text-lg font-semibold text-white drop-shadow">
                About
              </h2>
              <p className="text-sm text-white/80">
                Competitive programmer focused on clean strategies and fast
                execution. Always up for a duel and a good graph problem.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
