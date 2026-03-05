"use client";

import { Code2, Layers, Wrench } from "lucide-react";

const serviceCards = [
  {
    icon: Code2,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Programming Languages",
    description:
      "Proficient in the core languages that power the web, focusing on clean, semantic, and efficient code structures.",
  },
  {
    icon: Layers,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "Frameworks & Libraries",
    description:
      "Experienced with modern ecosystems to build responsive, scalable, and high-performance web applications.",
  },
  {
    icon: Wrench,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    title: "Tools & Workflow",
    description:
      "Skilled in using industry-standard tools for design, version control, and efficient coding workflows.",
  },
];

// Kelompokkan skills per kategori (sesuai gambar)
// Programming Languages: 6 skills pertama
const programmingLanguages = [
  { name: "HTML", bg: "bg-gradient-to-br from-orange-300 to-orange-500", image: "html-5.png" },
  { name: "CSS", bg: "bg-gradient-to-br from-sky-200 to-sky-400", image: "css-3.png" },
  { name: "JavaScript", bg: "bg-gradient-to-br from-yellow-400 to-amber-600", image: "js.png" },
  { name: "TypeScript", bg: "bg-gradient-to-br from-blue-400 to-blue-600", image: "typescript.png" },
  { name: "PHP", bg: "bg-gradient-to-br from-purple-400 to-purple-600", image: "php.png" },
  { name: "Python", bg: "bg-gradient-to-br from-blue-500 to-indigo-700", image: "python.png" },
];

// Frameworks & Libraries: 3 skills berikutnya + 3 placeholder
const frameworksLibraries = [
  { name: "Next.js", bg: "bg-gradient-to-br from-gray-400 to-gray-900", image: "next-js.png" },
  { name: "Tailwind", bg: "bg-gradient-to-br from-teal-200 to-cyan-400", image: "tailwind.png" },
  { name: "Laravel", bg: "bg-gradient-to-br from-red-300 to-orange-500", image: "laravel.png" },
];

// Tools & Workflow: 3 skills terakhir
const toolsWorkflow = [
  { name: "Figma", bg: "bg-gradient-to-br from-pink-400 to-rose-700", image: "figma.png" },
  { name: "GitHub", bg: "bg-gradient-to-br from-gray-600 to-gray-900", image: "github.png" },
  { name: "VS Code", bg: "bg-gradient-to-br from-blue-500 to-blue-700", image: "vscode.png" },
  { name: "Adobe Photoshop", bg: "bg-gradient-to-br from-blue-400 to-blue-800", image: "photoshop.png" },
  { name: "Adobe Illustrator", bg: "bg-gradient-to-br from-yellow-500 to-orange-700", image: "illustrator.png" },
  { name: "Laragon", bg: "bg-gradient-to-br from-blue-500 to-blue-700", image: "laragon.png" },
];

function SkillGrid({ skills, title, className = "" }) {
  // gabungkan skills + placeholder jadi satu array
  const fullRow = [
    ...skills,
    ...Array.from({ length: 6 - skills.length }).map((_, index) => ({
      name: "Always Learning",
      image: null,
      bg: "border-4 border-dashed opacity-60 border-black",
      placeholder: true,
    })),
  ];

  return (
    <div className="mb-8 overflow-hidden py-3">
      <h4 className={`text-lg font-semibold text-gray-900 mb-4 ${className}`}>{title}</h4>
      <div className="inline-flex animate-scroll-x whitespace-nowrap gap-3">
        {[...fullRow, ...fullRow].map((skill, index) => (
          <div
            key={index}
            className={`${skill.bg} w-40 h-40 rounded-2xl p-4 flex flex-col justify-between text-white hover:scale-105 transition-transform`}
          >
            {skill.placeholder ? (
              <span className="text-md text-black text-center my-auto">
                Always<br />Learning
              </span>
            ) : (
              <>
                <img
                  src={skill.image}
                  alt={`${skill.name} Icon`}
                  className="w-20 h-20 object-contain mx-auto my-auto"
                />
                <span className="text-xs font-medium text-center mt-1">{skill.name}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


export function Services() {
  return (
    <section id="skills" className="w-full px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            <span className="text-sm font-medium text-blue-600">
              My Services & Skills
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What I Bring to the Table
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Specializing in Web Development and UI/UX Design, I offer a diverse
            skill set to bring creative and robust projects to life.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {serviceCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`w-12 h-12 ${card.iconBg} rounded-xl flex items-center justify-center mb-4`}
              >
                <card.icon className={`w-6 h-6 ${card.iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Skills Grids - 2 grid kebawah per kategori */}
        <div className="space-y-8">
          {/* align first category title to the right */}
          <SkillGrid skills={programmingLanguages} className="text-center" title="Programming Languages" />
          <SkillGrid skills={frameworksLibraries} className="text-center" title="Frameworks & Libraries" />
          <SkillGrid skills={toolsWorkflow} className="text-center" title="Tools & Workflow" />
        </div>
      </div>
    </section>
  );
}
