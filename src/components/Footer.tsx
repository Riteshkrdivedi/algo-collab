import Link from "next/link";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Heart,
  Code,
  Users,
  Globe,
  Shield,
  Zap,
  TrendingUp,
  Award,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "/pricing" },
        { name: "API", href: "/api" },
        { name: "Documentation", href: "/docs" },
      ],
    },
    {
      title: "Community",
      links: [
        { name: "Discord", href: "/discord" },
        { name: "Blog", href: "/blog" },
        { name: "Events", href: "/events" },
        { name: "Contributors", href: "/contributors" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Contact", href: "/contact" },
        { name: "Status", href: "/status" },
        { name: "Bug Report", href: "/bugs" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "GDPR", href: "/gdpr" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com",
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: <Twitter className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: "Email",
      href: "mailto:hello@algocollab.com",
      icon: <Mail className="h-5 w-5" />,
    },
  ];

  const stats = [
    {
      label: "Active Users",
      value: "12K+",
      icon: <Users className="h-4 w-4" />,
    },
    {
      label: "Problems Solved",
      value: "50K+",
      icon: <Code className="h-4 w-4" />,
    },
    { label: "Countries", value: "45+", icon: <Globe className="h-4 w-4" /> },
    { label: "Uptime", value: "99.9%", icon: <Shield className="h-4 w-4" /> },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-neutral-950/70">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 via-cyan-500/5 to-sky-500/5" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-6">
          {/* Brand Section */}
          <div className="xl:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 shadow-lg" />
              <div>
                <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  AlgoCollab
                </span>
                <div className="text-xs text-white/60 font-medium">Arena</div>
              </div>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              The ultimate platform for competitive programming. Join thousands
              of developers in real-time algorithm battles, collaborative
              coding, and skill development.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 border border-white/20">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/60">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="group p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                  aria-label={social.name}
                >
                  <div className="text-white/60 group-hover:text-white transition-colors">
                    {social.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-white/70 mb-4">
                Get the latest updates on new features, tournaments, and
                community events.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all duration-300"
              />
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-medium hover:from-fuchsia-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-fuchsia-500/25">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-4 text-sm text-white/60">
              <span>© {currentYear} AlgoCollab. All rights reserved.</span>
              <span>•</span>
              <span>
                Built with <Heart className="inline h-4 w-4 text-red-400" /> for
                developers
              </span>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/status"
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                System Status
              </Link>
              <Link
                href="/changelog"
                className="text-white/60 hover:text-white transition-colors"
              >
                Changelog
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </footer>
  );
}
