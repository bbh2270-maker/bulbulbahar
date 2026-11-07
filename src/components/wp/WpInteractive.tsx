"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { boxCss, textCss, type BoxStyle, type TextStyle } from "./styles";

/* ---------- Elementor Toggle ---------- */
export function WpToggle({ w }: { w: any }) {
  const [open, setOpen] = useState<boolean[]>(() => (w.items || []).map((_: unknown, i: number) => !!w.open?.[i]));
  
  return (
    <div className="space-y-3.5 my-4">
      {(w.items || []).map((it: { title: string; html: string }, i: number) => {
        const isOpen = open[i];
        return (
          <div
            key={i}
            className={`rounded-xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "border-[#CB3522]/40 bg-white shadow-md ring-1 ring-[#CB3522]/10"
                : "border-slate-200/90 bg-white hover:border-slate-300 shadow-sm"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen((o) => o.map((v, j) => (j === i ? !v : v)))}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left font-bold text-slate-800 hover:text-[#CB3522] transition-colors cursor-pointer group"
            >
              <span className="flex-1 font-heading text-sm sm:text-base leading-snug">
                {it.title}
              </span>
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                  isOpen
                    ? "bg-[#CB3522] text-white rotate-180"
                    : "bg-slate-100 text-slate-500 group-hover:bg-[#CB3522]/10 group-hover:text-[#CB3522]"
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <div
                className="wp-rich px-5 pb-5 pt-2 sm:px-6 sm:pb-6 text-slate-600 border-t border-slate-100 bg-slate-50/40"
                dangerouslySetInnerHTML={{ __html: it.html }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ---------- Elementor Tabs ---------- */
export function WpTabs({ w }: { w: any }) {
  const [active, setActive] = useState(0);
  const items: { title: string; html: string }[] = w.items || [];
  return (
    <div className="my-6">
      <div
        className="flex flex-wrap gap-2.5 p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200/70 mb-4"
        role="tablist"
      >
        {items.map((it, i) => {
          const isActive = active === i;
          return (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(i)}
              className={`flex-1 min-w-[200px] text-center px-5 py-3 rounded-xl font-heading font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-white text-[#CB3522] shadow-sm ring-1 ring-slate-200/80"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
              }`}
            >
              {it.title}
            </button>
          );
        })}
      </div>
      <div
        className="wp-rich p-6 sm:p-8 bg-white rounded-2xl border border-slate-200/90 shadow-sm"
        dangerouslySetInnerHTML={{ __html: items[active]?.html || "" }}
      />
    </div>
  );
}

/* ---------- Image carousel (logos) ---------- */
export function WpLogoCarousel({ imgs }: { imgs: { src: string; alt: string }[] }) {
  const [start, setStart] = useState(0);
  const n = imgs.length;
  useEffect(() => {
    if (n < 2) return;
    const t = setInterval(() => setStart((s) => (s + 1) % n), 3000);
    return () => clearInterval(t);
  }, [n]);
  const ordered = imgs.map((_, i) => imgs[(start + i) % n]);
  return (
    <div className="flex items-center gap-[10px]">
      <button type="button" aria-label="Previous" onClick={() => setStart((s) => (s - 1 + n) % n)} className="text-[24px] px-1 hover:text-[#F99517]">
        &#8249;
      </button>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-[10px] flex-1">
        {ordered.map((l) => (
          <Image key={l.src} src={l.src} alt={l.alt || ""} width={240} height={150} className="w-full h-auto block" unoptimized />
        ))}
      </div>
      <button type="button" aria-label="Next" onClick={() => setStart((s) => (s + 1) % n)} className="text-[24px] px-1 hover:text-[#F99517]">
        &#8250;
      </button>
    </div>
  );
}

/* ---------- Elementor form ----------
 * Newsletter forms (email only) just confirm; contact / quote forms are sent
 * to /api/contact like the rest of the site. */
export function WpForm({ w }: { w: any }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [msg, setMsg] = useState("");
  const fields: any[] = w.fields || [];
  const isNewsletter = fields.length === 1 && fields[0].type === "email";
  const inputStyle: React.CSSProperties = {
    background: w.is?.bg, border: w.is?.border, borderRadius: w.is?.radius, fontSize: w.is?.fs, color: w.is?.color,
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isNewsletter) { setStatus("done"); return; }
    const fd = new FormData(e.currentTarget);
    const by = (label: string) => {
      const f = fields.find((x) => (x.label || x.placeholder || "").toLowerCase() === label);
      return f ? fd.getAll(f.name).join(", ") : "";
    };
    const extra = fields
      .filter((f) => !["name", "email", "phone", "message"].includes((f.label || f.placeholder || "").toLowerCase()))
      .map((f) => `${f.label || f.placeholder}: ${fd.getAll(f.name).join(", ")}`)
      .join("\n");
    const message = [by("message"), extra].filter(Boolean).join("\n\n") || "Quote request";
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: by("name"), email: by("email"), phone: by("phone"), service: by("service type") || undefined, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong. Please try again.");
      setStatus("done");
      setMsg("Thank you! Your message has been sent. We will reach you within 24 hours.");
      e.currentTarget?.reset?.();
    } catch (err) {
      setStatus("error");
      setMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-wrap gap-y-[10px]">
      {fields.map((f: any, i: number) => (
        <div key={i} style={{ width: `${f.width || 100}%` }}>
          {f.label && !isNewsletter && (
            <label className="block mb-[4px]" style={textCss(w.ls)} htmlFor={`wpf-${i}`}>
              {f.label}
            </label>
          )}
          {f.type === "textarea" ? (
            <textarea id={`wpf-${i}`} name={f.name} placeholder={f.placeholder} required={f.required} rows={4}
              className="w-full px-[14px] py-[10px] focus:outline-none" style={inputStyle} />
          ) : f.type === "select" ? (
            <select id={`wpf-${i}`} name={f.name} required={f.required} className="w-full px-[12px] py-[10px] focus:outline-none" style={inputStyle}>
              {(f.opts || []).map((o: string) => <option key={o}>{o}</option>)}
            </select>
          ) : f.type === "checkbox" ? (
            <div className="flex flex-wrap gap-x-[20px] gap-y-1">
              {(f.opts || []).map((o: string) => (
                <label key={o} className="inline-flex items-center gap-[6px]" style={textCss(w.ls)}>
                  <input type="checkbox" name={f.name} value={o} /> {o}
                </label>
              ))}
            </div>
          ) : (
            <input id={`wpf-${i}`} type={f.type === "number" ? "tel" : f.type} name={f.name} placeholder={f.placeholder} required={f.required}
              className="w-full px-[14px] py-[10px] focus:outline-none" style={inputStyle} />
          )}
        </div>
      ))}
      <div className="w-full" style={{ textAlign: w.bpad ? "center" : undefined }}>
        <button
          type="submit"
          disabled={status === "sending"}
          className={`${w.bpad ? "inline-block" : "w-full"} ${isNewsletter ? "uppercase" : ""} py-[12px] transition-opacity hover:opacity-90 disabled:opacity-60`}
          style={{ background: w.bs?.bg, color: w.bs?.color, borderRadius: w.bs?.radius, fontSize: w.bs?.fs, fontWeight: w.bs?.fw, padding: w.bpad }}
        >
          {status === "sending" ? "Sending..." : status === "done" && isNewsletter ? "Thank you!" : w.button || "Submit"}
        </button>
      </div>
      {msg && !isNewsletter && (
        <p className={`w-full text-[14px] ${status === "error" ? "text-red-600" : "text-[#31A1FF] font-semibold"}`}>{msg}</p>
      )}
    </form>
  );
}
