export default function GradientBackground() {
  return (
    <div aria-hidden={true} className="absolute inset-0 -z-0 overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-br from-fuchsia-500/20 via-cyan-500/10 to-sky-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[500px] w-[700px] rounded-full bg-gradient-to-tr from-emerald-500/10 via-indigo-500/10 to-pink-500/10 blur-3xl" />
    </div>
  );
}
