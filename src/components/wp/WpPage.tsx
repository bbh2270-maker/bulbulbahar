import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeadlineHighlight from "@/components/ui/HeadlineHighlight";
import LottiePlayer from "@/components/ui/LottiePlayer";
import InfoAccordion from "@/components/home/InfoAccordion";
import ServiceTabs from "@/components/home/ServiceTabs";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PageRating from "@/components/ui/PageRating";
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { WpForm, WpLogoCarousel, WpTabs, WpToggle } from "./WpInteractive";
import { boxCss, headingCss, textCss, type TextStyle } from "./styles";
import ServiceHero from "@/components/services/ServiceHero";
import { serviceHeroConfigs } from "@/data/service-hero-configs";

/*
 * Renders a page converted from the WordPress/Elementor site.
 * The JSON in src/data/wp-pages was captured from the live pages (layout,
 * text, colours, sizes) so the Next.js pages look the same as the originals.
 */

export interface WpPageData {
  slug: string;
  url: string;
  title: string;
  description?: string;
  rating?: string;
  sections: any[];
}

export function wpMetadata(data: WpPageData): Metadata {
  return {
    title: { absolute: data.title },
    description: data.description,
    alternates: { canonical: `/${data.slug}/` },
    openGraph: { title: data.title, description: data.description, url: `/${data.slug}/`, type: "website" },
  };
}

const isInternal = (href?: string) => !!href && href.startsWith("/");

function A({ href, className, style, children }: { href?: string; className?: string; style?: React.CSSProperties; children: React.ReactNode }) {
  if (!href) return <span className={className} style={style}>{children}</span>;
  if (isInternal(href)) return <Link href={href} className={className} style={style}>{children}</Link>;
  return (
    <a href={href} className={className} style={style} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function Icon({ icon, size, color, box }: { icon: any; size?: number; color?: string; box?: any }) {
  if (!icon) return null;
  const wrap: React.CSSProperties = { ...boxCss(box), display: "inline-flex", lineHeight: 0 };
  if (typeof icon === "string") {
    return (
      <span style={wrap}>
        <span className="wp-ico inline-block" style={{ width: size, height: size, color }} dangerouslySetInnerHTML={{ __html: icon }} />
      </span>
    );
  }
  if (icon.img) {
    return (
      <span style={wrap}>
        <Image src={icon.img} alt="" width={size || 100} height={size || 100} style={{ width: size, height: "auto" }} unoptimized />
      </span>
    );
  }
  return null;
}

export function Widget({ w }: { w: any }) {
  const outer: React.CSSProperties = boxCss(w.wbox);
  const inner: React.CSSProperties = boxCss(w.box);
  let el: React.ReactNode = null;

  switch (w.t) {
    case "heading": {
      const Tag = (w.tag || "h2") as React.ElementType;
      el = <Tag className="wp-h" style={headingCss(w.s)} dangerouslySetInnerHTML={{ __html: w.html }} />;
      break;
    }
    case "animated-headline": {
      const Tag = (w.tag || "h2") as React.ElementType;
      const isH1 = (w.tag || "").toLowerCase() === "h1";
      const highlightColor = w.hlColor && w.hlColor !== "inherit" && !/174,\s*188,\s*185|0,\s*0,\s*0/i.test(w.hlColor)
        ? w.hlColor
        : "rgb(49, 161, 255)";
      el = (
        <Tag className="wp-h" style={headingCss(w.s)}>
          {(w.parts || []).map((p: { hl: boolean; text: string }, i: number) => (
            <React.Fragment key={i}>
              {i > 0 ? " " : ""}
              {p.hl ? (
                <HeadlineHighlight
                  variant={isH1 ? "none" : "underline"}
                  color="#0082FB"
                >
                  <span style={{ color: highlightColor }}>{p.text}</span>
                </HeadlineHighlight>
              ) : (
                p.text
              )}
            </React.Fragment>
          ))}
        </Tag>
      );
      break;
    }
    case "text-editor":
      el = (
        <div
          className="wp-rich"
          style={{
            ...textCss(w.s as TextStyle),
            ...(w.ps ? textCss(w.ps as TextStyle) : {}),
            ["--lc" as string]: w.linkColor || "#e05414",
            ["--sc" as string]: w.strongColor || "inherit",
          } as React.CSSProperties}
          dangerouslySetInnerHTML={{ __html: w.html }}
        />
      );
      break;
    case "image": {
      const img = w.src ? (
        <Image
          src={w.src}
          alt={w.alt || ""}
          width={w.w || 600}
          height={w.h || 400}
          className="inline-block max-w-full h-auto align-middle rounded-2xl shadow-sm border border-slate-100"
          style={{ width: w.w || undefined, borderRadius: w.radius || "14px", boxShadow: w.shadow }}
          unoptimized
        />
      ) : null;
      el = (
        <div style={{ textAlign: (w.align as React.CSSProperties["textAlign"]) || "center" }}>
          {w.href ? <A href={w.href}>{img}</A> : img}
          {w.caption && <p className="text-[13px] mt-2 text-slate-500">{w.caption}</p>}
        </div>
      );
      break;
    }
    case "lottie":
      el = (
        <div className="mx-auto" style={{ width: "100%", maxWidth: w.w || undefined }}>
          {w.src && <LottiePlayer animationPath={w.src} autoAspect className="w-full" />}
        </div>
      );
      break;
    case "button": {
      const s = w.s || {};
      el = (
        <div style={{ textAlign: (w.align as React.CSSProperties["textAlign"]) || "left" }}>
          <A
            href={w.href}
            className={`${w.full ? "block" : "inline-flex"} items-center justify-center gap-2 font-heading font-bold transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0`}
            style={{
              ...textCss(s),
              backgroundColor: "#0082FB",
              backgroundImage: s.bgImg || "linear-gradient(135deg, #0082FB 0%, #1E90FF 50%, #0055D4 100%)",
              padding: s.pad || "13px 28px",
              borderRadius: "9999px",
              border: "none",
              boxShadow: s.shadow || "0 10px 25px -8px rgba(0, 130, 251, 0.4)",
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            <span>{w.text}</span>
            <svg viewBox="0 0 24 24" className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </A>
        </div>
      );
      break;
    }
    case "spacer":
      el = <div style={{ height: w.h }} />;
      break;
    case "divider":
      el = (
        <div style={{ textAlign: w.align }}>
          <span className="inline-block" style={{ width: w.w, borderTop: `${w.bw} solid ${w.color}` }} />
        </div>
      );
      break;
    case "icon-box":
    case "image-box": {
      const row = w.pos === "left" || w.pos === "right";
      el = (
        <div
          className={row ? "flex gap-[15px] items-start" : ""}
          style={{ textAlign: (w.align as React.CSSProperties["textAlign"]) || "center", flexDirection: w.pos === "right" ? "row-reverse" : undefined }}
        >
          <div className={row ? "shrink-0" : "mb-[15px]"}>
            <Icon icon={w.icon} size={w.iconSize} color={w.iconFill && w.iconFill !== "rgb(0, 0, 0)" ? w.iconFill : w.iconColor} box={w.iconBox} />
          </div>
          <div className={row ? "flex-1" : ""}>
            {w.title && (
              <A href={w.href}>
                {React.createElement(w.titleTag || "h3", { className: "wp-t", style: { ...textCss(w.ts), margin: "0 0 10px" } }, w.title)}
              </A>
            )}
            {w.desc && <div className="wp-rich" style={textCss(w.ds)} dangerouslySetInnerHTML={{ __html: w.desc }} />}
          </div>
        </div>
      );
      break;
    }
    case "icon-list":
      el = (
        <ul className={`list-none p-0 m-0 ${w.inline ? "flex flex-wrap gap-x-[20px]" : ""}`} style={{ textAlign: w.align }}>
          {(w.items || []).map((it: any, i: number) => (
            <li key={i} className="flex items-center gap-[10px] py-[3px]" style={{ justifyContent: w.align === "center" ? "center" : undefined }}>
              {it.icon && <Icon icon={it.icon} size={w.iconSize || 14} color={w.iconColor} />}
              <A href={it.href} style={textCss(w.ts)}>{it.text}</A>
            </li>
          ))}
        </ul>
      );
      break;
    case "toggle":
    case "accordion":
      el = <WpToggle w={w} />;
      break;
    case "tabs":
      el = <WpTabs w={w} />;
      break;
    case "ucaddon_uc_solid_color_accordion": {
      el = (
        <InfoAccordion
          defaultOpen={null}
          items={(w.items || []).map((it: { title: string; html: string }) => ({
            title: it.title,
            content: <div className="wp-rich" dangerouslySetInnerHTML={{ __html: it.html }} />,
          }))}
        />
      );
      break;
    }
    case "ucaddon_uc_rainbow_border_tabs":
      el = (
        <ServiceTabs
          items={(w.items || []).map((it: { title: string; html: string }, i: number) => ({ id: `t${i}`, name: it.title, html: it.html }))}
        />
      );
      break;
    case "ucaddon_clean_testemonial_carousel":
      el = <TestimonialsSection bare items={(w.items || []).map((t: any) => ({ name: t.name, content: t.content, image: t.image || "/images/about/client-user.webp" }))} />;
      break;
    case "image-carousel":
      el = <WpLogoCarousel imgs={w.imgs || []} />;
      break;
    case "form":
      el = <WpForm w={w} />;
      break;
    case "social-icons": {
      const hrefs = Array.from(String(w.html || "").matchAll(/href="([^"]+)"/g)).map((m) => m[1]);
      const brand = (h: string) =>
        h.includes("facebook") ? { c: "#3b5998", I: FacebookIcon, n: "Facebook" }
        : h.includes("x.com") || h.includes("twitter") ? { c: "#1da1f2", I: TwitterIcon, n: "Twitter" }
        : h.includes("instagram") ? { c: "#262626", I: InstagramIcon, n: "Instagram" }
        : h.includes("youtube") ? { c: "#cd201f", I: YoutubeIcon, n: "YouTube" }
        : h.includes("linkedin") ? { c: "#0077b5", I: LinkedInIcon, n: "LinkedIn" }
        : h.includes("pinterest") ? { c: "#bd081c", I: null, n: "Pinterest" }
        : { c: "#69727d", I: null, n: "Link" };
      el = (
        <div className="flex flex-wrap gap-[10px] justify-center">
          {hrefs.map((h) => {
            const b = brand(h);
            return (
              <a key={h} href={h} target="_blank" rel="noopener noreferrer" aria-label={b.n}
                className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-white hover:opacity-90"
                style={{ background: b.c }}>
                {b.I ? <b.I className="w-[18px] h-[18px]" /> : (
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.62 11.17-.1-.95-.2-2.4.04-3.44.22-.94 1.4-5.96 1.4-5.96s-.36-.72-.36-1.78c0-1.67.97-2.92 2.17-2.92 1.02 0 1.52.77 1.52 1.69 0 1.03-.66 2.57-1 4-.28 1.19.6 2.17 1.78 2.17 2.13 0 3.77-2.25 3.77-5.5 0-2.87-2.06-4.88-5.01-4.88-3.41 0-5.42 2.56-5.42 5.21 0 1.03.4 2.14.9 2.74.1.12.11.22.08.34l-.33 1.36c-.05.22-.18.27-.41.16-1.5-.7-2.43-2.89-2.43-4.65 0-3.78 2.75-7.26 7.92-7.26 4.16 0 7.39 2.96 7.39 6.92 0 4.13-2.6 7.45-6.21 7.45-1.21 0-2.35-.63-2.74-1.37l-.75 2.84c-.27 1.04-1 2.35-1.49 3.15A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
                )}
              </a>
            );
          })}
        </div>
      );
      break;
    }
    case "theme-site-logo":
      el = w.src ? (
        <div style={{ textAlign: w.align }}>
          <Image src={w.src} alt="Bulbul Bahar" width={w.w || 120} height={60} className="inline-block h-auto" style={{ width: w.w }} unoptimized />
        </div>
      ) : null;
      break;
    default:
      el = w.html ? <div className="wp-rich" dangerouslySetInnerHTML={{ __html: w.html }} /> : null;
  }

  return (
    <div className="wp-w" style={outer}>
      <div style={inner}>{el}</div>
    </div>
  );
}

const justify: Record<string, string> = { "flex-start": "flex-start", center: "center", "flex-end": "flex-end", start: "flex-start", end: "flex-end" };

function Column({ n }: { n: any }) {
  const isMediaOnly = n.kids?.length === 1 && (n.kids[0].t === "image" || n.kids[0].t === "lottie");
  const alignVal = isMediaOnly ? "center" : (justify[n.valign] || "flex-start");
  return (
    <div className="wp-col" style={{ ["--w" as string]: `${n.wPct}%`, ...boxCss(n.box), minHeight: undefined } as React.CSSProperties}>
      <div
        className="wp-col-wrap"
        style={{ ...boxCss(n.wrapBox), justifyContent: alignVal }}
      >
        {n.kids?.map((k: any, i: number) => <Node key={i} n={k} nested />)}
      </div>
    </div>
  );
}

function Section({ n, nested }: { n: any; nested?: boolean }) {
  const Tag = nested ? "div" : "section";
  return (
    <Tag className={nested ? "wp-sec-n" : "wp-sec"} style={boxCss(n.box)}>
      <div className="wp-row" style={{ maxWidth: n.inner ? `${n.inner}px` : undefined, alignItems: n.valign && n.valign !== "normal" ? justify[n.valign] : undefined }}>
        {n.kids?.map((k: any, i: number) => <Node key={i} n={k} nested />)}
      </div>
    </Tag>
  );
}

function Node({ n, nested }: { n: any; nested?: boolean }) {
  if (n.t) return <Widget w={n} />;
  if (n.k === "col") return <Column n={n} />;
  return <Section n={n} nested={nested} />;
}

function cleanTitle(title: string): string {
  return title
    .replace(/^#\d*\s*/, "")
    .split("|")[0]
    .replace(/#\d+.*$/, "")
    .replace(/[-–—]\s*$/, "")
    .trim();
}

export default function WpPage({ data }: { data: WpPageData }) {
  const m = data.rating?.match(/([\d.]+)\/5\s*-\s*\((\d+)/);
  const heroConf = serviceHeroConfigs[data.slug];
  const isService = !!heroConf;
  const pageTitle = cleanTitle(data.title || "");

  // For service pages, skip the initial redundant sections that are already featured in the Hero!
  const renderedSections = isService && heroConf
    ? data.sections.slice(heroConf.skipSections)
    : data.sections;

  return (
    <div className="wp-r bg-white text-slate-800">
      {/* Premium Service Hero Header */}
      {isService && <ServiceHero slug={data.slug} title={data.title} />}

      {/* Main Page Sections */}
      {renderedSections.map((s, i) => (
        <Node key={i} n={s} />
      ))}

      {/* Page Rating */}
      {m && <PageRating score={parseFloat(m[1])} votes={parseInt(m[2], 10)} />}
    </div>
  );
}
