"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 text-white">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold">
          Rezaer Rabby
        </h1>

        <p className="mt-4 text-gray-400 text-xl">
          Full Stack Developer
        </p>
      </motion.div>

    </section>
  );
}