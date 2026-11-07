"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/HeadlineHighlight";

export interface TestimonialItem {
  name: string;
  image: string;
  content: string;
}

export default function TestimonialsSection({
  items,
  heading = "What My Clients Say?",
  headingAs = "h2",
  bare = false,
}: {
  items?: TestimonialItem[];
  heading?: string;
  headingAs?: "h2" | "h3" | "h4";
  /** render only the carousel (no section padding / heading) */
  bare?: boolean;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const defaultTestimonials: TestimonialItem[] = [
    {
      name: "Mazed Sarker",
      image: "/images/mazed-sarker.png",
      content:
        "Bulbul Bahar is a true SEO expert in Bangladesh I have worked with. I have been struggling to do effective online marketing. Then I looked up on Google and found him. Once I started working with him, I felt a big burden that got off my chest. He is highly skilled and knows what he is doing. He consulted with me at the very first, discussing the problems that were on my website and fixed them one by one. His methods are very much unique and legal from what I have seen. In one word, he is brilliant.",
    },
    {
      name: "Ruhul Amin",
      image: "/images/ruhul-amin.png",
      content:
        "My website was not ranking in Google for a very long time. I have tried a lot of SEO companies in Bangladesh for this before I met Creative Niloy. Once I found him it was all different. He checked my website and instantly came up with a plan. I was shocked to see how experienced this guy is. I mean within a matter of a few hours he provided me the solution for my website ranking problem and started working for me. And in 2 months my site was on the first page. I am definitely going to this guy with my future websites. And I suggest you all should too!",
    },
    {
      name: "Brian Doe",
      image: "/images/brian-doe.png",
      content:
        "If you want more visitors to your site, I suggest you instantly hire Bulbul Bahar. This guy has techniques that no other SEO expert in Bangladesh has I can definitely assure you. My website hasn’t gotten any visitors for a long time and the condition of my site was going for a downfall. The rank was falling down every week. This guy showed up after my search and surprised me with his quick thinking. Once I saw the rank going up, my trust in this guy started going up as well. And now my site has traffic like never before and my business is doing very well thanks to this expert.",
    },
    {
      name: "Harunur Roshid",
      image: "/images/harunur-roshid.jpg",
      content:
        "The site is in the TOP-10 by a large number of requests. The visibility of the site is good, the traffic is growing - it makes me glad that these are not just indicators, but work to increase real calls through the site ... There is an understanding that the final sales, the appeal of clients for services to our Medical Center is the result of our joint efforts.",
    },
    {
      name: "Jinia Islam",
      image: "/images/jinia.jpg",
      content:
        "With each new order, I am more and more convinced of your professionalism. The work is done competently and individually, constantly keeping abreast of events, which is very pleasant. Thank you very much for the work done. I Highly Recommended Creative Niloy as the SEO Expert in Bangladesh.",
    },
    {
      name: "Jean Sewell",
      image: "/images/mushfiqul-shenron.jpg",
      content:
        "From the first touch it is clear that I am working with professionals. I ordered Site Optimization: an audit, a list of identified problems, their solution within the tariff and recommendations for further optimization, clearly, quickly, within the specified time frame. It is too early to evaluate the increase in sales, applications, time will tell, we must first implement everything. I am planning further cooperation. Thank you.",
    },
  ];

  const testimonials = items ?? defaultTestimonials;
  const total = testimonials.length;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Autoplay every 4.5 seconds with pause on hover
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, total]);

  // Determine indices for 3D carousel
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  const Card = ({ idx, active }: { idx: number; active: boolean }) => {
    const t = testimonials[idx];
    return (
      <div
        className={`bg-white text-center transition-all duration-500 ${
          active ? "px-[22px] pt-[22px] pb-[50px]" : "px-[18px] pt-[18px] pb-[40px]"
        }`}
        style={{ boxShadow: "0 5px 25px rgba(0, 0, 0, 0.12)" }}
      >
        <div
          className={`rounded-full overflow-hidden mx-auto mb-[14px] border-[3px] border-[#EEEEEE] ${
            active ? "w-[70px] h-[70px]" : "w-[50px] h-[50px]"
          }`}
        >
          <Image src={t.image} alt={t.name} width={70} height={70} className="w-full h-full object-cover" unoptimized />
        </div>
        <p className={`text-[#555555] ${active ? "text-[14px] leading-[24px]" : "text-[12px] leading-[20px]"}`}>
          {t.content}
        </p>
        <div className="flex items-center justify-center gap-[3px] mt-[14px]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-[15px] h-[15px] fill-[#FFB400] text-[#FFB400]" />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      className={bare ? "overflow-hidden pt-[50px] pb-[20px]" : "bg-white pt-[30px] pb-[60px] overflow-hidden"}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1140px] mx-auto px-4">
        {!bare && <SectionHeading as={headingAs} highlight={heading} className="mb-[70px]" />}

        {/* 3-up carousel: faded side cards, raised centre card */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.25fr_1fr] gap-[40px] items-center max-w-[1000px] mx-auto">
          <button
            type="button"
            onClick={prev}
            className="hidden lg:block relative opacity-40 hover:opacity-70 transition-opacity text-left cursor-pointer"
            aria-label="Previous testimonial"
          >
            <Card idx={prevIndex} active={false} />
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-[17px] bg-[#872DFF] text-white text-[12px] rounded-[5px] px-[28px] py-[7px] whitespace-nowrap">
              {testimonials[prevIndex].name}
            </span>
          </button>

          <div className="relative z-10 lg:-mt-[40px]">
            <Card idx={currentIndex} active />
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-[20px] bg-[#872DFF] text-white text-[14px] rounded-[5px] px-[35px] py-[9px] whitespace-nowrap shadow-md">
              {testimonials[currentIndex].name}
            </span>
          </div>

          <button
            type="button"
            onClick={next}
            className="hidden lg:block relative opacity-40 hover:opacity-70 transition-opacity text-left cursor-pointer"
            aria-label="Next testimonial"
          >
            <Card idx={nextIndex} active={false} />
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-[17px] bg-[#872DFF] text-white text-[12px] rounded-[5px] px-[28px] py-[7px] whitespace-nowrap">
              {testimonials[nextIndex].name}
            </span>
          </button>
        </div>

        {/* Owl dots */}
        <div className="flex items-center justify-center gap-[10px] mt-[80px]">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                currentIndex === i ? "w-[14px] h-[14px] bg-[#C4C4CC]" : "w-[6px] h-[6px] bg-[#C4C4CC] hover:bg-gray-500"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
