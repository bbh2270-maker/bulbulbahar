"use client";

import React, { useState } from "react";
import Link from "next/link";

export interface TabItem {
  id: string;
  name: string;
  description?: string;
  /** rich HTML content (used by pages converted from WordPress) */
  html?: string;
  link?: string;
  title?: string;
}

/** Unlimited Elements "rainbow border tabs" used on the WordPress site */
export default function ServiceTabs({ items }: { items?: TabItem[] }) {
  const [activeTab, setActiveTab] = useState(0);

  const defaultServices: TabItem[] = [
    {
      id: "rnbt-1",
      name: "Complete SEO",
      title: "Complete SEO Service in Bangladesh",
      description: `SEO means Search Engine Optimization. In this service, there is a process that involves ranking a website on the first page of a search engine. The most used and famous search engine in the world currently is Google. Statistics show that most people or internet users now search for their required services online. So it shows that well-organized and strategic online marketing would make this searching for services very much effective. SEO is an online marketing process that will benefit both the service provider and the service seeker. How will it benefit both the service provider and the seeker? Well, you are about to find out.

Once you, as a business owner, take my SEO service in Bangladesh, your website will surely rank in the first page of Google. Your website will have a rank in some of the most crucial and effective keywords that have a good amount of search volume. Once the website ranks in Google your business will be available to the others who search for the service that your business provides. In this way, you will do more business and make more profit without a doubt. People who seek the service will search with an effective keyword that will show your business on the top page. In this way, they will have faith in your business as Google is showing it on the first page and they will order or hire your service. Thus making more profit for you.`,
      link: "/seo-service-in-bangladesh",
    },
    {
      id: "rnbt-2",
      name: "Local SEO",
      title: "Local SEO Service in Bangladesh",
      description: `As you already know that SEO means Search Engine Optimization. This local SEO is responsible for ranking in local areas. In this service, there is a process that involves ranking a website on the first page of a search engine. The most used and famous search engine in the world currently is Google. Research shows that most people or internet users now search for their required services online. So it shows that well-organized and strategic online marketing would make this searching for services very much effective. SEO is an online marketing process that will benefit both the service provider and the service seeker. How will it benefit both the service provider and the seeker? Well, you are about to find out.

Local SEO means ranking a website locally. It means to make your business famous in your local area of the neighborhood. Not necessarily your own neighborhood or area. If you wish, you can make your business famous in any area that you wish to choose. In local SEO there are some local keywords that are chosen and added in the content for making sure that the website rank with those local keywords. There are many small business owners who are will to gain and grab the market locally. As a local SEO expert in Bangladesh, I can assure you that I will help your local business real the locals around it and make your business way better than before.`,
      link: "/local-seo-service-in-bangladesh",
    },
    {
      id: "rnbt-3",
      name: "Content Writing",
      title: "SEO Content Writing Service",
      description: `Content is the king of any website. Without the content, there is nothing to rank on your website. Your website is meaningless without content. So, therefore, the content is the most crucial part of any website. In order to get the rank on the first page, one has to have unique and very much high-quality content on the website. Not only does it has to be unique, but it also has to be SEO friendly. SEO friendly content means that the content is written using the rules that are recommended by Google. This means placing the keyword in the right place, maintaining the keyword density ratio, and other factors that should be optimized.

I provide the best content writing services that will definitely help your website rank on Google’s first page. My team and I even have a record of the ranking website only with the help of content. We understand the importance of website content writing services, and therefore we provide you the best SEO content writing service that no one else can. Seeing the readability of our content and the friendliness of it will make you want to read more of that topic. We write content as if it is directly talking to you. You need our content more than anything else. And we are here to provide you with the best content writing service you can imagine.`,
      link: "/content-writing-service",
    },
    {
      id: "rnbt-4",
      name: "YouTube Ranking",
      title: "YouTube Video SEO & Ranking",
      description: `So you have a channel on YouTube and need to optimize it? You are planning to do a YouTube Ranking with your business or product? Well, you have chosen a very effective method of online marketing. This method of online marketing has hit much business with a piece of very good news and profit. YouTube marketing will help the viewers get a more clear insight into your business that you want to promote. In order to rank your videos, you need to do YouTube SEO. And thus I also provide this YouTube SEO service that will help your channel for the YouTube marketing you want it to do.

But there are some factors that you need to catch. The thing about YouTube Ranking is that you need to get subscribers, likes and watch time on your YouTube channel. Without this your channel is useless and no benefits can be obtained from it. As without subscribers and viewers, there will be no one to watch the videos that you upload. Luckily for you, my YouTube SEO Service in BD is the best service that would boost your YouTube marketing that you were planning on doing. I am The best SEO Expert in Bangladesh and With my Best YouTube SEO service in BD, you will be able to get thousands of real subscribers and real watch time that your help you add Adsense to your channel and get an earning from it.`,
      link: "/youtube-seo-service",
    },
    {
      id: "rnbt-5",
      name: "Web Design",
      title: "SEO Friendly Web Design Service",
      description: `Before starting the search engine optimization process for any website, you first need to have a website. When you get the website you then have to customize it. The web design needs to be very much attractive and most importantly user-friendly. Without this, it will be impossible for you to get visitors. The web design of a website affects the SEO and the ranking of the website. This is why it is important to get the best website design and development services for your website.

I am here with the best web design and development services that would make your website the best. Once you take my service you will see that I am the best web development service provider in the country. I know how to give and provide effective website design and development services. My experience as a website designer and developer has proven to be very effective and helpful when it comes to rank that website. There are certain rules and regulations that you need to follow in order to design a website and then start the process of SEO. If the rules and regulations of the website are followed, the ranking of it becomes easier. Making the website user-friendly is very much important. Without it, visitors won’t stay at your website. If you are planning to customize your website then my website company in Bangladesh is the place where you will find the best website design and development services.`,
      link: "/web-design-service-in-bangladesh",
    },
    {
      id: "rnbt-6",
      name: "AI",
      title: "AI Video Creation for Business and SEO",
      description: `Do you need business promotional videos to grow your brand and drive traffic? I will make pro ai write videos to grow your business and crush search engines.

What I Offer:
• Professional AI video creation
• Unique scripts designed for your industry or niche
• Male or Female voice-over with Realistic AI
• Text, subtitles, and logo integration
• Videos Reels/Shorts/full-length whatever format you want to call it
• SEO-friendly titles, descriptions, and tags

Why Choose This Service:
100% unique and engaging videos, fast delivery, affordable pricing, great for posting to YouTube, Facebook, Instagram websites and ads. Packages available from 30 seconds to full length with full SEO optimization.`,
      link: "/services",
    },
  ];

  const services = items ?? defaultServices;

  return (
    <div id="uc_rainbow_border_tabs" className="w-full max-w-[1120px] mx-auto">
      {/* Tab navigation – Unlimited Elements "rainbow border tabs" */}
      <ul className="flex flex-wrap list-none p-0 m-0" role="tablist">
        {services.map((item, idx) => {
          const isActive = activeTab === idx;
          return (
            <li key={item.id} className="flex-auto text-center mb-[5px]">
              <button
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(idx)}
                className={`w-full block whitespace-nowrap px-[20px] lg:px-[35px] pt-[15px] border-t-[2.4px] border-[#F99517] transition-colors ${
                  isActive ? "bg-white pb-[15px]" : "bg-[#FBFCFD] pb-[17px] hover:bg-white"
                }`}
              >
                <span className="font-heading block text-[14px] leading-[24px] font-semibold text-[#000F23] capitalize">
                  {item.name}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Tab content */}
      <div className="px-[20px] lg:px-[35px] pt-[18px] pb-[20px]" role="tabpanel">
        {services[activeTab].html ? (
          <div
            className="wp-rich text-[14px] leading-[31px] text-[#585A61]"
            dangerouslySetInnerHTML={{ __html: services[activeTab].html! }}
          />
        ) : (
          <p className="text-[14px] leading-[31px] text-[#585A61]">
            {(services[activeTab].description || "").replace(/\n\n/g, " ")}
          </p>
        )}
        {services[activeTab].link && (
        <Link
          href={services[activeTab].link!}
          className="inline-block mt-4 text-[14px] font-semibold text-[#e05414] hover:text-[#CB3522]"
        >
          Read more about {services[activeTab].name} &rarr;
        </Link>
        )}
      </div>
    </div>
  );
}
