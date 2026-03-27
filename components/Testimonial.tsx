interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
}

export default function Testimonial({ quote, name, title }: TestimonialProps) {
  return (
    <div className="flex h-full flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-base text-zinc-200">“{quote}”</p>
      <div>
        <p className="text-sm font-semibold text-white">{name}</p>
        <p className="text-sm text-zinc-400">{title}</p>
      </div>
    </div>
  );
}
