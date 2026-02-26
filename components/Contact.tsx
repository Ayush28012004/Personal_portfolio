"use client";

import { motion } from "motion/react";
import { siteConfig as defaultConfig } from "@/config/site";
import type { SiteConfig } from "@/config/types";

export default function Contact({ config = defaultConfig }: { config?: SiteConfig }) {
  const mailtoHref = `mailto:${config.email}?subject=${encodeURIComponent(config.contact.subject)}&body=${encodeURIComponent(
    config.contact.body,
  )}`;

  return (
    <section id="contact" className="py-32 px-6 md:px-12 max-w-2xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-sm text-[var(--primary)] mb-4">{config.contact.eyebrow}</p>
        <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight mb-6 text-[var(--foreground)]">
          {config.contact.title}
        </h2>
        <p className="text-lg text-[var(--muted-foreground)] mb-12 leading-relaxed">{config.contact.description}</p>

        <motion.a
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px var(--primary-bg)" }}
          whileTap={{ scale: 0.95 }}
          href={mailtoHref}
          className="inline-flex items-center justify-center px-8 py-4 border border-[var(--primary)] text-[var(--primary)] rounded-full font-medium hover:bg-[var(--primary-bg)] transition-colors duration-300"
        >
          {config.contact.buttonText}
        </motion.a>
      </motion.div>
    </section>
  );
}
