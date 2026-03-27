import Link from "next/link";

interface PricingCardProps {
  name: string;
  price: string;
  headline: string;
  features: string[];
  cta: string;
}

export default function PricingCard({
  name,
  price,
  headline,
  features,
  cta,
}: PricingCardProps) {
  return (
    <div className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            {name}
          </p>
          <h3 className="mt-2 text-3xl font-semibold text-white">{price}</h3>
          <p className="mt-2 text-sm text-zinc-300">{headline}</p>
        </div>
        <ul className="space-y-2 text-sm text-zinc-200">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Link
        href="#contact"
        className="inline-flex items-center justify-center rounded-2xl border border-[#d4af37]/60 px-4 py-2 text-sm font-semibold text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
      >
        {cta}
      </Link>
    </div>
  );
}
