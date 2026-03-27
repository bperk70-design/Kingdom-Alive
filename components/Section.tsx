import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base text-zinc-300 sm:text-lg">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
