"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const email = String(fd.get("email") || "");
    const phone = String(fd.get("phone") || "");
    const message = String(fd.get("message") || "");
    const subject = encodeURIComponent(`Website inquiry from ${name || "visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 border border-border bg-white p-6 md:p-8">
      <h2 className="font-serif text-2xl text-navy">Send a message</h2>
      <div>
        <label className="label-prg" htmlFor="name">
          Name
        </label>
        <input id="name" name="name" required className="input-prg" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label-prg" htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" required className="input-prg" />
        </div>
        <div>
          <label className="label-prg" htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" className="input-prg" />
        </div>
      </div>
      <div>
        <label className="label-prg" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="input-prg resize-y"
        />
      </div>
      <button type="submit" className="btn-gold w-full sm:w-auto">
        Send message →
      </button>
      {status === "sent" && (
        <p className="text-sm text-slate">
          Opening your email app… If nothing opens, write us at {siteConfig.email}.
        </p>
      )}
    </form>
  );
}
