import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold mb-10">
          Skills
        </h2>

        <div className="grid md:grid-cols-5 gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800 p-5 rounded-xl text-center"
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}