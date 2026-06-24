// export default function About() {
//   return (
//     <section
//       id="about"
//       className="py-24 bg-slate-900 text-white"
//     >
//       <div className="max-w-6xl mx-auto px-5">
//         <h2 className="text-4xl font-bold mb-6">
//           About Me
//         </h2>

//         <p className="text-gray-400 leading-8">
//           I am a Full Stack Developer skilled in
//           Next.js, Node.js, NestJS and MySQL.
//         </p>
//       </div>
//     </section>
//   );
// }


// export default function About() {
//   return (
//     <section
//       id="about"
//       className="py-24 bg-slate-900 text-white"
//     >
//       <div className="max-w-6xl mx-auto px-5">
//         <h2 className="text-4xl font-bold mb-6">
//           About Me
//         </h2>

//         <p className="text-gray-400 leading-8 text-lg">
//           I'm Rezaer Rabby, a passionate Full Stack Developer with experience
//           building modern, responsive, and scalable web applications. I enjoy
//           turning ideas into real-world digital solutions using technologies
//           like Next.js, TypeScript, Node.js, NestJS, and MySQL.
//           <br /><br />
//           I focus on writing clean, maintainable code and creating user-friendly
//           experiences. I am continuously learning new technologies and improving
//           my skills to build high-quality software and contribute effectively to
//           development teams.
//         </p>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-5">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>

            <h2 className="text-4xl font-bold mb-6">
              About Me
            </h2>
            <h1 className="text-3xl font-semibold mb-6">
              About Me Building Modern Web Experiences
            </h1>

            <p className="text-gray-400 leading-8 text-lg">
              I'm Rezaer Rabby, a passionate Full Stack Developer with experience
              building modern, responsive, and scalable web applications. I enjoy
              turning ideas into real-world digital solutions using technologies
              like Next.js, TypeScript, Node.js, NestJS, and MySQL.

              <br />
              <br />

              I focus on writing clean, maintainable code and creating
              user-friendly experiences. I am continuously learning new
              technologies and improving my skills to build high-quality
              software and contribute effectively to development teams.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="#contact"
                className="
                  bg-cyan-500
                  hover:bg-cyan-600
                  px-6 py-3
                  rounded-xl
                  transition
                "
              >
                Let's Connect
              </a>

              <a
                href="/Rezaer-Rabby-CV.pdf"
                download
                className="
                  border border-white/20
                  px-6 py-3
                  rounded-xl
                  hover:border-cyan-500
                  transition
                "
              >
                Download CV
              </a>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <Image
              src="/profile.png"
              alt="Rezaer Rabby"
              width={400}
              height={400}
              className="
                rounded-3xl
                border border-white/10
                shadow-2xl
                object-cover
              "
            />

          </div>

        </div>

      </div>
    </section>
  );
}