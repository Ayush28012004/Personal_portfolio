"use client";

import { motion } from "motion/react";
import { siteConfig as defaultConfig } from "@/config/site";
import type { SiteConfig } from "@/config/types";

export default function About({ config = defaultConfig }: { config?: SiteConfig }) {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24"
      >
        <div className="lg:col-span-4">
          <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight sticky top-32 text-[var(--foreground)] flex items-center gap-4">
            <span className="text-[var(--primary)] font-mono text-xl font-normal">01.</span> {config.about.title}
          </h2>
        </div>

        <div className="lg:col-span-8 space-y-6 text-lg text-[var(--muted-foreground)] leading-relaxed">
          {config.about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <p>{config.about.skillsIntro}</p>

          <ul className="grid grid-cols-2 gap-4 font-mono text-sm text-[var(--foreground)] mt-8">
            {config.about.skills.map((skill, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-[var(--primary)]">{">"}</span> {skill}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
