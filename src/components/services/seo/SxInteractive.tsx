"use client";

import React, { useEffect, useState } from "react";

/* ------------------------------------------------------------------ */
/* Search-result hero: types the query once, then reveals result #1    */
/* ------------------------------------------------------------------ */
export function SerpCard({
  query,
  url,
  path,
  title,
  description,
  score,
  votes,
}: {
  query: string;
  url: string;
  path: string;
  title: string;
  description: string;
  score: number;
  votes: number;
}) {
  const [typed, setTyped] = useState(query);
  const [done, setDone] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    setTyped("");
    setDone(false);
    let i = 0;
    let t: ReturnType<typeof setTimeout>;
    const step = () => {
      i += 1;
      setTyped(query.slice(0, i));
      if (i < query.length) t = setTimeout(step, 55 + Math.random() * 45);
      else t = setTimeout(() => setDone(true), 350);
    };
    t = setTimeout(step, 500);
    return () => clearTimeout(t);
  }, [query]);

  return (
    <div className="sx-serp" aria-label={`Search result for ${query}`}>
      <div className="sx-serp-bar">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <span className="sx-serp-q">
          {typed}
          <span className={`sx-caret ${done ? "is-done" : ""}`} aria-hidden="true" />
        </span>
      </div>

      <div className={`sx-serp-results ${done ? "is-in" : ""}`}>
        <div className="sx-serp-top">
          <span className="sx-serp-pos">Position 1</span>
          <div className="sx-serp-site">
            <span className="sx-serp-fav">
              <img src="/images/logo.png?v=2" alt="" width={18} height={18} />
            </span>
            <span>
              <span className="sx-serp-domain">{url}</span>
              <span className="sx-serp-path">
                https://{url} › {path}
              </span>
            </span>
          </div>
          <p className="sx-serp-title">{title}</p>
          <p className="sx-serp-desc">{description}</p>
          <p className="sx-serp-rating">
            <span className="sx-stars" aria-hidden="true">★★★★★</span> Rating: {score}/5 · {votes} votes
          </p>
        </div>
        {[0, 1, 2].map((i) => (
          <div key={i} className="sx-serp-ghost" aria-hidden="true">
            <span style={{ width: "34%" }} />
            <span style={{ width: `${78 - i * 9}%` }} />
            <span style={{ width: `${92 - i * 6}%` }} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Accordion: rows separated by rules, content stays in the DOM        */
/* ------------------------------------------------------------------ */
type AccItem = { title: string; html: string };

export function SxAccordion({ items, open = -1, tone = "light" }: { items: AccItem[]; open?: number; tone?: "light" | "dark" }) {
  const [active, setActive] = useState<number>(open);
  return (
    <div className={`sx-acc ${tone === "dark" ? "is-dark" : ""}`}>
      {items.map((it, i) => {
        const isOpen = active === i;
        const id = `sx-acc-${i}-${it.title.length}`;
        return (
          <div key={i} className={`sx-acc-item ${isOpen ? "is-open" : ""}`}>
            <h3 className="sx-acc-h">
              <button type="button" aria-expanded={isOpen} aria-controls={id} onClick={() => setActive(isOpen ? -1 : i)}>
                <span>{it.title}</span>
                <span className="sx-acc-icon" aria-hidden="true" />
              </button>
            </h3>
            <div id={id} className="sx-acc-panel" role="region">
              <div className="sx-acc-inner">
                <div className="sx-prose" dangerouslySetInnerHTML={{ __html: it.html }} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Tabs: underline tabs, keyboard reachable                            */
/* ------------------------------------------------------------------ */
export function SxTabs({ items }: { items: AccItem[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="sx-tabs">
      <div className="sx-tabs-list" role="tablist">
        {items.map((it, i) => (
          <button
            key={i}
            role="tab"
            type="button"
            aria-selected={active === i}
            className={active === i ? "is-active" : ""}
            onClick={() => setActive(i)}
          >
            {it.title}
          </button>
        ))}
      </div>
      {items.map((it, i) => (
        <div key={i} role="tabpanel" hidden={active !== i} className="sx-tabs-panel">
          <div className="sx-prose sx-checks" dangerouslySetInnerHTML={{ __html: it.html }} />
        </div>
      ))}
    </div>
  );
}
