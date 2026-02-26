"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { siteConfig as defaultConfig } from "@/config/site";
import type { SiteConfig } from "@/config/types";

export default function Hero({ config = defaultConfig }: { config?: SiteConfig }) {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 pt-24 pb-12 max-w-7xl mx-auto">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-[var(--primary)] font-mono tracking-wide uppercase text-sm mb-6">
              {config.hero.greeting}
            </h2>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] tracking-tight mb-6 text-[var(--foreground)]"
          >
            {config.hero.heading}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.1] tracking-tight mb-8 text-[var(--muted-foreground)]"
          >
            {config.hero.subheading}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-lg text-[var(--muted-foreground)] max-w-xl leading-relaxed mb-12">{config.hero.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-6"
          >
            <motion.a
              href={config.hero.primaryCta.href}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px var(--primary-bg)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-[var(--primary)] text-[var(--background)] px-8 py-4 rounded-full font-medium transition-colors hover:bg-[var(--primary-hover)]"
            >
              {config.hero.primaryCta.label}
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href={config.hero.secondaryCta.href}
              whileHover={{ scale: 1.05, color: "var(--primary)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-[var(--foreground)] font-medium transition-colors"
            >
              {config.hero.secondaryCta.label}
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4, type: "spring" }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
            <div className="absolute inset-0 border-2 border-[var(--primary)] rounded-2xl translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="absolute inset-0 bg-[var(--primary-bg)] rounded-2xl mix-blend-overlay z-10 hover:bg-transparent transition-colors duration-300" />
            <img
              src={config.hero.image}
              alt={`${config.name} portrait`}
              referrerPolicy="no-referrer"
              className="relative z-0 w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
