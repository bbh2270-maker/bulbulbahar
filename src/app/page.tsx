import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  BadgeDollarSign,
  Monitor,
  SquareCheck,
  Pencil,
  MapPin,
  Sparkles,
  CircleCheck,
} from "lucide-react";
import StatsSection from "@/components/home/StatsSection";
import SkillBars from "@/components/home/SkillBars";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQAccordion from "@/components/home/FAQAccordion";
import ServiceTabs from "@/components/home/ServiceTabs";
import InfoAccordion from "@/components/home/InfoAccordion";
import ContactForm from "@/components/ui/ContactForm";
import { SectionHeading } from "@/components/ui/HeadlineHighlight";
import LottiePlayer from "@/components/ui/LottiePlayer";
import { YoutubeIcon } from "@/components/ui/SocialIcons";
import WorkTogether from "@/components/home/WorkTogether";
import PageRating from "@/components/ui/PageRating";

/* Layout notes
 * Every value below was measured from the live WordPress/Elementor page
 * (https://bulbulbahar.cloud) at 1366px width: 1140px container, Montserrat 800
 * headings, Open Sans 15px/1.857 body, #e05414 links, #F99517 accents.
 */

const topServices = [
  {
    icon: Search,
    title: "SEO Service in Bd",
    text: "I have been Ranking websites in search engines for over 8 years. I provide maximum results for each client and do more than SEO Service in BD.",
    href: "/seo-service-in-bangladesh",
  },
  {
    icon: BadgeDollarSign,
    title: "SEO Consultancy Service",
    text: "Is the site not coming out in search? No visitors? Loading slowly?I know what to do! I am here to Give You the SEO Consultancy Service in Bd",
    href: "/contact",
  },
  {
    icon: Monitor,
    title: "SEO Training in Bd",
    text: "If You are Looking for Quality SEO Training in Bd, Creative Niloy can be the best choice for you. I have successfully completed 60+ Batches and 900+ students are working.",
    href: "/seo-training-in-bangladesh",
  },
];

const serviceTypes = [
  { name: "Complete SEO Service", href: "/seo-service-in-bangladesh", icon: SquareCheck },
  { name: "Content Writing Service", href: "/content-writing-service", icon: Pencil },
  { name: "Local SEO Service", href: "/local-seo-service-in-bangladesh", icon: MapPin },
  { name: "YouTube Ranking", href: "/youtube-seo-service", icon: YoutubeIcon },
  { name: "Ai Video Creation", href: "/services", icon: Sparkles },
  { name: "Web Design Service", href: "/web-design-service-in-bangladesh", icon: Monitor },
];

const strategies = [
  {
    img: "/images/seo-consulting.png",
    title: "SEO Consulting",
    text: "Professional hourly advice from our SEO experts & Consulting on the withdrawal from sanctions, on geo-strategy, and any other issues.",
  },
  {
    img: "/images/seo-data-analysis.png",
    title: "Data Analysis",
    text: "A comprehensive free analysis of sites for a number of important indicators for promoting. It will be useful for both SEO optimizers and website owners.",
  },
  {
    img: "/images/seo-strategies.png",
    title: "SEO Strategy Development",
    text: "SEO strategy is a plan consisting of tasks, the solution of which leads to the designated goal of ranking in 1st Page of Google",
  },
  {
    img: "/images/onpage-seo.png",
    title: "On-Page Optimizations",
    text: "Search engines use many factors to rank a website. onpage optimization is one of the ranking factors in order to improve your position in search results.",
  },
  {
    img: "/images/technical-seo.png",
    title: "Technical SEO",
    text: "The main areas of SEO work: Work on the site (content, internal linking, architecture). Work on increasing the popularity of the site (reviews, references, external links).",
  },
  {
    img: "/images/offpage-seo.png",
    title: "Off-Page Optimization",
    text: "Off-page SEO, on the other hand, helps you attract these hordes of visitors and potential customers. Off-Page SEO is an integral part of your SEO strategy.",
  },
];

const projects = [
  { img: "/images/peoplentech.png", title: "Website Ranking Project", text: "Rank in Goolge 1st Page for 10 keywords" },
  { img: "/images/aiveera.png", title: "Local SEO Service", text: "Rank in Goolge 1st Page for 15 keywords" },
  { img: "/images/uap.png", title: "Ai Driven Meta Ads", text: "Create & Manage Facebook Ads" },
];

function CheckItem({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <p className="mb-[14px]">
      <span className="inline-flex align-[-3px] mr-[6px] w-[16px] h-[16px] rounded-[3px] bg-[#3B88C3] text-white items-center justify-center">
        <svg viewBox="0 0 16 16" className="w-[12px] h-[12px]" fill="none" stroke="currentColor" strokeWidth="2.6">
          <path d="M3 8.5l3 3 7-7" />
        </svg>
      </span>
      <strong className="text-[#3c4a54]">{title}</strong> {children}
    </p>
  );
}

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* ==================== HERO ==================== */}
      <section className="pt-[70px]">
        <div className="max-w-[1140px] mx-auto px-4 xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-[54%_46%] items-center">
            <div className="pb-[12px] lg:pr-[20px]">
              <h5 className="text-[22px] sm:text-[25px] leading-[30px] font-extrabold !text-[#060505] capitalize mb-[20px]">
                Howdy!! It&apos;s Bulbul Bahar
              </h5>
              <h1 className="text-[28px] sm:text-[35px] leading-[1.4] font-extrabold capitalize">
                Best SEO Expert in Bangladesh
              </h1>
              <div className="elementor-divider-separator my-[45px]" />

              <div className="wp-text">
                <p>
                  Welcome to the website of the <strong>Best SEO expert in Bangladesh</strong>. I am Bulbul Bahar, a
                  Professional Ai Driven SEO specialist in Bangladesh with certification by{" "}
                  <a href="https://moz.com/training" target="_blank" rel="noopener noreferrer">
                    Moz Academy
                  </a>
                  , Hubspot Academy, Google Analytics &amp; Google{" "}
                  <a href="https://skillshop.docebosaas.com/learn" target="_blank" rel="noopener noreferrer">
                    Ads Fundamentals
                  </a>
                  . I have been working as an SEO Expert in Bangladesh for a long time and now providing the best SEO
                  Service in Bangladesh. With 8 years+ demonstrated experience in SEO, I have worked in the marketing and
                  advertising industry for several years, and I continue to learn new things every day. If you check out
                  the SEO expert profile in Bangladesh, you will see a lot of SEO specialists in Bangladesh, and you will
                  find me there as well. But my services are way better and unique than the rest of the SEO Experts in
                  Bangladesh. <strong>Call 01710424241</strong> or{" "}
                  <Link href="/get-a-free-quote" className="!text-[#020202] font-bold">
                    Hire Me Now!!
                  </Link>
                </p>
              </div>

              {/* Upwork OR Fiverr dual button (EAE Dual Button) */}
              <div
                className="relative inline-flex mt-[40px] rounded-[5px]"
                style={{ boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)" }}
              >
                <a
                  href="https://www.upwork.com/freelancers/~01ffbd32bfcca4750e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[150px] h-[41px] flex items-center justify-center text-[15px] font-bold !text-white rounded-l-[5px] border border-[#0c0c0c] hover:opacity-90 transition-opacity"
                  style={{ backgroundImage: "linear-gradient(180deg, #BB2929 0%, #F2295B 100%)" }}
                >
                  Upwork
                </a>
                <span className="absolute left-1/2 top-0 -translate-x-1/2 w-[40px] h-[40px] rounded-full bg-[#FAFAF8] text-[#444] text-[14px] font-bold flex items-center justify-center z-10 shadow-[0_0_0_6px_rgba(255,255,255,0.2)]">
                  OR
                </span>
                <a
                  href="https://www.fiverr.com/rankmaster10?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[150px] h-[41px] flex items-center justify-center text-[15px] font-bold !text-white bg-[#F99517] rounded-r-[5px] border border-[#0c0c0c] hover:opacity-90 transition-opacity"
                >
                  Fiverr
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end self-end mt-10 lg:mt-0">
              <Image
                src="/images/hero-bulbul.png"
                alt="Best SEO Expert in Bangladesh - Bulbul Bahar"
                width={456}
                height={581}
                className="w-full max-w-[456px] h-auto block"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== A BRIEF ABOUT ME + HIRE ME ==================== */}
      <section className="bg-[rgba(221,236,236,0.28)] py-[60px]">
        <div className="max-w-[1140px] mx-auto px-4 xl:px-0">
          <SectionHeading highlight="A Brief About Me" className="mb-[40px]" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] items-start">
            <div className="wp-text [&_p]:!text-[#5D7280] [&_strong]:text-[#3c4a54]">
              <p>
                In my entire career journey in SEO, I have worked in a well-reputed{" "}
                <strong>SEO service company in Bangladesh</strong> and have gained good experience from them. With all
                the experience, I decided to open my own SEO Company in Bangladesh.
              </p>
              <p>
                I have been working as an <strong>SEO Expert in Bangladesh</strong> for 8 years now. Not only have I
                worked in companies to provide my SEO service in Bangladesh, but I was also an SEO trainer in Bangladesh.
                I provided SEO training in Bangladesh in various SEO Training centers in Bangladesh. My SEO expert profile
                in Bangladesh was vastly popular among all the <strong>SEO companies in Bangladesh</strong>. As an{" "}
                <Link href="/services">SEO service provider in Bangladesh</Link>, it is very important to know and have
                all the skills that an SEO expert should carry in their SEO expert profile.
              </p>
              <p>
                My journey as an <strong>SEO expert in Bangladesh</strong> began when I was a teenager. I wanted to be a
                freelancer and therefore I started doing research on which path should I take. Then, after thorough
                research, it was clear to me that SEO has the most value in the sector, as it is very important. SEO is
                very important for businesses. And thus, I wanted to become an SEO expert in Bangladesh, providing the{" "}
                <Link href="/about">best SEO service in Dhaka</Link> for the business that seeks it. Now I can claim
                myself as the top SEO specialist in Bangladesh.
              </p>
            </div>

            <div className="pt-[6px]">
              <SkillBars />
            </div>
          </div>

          <SectionHeading
            before="Hire me as"
            highlight="an SEO Expert"
            after="in Bangladesh"
            className="mt-[70px] mb-[40px]"
          />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-[40px] items-start">
            <div
              className="bg-white rounded-[15px] px-[16px] py-[20px] wp-text text-[14px] leading-[26px] [&_p]:!text-[#5D7280] [&_strong]:text-[#3c4a54]"
              style={{ boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.08)" }}
            >
              <p>
                If You are Looking for an SEO Expert in Bangladesh For Rank Your Website on Google&apos;s Top, and Trying
                to Grow Your Startup Business, You Must Know SEO Strategies and Basic{" "}
                <a href="https://backlinko.com/google-ranking-factors" target="_blank" rel="noopener noreferrer">
                  Ranking Factors Of Google
                </a>
                . Then You Have to follow these ranking factors for a better Rank. In today&apos;s world, millions of new
                websites or organizations are being born every day. At the same time, an invisible conflict is emerging
                between them. Fight to get your website up and running on Google, Facebook, or online platforms. And to
                win this battle, one or more SEO Experts from each website or organization are needed. There are many
                freelancers that claim themselves to be an SEO expert in Bangladesh. But none of them actually even have
                the basic knowledge of what SEO is and how to provide any SEO service in Bangladesh. Taking SEO services
                from freelancers with such an SEO expert profile will be a big mistake for your business. This is why I
                decided to become a local SEO expert in Bangladesh and help those looking for this SEO service in
                Bangladesh. Apart from SEO service in Bangladesh, I also provide other services that people or businesses
                seek. I also offer services like{" "}
                <Link href="/content-writing-service">best content writing services</Link>, Ai Video Creation services,
                web design, and development services,{" "}
                <Link href="/local-seo-service-in-bangladesh">local SEO services</Link>, e-commerce SEO services, and
                others that require any online marketing.
              </p>
              <p>
                Now I am giving SEO Service in Bangladesh with my Experienced Team members and bringing 100+ websites to
                the Google top Ranking by my Proven SEO Knowledge.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE ME ==================== */}
      <StatsSection />

      {/* ==================== MY TOP SEO SERVICES ==================== */}
      <section className="pt-[50px] pb-[30px]">
        <div className="max-w-[1140px] mx-auto px-4 xl:px-0">
          <SectionHeading highlight="My Top SEO Services" className="mb-[60px]" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
            {topServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <Link
                  key={svc.title}
                  href={svc.href}
                  className="group block bg-white rounded-[15px] border-b-[2.4px] border-[#F99517] px-[20px] pt-[10px] pb-[30px] text-center transition-shadow hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)]"
                  style={{ boxShadow: "0 3px 6px rgba(0,0,0,0.04)" }}
                >
                  <Icon className="w-[60px] h-[60px] mx-auto text-[#FFDA3E] stroke-[2.6] transition-transform duration-300 group-hover:-translate-y-1" />
                  <div className="text-[21px] leading-[22.5px] text-black mt-[22px] mb-[16px]">{svc.title}</div>
                  <p className="text-[15px] leading-[22.5px] text-[#5D7280]">{svc.text}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== GET #1 SEO SERVICE IN BD ==================== */}
      <section className="pt-[70px] pb-[40px]">
        <div className="max-w-[1140px] mx-auto px-4 xl:px-0">
          <SectionHeading
            as="h3"
            before="Get #1"
            highlight="SEO Service in Bd"
            after="From Bulbul Bahar"
            className="mb-[50px]"
          />

          <div className="text-[14px] leading-[26px] text-[#5D7280] [&_strong]:text-[#3c4a54] [&_a]:text-[#e05414]">
            <p className="mb-[16px]">
              For any Local Business, SEO is The Most Important Part to increase the blog or website&apos;s visitors,
              Alexa rank, and page rank in Google. That&apos;s why website owners spend money to get their site popular or
              on pages 1 to 5 of Google. But we bring your blog or website to the 1st to 5th page of Google at a low
              cost. In addition to <Link href="/seo-service-in-bangladesh">SEO Service in Bd</Link>, we provide other
              services of digital marketing such as Ai Driven Ads, video Ranking, Content Writing, email marketing, SMS
              marketing, Google ads, etc. We can be your faithful partner for SEO Service in Bd.
            </p>
            <p className="mb-[16px]">
              If your site has been working for a long time but does not appear in search results, there are no
              visitors, pages load for a long time, incomprehensible errors appear, and the like, we can offer you SEO
              services in Bd and SEO Consultancy Service also. Our SEO Service in bd Includes:
            </p>
            <CheckItem title="Maximum Results:">
              Targeted traffic, TOP positions in Google, Conversions, and Increase Sales online.
            </CheckItem>
            <CheckItem title="Return on costs:">
              The optimal plan for SEO Service in Bd, taking into account the ratio of investments, profitability, and
              timing.
            </CheckItem>
            <CheckItem title="An integrated approach to project development:">
              increasing conversion, analytics, working with usability, commercial, and behavioral factors of the site,
              improving and developing content.
            </CheckItem>
            <CheckItem title="Advanced SEO Strategies:">
              SEO Strategies developed by our analysts, our own monitoring system, and tested relevant knowledge about
              search engine algorithms.
            </CheckItem>
          </div>

          <div className="max-w-[1000px] mx-auto mt-[25px] mb-[35px]">
            <Image
              src="/images/seo-ecosystem-banner.jpg"
              alt="SEO Service in Bd - Organic Growth & #1 Ranking"
              width={1280}
              height={432}
              className="w-full h-auto block rounded-2xl border border-slate-100 shadow-sm"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[20px] max-w-[1100px] mx-auto">
            <InfoAccordion
              items={[
                {
                  title: "We believe in organic traffic",
                  content:
                    "If you need to increase your sales, we know how to do it. SEO is continuously changing, but traffic from search engines still brings the highest conversions.",
                },
                {
                  title: "Importance of SEO Service in Bd",
                  content:
                    "New businesses looking for an effective marketing solution for their business. The reason marketing is important is to reach their targeted customers. Many businesses can’t reach their targeted audience. This is a major problem for any business. There are many methods of marketing nowadays. The most effective method of marketing now is online marketing. Digital technology has taken over this generation. The Internet has become a life support for many around the world. Your targeted audiences are right there waiting to discover your business in the search engine. Ranking a website on the first page of any search engine is called SEO.",
                },
              ]}
            />
            <InfoAccordion
              items={[
                {
                  title: "We specialize in only one service - SEO",
                  content:
                    "SEO on a Website, the subject area in which our team works, is a well-studied environment with its own characteristics and dynamics. We use all the accumulated knowledge to do SEO on your site.",
                },
                {
                  title: "Why SEO Service in Bd can be trusted to us",
                  content: (
                    <>
                      <p className="mb-2">
                        As an SEO expert in Bangladesh, I must bring your website on the first page of Google with my SEO
                        service in Bd. Our Effective SEO Service in Bd includes the following steps:
                      </p>
                      <ol className="list-decimal pl-5">
                        <li>Technical audit of a Website</li>
                        <li>SEO Strategy Development</li>
                        <li>Selection of keywords that Actually rank</li>
                        <li>SEO Content Writing</li>
                        <li>Website structure optimization &amp; Technical SEO</li>
                        <li>Providing reports</li>
                      </ol>
                    </>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ==================== DIFFERENT TYPES OF SEO SERVICE ==================== */}
      <section className="pt-[40px] pb-[30px]">
        <div className="max-w-[1140px] mx-auto px-4 xl:px-0">
          <SectionHeading
            as="h3"
            before="Different types of"
            highlight="SEO Service in Bd"
            className="mb-[50px]"
          />

          <div className="grid grid-cols-1 lg:grid-cols-[64%_36%] gap-y-10 items-start">
            <div className="wp-text text-[14px] leading-[26px] lg:pr-[30px] [&_p]:!text-[#5D7280] [&_strong]:text-[#3c4a54]">
              <p>
                There are different types of SEO services in Bangladesh that are available in my SEO company in
                Bangladesh. As a successful SEO expert in Bangladesh, I can provide a variety of SEO services in
                Bangladesh. There are a lot of clients who need different SEO services according to the type of website
                or business they are involved in. Each SEO has its own way of being operated. The techniques are
                different from each other. Although there are some similarities, the differences in the methods of each
                SEO is significant for ranking. Each strategy is used for each purpose.
              </p>
              <p>
                As an SEO expert in Bangladesh, I have skilled myself in providing all the various types of services. In
                my years of practice, I have faced different clients who were from different business industries. This
                variety of clients is what taught me about different kinds of Ai Driven SEO services. I decided that to be
                an SEO specialist in Bangladesh, I need to master the skills of different types of SEO. I started taking a
                lot of <Link href="/seo-training-in-bangladesh">SEO Training in Bangladesh</Link> from various SEO
                training institutes. These SEO trainings have been very helpful for me.
              </p>
              <p>
                Once I have seen and experienced different types of SEO services, I became more confident in providing
                various kinds of SEO services in Bangladesh. I gained this confidence by working for various SEO companies
                in Bangladesh. There is no exception for getting practical experience unless you work for an{" "}
                <Link href="/local-seo-service-in-bangladesh">Local SEO service provider</Link>{" "}
                <strong>company in Bangladesh</strong>. After working for a long time in the SEO company in Bangladesh
                with <strong>Md Faruk Khan &amp; Khan IT</strong>, I decided to open my own SEO company for small
                businesses. And therefore, there are various services in my SEO company in Bangladesh.
              </p>
            </div>

            <div>
              <p className="font-heading text-[14px] leading-[24px] font-bold text-[#000F23] text-center mb-[30px]">
                Here are the types of service I provide as an SEO expert in Bangladesh
              </p>
              <div className="grid grid-cols-2 gap-y-[30px]">
                {serviceTypes.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link key={item.name} href={item.href} className="group text-center">
                      <Icon className="w-[40px] h-[40px] mx-auto text-[#F99517] transition-transform duration-300 group-hover:scale-110" />
                      <h3 className="mt-[14px] text-[12px] leading-[15.6px] font-extrabold capitalize group-hover:text-[#e05414]">
                        {item.name}
                      </h3>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-[50px]">
            <ServiceTabs />
          </div>
        </div>
      </section>

      {/* ==================== ADVANCE SEO TRAINING ==================== */}
      <section className="pt-[70px] pb-[40px]">
        <div className="max-w-[1140px] mx-auto px-4 xl:px-0">
          <SectionHeading before="Advance" highlight="SEO Training" after="in Bangladesh" className="mb-[50px]" />

          <div className="grid grid-cols-1 lg:grid-cols-[64%_36%] gap-y-8 items-start">
            <div className="wp-text text-[14px] leading-[26px] lg:pr-[40px] [&_p]:!text-[#5D7280] [&_strong]:text-[#3c4a54]">
              <p>
                As an SEO Expert in Bangladesh, I have not only worked for companies as an SEO specialist in Bangladesh,
                but I also provide SEO Training in Bangladesh. SEO Training in Bangladesh is a crucial sector, as it has a
                lot of SEO experts in Bangladesh. But be aware that not all the SEO expert in Bangladesh has the capability
                of giving the best SEO service in Bangladesh. As an SEO service provider in Bangladesh, it is very
                important for me to only have the best SEO specialists in Bangladesh in my team to provide the{" "}
                <strong>best SEO service in Bangladesh</strong>.
              </p>
              <p>
                Being an SEO specialist in Bangladesh, I have been called by many SEO companies in Bangladesh to come and
                provide <strong>SEO training in Bangladesh</strong>. My SEO expert profile has impressed the local
                companies to hire me as their SEO trainer and give the proper teaching to the ones who wish to join this
                path of adventure in their life. SEO has many important parts and factors. There is not a single thing
                that I don’t know about SEO. So, therefore, as an SEO Expert in Bangladesh, I know how to give the proper
                SEO Training in Bangladesh.
              </p>
              <p>
                When you plan on taking SEO training in Bangladesh, you will see a lot of SEO companies in Bangladesh who
                advertise by giving a lot of discounts. Do not fall for their mouthwatering trap. The quality of those
                training is not at all satisfactory, and you will end up learning nothing. Therefore, you will end up
                learning nothing. And thus, your dream of becoming a local SEO expert in Bangladesh will shatter like
                glass.
              </p>
              <p>
                As a local SEO expert in Bangladesh myself, I provide the safest training that will help the freelancers
                learn everything there is about{" "}
                <a href="https://www.fiverr.com/" target="_blank" rel="noopener noreferrer">
                  freelancing
                </a>{" "}
                and will ensure that you become a true An SEO expert in Bangladesh.
              </p>
              <p>
                The reason why most freelancers fail and cannot become successful SEO experts in Bangladesh is that they
                do not practice after they finish the course. Also, they lack a lot of practical skills, which is the most
                important part of SEO Training in Bangladesh. This is why my SEO Training in Bangladesh is very much based
                on practical classes. I believe the best way to get experience is from the practical knowledge that you
                get to see and practice for yourself. Based on this, you can really get all the knowledge about SEO from
                your SEO Training in Bangladesh with me.
              </p>
            </div>

            <div className="wp-text text-[14px] leading-[26px] [&_p]:!text-[#5D7280] [&_strong]:text-[#3c4a54]">
              <div className="w-full max-w-[480px] mx-auto aspect-square mb-[20px]">
                <LottiePlayer
                  animationPath="/lottie/seo-training.json"
                  className="w-full h-full"
                />
              </div>
              <p>
                My <strong>SEO Training in Bangladesh</strong> is unique because I provide online SEO Training in bd. If
                you are looking for the best professional SEO course in Dhaka, then I am the SEO expert in Bangladesh you
                should come to. If you want to be a successful SEO specialist in Bangladesh and earn thousands of dollars
                from your home, then I believe my online SEO training in BD will help you achieve that dream. I will show
                you various earning methods that you can do from SEO and become an{" "}
                <Link href="/seo-expert-in-dhaka">
                  <strong className="!text-inherit">SEO specialist in Bangladesh</strong>
                </Link>
                . I will support you till you get your first job in the marketplace and grow your confidence as an SEO
                specialist in Bangladesh. Not only that, but you can also do an internship in my SEO company in
                Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SEO CONSULTANCY ==================== */}
      <section className="pt-[70px] pb-[40px]">
        <div className="max-w-[1140px] mx-auto px-4 xl:px-0">
          <SectionHeading
            highlight="SEO Consultancy Service"
            after="as an SEO Expert in Bangladesh"
            className="mb-[50px]"
          />

          <div className="grid grid-cols-1 lg:grid-cols-[53%_47%] items-center gap-y-8">
            <div className="wp-text text-[14px] leading-[26px] px-[10px] [&_p]:!text-[#5D7280] [&_strong]:text-[#3c4a54]">
              <p>
                As an SEO specialist in Bangladesh, SEO consultancy is also another service that I provide to my clients.
                There are many companies and freelancers who have their own projects and are new to the SEO industry.
                They want an <strong>SEO specialist in Bangladesh</strong> to act as a consultant to show them the right
                way to do the SEO.
              </p>
              <p>
                This way, the freelancer gets experienced in handling a project from top to bottom and is one step closer
                to becoming an SEO expert in Bangladesh. As an experienced and expert SEO specialist myself, I have
                completed numerous projects. I have full experience in handling a project all by myself.
              </p>
              <p>
                I have worked as an SEO consultant for many <strong>SEO companies in Bangladesh</strong>. I have helped
                them complete their SEO task with full support and success. The companies I consulted as their SEO
                specialist in Bangladesh are now ranking on Google’s first page and are now making a huge profit from
                their business.
              </p>
              <p>
                They have obtained more visitors than before and are now in a very stable position in their business
                industry. SEO consultancy is an important service for companies that seek aid to do online marketing. And
                I am here as your SEO specialist in Bangladesh to get your company running.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-[420px] aspect-square">
                <LottiePlayer animationPath="/lottie/seo-consultancy.json" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== OUR PROVEN SEO STRATEGIES ==================== */}
      <section className="pt-[70px] pb-[40px]">
        <div className="max-w-[1140px] mx-auto px-4 xl:px-0">
          <SectionHeading as="h3" before="Our Proven" highlight="SEO Strategies" className="mb-[50px]" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[20px] gap-y-[30px]">
            {strategies.map((s) => (
              <div key={s.title} className="text-center px-[15px]">
                <Image
                  src={s.img}
                  alt={s.title}
                  width={150}
                  height={150}
                  className="w-[150px] h-[150px] object-contain mx-auto"
                  unoptimized
                />
                <h4 className="text-[20px] leading-[24px] font-extrabold capitalize mt-[18px] mb-[10px]">{s.title}</h4>
                <p className="text-[14px] leading-[26px] text-[#5D7280]">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== MY LATEST PROJECTS ==================== */}
      <section className="pt-[70px] pb-[50px]">
        <div className="max-w-[1140px] mx-auto px-4 xl:px-0">
          <SectionHeading highlight="My Latest Projects" className="mb-[50px]" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
            {projects.map((p) => (
              <Link
                key={p.title}
                href="/portfolio"
                className="group block bg-white border-b-[2.4px] border-[#F99517] text-center"
              >
                <div className="relative w-full aspect-[353/250] overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <div className="relative px-[20px] pb-[30px] pt-[46px]">
                  <span className="absolute left-1/2 -top-[40px] -translate-x-1/2 w-[80px] h-[80px] rounded-full bg-white flex items-start justify-center pt-[16px]">
                    <CircleCheck className="w-[22px] h-[22px] text-[#F99517]" />
                  </span>
                  <div className="text-[21px] leading-[22.5px] text-black mb-[16px]">{p.title}</div>
                  <p className="text-[14px] leading-[22.5px] text-[#5D7280]">{p.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <TestimonialsSection />

      {/* ==================== FAQ ==================== */}
      <FAQAccordion />

      {/* ==================== LET'S WORK TOGETHER ==================== */}
      <WorkTogether />
      <PageRating score={4.4} votes={96} />
    </div>
  );
}
