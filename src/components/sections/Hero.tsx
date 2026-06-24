

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        bg-black
        text-white
        overflow-hidden
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-5"
      >
        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <Image
            src="/profile.png"
            alt="Rezaer Rabby"
            width={180}
            height={180}
            className="rounded-full border-4 border-cyan-500 shadow-2xl object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold">
          Rezaer Rabby
        </h1>

        {/* Role */}
        <p className="mt-5 text-xl md:text-2xl text-cyan-400">
          Full Stack Developer
        </p>

        {/* Description */}
        <p className="mt-5 max-w-2xl mx-auto text-gray-400 leading-8">
          I build modern, scalable, and responsive web applications
          using Next.js, TypeScript, Node.js, NestJS, and MySQL.
          Passionate about clean code, problem solving, and creating
          exceptional user experiences.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <a
            href="#projects"
            className="
              bg-cyan-500
              hover:bg-cyan-600
              text-black
              font-semibold
              px-7
              py-3
              rounded-xl
              transition
            "
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="
              border
              border-white/20
              hover:border-cyan-500
              hover:text-cyan-400
              px-7
              py-3
              rounded-xl
              transition
            "
          >
            Get In Touch
          </a>

        </div>
      </motion.div>
    </section>
  );
}