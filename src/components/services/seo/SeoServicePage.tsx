import React from "react";
import Link from "next/link";
import LottiePlayer from "@/components/ui/LottiePlayer";
import PageRating from "@/components/ui/PageRating";
import { SectionHeading } from "@/components/ui/HeadlineHighlight";
import { SerpCard, SxAccordion, SxTabs } from "./SxInteractive";
import "./seo-page.css";

/*
 * Bespoke layout for /seo-service-in-bangladesh.
 * Every word comes from the captured WordPress JSON (same data the live page uses);
 * only the presentation is new.
 */

type Any = any;

function at(data: Any, path: number[]): Any {
  let node: Any = { kids: data.sections };
  for (const i of path) node = node?.kids?.[i];
  return node ?? {};
}
const heading = (w: Any): string => (w.parts ? w.parts.map((p: Any) => p.text).join(" ") : w.html || "");
const strip = (s: string) =>
  s
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;|&rsquo;/g, "’")
    .trim();

/** brand headline: dark text, one blue phrase with the drawn red underline (same as the live site) */
function Title({ w, as = "h2", className = "sx-h2", id }: { w: Any; as?: "h1" | "h2" | "h3"; className?: string; id?: string }) {
  const parts: Any[] = w.parts || [{ hl: false, text: w.html || "" }];
  const hi = parts.findIndex((p) => p.hl);
  const before = (hi < 0 ? parts : parts.slice(0, hi)).map((p) => p.text).join(" ");
  const highlight = hi < 0 ? "" : parts[hi].text;
  const after = hi < 0 ? "" : parts.slice(hi + 1).map((p) => p.text).join(" ");
  return (
    <div id={id}>
      <SectionHeading as={as} before={before} highlight={highlight} after={after} className={className} highlightClassName="sx-hl" />
    </div>
  );
}

function Prose({ html, className = "" }: { html: string; className?: string }) {
  return <div className={`sx-prose ${className}`} dangerouslySetInnerHTML={{ __html: html }} />;
}

function Lottie({ w }: { w: Any }) {
  if (!w?.src) return null;
  return (
    <div className="sx-lottie" style={{ maxWidth: w.w || 460 }}>
      <LottiePlayer animationPath={w.src} autoAspect className="w-full" />
    </div>
  );
}

function OrangeButton({ w, className = "" }: { w: Any; className?: string }) {
  return (
    <Link href={w.href || "/get-a-free-quote"} className={`sx-btn ${className}`}>
      {w.text}
    </Link>
  );
}

/** centred section head: small orange bar, brand headline, optional kicker */
function Head({ id, title, as = "h2", kicker }: { id: string; title: Any; as?: "h2" | "h3"; kicker?: React.ReactNode }) {
  return (
    <header className="sx-head">
      <Title id={id} w={title} as={as} />
      {kicker}
    </header>
  );
}

/** text card + media panel side by side, same height, no dead space */
function Split({
  text,
  media,
  flip = false,
  cols = "7-5",
}: {
  text: React.ReactNode;
  media: React.ReactNode;
  flip?: boolean;
  cols?: "7-5" | "6-6";
}) {
  return (
    <div className={`sx-split sx-cols-${cols} ${flip ? "is-flip" : ""}`}>
      <div className="sx-card sx-split-text">{text}</div>
      <div className="sx-media">{media}</div>
    </div>
  );
}

export default function SeoServicePage({ data }: { data: Any }) {
  const m = String(data.rating || "").match(/([\d.]+)\/5\s*-\s*\((\d+)/);
  const score = m ? parseFloat(m[1]) : 5;
  const votes = m ? parseInt(m[2], 10) : 0;

  /* ---------- content, by position in the original page ---------- */
  const h1 = at(data, [0, 0, 0]);
  const intro = at(data, [0, 0, 1]);
  const heroImg = at(data, [0, 0, 2]);

  const s1h = at(data, [1, 0, 0]);
  const s1text = at(data, [1, 0, 1, 0, 0]);
  const s1lottie = at(data, [1, 0, 1, 1, 0]);
  const orderBtn = at(data, [1, 0, 1, 1, 1]);

  const s2h = at(data, [2, 0, 0]);
  const s2sub = at(data, [2, 0, 1]);
  const s2text = at(data, [2, 0, 2, 0, 0]);
  const s2types = [0, 1, 2].map((i) => at(data, [2, 0, 3, i, 0]));
  const s2text2 = at(data, [2, 0, 5]);
  const s2toggle = at(data, [2, 0, 6, 0, 0]).items?.[0] || {};

  const s3h = at(data, [3, 0, 0]);
  const s3text = at(data, [3, 0, 1, 0, 0]);
  const s3img = at(data, [3, 0, 1, 0, 1]);

  const s4h = at(data, [4, 0, 0]);
  const s4text = at(data, [4, 0, 1, 0, 0]);
  const s4list = at(data, [4, 0, 1, 1, 0]);
  const s4lottie = at(data, [4, 0, 1, 1, 1]);

  const s5h = at(data, [5, 0, 0]);
  const s5text = at(data, [5, 0, 1, 0, 0]);
  const s5tabs = at(data, [5, 0, 1, 0, 1]);
  const s5img = at(data, [5, 0, 1, 0, 2]);
  const s5sub = strip(at(data, [5, 0, 2]).html || "");
  const reasonsL = at(data, [5, 0, 3, 0, 0]).items || [];
  const reasonsR = at(data, [5, 0, 3, 1, 0]).items || [];
  const reasons: Any[] = [];
  for (let i = 0; i < Math.max(reasonsL.length, reasonsR.length); i++) {
    if (reasonsL[i]) reasons.push(reasonsL[i]);
    if (reasonsR[i]) reasons.push(reasonsR[i]);
  }

  const s6h = at(data, [6, 0, 0]);
  const s6text = at(data, [6, 0, 1, 0, 0]);
  const s6lottie = at(data, [6, 0, 1, 1, 0]);

  const s7h = at(data, [7, 0, 0]);
  const s7text = at(data, [7, 0, 1, 0, 0]);
  const s7services = [...(at(data, [7, 0, 2, 0, 0]).items || []), ...(at(data, [7, 0, 2, 1, 0]).items || [])];

  const s8h = at(data, [8, 0, 0]);
  const s8lottie = at(data, [8, 0, 1, 0, 0]);
  const s8text = at(data, [8, 0, 1, 1, 0]);

  const s9h = at(data, [9, 0, 0]);
  const s9text = at(data, [9, 0, 1, 0, 0]);
  const s9lottie = at(data, [9, 0, 1, 1, 0]);

  const s10h = at(data, [10, 0, 0]);
  const s10text = at(data, [10, 0, 1, 0, 0]);

  const s11h = at(data, [11, 0, 0]);
  const steps: string[] = Array.from(String(at(data, [11, 0, 1, 0, 0]).html || "").matchAll(/<p>([\s\S]*?)<\/p>/g))
    .map((x) => strip(x[1]).replace(/^☑️\s*/, ""))
    .filter(Boolean);
  const s11img = at(data, [11, 0, 1, 1, 0]);

  const faqH = at(data, [12, 0, 0]);
  const faqs = [...(at(data, [13, 0, 0]).items || []), ...(at(data, [13, 1, 0]).items || [])];

  const tH = at(data, [14, 0, 0]);
  const testimonials = at(data, [15, 0, 0]).items || [];

  const ctaKicker = at(data, [16, 0, 0]);
  const ctaH = at(data, [16, 0, 1]);
  const ctaText = at(data, [16, 0, 2]);
  const ctaBtn = at(data, [16, 1, 0]);

  return (
    <main className="sx">
      {/* ============ HERO ============ */}
      <section className="sx-hero">
        <div className="sx-wrap sx-hero-grid">
          <div className="sx-hero-copy">
            <Title w={h1} as="h1" className="sx-h1" />
            <Prose html={intro.html} className="sx-hero-intro" />
            <div className="sx-hero-actions">
              <OrangeButton w={orderBtn} />
              <Link href="/portfolio" className="sx-link-quiet">
                Portfolio
              </Link>
            </div>
          </div>
          <SerpCard
            query={heading(h1).toLowerCase()}
            url="bulbulbahar.cloud"
            path="seo-service-in-bangladesh"
            title={data.title}
            description={data.description}
            score={score}
            votes={votes}
          />
        </div>
      </section>

      <div className="sx-strip">
        <div className="sx-wrap">
          <img src={heroImg.src} alt={heroImg.alt} width={heroImg.w} height={heroImg.h} className="sx-strip-img" />
        </div>
      </div>

      {/* ============ WHAT IS ============ */}
      <section className="sx-sec" aria-labelledby="what-is">
        <div className="sx-wrap">
          <Head id="what-is" title={s1h} />
          <Split
            text={<Prose html={s1text.html} />}
            media={
              <>
                <Lottie w={s1lottie} />
                <OrangeButton w={orderBtn} />
              </>
            }
          />
        </div>
      </section>

      {/* ============ IMPROVE ORGANIC RANKING ============ */}
      <section className="sx-sec sx-haze" aria-labelledby="improve">
        <div className="sx-wrap">
          <Head
            id="improve"
            title={s2h}
            kicker={<p className="sx-kicker" dangerouslySetInnerHTML={{ __html: strip(s2sub.html) }} />}
          />
          <div className="sx-card sx-card-wide">
            <Prose html={s2text.html} className="sx-cols-2" />
          </div>

          <div className="sx-types">
            {s2types.map((t: Any, i: number) => {
              const inner = (
                <>
                  <span className="sx-type-icon" dangerouslySetInnerHTML={{ __html: t.icon }} />
                  <span>
                    <h3 className="sx-type-title">{t.title}</h3>
                    {t.href && <span className="sx-type-more">View service</span>}
                  </span>
                </>
              );
              return t.href ? (
                <Link key={i} href={t.href} className="sx-type">
                  {inner}
                </Link>
              ) : (
                <div key={i} className="sx-type">
                  {inner}
                </div>
              );
            })}
          </div>

          <div className="sx-card sx-card-wide sx-gets">
            <Prose html={s2text2.html} className="sx-gets-lead" />
            <div className="sx-gets-list">
              <h3 className="sx-h3">{s2toggle.title}</h3>
              <Prose html={s2toggle.html} className="sx-checks sx-list-2" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ IMPORTANCE ============ */}
      <section className="sx-sec" aria-labelledby="importance">
        <div className="sx-wrap">
          <Head id="importance" title={s3h} />
          <div className="sx-card sx-card-wide">
            <Prose html={s3text.html} className="sx-cols-2 sx-question" />
            <div className="sx-inline-fig">
              <img src={s3img.src} alt={s3img.alt} width={s3img.w} height={s3img.h} />
            </div>
          </div>
        </div>
      </section>

      {/* ============ BENEFITS ============ */}
      <section className="sx-sec sx-haze" aria-labelledby="benefits">
        <div className="sx-wrap">
          <Head id="benefits" title={s4h} />
          <Split
            cols="6-6"
            text={<Prose html={s4text.html} />}
            media={
              <div className="sx-benefit">
                <Prose html={s4list.html} className="sx-checks sx-on-ink sx-big-list" />
                <div className="sx-benefit-lottie">
                  <Lottie w={s4lottie} />
                </div>
              </div>
            }
          />
        </div>
      </section>

      {/* ============ WHAT MAKES US THE BEST ============ */}
      <section className="sx-sec" aria-labelledby="best">
        <div className="sx-wrap">
          <Head id="best" title={s5h} />
          <div className="sx-split sx-cols-6-6">
            <div className="sx-card sx-split-text">
              <Prose html={s5text.html} />
            </div>
            <div className="sx-card sx-split-text">
              <SxTabs items={s5tabs.items || []} />
            </div>
          </div>
          <figure className="sx-figure">
            <img src={s5img.src} alt={s5img.alt} width={s5img.w} height={s5img.h} />
          </figure>

          <h3 className="sx-sub">{s5sub}</h3>
          <div className="sx-reasons">
            {reasons.map((r: Any, i: number) => (
              <div key={i} className="sx-reason">
                <h4>{r.title}</h4>
                <Prose html={`<p>${r.html}</p>`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY HIRE ============ */}
      <section className="sx-sec sx-haze" aria-labelledby="why-hire">
        <div className="sx-wrap">
          <Head id="why-hire" as="h3" title={s6h} />
          <Split text={<Prose html={s6text.html} />} media={<Lottie w={s6lottie} />} />
        </div>
      </section>

      {/* ============ WHAT WE OFFER ============ */}
      <section className="sx-sec" aria-labelledby="offer">
        <div className="sx-wrap">
          <Head id="offer" title={s7h} />
          <div className="sx-card sx-card-wide">
            <Prose html={s7text.html} className="sx-cols-2" />
          </div>
          <div className="sx-services">
            <SxAccordion items={s7services.slice(0, Math.ceil(s7services.length / 2))} />
            <SxAccordion items={s7services.slice(Math.ceil(s7services.length / 2))} />
          </div>
        </div>
      </section>

      {/* ============ HOW OUR TEAM HELPS ============ */}
      <section className="sx-sec sx-haze" aria-labelledby="team">
        <div className="sx-wrap">
          <Head id="team" title={s8h} />
          <Split flip text={<Prose html={s8text.html} />} media={<Lottie w={s8lottie} />} />
        </div>
      </section>

      {/* ============ COMPLETE SEO ============ */}
      <section className="sx-sec" aria-labelledby="complete">
        <div className="sx-wrap">
          <Head id="complete" title={s9h} />
          <Split text={<Prose html={s9text.html} className="sx-lines" />} media={<Lottie w={s9lottie} />} />
        </div>
      </section>

      {/* ============ WHITE HAT ============ */}
      <section className="sx-sec sx-haze" aria-labelledby="white-hat">
        <div className="sx-wrap">
          <Head id="white-hat" title={s10h} />
          <div className="sx-card sx-card-wide">
            <Prose html={s10text.html} className="sx-cols-2 sx-hat" />
          </div>
        </div>
      </section>

      {/* ============ STRATEGY (a real sequence → numbered) ============ */}
      <section className="sx-sec" aria-labelledby="strategy">
        <div className="sx-wrap">
          <Head id="strategy" title={s11h} />
          <div className="sx-split sx-cols-5-7 is-flip-text">
            <div className="sx-media sx-media-photo">
              <img src={s11img.src} alt={s11img.alt} width={s11img.w} height={s11img.h} />
            </div>
            <div className="sx-card sx-split-text">
              <ol className="sx-steps">
                {steps.map((s, i) => (
                  <li key={i}>
                    <span className="sx-step-n">{i + 1}</span>
                    <span className="sx-step-t">{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="sx-sec sx-haze" aria-labelledby="faq">
        <div className="sx-wrap">
          <Head id="faq" title={faqH} />
          <div className="sx-services">
            <SxAccordion items={faqs.slice(0, 4)} />
            <SxAccordion items={faqs.slice(4)} />
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="sx-sec" aria-labelledby="clients">
        <div className="sx-wrap">
          <Head id="clients" title={tH} />
          <div className="sx-quotes">
            {testimonials.map((t: Any, i: number) => (
              <figure key={i} className="sx-quote">
                <blockquote>{t.content}</blockquote>
                <figcaption>
                  <img src={t.image || "/images/about/client-user.webp"} alt={t.name} width={44} height={44} />
                  <span>
                    <strong>{t.name}</strong>
                    <span className="sx-stars" aria-label="5 out of 5 stars">★★★★★</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="sx-cta">
        <div className="sx-wrap sx-cta-grid">
          <div>
            <p className="sx-cta-kicker">{ctaKicker.html}</p>
            <h2 className="sx-cta-h">{ctaH.html}</h2>
            <Prose html={ctaText.html} className="sx-on-ink" />
          </div>
          <OrangeButton w={ctaBtn} className="sx-btn-lg" />
        </div>
      </section>

      {m && <PageRating score={score} votes={votes} />}
    </main>
  );
}
