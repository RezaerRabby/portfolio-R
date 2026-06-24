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
//             <div
//               key={index}
//               className="bg-slate-800 p-8 rounded-2xl"
//             >
//               <h3 className="text-2xl font-bold">
//                 {project.title}
//               </h3>

//               <p className="text-gray-400 mt-3">
//                 {project.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-800 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-3">
                {project.description}
              </p>

              <div className="flex gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-slate-700 px-3 py-1 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}