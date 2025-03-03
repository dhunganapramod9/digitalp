import React from 'react';
import { Code, Cpu, Globe } from 'lucide-react';
import myPic from '../assets/images/mypic.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent/80">
              Pramod Dhungana
            </h1>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-xl sm:text-2xl text-gray-300">
                <Cpu className="w-6 h-6 text-accent" />
                <p>Software Engineer and AI Engineer</p>
              </div>
              <div className="flex items-center space-x-3 text-xl sm:text-2xl text-gray-300">
                <Code className="w-6 h-6 text-accent" />
                <p>WEB DEVELOPER</p>
              </div>
              <div className="flex items-center space-x-3 text-xl sm:text-2xl text-gray-300">
                <Globe className="w-6 h-6 text-accent" />
                <p>AR/VR/MR Developer</p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative">
              <img
                src={myPic}
                alt="Pramod Dhungana"
                className="rounded-lg w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-accent/10 rounded-lg group-hover:bg-accent/5 transition-colors duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;