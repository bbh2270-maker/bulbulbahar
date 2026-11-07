import type { CSSProperties } from "react";

/* Helpers that turn the computed styles captured from the WordPress/Elementor
 * pages into React inline styles. */

export interface TextStyle {
  ff?: string;
  fs?: string;
  fw?: string;
  lh?: string;
  color?: string;
  align?: string;
  tt?: string;
  ls?: string;
  fst?: string;
}

export interface BoxStyle {
  bg?: string;
  bgImg?: string;
  bgSize?: string;
  bgPos?: string;
  pad?: string;
  margin?: string;
  radius?: string;
  shadow?: string;
  border?: string;
  minH?: string;
}

const family = (ff?: string) =>
  ff ? (ff.toLowerCase().includes("montserrat") ? '"Montserrat", sans-serif' : `"${ff}", "Open Sans", sans-serif`) : undefined;

export function textCss(s?: TextStyle, withSize = true): CSSProperties {
  if (!s) return {};
  return {
    fontFamily: family(s.ff),
    ...(withSize ? { fontSize: s.fs, lineHeight: s.lh } : {}),
    fontWeight: s.fw as CSSProperties["fontWeight"],
    color: s.color,
    textAlign: s.align as CSSProperties["textAlign"],
    textTransform: s.tt as CSSProperties["textTransform"],
    letterSpacing: s.ls,
    fontStyle: s.fst as CSSProperties["fontStyle"],
  };
}

/** heading text: font-size goes through a CSS variable so mobile can cap it */
export function headingCss(s?: TextStyle): CSSProperties {
  return { ...textCss(s, false), lineHeight: s?.lh, ["--fs" as string]: s?.fs } as CSSProperties;
}

function borderCss(b?: string): CSSProperties {
  if (!b) return {};
  const [w, style, top, bottom] = b.split("|");
  const [t, r, bt, l] = w.split(" ");
  if (style === "none") return {};
  return {
    borderStyle: style as CSSProperties["borderStyle"],
    borderTopWidth: t,
    borderRightWidth: r,
    borderBottomWidth: bt,
    borderLeftWidth: l,
    borderTopColor: top,
    borderLeftColor: top,
    borderRightColor: top,
    borderBottomColor: bottom,
  };
}

export function boxCss(b?: BoxStyle): CSSProperties {
  if (!b) return {};
  const img = b.bgImg
    ? b.bgImg.startsWith("linear") || b.bgImg.startsWith("radial")
      ? b.bgImg
      : `url("${b.bgImg}")`
    : undefined;
  return {
    backgroundColor: b.bg,
    backgroundImage: img,
    backgroundSize: b.bgSize,
    backgroundPosition: b.bgPos,
    padding: b.pad,
    margin: b.margin,
    borderRadius: b.radius,
    boxShadow: b.shadow,
    minHeight: b.minH && b.minH !== "1px" ? b.minH : undefined,
    ...borderCss(b.border),
  };
}
