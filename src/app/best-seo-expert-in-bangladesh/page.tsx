import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/HeadlineHighlight";
import LottiePlayer from "@/components/ui/LottiePlayer";
import ServiceTabs from "@/components/home/ServiceTabs";
import InfoAccordion from "@/components/home/InfoAccordion";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TeamMembers from "@/components/about/TeamMembers";
import FeaturedLogos from "@/components/about/FeaturedLogos";
import PageRating from "@/components/ui/PageRating";
import {
  Sparkles,
  Award,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  TrendingUp,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "About The #1 Best SEO Expert in Bangladesh | Bulbul Bahar" },
  description:
    "Hire Bulbul Bahar, the best SEO expert in Bangladesh, to boost your Google rankings fast with proven, result-driven SEO services. Boost Your Business on google!",
  alternates: { canonical: "/best-seo-expert-in-bangladesh/" },
};

/* Values measured from https://bulbulbahar.cloud/best-seo-expert-in-bangladesh/ at 1366px */
const BLUE = "text-[#31A1FF]";
const H = "md:!text-[35px] md:!leading-[42px]";

function Card({ children, className = "", strong = false }: { children: React.ReactNode; className?: string; strong?: boolean }) {
  return (
    <div
      className={`bg-white rounded-[25px] m-[12px] md:m-[25px] px-[25px] py-[35px] ${className}`}
      style={{ boxShadow: `0 0 30px 0 rgba(0, 15, 35, ${strong ? 0.15 : 0.05})` }}
    >
      {children}
    </div>
  );
}

/** Body copy: Open Sans 15px / 27.86px, #5D7280, bold dark grey, orange links */
const text = "text-[15px] leading-[27.86px] text-[#5D7280] [&_p]:mb-[24px] [&_p:last-child]:mb-0 [&_strong]:font-bold [&_strong]:text-[#3c4a54] [&_a]:text-[#e05414] [&_a:hover]:text-[#CB3522]";

const tabs = [
  {
    id: "rnbt-1",
    name: "World Class Expertise",
    description:
      "I have a valid and real life experience in the fields of SEO as an SEO expert for over 17 years. The SEO industry is very rear not only in Bangladesh but also in the international platforms. He has worked for various websites, both locally and internationally. Creative Niloy likes to get his hands on huge ideas and challenges. You will get the most exceptional experiences once you propose Creative Niloy to deal with your technical stuff for your money site! His SEO task and report procedures are of world-class level. It is very clear now that he is the master of maintaining the high level formation which will launch your website on the internet world. He can absolutely work in the expected time table given to rank a website in accordance of per client’s specifications. His clients have describes his working processes as very clean, transparent, resourceful, helpful, meaningful and effective. It is because his work so much finer and smoother than any other SEO experts. He audits SEO, Keyword Research, Back link and content rewrite better than anyone ever does out there. Besides that he sets up certain goals for your website to rank, he ensures leas, checks website performance and fixes all those bugs which can be harmful for a website. Once you, as a business owner, take my SEO service in Bangladesh, your website will surely rank in the first page of Google. Your website will have a rank in some of the most crucial and effective keywords that have a good amount of search volume. Once the website ranks in Google your business will be available to the others who search for the service that your business provides. In this way, you will do more business and make more profit without a doubt. People who seek the service will search with an effective keyword that will show your business on the top page. In this way, they will have faith in your business as Google is showing it on the first page and they will order or hire your service. Thus making more profit for you.",
  },
  {
    id: "rnbt-2",
    name: "Giving 100% Ranking Guarantee",
    description:
      "I have a perfect guy who is skilled in the fields of SEO and can ensure you the validation of extra ordinary talent among other industries. And yes, you’ve guessed it right. It’s Bulbul Bahar himself. He’s the guy who ensures the ranking of the websites on Google’s first page. But it usually depends on the patience a client can have. More often than not, some clients can be very hesitant and impatient to wait till ranking. It’s best to know that even after hiring an SEO expert or team, you can’t rank a website overnight. If you want instant ranking, then it’s the best if you go for paid promotion or marketing to make leads and revenue. Organic SEO processes can take up a little bit more time to rank a website on the top. It is because the Organic SEO is not an easy process. It doesn’t help your website to rank quickly. It usually depends on the competitor’s strength and much they link juice from high quality back-link sites as well. So if you are working with Creative Niloy, you must be a little patient and he will rank your website just in the perfect time.",
  },
  {
    id: "rnbt-3",
    name: "Transparent For You To Understand",
    description:
      "As being the top positioned SEO service in Bangladesh Bulbul Bahar is very much transparent to my clients with my SEO and task and sharing report. I prefer to provide reports on a weekly basis regarding their organization or company’s website in every single aspect. I will give you the entire SEO progress from time to time so that you are a little relieved and satisfied with the progress. You can communicate with me on any social network. I am mostly active on Skype, WhatsApp and on my cellphone. You may also find in me other communication applications as I handle a lot of international clients so I always have to keep an active communication going on with my clients. You can count on me as the most trustworthy and amiable SEO guide. I like maintain an opportunity for clients to make room for faith in my dedication towards their work. And to create a much more meaningful and fruitful results. Keeping a good communication is vital in order to make a good relationship with my clients. So I always try my level best to retain a better communication with my clients. When working with me, you will be able to receive a list of tasks check marked which will help you notify about the SEO work progress. I’m not really a boss, I like to think of my clients as my boss as they are paying me to get their websites a better ranking. And not to mention the fact I am not a supporter or a believer in using any unethical methods of SEO which will later on can be immensely harmful to a client’s online business. I always recommend White Hat SEO service for each and every client. I provide the best content writing services that will definitely help your website rank on Google’s first page. My team and I even have a record of the ranking website only with the help of content. We understand the importance of website content writing services, and therefore we provide you the best SEO content writing service that no one else can. Seeing the readability of our content and the friendliness of it will make you want to read more of that topic. We write content as if it is directly talking to you. You need our content more than anything else. And we are here to provide you with the best content writing service you can imagine.",
  },
  {
    id: "rnbt-4",
    name: "Top Rank",
    description:
      "If You Search n Google by this keyword \" Best SEO Expert in Bangladesh\" You Will Get my website 1st page in Google. So You Can Trust Me as a Proven SEO Expert in Bangladesh.",
  },
];

const accordionLeft = [
  {
    title: "RANKING ISN’T A HUGE FACTOR, BUT SALES IS.",
    content:
      "It is not important to always get a better ranking. You may get a better ranking, but your sales may go down in often cases. Many SEO experts are out there who help their clients reach on the first page of Google, but due to wrong marketing strategies, they end up losing sales. Such as choosing the wrong keywords for your business. So it is crucial to ensure that you have a good ROI than a better rank. If websites with good ranks are unable to make substantial sales, then the business will reach its downfall in no time. And this is the reason why I suggest my clients handing it over to me, and I get them to achieve effective results that will help them retain their sales in the industry for a longer period of time. And this is why I’ve been ranked as the best SEO expert in Bangladesh.",
  },
  {
    title: "HIGHLY EXPERIENCED IN SEO TECHNIQUES",
    content:
      "When looking for an SEO expert to rank your website, why went for less when you got Creative Niloy as the best SEO expert in Bangladesh? Creative Niloy will be your perfect decision in terms of searching for the best SEO Expert in Bangladesh for ranking your website on the first page of google. My services include SEO ins and outs, which includes off-page SEO and On-Page SEO optimization. It also has advanced keywords research, dealing with keywords research, buying keywords, and even buying new Keywords. I am experienced in all of these sectors. I prefer to analyze the website before I start working on it. Some websites that clients often send may not be in good shape. There might be bugs around the on-page. Not only bugs, the loading time, well navigation of the site, how much this website is SEP friendly, content plagiarism, and google index status are also crucial to be checked beforehand. Once I analyze the website and solve the on-page SEO issue, I then go ahead and with the Off-page Optimization and look forward to building strong domain authority sites in the backlink for the client’s website. I always ensure to put emphasis on the relevance of the website backlink, which will help me get along with the link juice. My website is not limited to just one language; I can work on websites of any language.",
  },
  {
    title: "UPDATED TO ALL RULES AND REGULATIONS OF GOOGLE",
    content:
      "I normally like to stay very up to date about the new updates and surf through thousands of websites, bongs, forums, journals. It is vital to stay active about the updates as the Search Engine frequently keeps on changing their algorithm, and specific sites suddenly get on the bottom rank. I always ensure to ask my clients how much of an impact it would make in their lives if Google changes its algorithm beforehand. Certainly, Creative Niloy is the best SEO expert that can help you rank your website in the virtual world. I have been rated as the most effective digital marketing agency in Bangladesh who provides tailored strategic selling consulting, and implements service in the international level businesses. In the present world, online services are a must for all. Whether you sell your products online or offline, I will help you get the perfect audience suitable for you. WORKING AS AN SEO EXPERT TEAM IN BANGLADESH. Being the best SEO expert in Bangladesh, I have high potentials for satisfying my clients. We are the ultimate Local SEO experts in Bangladesh that you can ever find. I usually provide the most strategic digital marketing services in Bangladesh. I handle each every project with a lot of thought and care. I study a lot through to find strategic ways to help my client’s website to rank for a better marketing and advertisements. I am very active with new updates and terms.",
  },
];

const accordionRight = [
  {
    title: "BEST SEO SERVICE PROVIDER COMPANY IN BANGLADESH",
    content:
      "If you don’t like comprises with quality and are looking result-oriented a Local SEO Expert, then this is the best SEO expert in Bangladesh. Bulbul Bahar will help your website rank on the first page of Google and other top-rated Search Engines within the updated and latest Search Engine guidelines. One of the most effective procedures to help your website is SEO. I will be able to get your website on the first page of any Search Engine you desire with the best methods. It will not rank your website but also bring your business to the next level. Search Engine Optimization surely is one of the most cost-effective methods to help your site rank on the Search Engine Result Page or known as SERP. We are The only one SEO Service Provider in bangladesh Who Work For Resut and Giving 100% Rank Guarantee.",
  },
  {
    title: "I’VE GOT A VAST ONLINE MARKETING HYPE",
    content:
      "Being the Bulbul Bahar Local SEO expert in Bangladesh, I’d like to appreciate the wonders of SEO and what it can do. From my eight years of experience as a Local SEO expert, I understand what my client’s needs, and they get my undivided attention. I’m in contact with an incredible number of publishers, journalists, and forums or bloggers of several relevant sectors. It always comes off as a bonus when you’re working with me. You can even appoint a face to face meeting with me if needed. I will go ahead and elaborate about my entire procedures and on give you effective advice on how to achieve more success in your online business and increase your income. I will help you with the perfect marketing analysis strategies and keywords that will be appropriate for boosting your ranking.",
  },
  {
    title: "DO MORE THAN SEO OF YOUR WEBSITE",
    content:
      "SEO may sound like Rocket Science, but it certainly is not. It is much easier and more understandable than you think. With my SEO service, you will be able to increase the brand value more frequently. Not only that, I have the best Digital Marketing service in Bangladesh besides SEO. My hard-working and dedicated team will help you get the most professional help in the fields of SEO, such as Content Writing, Social Media Optimization, Social Media Marketing like Facebook campaigns, and help you boost your business to enhance your site for targeting audience. Your page will be on the top page of Google when you use our service.",
  },
];

const gallery = [
  { src: "/images/about/gallery-basis-softexpo.webp", alt: "Basis SoftExpo" },
  { src: "/images/about/gallery-ecab-startup.webp", alt: "E-CAB Standing Committee Startup Business" },
  { src: "/images/about/gallery-ecab-committee.webp", alt: "E-CAB Standing Committee Meeting" },
  { src: "/images/about/gallery-ecab-meeting.webp", alt: "E-CAB Meeting" },
  { src: "/images/about/gallery-bitm.webp", alt: "BITM Software Fair" },
  { src: "/images/about/gallery-cvlinked-opening.webp", alt: "Cvlinked Opening" },
  { src: "/images/about/gallery-cvlinked-training.webp", alt: "Cvlinked Training" },
  { src: "/images/about/gallery-matchwheel.webp", alt: "Matchwheel Ltd" },
];

const clients = [
  {
    name: "Janet Renolds",
    image: "/images/about/client-user.webp",
    content:
      "“I have used the complete SEO service from Bulbulbahar.com for my affiliate site to rank higher for my most competitive keyword. It was my first experience with them. I was a bit confused because most of the keywords have the competition of 45 above. But they did the task amazingly. Without using any unethical practice, Creativeniloy.com rank around 40 keywords in the first page of SERPs within a few weeks. They are very professional and keep me update in each stage of my project. I really appreciate their effort and will recommend to all..”",
  },
  {
    name: "Sara Blankenship",
    image: "/images/about/client-jinia.webp",
    content:
      "“After a long search, I have come to Bulbulbahar.com for taking their content writing service. I heard about them from one of my clients who has used their service earlier. My site is a mixed website containing Affiliate and AdSense.I gave them the keywords and instruction for writing. I also ask a Meta description and all the writings must be optimized with my main keyword.They return me the perfect copy as I am expecting. The content copy was 100% unique, free from stupid and grammatical mistakes. I am truly enjoying their writing style. When I upload them on the website, the visitors grow up to 155%”",
  },
  {
    name: "Brian Doe",
    image: "/images/about/client-brian-doe.webp",
    content:
      "“I am taking their service for last year. I have used a few of their services. Recently I have used their local SEO service for one of my client from Oakland. My client was a dentist and want to appear in the 3-pack of Google search.We have a long relationship. I offer Bulbulbahar.com to do this for my client. They complete the task within fifteen days. My client found the desired result within 30 days. It was very astonishing to me.The team is very confident and do the task without delay. I am happy with the result and will give them more projects soon.I like the way they behave and their professionalism. I wish them all the best and will work again in the future.”",
  },
];

export default function AboutBestSeoExpertPage() {
  return (
    <div className="bg-white">
      {/* ===== Page Title & Breadcrumb ===== */}
      <section className="pt-10 md:pt-14 pb-8 bg-gradient-to-b from-[#FAFBFD] to-white border-b border-slate-100">
        <div className="max-w-[1140px] mx-auto px-4 xl:px-0">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#5D7280] mb-5">
            <Link href="/" className="hover:text-[#0082FB] transition-colors">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-[#0082FB] font-semibold">About Me</span>
          </nav>
          <div className="text-center">
            <SectionHeading
              as="h1"
              before="About The"
              highlight="Best SEO Expert in Bangladesh"
              highlightClassName={BLUE}
              className={`${H} mb-2`}
            />
          </div>
        </div>
      </section>

      {/* ===== Who am I? — Executive Profile Showcase ===== */}
      <section className="bg-gradient-to-b from-[#FAFBFD] via-blue-50/20 to-white py-14 lg:py-20 border-b border-slate-200/80 relative overflow-hidden">
        {/* Soft background ambient lights */}
        <div className="absolute top-0 right-10 w-80 h-80 bg-[#31A1FF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#0082FB]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Portrait, Badges & Quick Stats */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[420px] bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/90 shadow-xl shadow-slate-900/5 group">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100/40 flex items-center justify-center p-2">
                  <Image
                    src="/images/about/bulbul-bahar.webp"
                    alt="Engineer Bulbul - Best SEO Expert in Bangladesh"
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover rounded-xl group-hover:scale-102 transition-transform duration-300"
                    unoptimized
                    priority
                  />

                  {/* Floating Badges */}
                  <span className="absolute top-4 left-4 text-xs font-heading font-bold px-3 py-1.5 rounded-full bg-white/95 text-[#0082FB] shadow-md border border-blue-100 flex items-center gap-1.5 backdrop-blur-xs">
                    <Award className="w-3.5 h-3.5" />
                    <span>8+ Years Experience</span>
                  </span>

                  <span className="absolute bottom-4 right-4 text-xs font-heading font-bold px-3 py-1.5 rounded-full bg-white/95 text-[#0082FB] shadow-md border border-blue-100 flex items-center gap-1.5 backdrop-blur-xs">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Google Certified</span>
                  </span>
                </div>

                {/* 3 Quick Metric Pills */}
                <div className="grid grid-cols-3 gap-2 p-3 mt-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                  <div>
                    <div className="text-base sm:text-lg font-black font-heading text-[#0082FB]">8+</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500 font-semibold">Years Active</div>
                  </div>
                  <div className="border-x border-slate-200">
                    <div className="text-base sm:text-lg font-black font-heading text-[#000F23]">100+</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500 font-semibold">Sites Ranked #1</div>
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-black font-heading text-[#0082FB]">98%</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500 font-semibold">Retention</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Founder Story & Credibility */}
            <div className="lg:col-span-7 space-y-5 text-left">
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-[#0082FB] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Who Am I?</span>
              </div>

              {/* Section Subheading */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#000F23] font-heading tracking-tight leading-[1.25]">
                The Story of an <span className="text-[#31A1FF]">Elite SEO Specialist</span> in Bangladesh
              </h2>

              {/* Signature Philosophy Quote Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-blue-100 shadow-xs border-l-4 border-l-[#0082FB]">
                <p className="text-sm sm:text-base font-medium italic text-slate-700 leading-relaxed">
                  &ldquo;Without SEO, having a website for any purpose is like a vase with no flowers.&rdquo;
                </p>
              </div>

              {/* Narrative Content */}
              <div className="text-[15px] leading-relaxed text-[#5D7280] space-y-3.5 font-normal">
                <p>
                  Hello, my name is <strong>Engineer Bulbul</strong>, and I am the{" "}
                  <Link href="/" className="font-bold text-[#0082FB] hover:underline">
                    Best SEO expert in Bangladesh
                  </Link>
                  . I have been working as an <strong>SEO specialist for 8+ years</strong>. I have vast practical experience across search architecture, content authority, and algorithmic ranking models.
                </p>
                <p>
                  When you compare my profile with other SEO specialists in Bangladesh, you will notice a clear difference: my approach is strictly driven by transparent analytics, quantifiable revenue expansion, and permanent White Hat rankings.
                </p>
                <p>
                  Ever since I began my journey, I committed to providing top-notch quality work. I am young, talented, and relentlessly hardworking. Providing world-class organic results is my specialty.
                </p>
              </div>

              {/* Key Highlights Checklist */}
              <div className="space-y-2 pt-1 pb-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0082FB] shrink-0" />
                  <span>100% White Hat &amp; Google Algorithm compliant organic ranking methods</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0082FB] shrink-0" />
                  <span>Complete AI-driven technical audits, keyword clustering &amp; high-intent lead generation</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0082FB] shrink-0" />
                  <span>Transparent weekly reporting with direct 1-on-1 strategic consultations</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/get-a-free-quote"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0082FB] via-[#1E90FF] to-[#0055D4] hover:from-[#0074E0] hover:to-[#0047B8] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-md shadow-[#0082FB]/25 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  style={{ color: "#ffffff" }}
                >
                  <span>Hire Engineer Bulbul</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>

                <a
                  href="tel:01710424241"
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#000F23] border border-slate-200 hover:border-[#0082FB]/60 font-heading font-bold text-xs uppercase tracking-wider shadow-xs hover:shadow-md transition-all duration-200"
                >
                  <span className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-[#0082FB] group-hover:bg-[#0082FB] group-hover:text-white transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                  </span>
                  <span>Call: 01710424241</span>
                </a>
              </div>
            </div>
          </div>

          {/* Deep-dive Cards: Local SEO & Google Algorithm Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 sm:mt-16">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs hover:border-[#0082FB]/40 hover:shadow-md transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0082FB] flex items-center justify-center mb-4 border border-blue-100">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-[#000F23] font-heading mb-3">
                Proven Local SEO Dominance
              </h3>
              <p className="text-sm text-[#5D7280] leading-relaxed">
                When you search Google for &ldquo;<strong>BEST Local SEO Expert in Bangladesh</strong>&rdquo; or &ldquo;
                <Link href="/local-seo-service-in-bangladesh" className="font-semibold text-[#0082FB] hover:underline">
                  Local SEO Expert
                </Link>
                &rdquo;, you will find profiles of many practitioners. Having spent over nine years in the trenches, I have deep expertise in AI-driven Local SEO, Google Business Profiles (3-Pack), and high-intent localized search campaigns.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs hover:border-[#0082FB]/40 hover:shadow-md transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0082FB] flex items-center justify-center mb-4 border border-blue-100">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-[#000F23] font-heading mb-3">
                Always Synced with Google Updates
              </h3>
              <p className="text-sm text-[#5D7280] leading-relaxed">
                I stay continuously updated with all{" "}
                <a
                  href="https://www.searchenginejournal.com/google-algorithm-history/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#0082FB] hover:underline"
                >
                  Google algorithm updates
                </a>
                . My strategies strictly follow Google&apos;s Search Essentials to give your domain a permanent &ldquo;green signal&rdquo; that protects you from penalty drops and keeps you on Google Page #1.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== How my career began ===== */}
      <section className="bg-[rgba(93,114,128,0.05)] py-[50px]">
        <div className="max-w-[1140px] mx-auto px-4 xl:px-0">
          <SectionHeading
            before="How my career begin as a"
            highlight="Local SEO Expert"
            highlightClassName={BLUE}
            className={`${H} mb-[40px]`}
          />
          <div className={`px-0 md:px-[30px] text-center ${text}`}>
            <p>
              The reason for this is that I saw one of my friends earning money just by sitting in his home. I couldn’t
              believe that. So I sat with him and learned everything there is to know about freelancing. My friend was a{" "}
              <strong>Ai Driven SEO expert</strong> and also a <strong>local SEO expert</strong>.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 -mx-[12px] md:-mx-[25px]">
            <Card className={text}>
              <p>
                The first thing I understood from him was that I needed training. Whatever field I wanted to choose, I
                needed training first. I decided to become an SEO expert. In order to become an SEO Expert in Bangladesh, I
                needed SEO training at first. So then I decided to search for the <strong>best SEO expert in Bangladesh</strong>{" "}
                and go become his apprentice. Once I found the right expert, I started my training under him.
              </p>
              <p>
                I had gotten training under him for around four months. Within those four months, he taught me everything
                there is to know about Search Engine Optimization.
              </p>
            </Card>
            <Card className={text}>
              <p>
                After completing my training, I worked on my practical SEO Intern Project for the next eight months. I kept
                practicing the things I learned from him on different websites to increase my experience. My skills kept
                growing every day as I had the opportunity to implement my techniques on other websites. This rapidly
                increased my skills as I faced problems while implementing. Also, I found out the solutions to those
                problems, and thus, I became sharper. Then I have Prepared My All. Portfolio Websites to Rank on the Google
                First Page, and this was the Practice for me. Another Interesting Part is, My Websites are Now Rank in
                Google top, and I am happy that I can prove My Skill and Implement&nbsp; SEO Knowledge Properly.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== Why am I different ===== */}
      <section className="py-[50px]">
        <div className="max-w-[1140px] mx-auto px-4 xl:px-0">
          <SectionHeading
            before="Why Am I"
            highlight="Different than others?"
            highlightClassName={BLUE}
            className={`${H} mb-[40px]`}
          />
          <div className="grid grid-cols-1 lg:grid-cols-[46%_54%] items-start -mx-[12px] md:-mx-[25px]">
            <Card className="flex items-center justify-center">
              <div className="w-full max-w-[427px] aspect-square">
                <LottiePlayer animationPath="/lottie/why-different.json" className="w-full h-full" />
              </div>
            </Card>
            <Card className={`!pt-[35px] ${text}`}>
              <p>
                In my journey as the <b className="text-[#3c4a54]">Best SEO Expert in Bangladesh,</b> I got to know that
                there are many other factors that revolve around SEO. Not only that, there are different categories of SEO
                as well. SEO varies from category to category. And I have grown my skills in all possible categories in
                SEO.
              </p>
              <p>
                Not only and I an expert in SEO, but I also provide different other services that will help your business.
                My main focus lies on online marketing and how to ensure your business reaches the audience.
                <br />
                Marketing is an important part of any business. Without the proper marketing Strategy, you cannot get
                clients properly. That is because your business won’t reach your targeted audience. I have all the skills
                that one needs to successfully do an online marketing of a business. I am a super pro online marketer who
                can help you out.&nbsp; I had gotten training under him for around four months. Within those four months, he
                taught me everything there is to know about Search Engine Optimization.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== Why choose me ===== */}
      <section className="pt-[20px] pb-[20px]">
        <div className="max-w-[1140px] mx-auto px-4 xl:px-0">
          <SectionHeading
            before="Why Choose Me as the"
            highlight="Best SEO Expert in Bangladesh"
            highlightClassName={BLUE}
            className={`${H} mb-[20px]`}
          />
        </div>
      </section>
      <section>
        <div className="max-w-[1140px] mx-auto px-4 xl:px-[10px]">
          <div className={text}>
            <p>
              Here are some reasons with explanations why I am the best SEO expert in Bangladesh, you need as your{" "}
              <strong>SEO service provider company in Bangladesh</strong>. My SEO company in Bangladesh is, without a
              doubt, the best for the following reasons. I don’t compromise with quality; this is what makes me the best
              Local SEO expert in Bangladesh. Here are the reasons why.
            </p>
          </div>
          <div className="mt-[24px]">
            <ServiceTabs items={tabs} />
          </div>
        </div>
      </section>

      {/* ===== Accordions ===== */}
      <section className="pt-[10px] pb-[20px]">
        <div className="max-w-[1140px] mx-auto px-4 xl:px-[10px] grid grid-cols-1 md:grid-cols-2 gap-x-[20px]">
          <InfoAccordion items={accordionLeft} />
          <InfoAccordion items={accordionRight} />
        </div>
      </section>

      {/* ===== Job experience ===== */}
      <section className="py-[50px]">
        <div className="max-w-[1140px] mx-auto px-4 xl:px-0">
          <SectionHeading
            highlight="My Job Experience"
            after="As SEO Expert"
            highlightClassName={BLUE}
            className={`${H} mb-[40px]`}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start -mx-[12px] md:-mx-[25px]">
            <Card className={text}>
              <p>
                After Completing My SEO Internship, I joined as a Trainer in IT Vision Training. And I grew my Training
                Skills From there. In 2017, I wanted to work with an Established SEO Agency that works with local and
                international clients. A few Days Later, I got a Job in a Corporate SEO Agency, Match Wheel Limited. They
                recruited me as an SEO Project Manager in their organization. Another Leading SEO Expert in Bangladesh, “
                <strong>Md Faruk Khan,</strong>” Was My Boss Here, and he guided me About Advanced SEO Strategies. Also, I
                have a Vast Knowledge about managing clients for getting projects &amp; how to communicate with Clients.
              </p>
              <p>
                For my Final Examination of B.S.C in EEE, I have to Resine My Job Temporary. After Completing My Graduation,
                I joined{" "}
                <a href="https://www.peoplentech.com/" target="_blank" rel="noopener noreferrer">
                  PeoplenTech IT Institute
                </a>{" "}
                in 2019. I have been working here as a Senior Faculty member of SEO &amp; Digital Marketing. Also, I am
                Consulting Their Website For Improving their SEO Experience.
              </p>
              <p>
                In the meantime, I joined{" "}
                <a href="https://eshikhon.com/course/digital-marketing/" target="_blank" rel="noopener noreferrer">
                  Eshikhon
                </a>{" "}
                as a digital marketing and SEO trainer, successfully training over 1,000 students to secure job placements
                on Fiverr or Upwork.
              </p>
            </Card>
            <Card className={text}>
              <div className="w-full max-w-[470px] aspect-[4/3] mx-auto mb-[24px]">
                <LottiePlayer animationPath="/lottie/job-experience.json" className="w-full h-full" />
              </div>
              <p>
                In 2024, I have to quit my job at Eshikhon because I got an offer from Singapore. An IT Company hired me as
                a full-time Local Seo expert in Singapore.
              </p>
              <p>
                Still, I am working with a Singaporean Company as the Best SEO Expert in Bangladesh and Singapore, providing
                SEO services in BD.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== Team ===== */}
      <section className="pt-[50px] pb-[20px]">
        <div className="max-w-[1140px] mx-auto px-4 xl:px-0">
          <SectionHeading as="h3" highlight="Our Team of Professionals" className={`${H} mb-[30px]`} />
          <div className="-mx-[25px]">
            <TeamMembers />
          </div>
        </div>
      </section>

      {/* ===== Gallery ===== */}
      <section className="py-[50px]">
        <div className="max-w-[1140px] mx-auto px-4 xl:px-0">
          <SectionHeading as="h3" highlight="Our Gallery" className={`${H} mb-[30px]`} />
          <div className={text}>
            <p>
              I am The Member Of the Standing Committee for Startup Business in the{" "}
              <a href="https://e-cab.net/" target="_blank" rel="noopener noreferrer">
                E-Commerce Association Of Bangladesh
              </a>
              (E-CAB). And Attend the Basis SoftExpo Fair Every Year. Here is The Some Images with the Trending
              Professionals and Honourable Persons of E-CAB
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[10px] mt-[24px]">
            {gallery.map((g) => (
              <div key={g.src} className="relative aspect-[278/185] overflow-hidden group">
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Featured in ===== */}
      <section className="py-[50px]">
        <div className="max-w-[1140px] mx-auto px-4 xl:px-0 grid grid-cols-1 md:grid-cols-[25%_75%] items-center gap-y-6">
          <h4 className="text-[20px] leading-[24px] font-extrabold capitalize">Bulbul Bahar Featured In:</h4>
          <FeaturedLogos />
        </div>
      </section>

      {/* ===== Clients ===== */}
      <TestimonialsSection items={clients} heading="My Satisfied Clients" headingAs="h4" />

      {/* ===== Who we are ===== */}
      <section className="pt-[10px]">
        <div className="max-w-[1140px] mx-auto px-4 xl:px-[10px]">
          <SectionHeading
            highlight="Who We Are"
            after="(As SEO Agency)"
            highlightClassName={BLUE}
            className={`${H} mb-[40px]`}
          />
          <div className={text}>
            <p>
              We are an experienced team of professionals that stands at the forefront of all emerging trends in digital
              marketing. Understanding that every business has a different set of challenges and unique requirements, we
              deliver custom Internet Marketing Solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-[10px]">
        <div className="max-w-[1140px] mx-auto px-4 xl:px-[10px] grid grid-cols-1 lg:grid-cols-2 items-start gap-x-[20px]">
          <div className={`pt-[25px] ${text}`}>
            <h5 className="text-[18px] leading-[21.6px] font-extrabold text-center uppercase mb-[20px]">What We Offer</h5>
            <p>
              We Offer <Link href="/seo-service-in-bangladesh">SEO Service in Bangladesh</Link> and it is a place for all
              your digital marketing needs because we are the one in the industry for a long time now and have gathered
              the extensive knowledge from our years of experience in helping our clients with their online challenges. We
              help brands by creating and developing compelling and strategic solutions that are not depended on channels
              or platforms but instead creating a link between human need and brand
              <br />
              We offer complete website promotion services which include, Mobile SEO Services, Social Media Optimization,
              Online Reputation Management Services and Website Designing and Website Development Services. Not only this,
              we also offer custom services and plans for several practices in SEO and SMO, which mostly depends on any
              special requirement by any client. Our motive is to deliver the world class SEO service to our client’s and
              we are honestly progressing day by day in that direction.
            </p>
          </div>
          <Card strong className={`!p-[20px] ${text}`}>
            <h5 className="text-[18px] leading-[21.6px] font-extrabold text-center mb-[20px]">WHY “Bulbul Bahar”</h5>
            <p>– Strong &amp; Talented team of 100+ Professionals</p>
            <p>– 100% Ethical, Transparent &amp; White Hat Practices</p>
            <p>– Proven SEO Strategies with around 5+Year of Experience</p>
            <p>– Price Competitiveness5. Global Presence with Clients in 20+ Countries</p>
            <p>– One stop shop for all of SEO, Internet Marketing, Creative Design and Web/Mobile Applications</p>
            <p>– Quality of Work</p>
          </Card>
        </div>
      </section>

      {/* ===== Mission & Vision ===== */}
      <section className="pt-[20px]">
        <div className="max-w-[1140px] mx-auto px-4 xl:px-0">
          <SectionHeading as="h3" highlight="Mission & Vision" className={`${H} mb-[20px]`} />
          <div className="grid grid-cols-1 lg:grid-cols-2 -mx-[12px] md:-mx-[25px]">
            <Card strong className={`!p-[20px] ${text}`}>
              <p className="text-center">
                <strong className="!text-[#5D7280]">Our Mission</strong>
              </p>
              <p>
                The Mission of Bulbul Bahar is to set a journey that will help small local businesses to become big in the
                industry with their online marketing. I want to help those businesses that aren’t successful in getting
                traffic for their website. My goal is to help those businesses reach their targeted audience that they have
                been seeking throughout this time. A lot of companies get scammed by so-called online marketers or{" "}
                <a href="https://www.mdfarukkhan.com/" target="_blank" rel="noopener noreferrer">
                  SEO Experts
                </a>
                . My task is to ensure safety and 100% real and authentic online marketing, digital marketing and Search
                Engine Optimization services to the clients. Only by this can I provide a safe platform for clients who are
                deprived of traffic for the website and the targeted audience.
              </p>
            </Card>
            <Card strong className={`!p-[20px] ${text}`}>
              <p className="text-center">
                <strong className="!text-[#5D7280]">Our Vision</strong>
              </p>
              <p>
                The Vision of Bulbul Bahar is to become the best online marketing agency in Bangladesh. The dream that this
                company has is to become a complete IT solution for any business in need. I want to become the ultimate
                Digital Marketing Solution that can help any business reach its goals and achieve significant success in its
                industry. The aim I see with Creative Niloy is to set a high standard for digital marketing in Bangladesh,
                which will definitely earn more trust from our clients. Being the ultimate online marketing solution for any
                small local business is the goal I dream of achieving with my agency.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== Call to action ===== */}
      <section className="pt-[10px]">
        <div className="max-w-[1140px] mx-auto px-4 xl:px-0">
          <div className="bg-[#F9FAFA] p-[35px] text-center">
            <h3 className="text-[24px] md:text-[30px] leading-[1.3] font-extrabold !text-[#3F444B] capitalize mb-[16px]">
              Ready to Make Your Idea Come to Life?
            </h3>
            <div className="text-[16px] leading-[30px] text-[#3F444B] mb-[16px]">I&apos;M AVAILABLE FOR HIRE OR FREELANCE</div>
            <Link
              href="/get-a-free-quote"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0082FB] via-[#1E90FF] to-[#0055D4] hover:from-[#0074E0] hover:to-[#0047B8] text-white font-heading font-bold text-base shadow-lg shadow-[#0082FB]/25 hover:shadow-xl hover:shadow-[#0082FB]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Get a free Quote Now
            </Link>
          </div>
        </div>
      </section>

      <PageRating score={4.3} votes={24} />
    </div>
  );
}
