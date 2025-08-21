import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 sm:p-10">
        <div className="absolute -right-10 -top-10 h-40 w-40 rotate-12 rounded-3xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20 blur-xl" />
        <div className="relative z-10 grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Ready to enter the arena?
            </h3>
            <p className="mt-1 max-w-prose text-sm text-white/70">
              Join a live room now, or browse stats and replays to study winning
              strategies.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              href="/match"
              className="rounded-xl bg-white px-5 py-3 font-medium text-neutral-900 hover:bg-white/90"
            >
              Find Match
            </Link>
            <Link
              href="/replay/demo"
              className="rounded-xl border border-white/15 px-5 py-3 hover:bg-white/10"
            >
              Watch Replay
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
