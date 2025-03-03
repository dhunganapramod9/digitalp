import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, Globe, Github, Cpu, Server } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const skills = [
    { icon: <Code className="w-8 h-8" />, title: "Full Stack Development", color: "from-blue-500 to-cyan-500" },
    { icon: <Brain className="w-8 h-8" />, title: "Machine Learning", color: "from-purple-500 to-pink-500" },
    { icon: <Globe className="w-8 h-8" />, title: "Web Technologies", color: "from-green-500 to-emerald-500" },
    { icon: <Github className="w-8 h-8" />, title: "Open Source", color: "from-orange-500 to-red-500" },
    { icon: <Cpu className="w-8 h-8" />, title: "AI Development", color: "from-indigo-500 to-purple-500" },
    { icon: <Server className="w-8 h-8" />, title: "System Architecture", color: "from-pink-500 to-rose-500" }
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-background to-background" />
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-white">
            More of Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={itemVariants}
            className="prose prose-invert max-w-none"
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Hello, I'm Pramod Dhungana, a passionate developer from Nepal. I am a self-taught full-stack web developer and a software engineer. My zeal for software development lies in conceptualizing ideas and bringing them to life with elegant interfaces.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I am meticulous about the experience, architecture, and code quality in everything I create. Additionally, I am an open-source enthusiast and contributor. I've gained valuable insights from the open-source community, and I appreciate the collaborative and knowledge-sharing aspects of the open-source world.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                <div className="relative bg-background/80 backdrop-blur-sm p-6 rounded-lg border border-accent/20 hover:border-accent/40 transition-all duration-300">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} p-4 mb-4 text-white`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{skill.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/dhunganapramod9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent/10 text-accent hover:bg-accent/20 px-6 py-3 rounded-full transition-colors"
          >
            <Github className="w-5 h-5" />
            View My Work
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;