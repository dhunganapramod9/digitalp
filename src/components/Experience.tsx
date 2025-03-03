import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Code, Brain } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
  icon: React.ReactNode;
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer Fellowship",
    company: "Headstarter AI",
    location: "Manhattan, NY",
    date: "June 2024 - Sep. 2024",
    description: [
      "Developed a multi-turn chatbot using LlamaIndex and Pinecone, improving response relevance by 40% based on user feedback.",
      "Implemented Retrieval-Augmented Generation (RAG) with vector embeddings, reducing hallucination rates by 35%.",
      "Designed a fine-tuned NLP model for personalized career coaching, achieving 92% accuracy in user intent recognition.",
      "Built a pipeline integrating GPT-4o and Whisper for real-time speech-to-text summarization, reducing manual transcription time by 57%."
    ],
    icon: <Code className="w-8 h-8 text-accent" />
  },
  {
    title: "Undergraduate Research Assistant I",
    company: "CUNY LaGuardia Community College",
    location: "Long Island City, NY",
    date: "Jan. 2024 - Mar. 2024",
    description: [
      "Conducted Q-stem research under the mentorship of Professor Lucie Mingla, Meta AI Assistant researcher.",
      "Analyzed the capabilities of Meta Smart Glass AI, focusing on feature-based recognition.",
      "Utilized advanced MSA and PCA algorithms to achieve real-world accuracy rates exceeding 93%.",
      "Presented weekly research reports showcasing geometric solutions with an error rate consistently below 6.3%."
    ],
    icon: <Brain className="w-8 h-8 text-accent" />
  },
  {
    title: "Software Engineer Intern",
    company: "V-ELMS Co",
    location: "Brooklyn, NY",
    date: "Sep. 2023 - Dec. 2023",
    description: [
      "Utilized Git for version control, managing branching, pull requests, and seamless feature integration.",
      "Developed and optimized full-stack web applications using the MERN stack, improving performance by 20%.",
      "Integrated Firebase for real-time database management and user authentication.",
      "Leveraged generative AI models to automate content generation, increasing development efficiency by 30%."
    ],
    icon: <Briefcase className="w-8 h-8 text-accent" />
  }
];

const ExperienceCard = ({ item, index }: { item: ExperienceItem; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative flex items-start gap-6 mb-12"
    >
      <div className="absolute left-0 w-0.5 h-full bg-accent/30" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-full bg-background/80 border-2 border-accent flex items-center justify-center">
          {item.icon}
        </div>
        <div className="absolute h-full w-0.5 bg-accent/30 left-6 top-12 -z-10" />
      </div>

      <div className="flex-1 bg-background/80 backdrop-blur-sm p-6 rounded-lg border border-accent/20 hover:border-accent/40 transition-colors">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
            <p className="text-accent">{item.company}</p>
            <p className="text-sm text-gray-400">{item.location}</p>
          </div>
          <span className="text-sm text-gray-400 whitespace-nowrap">{item.date}</span>
        </div>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mt-4">
          {item.description.map((desc, i) => (
            <li key={i} className="text-sm leading-relaxed">
              <span className="ml-2">{desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  return (
    <section id="experience" className="py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
            Work Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A timeline of my professional journey and key achievements
          </p>
        </motion.div>

        <div className="relative pl-6">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} item={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;