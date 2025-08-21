import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Bell,
  User,
  Settings,
  Trophy,
  Users,
  Play,
  BarChart3,
  FileText,
  LogOut,
} from "lucide-react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navItems = [
    { name: "Play", href: "/match", icon: <Play className="h-4 w-4" /> },
    { name: "Stats", href: "/stats", icon: <BarChart3 className="h-4 w-4" /> },
    {
      name: "Tournaments",
      href: "/tournaments",
      icon: <Trophy className="h-4 w-4" />,
    },
    {
      name: "Replays",
      href: "/replay/demo",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      name: "Community",
      href: "/community",
      icon: <Users className="h-4 w-4" />,
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 via-cyan-500/5 to-sky-500/5" />

      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          data-testid="nav-home"
        >
          <div className="relative">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 shadow-lg group-hover:shadow-fuchsia-500/25 transition-all duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              AlgoCollab
            </span>
            <div className="text-xs text-white/60 font-medium">Arena</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.name} href={item.href}>
              <span className="flex items-center gap-2">
                {item.icon}
                {item.name}
              </span>
            </NavLink>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="hidden sm:flex relative group">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60 group-focus-within:text-white/80 transition-colors" />
            <input
              type="text"
              placeholder="Search problems, players..."
              className="w-64 pl-10 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all duration-300"
            />
          </div>

          {/* Authentication - Signed Out */}
          <SignedOut>
            {/* Notifications - Only show when signed in */}
            <div className="hidden">
              <button className="relative p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                <Bell className="h-5 w-5 text-white/80 group-hover:text-white transition-colors" />
                <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 animate-pulse" />
              </button>
            </div>

            {/* Sign In Button */}
            <SignInButton>
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300">
                Sign In
              </button>
            </SignInButton>

            {/* Sign Up Button */}
            <SignUpButton>
              <button className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-2 text-sm font-medium text-white hover:from-fuchsia-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-fuchsia-500/25">
                <User className="h-4 w-4" />
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>

          {/* Authentication - Signed In */}
          <SignedIn>
            {/* Notifications */}
            <button className="relative p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
              <Bell className="h-5 w-5 text-white/80 group-hover:text-white transition-colors" />
              <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 animate-pulse" />
            </button>

            {/* User Button */}
            <div className="flex items-center gap-2">
              <UserButton
                appearance={{
                  elements: {
                    avatarBox:
                      "w-8 h-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-400 flex items-center justify-center",
                    userButtonPopoverCard:
                      "rounded-2xl border border-white/10 bg-neutral-900/95 backdrop-blur-xl shadow-2xl",
                    userButtonPopoverActionButton:
                      "flex items-center gap-3 w-full p-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300",
                    userButtonPopoverActionButtonText:
                      "text-white/80 hover:text-white",
                    userButtonPopoverFooter: "border-t border-white/10",
                    userButtonPopoverFooterAction:
                      "flex items-center gap-3 w-full p-3 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all duration-300",
                    userButtonPopoverFooterActionText:
                      "text-red-400 hover:text-red-300",
                  },
                }}
              />
            </div>

            {/* CTA Button */}
            <Link
              href="/match"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-2 text-sm font-medium text-white hover:from-fuchsia-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-fuchsia-500/25"
            >
              <Play className="h-4 w-4" />
              Find Match
            </Link>
          </SignedIn>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-white" />
            ) : (
              <Menu className="h-5 w-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-neutral-950/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 p-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
            <div className="h-px bg-white/10 my-2" />

            {/* Mobile Authentication */}
            <SignedOut>
              <SignInButton>
                <button
                  className="flex items-center justify-center w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button
                  className="flex items-center justify-center w-full p-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-medium hover:from-fuchsia-600 hover:to-cyan-600 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <div className="flex items-center justify-center">
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox:
                        "w-10 h-10 rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 flex items-center justify-center",
                      userButtonPopoverCard:
                        "rounded-2xl border border-white/10 bg-neutral-900/95 backdrop-blur-xl shadow-2xl",
                    },
                  }}
                />
              </div>
            </SignedIn>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-white/80 transition-all duration-300 hover:text-white hover:bg-white/10 group"
    >
      {children}
    </Link>
  );
}
