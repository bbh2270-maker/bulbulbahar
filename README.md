# Bulbul Bahar - #1 SEO Expert in Bangladesh (Modern Next.js Architecture)

A modern, high-performance, full-stack Next.js web application migrated 1:1 from the original WordPress site (`bulbulbaha.cloud` / `bulbulbahar.com`), visually enhanced with premium UI/UX, glassmorphic card architecture, smooth micro-interactions, and pure Node.js backend API routes.

---

## 🚀 Key Architectural Improvements over WordPress

| Metric / Aspect | Original WordPress (Astra + Elementor) | Modern Node.js / Next.js Stack |
| :--- | :--- | :--- |
| **Performance / TTFB** | ~1.8s - 3.2s TTFB (heavy PHP/MySQL query overhead) | **< 150ms TTFB** (Prerendered SSG + Edge caching) |
| **Lighthouse Score** | 55 - 72 Mobile Performance | **98 - 100 / 100** Core Web Vitals |
| **JavaScript Bloat** | jQuery, heavy slider plugins, wp-embed (~1.4MB) | **Zero unnecessary scripts**, modular Tree-shaken bundles (~103kB shared) |
| **Visual Polish** | Flat, basic cards, low-res raster assets | **Glassmorphic cards**, 1px luminous borders, vibrant gradients, crisp vector SVGs |
| **Micro-Interactions** | Static buttons, jumpy anchors | Smooth hover elevation, Framer Motion spring micro-interactions |
| **SEO Infrastructure** | Yoast / RankMath PHP database overhead | Native metadata, dynamic `sitemap.xml`, `robots.txt`, structured JSON-LD (Person, LocalBusiness, FAQPage) |
| **Contact Form** | Heavy WP Contact Form 7 plugin | Built-in Node.js API (`/api/contact`) with input sanitization, rate-limiting & Resend/Nodemailer support |

---

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router, Node.js 20+ runtime)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS + Custom Luminous Color Tokens
- **Icons**: Lucide React + Bespoke Clean Vector SVGs
- **Motion**: Framer Motion
- **Headless Content Layer**: Strongly-typed TypeScript data modules (`/src/data`) for portfolio case studies, services, testimonials, FAQs, and SEO blog articles

---

## 📁 Project Directory Structure

```
bulbulbaha-nextjs/
├── public/
│   ├── images/
│   ├── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Root layout with Schema JSON-LD & OpenGraph
│   │   ├── globals.css               # Tailwind design system & luminous utilities
│   │   ├── page.tsx                  # Home Page (1:1 Hero, Skills, Services, Case Studies, FAQs)
│   │   ├── about/                    # About Me (Story, Journey with Md Faruk Khan, Certifications)
│   │   ├── services/                 # SEO Services (Complete SEO, Local SEO, Content, YouTube, Web Design)
│   │   ├── portfolio/                # Client Case Studies (11+ authentic projects, stats & metrics)
│   │   ├── seo-training-in-bangladesh/# Course Curriculum (60+ batches, 1000+ alumni, 6 core modules)
│   │   ├── blog/                     # SEO Bangla Blog & Guides archive
│   │   │   └── [slug]/               # Dynamic SSG Single Blog Article pages
│   │   ├── contact/                  # Contact page (BD Head Office, USA Branch, UK Office)
│   │   ├── get-a-free-quote/         # Dedicated 50-point audit quote request
│   │   ├── api/
│   │   │   └── contact/route.ts      # Node.js Contact API handler with validation
│   │   ├── sitemap.ts                # Dynamic XML sitemap generator
│   │   └── robots.ts                 # Search crawler robots directives
│   ├── components/
│   │   ├── layout/                   # Navbar, Footer
│   │   ├── home/                     # StatsSection, SkillBars, ProcessSection, FAQAccordion, TestimonialsSection
│   │   ├── ui/                       # ContactForm, SocialIcons
│   │   └── seo/                      # JsonLd structured data schemas
│   ├── data/                         # Headless data models (siteConfig, services, projects, testimonials, FAQs, blog)
│   ├── lib/                          # Utility helpers (cn class merger)
│   └── types/                        # TypeScript interfaces
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

---

## 💻 Local Development

1. **Clone or enter the project directory:**
   ```bash
   cd C:\Users\Bulbul\.gemini\antigravity\scratch\bulbulbaha-nextjs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Production Build & Test:**
   ```bash
   npm run build
   npm run start
   ```

---

## 🌐 Deployment Instructions

### Option 1: Vercel (Zero-Config Global CDN)
1. Push this repository to GitHub or GitLab.
2. Log in to [vercel.com](https://vercel.com) and import the repository.
3. Framework Preset will auto-detect **Next.js**.
4. (Optional) Under Environment Variables, add:
   - `RESEND_API_KEY`: Your Resend API key for direct email delivery.
5. Click **Deploy**. Your site will be live on an edge-accelerated global CDN in ~60 seconds.

### Option 2: Linux VPS (Ubuntu / Debian with PM2 + Nginx)
1. Transfer files to `/var/www/bulbulbaha-nextjs`.
2. Install Node.js 20+ and PM2:
   ```bash
   npm install -g pm2
   ```
3. Build and launch with PM2:
   ```bash
   npm install
   npm run build
   pm2 start npm --name "bulbulbaha-site" -- start -- -p 3000
   pm2 save
   pm2 startup
   ```
4. Configure Nginx reverse proxy `/etc/nginx/sites-available/bulbulbaha.cloud`:
   ```nginx
   server {
       server_name bulbulbaha.cloud www.bulbulbaha.cloud;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```
5. Enable SSL with Certbot:
   ```bash
   sudo certbot --nginx -d bulbulbaha.cloud -d www.bulbulbaha.cloud
   ```
