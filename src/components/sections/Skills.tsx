

"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { FaCode } from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-5">

        <p className="text-cyan-400 text-sm font-semibold uppercase text-center">
          My Expertise
        </p>

        <h2 className="text-4xl font-bold text-center mt-3 mb-14">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="
                bg-white/5
                border border-white/10
                rounded-2xl
                p-6
                backdrop-blur-lg
              "
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-5">
                <FaCode className="text-cyan-400 text-xl" />
              </div>

              {/* Skill Name */}
              <h3 className="font-semibold mb-4">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="bg-cyan-400 h-full rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>

              {/* Percentage */}
              <p className="text-xs text-gray-400 mt-2">
                {skill.percentage}%
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}