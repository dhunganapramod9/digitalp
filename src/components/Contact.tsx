import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
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

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-background to-background" />
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-white">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <motion.a
            variants={itemVariants}
            href="mailto:dhunganapramod98@gmail.com"
            className="flex items-center gap-3 px-6 py-3 bg-accent/10 rounded-full hover:bg-accent/20 transition-colors group"
          >
            <Mail className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
            <span className="text-accent group-hover:text-white transition-colors">Email</span>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="https://www.linkedin.com/in/pramod32/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-accent/10 rounded-full hover:bg-accent/20 transition-colors group"
          >
            <Linkedin className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
            <span className="text-accent group-hover:text-white transition-colors">LinkedIn</span>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="https://github.com/dhunganapramod9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-accent/10 rounded-full hover:bg-accent/20 transition-colors group"
          >
            <Github className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
            <span className="text-accent group-hover:text-white transition-colors">GitHub</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;