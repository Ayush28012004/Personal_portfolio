"use client";

import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { siteConfig as defaultConfig } from "@/config/site";
import type { SiteConfig } from "@/config/types";

export default function Projects({ config = defaultConfig }: { config?: SiteConfig }) {
  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-[var(--foreground)] flex items-center gap-4">
          <span className="text-[var(--primary)] font-mono text-xl font-normal">03.</span> {config.projects.sectionLabel}
        </h2>
      </div>

      <div className="space-y-24 md:space-y-32">
        {config.projects.items.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group"
          >
            <div className={`lg:col-span-7 ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
              <div className="relative overflow-hidden rounded-2xl bg-[var(--primary-bg)] aspect-[4/3]">
                <div className="absolute inset-0 bg-[var(--primary)]/30 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
              </div>
            </div>

            <div className={`lg:col-span-5 ${index % 2 !== 0 ? "lg:order-1 lg:pr-12" : "lg:pl-12"}`}>
              <p className="font-mono text-sm text-[var(--primary)] mb-4">{config.projects.featuredLabel}</p>
              <h3 className="text-2xl font-serif font-medium mb-6 text-[var(--foreground)]">{project.title}</h3>

              <div className="bg-[var(--card)] p-6 rounded-2xl shadow-xl border border-[var(--border)] mb-6 relative z-20">
                <p className="text-[var(--muted-foreground)] leading-relaxed">{project.description}</p>
              </div>

              <ul className="flex flex-wrap gap-4 font-mono text-xs text-[var(--muted-foreground)] mb-8">
                {project.tech.map((stackItem) => (
                  <li key={`${project.title}-${stackItem}`}>{stackItem}</li>
                ))}
              </ul>

              <div className="flex items-center gap-4 text-[var(--muted-foreground)]">
                <motion.a whileHover={{ y: -2, color: "var(--primary)" }} href={project.github} className="transition-colors">
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a whileHover={{ y: -2, color: "var(--primary)" }} href={project.external} className="transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
