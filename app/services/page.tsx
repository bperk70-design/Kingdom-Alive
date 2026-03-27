import Link from "next/link";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { serviceDetails } from "../../lib/constants";

export default function ServicesPage() {
  return (
    <Section
      eyebrow="Services"
      title="Systems that turn clarity into customers."
      description="Every engagement is designed to improve your offer clarity, increase replies, and build sustainable follow-up systems."
    >
      <div className="grid gap-8">
        {serviceDetails.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="text-sm text-zinc-300">{service.description}</p>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <Card title="Who it’s for">
                <ul className="space-y-2 text-sm text-zinc-300">
                  {service.for.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card title="What you get">
                <ul className="space-y-2 text-sm text-zinc-300">
                  {service.gets.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card title="Outcomes">
                <ul className="space-y-2 text-sm text-zinc-300">
                  {service.outcomes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/#contact"
          className="rounded-2xl bg-[#d4af37] px-5 py-3 text-sm font-semibold text-black"
        >
          Book a call
        </Link>
        <Link
          href="/privacy"
          className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white"
        >
          View privacy policy
        </Link>
      </div>
    </Section>
  );
}
