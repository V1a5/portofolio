"use client";

import { link } from "fs";
import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Otojadi (E-commerce Template Subscription)",
    link: "https://otojadi.xo.je",
    description: "A modern e‑commerce platform designed for selling digital products and templates. Built with a focus on clean UI, responsive design, and reusable components. Key features include product catalog, detail pages, shopping cart, and etc.",
    image: "../otojadi.png",
    tags: [
      { name: "PHP", color: "bg-purple-100 text-purple-600" },
      { name: "Tailwind CSS", color: "bg-blue-100 text-blue-600" },
      { name: "MySQL", color: "bg-sky-100 text-sky-600" },
    ],
  },
  {
    id: 2,
    title: "VirtualZone.Id (Electronic E-commerce)",
    description: "A modern e‑commerce platform designed for selling electronic products. Built with a focus on clean UI, responsive design, and reusable components. Key features include product catalog, detail pages, shopping cart, secure checkout, and etc.",
    image: "../vz.png",
    tags: [
      { name: "PHP", color: "bg-purple-100 text-purple-600" },
      { name: "Bootstrap", color: "bg-blue-100 text-blue-600" },
      { name: "MySQL", color: "bg-sky-100 text-sky-600" },
    ],
  },
  {
    id: 3,
    title: "Uni Book (Bookstore E-commerce)",
    description: "A modern e‑commerce platform designed for selling books and academic resources. Built with a focus on clean UI, responsive design, and reusable components. Key features include book catalog, detail pages, and shopping cart functionality.",
    image: "../unibook.png",
    tags: [
      { name: "PHP", color: "bg-purple-100 text-purple-600" },
      { name: "Bootstrap", color: "bg-blue-100 text-blue-600" },
      { name: "MySQL", color: "bg-sky-100 text-sky-600" },
    ],
  },
  {
    id: 4,
    title: "Portofolio UI/UX Design",
    link: "https://www.figma.com/design/uGOtwzppWajjtq3xKaSkCa/portofolio?node-id=0-1&t=G2yjtMYlLn08tfkO-1",
    description: "Complete UI/UX overhaul of the existing university student portal to improve accessibility and mobile responsiveness.",
    image: "../portome.png",
    tags: [
      { name: "Figma", color: "bg-purple-100 text-purple-600" },
      { name: "UI/UX Design", color: "bg-pink-100 text-pink-600" },
      { name: "Prototyping", color: "bg-indigo-100 text-indigo-600" },
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="w-full px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
            <span className="text-sm font-medium text-blue-600">My Portfolio</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Selected <span className="gradient-text">Projects</span>
          </h2>

          <p className="text-gray-500 max-w-2xl">
            A collection of projects showcasing my journey in full-stack development and product design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay Actions */}
                <div className="absolute top-4 right-4 flex gap-2">
                  {/* <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors">
                    <Code2 className="w-4 h-4 text-gray-700" />
                  </button> */}
                  {project.link &&
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-full flex items-center justify-center"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-700" />
                    </a>
                  </button>}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 overflow-y-scroll scrollbar-hide">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${tag.color}`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}