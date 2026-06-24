// "use client";

// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     // <section className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">

//       <motion.div
//         initial={{ opacity: 0, y: 80 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-center"
//       >
//         <h1 className="text-6xl font-bold">
//           Rezaer Rabby
//         </h1>

//         <p className="mt-4 text-gray-400 text-xl">
//           Full Stack Developer
//         </p>
//       </motion.div>

//     </section>
//   );
// }



"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">

      {/* Blur Background */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-5"
      >

        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <Image
            src="/profile.png"
            alt="Rezaer Rabby"
            width={180}
            height={180}
            className="rounded-full border-4 border-cyan-500 shadow-lg"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold">
          Rezaer Rabby
        </h1>

        <p className="mt-5 text-xl text-gray-400">
          Full Stack Developer
        </p>

        <p className="mt-4 max-w-2xl mx-auto text-gray-500">
          Building modern web applications with Next.js, NestJS, TypeScript and MySQL.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">

          <a
            href="/Rezaer-Rabby-CV.pdf"
            download
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl transition"
          >
            Download CV
          </a>

          <a
            href="https://github.com/your-github"
            target="_blank"
            className="bg-slate-800 p-4 rounded-xl hover:bg-slate-700 transition"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            className="bg-slate-800 p-4 rounded-xl hover:bg-slate-700 transition"
          >
            <FaLinkedin size={24} />
          </a>

        </div>

      </motion.div>
    </section>
  );
}