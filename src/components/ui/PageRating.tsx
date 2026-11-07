import React from "react";

/** Star rating line (kk Star Ratings on the WordPress site) shown above the footer */
export default function PageRating({ score, votes }: { score: number; votes: number }) {
  return (
    <div
      className="bg-white pt-[30px] pb-[14px] flex items-center justify-center gap-[10px] text-[#5D7280] text-[16px]"
      aria-label={`Rated ${score} out of 5 from ${votes} votes`}
    >
      <div className="flex items-center gap-[2px]">
        {[0, 1, 2, 3, 4].map((i) => {
          const fill = Math.max(0, Math.min(1, score - i));
          return (
            <span key={i} className="relative inline-block w-[22px] h-[22px]">
              <svg viewBox="0 0 24 24" className="absolute inset-0 w-full h-full" fill="none" stroke="#FCB214" strokeWidth="1.5">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
              </svg>
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="#FCB214">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                </svg>
              </span>
            </span>
          );
        })}
      </div>
      <span>
        {score}/5 - ({votes} votes)
      </span>
    </div>
  );
}
