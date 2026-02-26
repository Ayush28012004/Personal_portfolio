"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig as defaultConfig } from "@/config/site";
import type { SiteConfig } from "@/config/types";

export default function Experience({ config = defaultConfig }: { config?: SiteConfig }) {
  const [activeTab, setActiveTab] = useState(0);
  const experienceItems = config.experience.items;

  const activeExperience = useMemo(() => {
    if (experienceItems.length === 0) {
      return null;
    }

    return experienceItems[activeTab] ?? experienceItems[0];
  }, [activeTab, experienceItems]);

  if (!activeExperience) {
    return null;
  }

  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-[var(--foreground)] flex items-center gap-4">
          <span className="text-[var(--primary)] font-mono text-xl font-normal">02.</span> {config.experience.sectionLabel}
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col md:flex-row gap-8 md:gap-12"
      >
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-[var(--border)] min-w-[160px]">
          {experienceItems.map((experience, index) => (
            <button
              key={`${experience.company}-${experience.role}`}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-3 text-left font-mono text-sm whitespace-nowrap transition-all duration-200 border-b-2 md:border-b-0 md:border-l-2 -mb-[2px] md:-mb-0 md:-ml-[2px] ${
                activeTab === index
                  ? "border-[var(--primary)] text-[var(--primary)] bg-[var(--primary-bg)]"
                  : "border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]"
              }`}
            >
              {experience.company}
            </button>
          ))}
        </div>

        <div className="flex-1 min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeExperience.company}-${activeExperience.role}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-medium mb-1 text-[var(--foreground)]">
                {activeExperience.role} <span className="text-[var(--primary)]">@ {activeExperience.company}</span>
              </h3>
              <p className="font-mono text-sm text-[var(--muted-foreground)] mb-6">{activeExperience.period}</p>

              <ul className="space-y-4">
                {activeExperience.description.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-[var(--muted-foreground)] leading-relaxed">
                    <span className="text-[var(--primary)] mt-1.5 text-xs">{">"}</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
