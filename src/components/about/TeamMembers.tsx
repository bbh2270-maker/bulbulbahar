import React from "react";
import Image from "next/image";
import { FacebookIcon, TwitterIcon, InstagramIcon } from "@/components/ui/SocialIcons";

interface Member {
  name: string;
  role: string;
  image: string;
  bio: string;
  links: { facebook?: string; twitter?: string; instagram?: string };
}

const members: Member[] = [
  {
    name: "Eng. Bulbul Bahar",
    role: "CEO & Founder",
    image: "/images/about/bulbul-bahar.webp",
    bio: "Bulbul Bahar is The Chief Executing Officer on Bulbulbahar.com. Who Leads The Team and Making Plan For All Projects.",
    links: {
      facebook: "https://web.facebook.com/info.CreativeNiloy/",
      twitter: "https://twitter.com/CreativeNiloy",
      instagram: "https://www.instagram.com/CreativeNiloybd/",
    },
  },
  {
    name: "Mehedi Menafa",
    role: "Head Of Consultant",
    image: "/images/about/mehedi-menafa.webp",
    bio: "Mehedi Menafa Is a Successfull Freelancer in Bd, He is an Honorable Member of Presidium Comitee in E-CAB. He Provide Our Clients SEO Consultancy Service.",
    links: {
      facebook: "https://www.facebook.com/mehedidamenafa",
      twitter: "https://twitter.com/mehedi_menafa",
      instagram: "https://www.instagram.com/mehedi_menafa/",
    },
  },
  {
    name: "Md Maruf",
    role: "SEO Project Manager",
    image: "/images/about/md-maruf.webp",
    bio: "Maruf is The Most Experienced SEO Expert in Bangladesh Who Works Professionally in Upwork as a Freelancer. Also, Work Full Time in Creativeniloy.com as a Creative Project Manager",
    links: { facebook: "https://www.facebook.com/maruf.magician" },
  },
  {
    name: "Md Kawsar Alam",
    role: "Android Apps Developer",
    image: "/images/about/md-kawsar-alam.webp",
    bio: "Kawsar Is the Best Android Apps Developer in Bd, Who design Quality apps with UI & UX Design",
    links: {
      facebook: "https://www.facebook.com/kawsar1702",
      twitter: "https://twitter.com/kawsar1702",
      instagram: "https://www.instagram.com/kawsar1702",
    },
  },
  {
    name: "Nahidul Islam Arafat",
    role: "Creative Web Designer",
    image: "/images/about/nahidul-islam-arafat.webp",
    bio: "Nahid Is a Full Stack Web Developer who Expert with Front End & Back End Web Design. His Design Quality Is Really Amazing.",
    links: {
      facebook: "https://www.facebook.com/nahidulislamarafatbd",
      twitter: "https://twitter.com/NahidulArafat",
    },
  },
  {
    name: "Gorpol.es",
    role: "Senior SEO Specialist",
    image: "/images/about/gorpol-es.webp",
    bio: "Gorpol.es Lives in BarCelona, and Working With Creativeniloy.com From 2 Years. He Is Really an Experienced SEO & Digital Marketing Expert.",
    links: {
      facebook: "https://www.facebook.com/Gorpol.es/",
      twitter: "https://twitter.com/gorpol",
      instagram: "https://www.instagram.com/gorpol.es/",
    },
  },
];

/** "Subtle hover team member effect" cards from the original page */
export default function TeamMembers() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((m) => (
        <div
          key={m.name}
          className="group bg-white rounded-[25px] m-[25px] px-[25px] pt-[35px] text-center"
          style={{ boxShadow: "0 0 30px 0 rgba(0, 15, 35, 0.05)" }}
        >
          <div className="relative overflow-hidden mb-[23px] mx-auto max-w-[280px] aspect-square">
            <Image src={m.image} alt={m.name} fill className="object-cover" unoptimized />
            {/* hover overlay with bio + social links */}
            <div className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center px-[35px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-[13px] leading-[23.4px] text-[#5D7280] mb-[20px]">{m.bio}</p>
              <div className="flex items-center gap-[14px] text-[#35383C]">
                {m.links.facebook && (
                  <a href={m.links.facebook} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on Facebook`} className="hover:text-[#F99517]">
                    <FacebookIcon className="w-[16px] h-[16px]" />
                  </a>
                )}
                {m.links.twitter && (
                  <a href={m.links.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on Twitter`} className="hover:text-[#F99517]">
                    <TwitterIcon className="w-[16px] h-[16px]" />
                  </a>
                )}
                {m.links.instagram && (
                  <a href={m.links.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on Instagram`} className="hover:text-[#F99517]">
                    <InstagramIcon className="w-[16px] h-[16px]" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <h4 className="text-[15px] leading-[18px] font-bold !text-[#35383C] capitalize mb-[8px]">{m.name}</h4>
          <span className="block text-[12px] leading-[22px] text-[#6D7272] pb-[30px]">{m.role}</span>
        </div>
      ))}
    </div>
  );
}
