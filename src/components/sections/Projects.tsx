


// "use client";

// import { motion } from "framer-motion";
// import { projects } from "@/data/projects";

// export default function Projects() {
//   return (
//     <section id="projects" className="py-24 bg-slate-900 text-white">
//       <div className="max-w-6xl mx-auto px-5">

//         <h2 className="text-4xl font-bold mb-10">
//           Projects
//         </h2>

//         <div className="grid md:grid-cols-2 gap-8">

//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ y: -12, scale: 1.02 }}
//               transition={{ duration: 0.25 }}
//               className="
//                 bg-white/5
//                 backdrop-blur-lg
//                 border border-white/10
//                 rounded-2xl
//                 p-8
//                 hover:border-cyan-500
//                 hover:shadow-lg
//                 transition
//               "
//             >

//               <h3 className="text-2xl font-bold">
//                 {project.title}
//               </h3>

//               <p className="text-gray-400 mt-3">
//                 {project.description}
//               </p>

//               <div className="flex flex-wrap gap-2 mt-5">
//                 {project.tech.map((tech, i) => (
//                   <span
//                     key={i}
//                     className="
//                       bg-white/10
//                       border border-white/10
//                       px-3 py-1
//                       rounded-lg
//                       text-sm
//                       text-gray-300
//                     "
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//             </motion.div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-5">

        <h2 className="text-4xl font-bold mb-10 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="
                bg-white/5
                backdrop-blur-lg
                border border-white/10
                rounded-2xl
                overflow-hidden
                hover:border-cyan-500
                hover:shadow-lg
                transition
              "
            >
              {/* Project Image */}
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={500}
                className="w-full h-56 object-cover"
              />

              <div className="p-8">
                {/* Title */}
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mt-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="
                        bg-white/10
                        border border-white/10
                        px-3 py-1
                        rounded-lg
                        text-sm
                        text-gray-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Button */}
                <a
                  href={project.github}
                  target="_blank"
                  className="
                    mt-6 inline-flex items-center gap-2
                    bg-cyan-500 hover:bg-cyan-600
                    px-5 py-3 rounded-xl
                    transition
                  "
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}