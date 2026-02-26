import { experienceData } from "@/data/experience";
import { projectsData } from "@/data/projects";
import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  name: "John",
  initials: "JD.",
  role: "Software Engineer",
  description: "I build things for the web and occasionally design.",
  email: "hello@example.com",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
  },
  nav: [
    { name: "About", href: "/#about" },
    { name: "Experience", href: "/#experience" },
    { name: "Work", href: "/#work" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/#contact" },
  ],
  seo: {
    siteUrl: "https://myportfolio.com",
    title: "John Doe | Software Engineer",
    description:
      "A modern portfolio template built with Next.js, Tailwind CSS, and reusable config-driven sections.",
    keywords: [
      "portfolio template",
      "next.js portfolio",
      "software engineer",
      "web developer",
      "tailwind css",
    ],
    ogImage: "https://picsum.photos/seed/portfolio-og/1200/630",
  },
  hero: {
    greeting: "Hi, my name is",
    heading: "John Doe.",
    subheading: "I build things for the web.",
    description:
      "I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.",
    image: "https://picsum.photos/seed/portrait/800/1000",
    primaryCta: {
      label: "Check out my work",
      href: "#work",
    },
    secondaryCta: {
      label: "Get in touch",
      href: "#contact",
    },
  },
  about: {
    title: "About Me",
    paragraphs: [
      "Hello! I'm John Doe, a software engineer based in San Francisco. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.",
      "Shortly after graduating from the University of Washington, I joined the engineering team at Upstatement where I work on a wide variety of interesting and meaningful projects on a daily basis.",
    ],
    skillsIntro: "Here are a few technologies I've been working with recently:",
    skills: ["JavaScript (ES6+)", "TypeScript", "React", "Node.js", "Next.js", "Tailwind CSS"],
  },
  experience: {
    sectionLabel: "Where I've Worked",
    items: experienceData,
  },
  projects: {
    sectionLabel: "Selected Work",
    featuredLabel: "Featured Project",
    items: projectsData,
  },
  contact: {
    eyebrow: "04. What's Next?",
    title: "Get In Touch",
    description:
      "Although I'm not currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll do my best to get back to you.",
    buttonText: "Say Hello",
    subject: "Portfolio Inquiry",
    body: "Hi John, I found your portfolio and would like to connect.",
  },
};
