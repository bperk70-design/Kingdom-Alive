import Link from "next/link";
import Card from "../components/Card";
import ContactForm from "../components/ContactForm";
import FAQAccordion from "../components/FAQAccordion";
import PricingCard from "../components/PricingCard";
import Section from "../components/Section";
import Testimonial from "../components/Testimonial";
import {
  faqs,
  missionCards,
  pricingTiers,
  processSteps,
  services,
  socialProof,
  testimonials,
} from "../lib/constants";

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-white/10 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
              Kingdom Alive
            </p>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">
              Clarity-led systems that help you win more customers.
            </h1>
            <p className="max-w-2xl text-base text-zinc-300 sm:text-lg">
              We help small businesses improve offer clarity, increase replies,
              and build follow-up systems that drive booked calls. You get
              grounded strategy, simple execution, and a clear path to growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="rounded-2xl bg-[#d4af37] px-5 py-3 text-sm font-semibold text-black"
              >
                Get a free clarity audit
              </Link>
              <Link
                href="#services"
                className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white"
              >
                See services
              </Link>
            </div>
          </div>
          <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-zinc-300 sm:grid-cols-3">
            {socialProof.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section
        id="mission"
        eyebrow="Mission"
        title="Build businesses that serve with clarity and discipline."
        description="We keep God first and help you align your business with systems that multiply impact."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {missionCards.map((card) => (
            <Card key={card.title} title={card.title} description={card.description} />
          ))}
        </div>
      </Section>

      <Section
        id="services"
        eyebrow="Services"
        title="Focused systems for growth."
        description="Everything we do is built to improve offer clarity, increase replies, and build a steady pipeline."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              title={service.title}
              description={service.description}
            >
              <Link
                href="/services"
                className="mt-4 text-sm font-semibold text-[#d4af37]"
              >
                Learn more
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="process"
        eyebrow="Process"
        title="A clear path from audit to execution."
        description="We work in focused steps that protect your time and deliver results."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <Card
              key={step.title}
              title={`${index + 1}. ${step.title}`}
              description={step.description}
            />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Testimonials"
        title="Trusted by builders who value clarity."
        description="Small business owners rely on Kingdom Alive for straightforward, measurable progress."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </Section>

      <Section
        id="pricing"
        eyebrow="Pricing"
        title="Simple tiers with real momentum."
        description="Choose the level of support that fits your season of growth."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="FAQ"
        title="Questions, answered."
        description="If you are ready for more customers and a clear process, this is for you."
      >
        <FAQAccordion items={faqs} />
      </Section>

      <Section
        id="contact"
        eyebrow="Contact"
        title="Let us build the clarity your business needs."
        description="Tell us where you are stuck, and we will send the next best step."
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4 text-sm text-zinc-300">
            <p>
              Kingdom Alive helps you get more customers with a clear offer,
              steady outreach, and simple automation. We keep the process
              grounded so you can serve with focus and grow with discipline.
            </p>
            <div className="space-y-3">
              <p className="text-white">What you will get:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                  Offer clarity and message alignment
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                  Content and outreach rhythms that lead to replies
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                  Follow-up systems and automation guidance
                </li>
              </ul>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#d4af37]"
            >
              Explore full services
            </Link>
          </div>
          <ContactForm />
        </div>
      </Section>
    </div>
  );
}
