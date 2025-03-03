import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Project One",
    description: "A beautiful web application built with React and TailwindCSS",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    title: "Project Two",
    description: "E-commerce platform with modern design principles",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    title: "Project Three",
    description: "Mobile-first dashboard application",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80",
    link: "#"
  }
];

const Work = () => {
  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Selected Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-4">
                  <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-200 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors"
                  >
                    View Project
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;