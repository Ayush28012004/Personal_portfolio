export type NavLink = {
  name: string;
  href: string;
};

export type SocialLinks = {
  github: string;
  linkedin: string;
  twitter: string;
  instagram: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  external: string;
  image: string;
};

export type SiteConfig = {
  name: string;
  initials: string;
  role: string;
  description: string;
  email: string;
  socials: SocialLinks;
  nav: NavLink[];
  seo: {
    siteUrl: string;
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
  };
  hero: {
    greeting: string;
    heading: string;
    subheading: string;
    description: string;
    image: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta: {
      label: string;
      href: string;
    };
  };
  about: {
    title: string;
    paragraphs: string[];
    skillsIntro: string;
    skills: string[];
  };
  experience: {
    sectionLabel: string;
    items: ExperienceItem[];
  };
  projects: {
    sectionLabel: string;
    featuredLabel: string;
    items: ProjectItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    buttonText: string;
    subject: string;
    body: string;
  };
};
