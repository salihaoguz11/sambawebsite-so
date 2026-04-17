import type { NavigationItem, PortfolioItem, Service } from "@/lib/types";

export const navItems: NavigationItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "High-converting, scalable websites using Next.js and React with clean architecture and maintainable code.",
    bullets: ["Next.js App Router", "TypeScript architecture", "Component-driven UI"],
  },
  {
    title: "E-commerce",
    description:
      "Shopify solutions designed to increase sales with fast storefronts and smooth checkout experiences.",
    bullets: ["Store setup and migration", "Theme customization", "Conversion-focused flows"],
  },
  {
    title: "UI/UX Design",
    description:
      "Premium interfaces that balance visual identity, usability, and customer trust across every screen.",
    bullets: ["Design systems", "User journey mapping", "Responsive prototypes"],
  },
  {
    title: "Performance Optimization",
    description:
      "Core Web Vitals improvements and frontend optimizations to keep your site fast under real traffic.",
    bullets: ["Lighthouse tuning", "Image and script optimization", "Caching strategy"],
  },
  {
    title: "SEO-ready Development",
    description:
      "Technical SEO baked into development to help search engines crawl, index, and rank your pages.",
    bullets: ["Semantic structure", "Metadata and schema basics", "Accessibility best practices"],
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: "NovaHealth Landing Revamp",
    category: "Healthcare SaaS",
    summary:
      "Redesigned and rebuilt a SaaS landing page with a clearer content hierarchy and faster page delivery.",
    results: "+42% demo requests in 8 weeks",
    linkLabel: "View case preview",
  },
  {
    title: "Lume Storefront Migration",
    category: "Fashion E-commerce",
    summary:
      "Migrated a custom storefront to Shopify with better product discovery and smoother mobile checkout.",
    results: "+31% mobile conversion rate",
    linkLabel: "View case preview",
  },
  {
    title: "Finovo Performance Sprint",
    category: "Fintech Platform",
    summary:
      "Optimized a React application bundle and loading strategy to improve speed on lower-end devices.",
    results: "LCP reduced from 3.9s to 1.8s",
    linkLabel: "View case preview",
  },
];
