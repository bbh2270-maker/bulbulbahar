"use client";

import React, { useEffect, useRef } from "react";

interface LottiePlayerProps {
  animationData?: any;
  animationPath?: string;
  className?: string;
  loop?: boolean;
  /** size the box from the animation's own width/height (like Elementor) */
  autoAspect?: boolean;
}

export default function LottiePlayer({
  animationData,
  animationPath,
  className = "w-full h-full min-h-[350px]",
  loop = true,
  autoAspect = false,
}: LottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let anim: any;
    let isCancelled = false;

    async function load() {
      try {
        const lottie = (await import("lottie-web")).default;
        if (isCancelled || !containerRef.current) return;

        let data = animationData;
        if (!data && animationPath) {
          const res = await fetch(animationPath);
          data = await res.json();
        }

        if (isCancelled || !containerRef.current || !data) return;

        // Clear any previous svg
        containerRef.current.innerHTML = "";
        if (autoAspect && data.w && data.h) {
          containerRef.current.style.aspectRatio = `${data.w} / ${data.h}`;
          containerRef.current.style.minHeight = "0px";
          containerRef.current.style.height = "auto";
        }

        anim = lottie.loadAnimation({
          container: containerRef.current,
          renderer: "svg",
          loop: loop,
          autoplay: true,
          animationData: data,
        });
      } catch (err) {
        console.error("Lottie load error:", err);
      }
    }

    load();

    return () => {
      isCancelled = true;
      if (anim) {
        anim.destroy();
      }
    };
  }, [animationData, animationPath, loop, autoAspect]);

  return (
    <div
      ref={containerRef}
      className={`flex items-center justify-center overflow-hidden ${className}`}
      style={autoAspect ? { width: "100%", aspectRatio: "1 / 1" } : { width: "100%", height: "100%", minHeight: "350px" }}
    />
  );
}
