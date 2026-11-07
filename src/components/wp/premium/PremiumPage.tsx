import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeadlineHighlight from "@/components/ui/HeadlineHighlight";
import LottiePlayer from "@/components/ui/LottiePlayer";
import PageRating from "@/components/ui/PageRating";
import { Widget, type WpPageData } from "../WpPage";
import { PremiumAccordion, PremiumTabs } from "./PremiumInteractive";

/*
 * Premium layout for pages converted from WordPress.
 * It renders the SAME data as WpPage (every heading, paragraph, list item,
 * FAQ, testimonial and image), only with a new visual design.
 */

type N = any;

const isHeadingOnly = (s: N) => {
  const ws: N[] = [];
  const walk = (n: N) => (n.t ? ws.push(n) : n.kids?.forEach(walk));
  walk(s);
  return ws.length === 1 && (ws[0].t === "animated-headline" || ws[0].t === "heading");
};
const textOf = (html = "") => html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
const isInternal = (h?: string) => !!h && h.startsWith("/");

function Btn({ href, children, variant = "primary" }: { href?: string; children: React.ReactNode; variant?: "primary" | "ghost" | "white" }) {
  const cls =
    variant === "primary"
      ? "bg-gradient-to-r from-[#0082FB] via-[#1E90FF] to-[#0055D4] text-white shadow-[0_10px_25px_-8px_rgba(0,130,251,0.5)] hover:shadow-[0_14px_30px_-8px_rgba(0,130,251,0.65)] hover:-translate-y-0.5"
      : variant === "white"
        ? "bg-white text-[#0082FB] shadow-lg hover:-translate-y-0.5"
        : "bg-white text-[#0B1B3F] border border-slate-200 hover:border-[#31A1FF] hover:text-[#1A73E8]";
  const c = `inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[15px] font-heading font-bold transition-all duration-300 ${cls}`;
  const arrow = (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
  if (!href) return <span className={c}>{children}{arrow}</span>;
  return isInternal(href) ? (
    <Link href={href} className={c}>{children}{arrow}</Link>
  ) : (
    <a href={href} className={c} target="_blank" rel="noopener noreferrer">{children}{arrow}</a>
  );
}

function Headline({ w, as, className = "", tone = "light" }: { w: N; as?: string; className?: string; tone?: "light" | "dark" }) {
  const Tag = (as || w.tag || "h2") as React.ElementType;
  if (w.t === "heading") {
    return <Tag className={`font-heading font-extrabold ${className}`} dangerouslySetInnerHTML={{ __html: w.html }} />;
  }
  return (
    <Tag className={`font-heading font-extrabold capitalize ${className}`}>
      {(w.parts || []).map((p: { hl: boolean; text: string }, i: number) => (
        <React.Fragment key={i}>
          {i > 0 ? " " : ""}
          {p.hl ? (
            <HeadlineHighlight>
              <span className={tone === "dark" ? "text-[#5BB8FF]" : "text-[#1A8CFF]"}>{p.text}</span>
            </HeadlineHighlight>
          ) : (
            p.text
          )}
        </React.Fragment>
      ))}
    </Tag>
  );
}

function SectionTitle({ w }: { w: N }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      <span className="inline-block w-12 h-1.5 rounded-full bg-gradient-to-r from-[#F99517] to-[#E06126] mb-5" aria-hidden="true" />
      <Headline w={w} className="text-[28px] sm:text-[34px] lg:text-[38px] leading-[1.25] text-[#0B1B3F] tracking-[-0.01em]" />
    </div>
  );
}

/* ---------- widgets ---------- */
function PWidget({ w, inCard }: { w: N; inCard?: boolean }) {
  switch (w.t) {
    case "animated-headline":
    case "heading":
      return <Headline w={w} className="text-[22px] sm:text-[26px] leading-[1.3] text-[#0B1B3F]" />;
    case "text-editor":
      return <div className="pm-rich" dangerouslySetInnerHTML={{ __html: w.html }} />;
    case "image":
      return w.src ? (
        <div className="text-center">
          <Image
            src={w.src}
            alt={w.alt || ""}
            width={w.w || 800}
            height={w.h || 500}
            className={`inline-block max-w-full h-auto ${inCard ? "rounded-xl" : "rounded-2xl shadow-[0_20px_50px_-20px_rgba(11,27,63,0.35)]"}`}
            style={{ width: w.w || undefined }}
            unoptimized
          />
        </div>
      ) : null;
    case "lottie":
      return (
        <div className="mx-auto w-full" style={{ maxWidth: Math.min(w.w || 460, 460) }}>
          {w.src && <LottiePlayer animationPath={w.src} autoAspect className="w-full" />}
        </div>
      );
    case "button":
      return (
        <div className="text-center">
          <Btn href={w.href}>{w.text}</Btn>
        </div>
      );
    case "spacer":
      return null;
    case "icon-box":
    case "image-box": {
      const color = w.iconFill && w.iconFill !== "rgb(0, 0, 0)" ? w.iconFill : w.iconColor || "#F99517";
      return (
        <div className="text-center">
          {typeof w.icon === "string" && (
            <span
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
              style={{ background: `color-mix(in srgb, ${color} 12%, white)` }}
            >
              <span className="wp-ico inline-block w-7 h-7" style={{ color }} dangerouslySetInnerHTML={{ __html: w.icon }} />
            </span>
          )}
          {w.icon?.img && (
            <Image src={w.icon.img} alt="" width={w.iconSize || 80} height={w.iconSize || 80} className="mx-auto mb-5 h-auto" style={{ width: w.iconSize }} unoptimized />
          )}
          {w.title && <h3 className="font-heading text-[19px] font-extrabold text-[#0B1B3F] mb-3 capitalize">{w.title}</h3>}
          {w.desc && <div className="pm-rich !text-[15px] [&_p]:!mb-0" dangerouslySetInnerHTML={{ __html: w.desc }} />}
        </div>
      );
    }
    case "toggle":
    case "accordion":
      return <PremiumAccordion items={w.items || []} defaultOpen={null} />;
    case "ucaddon_uc_solid_color_accordion":
      return <PremiumAccordion items={w.items || []} defaultOpen={(w.open || []).findIndex((o: boolean) => o)} numbered />;
    case "tabs":
    case "ucaddon_uc_rainbow_border_tabs":
      return <PremiumTabs items={w.items || []} />;
    case "ucaddon_clean_testemonial_carousel":
      return <Testimonials items={w.items || []} />;
    case "image-carousel":
      return (
        <div className="flex flex-wrap items-center justify-center gap-6">
          {(w.imgs || []).map((im: { src: string; alt: string }) => (
            <Image key={im.src} src={im.src} alt={im.alt || ""} width={180} height={110} className="h-14 w-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition" unoptimized />
          ))}
        </div>
      );
    default:
      return <Widget w={w} />;
  }
}

function Testimonials({ items }: { items: { name: string; content: string; image?: string }[] }) {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
      {items.map((t, i) => (
        <figure key={i} className="break-inside-avoid mb-6 rounded-3xl bg-white border border-slate-200/70 p-7 shadow-[0_15px_40px_-25px_rgba(11,27,63,0.35)]">
          <svg viewBox="0 0 32 32" className="w-8 h-8 text-[#31A1FF]/25 mb-3" fill="currentColor" aria-hidden="true">
            <path d="M10 8C5.6 8 2 11.6 2 16v8h8v-8H6c0-2.2 1.8-4 4-4V8zm16 0c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4V8z" />
          </svg>
          <blockquote className="text-[15px] leading-[1.8] text-slate-600">{t.content}</blockquote>
          <figcaption className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-100">
            {t.image && (
              <Image src={t.image} alt={t.name} width={48} height={48} className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow" unoptimized />
            )}
            <div>
              <div className="font-heading font-bold text-[15px] text-[#0B1B3F]">{t.name}</div>
              <div className="flex gap-0.5 text-[#FFB400]" aria-label="5 stars">
                {[0, 1, 2, 3, 4].map((s) => (
                  <svg key={s} viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                ))}
              </div>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

/* ---------- layout ---------- */
function Column({ n }: { n: N }) {
  const card = n.wrapBox?.bg === "rgb(255, 255, 255)";
  const kids: N[] = n.kids || [];
  const allIcon = kids.length > 0 && kids.every((k) => k.t === "icon-box" || k.t === "image-box");
  return (
    <div
      className={`flex flex-col gap-6 justify-center min-w-0 ${
        card || allIcon
          ? "group rounded-3xl bg-white border border-slate-200/70 p-6 sm:p-9 shadow-[0_20px_50px_-30px_rgba(11,27,63,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(11,27,63,0.45)]"
          : ""
      }`}
    >
      {kids.map((k, i) => <Node key={i} n={k} inCard={card || allIcon} />)}
    </div>
  );
}

function Row({ n }: { n: N }) {
  const cols: N[] = (n.kids || []).filter((k: N) => k.k === "col");
  const template = cols.map((c) => `minmax(0, ${c.wPct || 100}fr)`).join(" ");
  return (
    <div className="pm-row grid grid-cols-1 gap-6 lg:gap-8" style={{ ["--cols" as string]: template } as React.CSSProperties}>
      {cols.map((c, i) => <Column key={i} n={c} />)}
    </div>
  );
}

function Node({ n, inCard }: { n: N; inCard?: boolean }) {
  if (n.t) return <PWidget w={n} inCard={inCard} />;
  if (n.k === "col") return <div className="flex flex-col gap-6">{n.kids?.map((k: N, i: number) => <Node key={i} n={k} />)}</div>;
  return <Row n={n} />;
}

/** Content inside a top-level section, with its first headline promoted to a section title */
function SectionBody({ s }: { s: N }) {
  const flat: N[] = [];
  const unwrap = (n: N) => {
    if (n.k === "sec" && (n.kids || []).length === 1 && n.kids[0].k === "col") n.kids[0].kids?.forEach((k: N) => flat.push(k));
    else flat.push(n);
  };
  unwrap(s);
  const out: React.ReactNode[] = [];
  flat.forEach((n, i) => {
    if (i === 0 && n.t === "animated-headline") out.push(<SectionTitle key={i} w={n} />);
    else if (i === 1 && flat[0]?.t === "animated-headline" && n.t === "text-editor" && textOf(n.html).length < 140)
      out.push(<div key={i} className="pm-rich pm-lead text-center -mt-6 mb-10" dangerouslySetInnerHTML={{ __html: n.html }} />);
    else if (n.t === "text-editor" && textOf(n.html).length < 90 && !n.html.includes("<ul"))
      out.push(<div key={i} className="pm-rich pm-sub" dangerouslySetInnerHTML={{ __html: n.html }} />);
    else out.push(<div key={i}><Node n={n} /></div>);
  });
  return <div className="flex flex-col gap-8">{out}</div>;
}

function Hero({ s, cta }: { s: N; cta?: N }) {
  const ws: N[] = s.kids?.[0]?.kids || [];
  const head = ws.find((w) => w.t === "animated-headline" || w.t === "heading");
  const intro = ws.filter((w) => w.t === "text-editor");
  const img = ws.find((w) => w.t === "image");
  return (
    <section className="relative overflow-hidden pt-[90px] sm:pt-[110px] pb-0 bg-gradient-to-b from-[#EAF5FF] via-[#F5FAFF] to-white">
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-[#31A1FF]/20 blur-3xl" aria-hidden="true" />
      <div className="absolute top-40 -left-40 w-[420px] h-[420px] rounded-full bg-[#F99517]/15 blur-3xl" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(11,27,63,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(11,27,63,0.06)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
        aria-hidden="true"
      />
      <div className="relative max-w-[1200px] mx-auto px-5 text-center">
        {head && (
          <Headline w={head} as="h1" className="text-[34px] sm:text-[46px] lg:text-[56px] leading-[1.12] tracking-[-0.02em] text-[#0B1B3F] max-w-4xl mx-auto" />
        )}
        {intro.map((w, i) => (
          <div key={i} className="pm-rich pm-hero-text max-w-3xl mx-auto mt-7" dangerouslySetInnerHTML={{ __html: w.html }} />
        ))}
        {cta && (
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Btn href={cta.href}>{cta.text}</Btn>
          </div>
        )}
        {img?.src && (
          <div className="relative mt-14 mx-auto max-w-[1040px] rounded-[28px] bg-white p-4 sm:p-6 border border-slate-200/70 shadow-[0_40px_80px_-40px_rgba(11,27,63,0.45)] translate-y-0">
            <Image src={img.src} alt={img.alt || ""} width={img.w || 1000} height={img.h || 240} className="w-full h-auto rounded-2xl" priority unoptimized />
          </div>
        )}
      </div>
    </section>
  );
}

function CtaBanner({ s }: { s: N }) {
  const ws: N[] = [];
  const walk = (n: N) => (n.t ? ws.push(n) : n.kids?.forEach(walk));
  walk(s);
  const heads = ws.filter((w) => w.t === "heading");
  const texts = ws.filter((w) => w.t === "text-editor");
  const btn = ws.find((w) => w.t === "button");
  return (
    <section className="py-20 px-5">
      <div className="relative max-w-[1200px] mx-auto overflow-hidden rounded-[32px] bg-gradient-to-br from-[#F99517] via-[#EE7A1F] to-[#E06126] px-8 py-14 sm:px-14 shadow-[0_40px_80px_-40px_rgba(224,97,38,0.7)]">
        <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-white/10" aria-hidden="true" />
        <div className="absolute right-40 -bottom-24 w-56 h-56 rounded-full bg-white/10" aria-hidden="true" />
        <div className="relative flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex-1 text-white">
            {heads.map((h, i) => (
              <div
                key={i}
                className={i === 0 ? "font-heading font-bold text-[15px] uppercase tracking-[0.12em] text-white/85 mb-2" : "font-heading font-extrabold text-[32px] sm:text-[42px] leading-tight"}
                dangerouslySetInnerHTML={{ __html: h.html }}
              />
            ))}
            {texts.map((t, i) => (
              <div key={i} className="pm-rich pm-on-dark mt-4 max-w-2xl" dangerouslySetInnerHTML={{ __html: t.html }} />
            ))}
          </div>
          {btn && (
            <div className="shrink-0">
              <Btn href={btn.href} variant="white">{btn.text}</Btn>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function PremiumPage({ data }: { data: WpPageData }) {
  const secs: N[] = data.sections;
  // group "heading only" sections with the section that follows
  const blocks: { head?: N; body: N }[] = [];
  for (let i = 1; i < secs.length; i++) {
    if (isHeadingOnly(secs[i]) && secs[i + 1]) {
      const ws: N[] = [];
      const walk = (n: N) => (n.t ? ws.push(n) : n.kids?.forEach(walk));
      walk(secs[i]);
      blocks.push({ head: ws[0], body: secs[i + 1] });
      i++;
    } else blocks.push({ body: secs[i] });
  }
  const last = blocks[blocks.length - 1];
  const lastIsCta = last && JSON.stringify(last.body).includes('"t":"button"') && JSON.stringify(last.body).includes('"t":"heading"');
  const mainBlocks = lastIsCta ? blocks.slice(0, -1) : blocks;

  // first button on the page (e.g. "Order Now") becomes the hero call-to-action
  let heroCta: N;
  const findBtn = (n: N) => {
    if (heroCta) return;
    if (n.t === "button") heroCta = n;
    n.kids?.forEach(findBtn);
  };
  secs.forEach(findBtn);

  const m = data.rating?.match(/([\d.]+)\/5\s*-\s*\((\d+)/);

  return (
    <div className="pm bg-white">
      <Hero s={secs[0]} cta={heroCta} />
      {mainBlocks.map((b, i) => (
        <section key={i} className={`py-20 sm:py-24 ${i % 2 === 0 ? "bg-white" : "bg-[#F6F9FD]"}`}>
          <div className="max-w-[1200px] mx-auto px-5">
            {b.head && <SectionTitle w={b.head} />}
            <SectionBody s={b.body} />
          </div>
        </section>
      ))}
      {lastIsCta && <CtaBanner s={last.body} />}
      {m && <PageRating score={parseFloat(m[1])} votes={parseInt(m[2], 10)} />}
    </div>
  );
}
