"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        return (
          <div
            key={item.question}
            className="rounded-2xl border border-white/10 bg-white/5"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
              aria-expanded={isOpen}
              onClick={() =>
                setOpenIndex((prev) => (prev === index ? null : index))
              }
            >
              <span className="text-base font-semibold text-white">
                {item.question}
              </span>
              <span className="text-xl text-[#d4af37]">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-5 text-sm text-zinc-300">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
