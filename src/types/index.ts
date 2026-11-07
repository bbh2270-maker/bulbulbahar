export interface Project {
  id: string;
  title: string;
  domain: string;
  category: string;
  description: string;
  results: string[];
  metrics: {
    trafficIncrease?: string;
    keywordsRanked?: string;
    timeline?: string;
  };
  featured?: boolean;
  image?: string;
  liveUrl?: string;
  tag?: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  pricingHint?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  highlight?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readingTime: string;
  category: string;
  tags: string[];
}
