"use client";

import { motion } from "motion/react";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)]"
    >
      <Link href="/" className="text-xl font-serif font-semibold tracking-tight text-[var(--foreground)]">
        {siteConfig.initials}
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {siteConfig.nav.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <a
          href={siteConfig.socials.github}
          target="_blank"
          rel="noreferrer"
          className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href={siteConfig.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </motion.header>
  );
}
