"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 px-6 bg-cafe-bg relative overflow-hidden">
      {/* Subtle background illustration */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <circle cx="100" cy="100" r="80" className="text-cafe-accent" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold tracking-tight text-cafe-text mb-8"
        >
          Rooted in Tradition. Served with Care.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-cafe-text/70 leading-relaxed max-w-3xl mx-auto"
        >
          At Southentic Cafe, we serve authentic South Indian breakfasts and flavorful Chinese cuisine, made with fresh ingredients and traditional recipes.
        </motion.p>
      </div>
    </section>
  );
}
