export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Kingdom Alive. All rights reserved.</p>
        <p className="text-zinc-300">Keep God first.</p>
      </div>
    </footer>
  );
}
