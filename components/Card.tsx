import type { ReactNode } from "react";

interface CardProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export default function Card({ title, description, children }: CardProps) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
      <div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        {description && (
          <p className="mt-3 text-sm text-zinc-300">{description}</p>
        )}
      </div>
      {children}
    </div>
  );
}
