"use client";

import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-8 text-center"
    >
      <div className="flex justify-center gap-6 mb-6 md:hidden">
        <a href={siteConfig.socials.github} className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href={siteConfig.socials.linkedin} className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href={siteConfig.socials.twitter} className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">
          <Twitter className="w-5 h-5" />
        </a>
        <a href={siteConfig.socials.instagram} className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">
          <Instagram className="w-5 h-5" />
        </a>
      </div>
      <p className="font-mono text-xs text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors cursor-pointer">
        Designed & Built by {siteConfig.name}
      </p>
    </motion.footer>
  );
}
