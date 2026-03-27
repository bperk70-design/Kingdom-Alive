"use client";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  handle: "",
  needs: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!form.name || !form.email || !form.handle || !form.needs) {
      setError("Please complete all required fields.");
      return;
    }

    setSubmitted(true);
    setForm(initialState);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[#d4af37]/40 bg-white/5 p-6 text-center text-sm text-zinc-200">
        <p className="text-lg font-semibold text-white">
          Thanks for reaching out.
        </p>
        <p className="mt-2">
          We received your request and will respond within one business day.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 rounded-2xl border border-[#d4af37]/60 px-4 py-2 text-sm font-semibold text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
    >
      <div className="grid gap-2">
        <label className="text-sm text-zinc-200" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="rounded-2xl border border-white/10 bg-black px-4 py-2 text-sm text-white"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-200" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          className="rounded-2xl border border-white/10 bg-black px-4 py-2 text-sm text-white"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-200" htmlFor="handle">
          Business or IG handle
        </label>
        <input
          id="handle"
          name="handle"
          value={form.handle}
          onChange={handleChange}
          required
          className="rounded-2xl border border-white/10 bg-black px-4 py-2 text-sm text-white"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-200" htmlFor="needs">
          What do you need help with?
        </label>
        <textarea
          id="needs"
          name="needs"
          value={form.needs}
          onChange={handleChange}
          required
          rows={4}
          className="rounded-2xl border border-white/10 bg-black px-4 py-2 text-sm text-white"
        />
      </div>
      {error && <p className="text-sm text-red-400">{error}</p>}
      <button
        type="submit"
        className="rounded-2xl border border-[#d4af37]/60 px-4 py-3 text-sm font-semibold text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
      >
        Submit request
      </button>
    </form>
  );
}
