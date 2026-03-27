import Link from "next/link";
import Section from "../../components/Section";

export default function AboutPage() {
  return (
    <Section
      eyebrow="About"
      title="Kingdom Alive exists to help you build with clarity."
      description="We believe God-first businesses can grow with discipline, serve with excellence, and still keep the work simple."
    >
      <div className="max-w-3xl space-y-6 text-base text-zinc-300">
        <p>
          Kingdom Alive was founded to help service-based entrepreneurs build
          calm, repeatable systems. We focus on clear offers, simple outreach,
          and follow-up workflows that keep leads moving without chaos.
        </p>
        <p>
          Our approach is practical and grounded. We do the hard thinking with
          you, then create the structure that makes daily execution easier. This
          is how we help you grow with integrity and consistency.
        </p>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white">Our mission</h3>
          <p className="mt-3 text-sm text-zinc-300">
            Help small businesses gain clarity, build systems, and create
            sustainable growth without compromising their values.
          </p>
        </div>
        <Link
          href="/#contact"
          className="inline-flex items-center justify-center rounded-2xl bg-[#d4af37] px-5 py-3 text-sm font-semibold text-black"
        >
          Contact us
        </Link>
      </div>
    </Section>
  );
}
