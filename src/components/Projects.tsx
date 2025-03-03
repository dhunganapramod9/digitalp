import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Leaf, Users, LineChart, Cloud, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  color: string;
}

const projects: Project[] = [
  {
    title: "MedTrain AI",
    description: "Students spend 2,000 hours studying theory but only 50-100 hours practicing patient communication, with 30% feeling unprepared. With 68% of medical errors linked to poor communication, MedTrain AI uses Quest 3 VR to give medical students unlimited practice opportunities in a safe environment.",
    icon: <Brain className="w-12 h-12" />,
    link: "https://dorahacks.io/buidl/19422/",
    color: "from-purple-500 to-blue-500"
  },
  {
    title: "EcoAide",
    description: "Addressing the 76% of donors who hesitate due to lack of transparency in environmental giving. While environmental donations grow 14% annually, half feel disconnected from their impact. EcoAide uses AI to match donors with verified charities and provides real-time impact tracking.",
    icon: <Leaf className="w-12 h-12" />,
    link: "https://dulcet-pie-b5a77b.netlify.app/",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Career Compass",
    description: "With 43% of asylum seekers holding advanced degrees but 70% working below their qualification level, Career Compass bridges this gap. Supporting 2.2 million annual asylum applicants globally, we connect skilled individuals with mentors and resources to rebuild careers effectively.",
    icon: <Users className="w-12 h-12" />,
    link: "https://devpost.com/software/career-compass-1fbe0g",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "SortViz",
    description: "A data-driven approach to algorithm selection, comparing sorting methods across 50,000 random numbers. Testing revealed Merge Sort performed 80% faster than traditional methods, helping developers make informed decisions based on real performance metrics rather than theory.",
    icon: <LineChart className="w-12 h-12" />,
    link: "https://github.com/dhunganapramod9/Sorting",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "WeatherNow",
    description: "My first hands-on web development project, combining HTML, CSS, and JavaScript with real-world API integration. Created to solve the problem of overcomplicated weather apps, WeatherNow delivers a clean, responsive interface for global weather updates.",
    icon: <Cloud className="w-12 h-12" />,
    link: "https://github.com/dhunganapramod9/WeatherAppProject1",
    color: "from-sky-500 to-indigo-500"
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2
  });

  const isEven = index % 2 === 0;
  const branchVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1, transition: { duration: 1.5, delay: index * 0.2 } }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`relative flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'} gap-8 mb-32`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Branch SVG */}
      <svg
        className={`absolute ${isEven ? '-left-20' : '-right-20'} h-32 w-40 ${index === projects.length - 1 ? 'hidden' : ''}`}
        viewBox="0 0 100 150"
        preserveAspectRatio="none"
      >
        <motion.path
          d={isEven ? 'M0,75 C30,75 70,125 100,125' : 'M100,75 C70,75 30,125 0,125'}
          stroke="currentColor"
          className="text-accent"
          strokeWidth="2"
          fill="none"
          variants={branchVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        />
      </svg>

      <motion.div
        className="flex-1 bg-background/90 backdrop-blur-sm rounded-xl border border-accent/20 overflow-hidden hover:border-accent/40 transition-all duration-500"
        animate={{
          scale: isHovered ? 1.02 : 1,
          boxShadow: isHovered ? '0 0 20px rgba(59, 130, 246, 0.2)' : '0 0 0 rgba(59, 130, 246, 0)'
        }}
      >
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              animate={{
                rotateZ: isHovered ? [0, 5, -5, 0] : 0
              }}
              transition={{ duration: 0.5 }}
              className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} p-3 flex items-center justify-center text-white`}
            >
              {project.icon}
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-white transition-colors inline-flex items-center gap-2"
              >
                View Project <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-background to-background" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-white">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical projects and creative solutions
          </p>
        </motion.div>

        <div className="relative pl-20 pr-20">
          {/* Main Branch */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent/30" />
          
          {/* Project Cards */}
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;