import Link from "next/link";
import { navLinks } from "../lib/constants";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-white">
          Kingdom Alive
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/services"
            className="rounded-2xl border border-[#d4af37]/60 px-4 py-2 text-sm font-semibold text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
          >
            See services
          </Link>
        </nav>
        <Link
          href="#contact"
          className="rounded-2xl border border-[#d4af37]/60 px-4 py-2 text-sm font-semibold text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black md:hidden"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
