import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';
import { experiences } from '../data/experienceData';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-dark-base relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-neon-blue/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-purple/20 rounded-full filter blur-3xl animate-float delay-1000"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,249,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={headerVariants} className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black text-neon-blue mb-4 tracking-tight"
                style={{ textShadow: '4px 4px 0px rgba(255, 20, 147, 0.5)' }}>
              Work Experience
            </h2>
            <div className="w-32 h-2 bg-neon-pink mx-auto rounded-full"></div>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-neon-blue/30"></div>

            {experiences.map((exp, index) => (
              <TimelineItem 
                key={exp.id} 
                experience={exp} 
                index={index} 
                inView={inView} 
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  experience: {
    id: number;
    title: string;
    company: string;
    location: string;
    period: string;
    description: string[];
    technologies: string[];
  };
  index: number;
  inView: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ experience, index, inView }) => {
  const isEven = index % 2 === 0;
  
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: isEven ? -20 : 20,
      y: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      className={`flex items-center justify-between mb-8 last:mb-0 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={itemVariants}
    >
      <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
        <div className="bg-dark-light/50 backdrop-blur-sm p-6 rounded-2xl border border-neon-blue/20 shadow-[0_0_15px_rgba(0,249,255,0.2)] hover:shadow-[0_0_30px_rgba(0,249,255,0.3)] transition-all duration-300">
          <h3 className="text-2xl font-bold text-neon-blue mb-2">
            {experience.title}
          </h3>
          <p className="text-neon-pink font-medium mb-2">
            {experience.company}, {experience.location}
          </p>
          <p className="text-white/70 mb-4">{experience.period}</p>
          <ul className={`mb-4 text-white/90 space-y-2 ${isEven ? 'list-inside' : 'list-inside'}`}>
            {experience.description.map((item, i) => (
              <li key={i} className="before:content-['▹'] before:text-neon-blue before:mr-2">
                {item}
              </li>
            ))}
          </ul>
          <div className={`flex flex-wrap gap-2 ${isEven ? 'justify-end' : 'justify-start'}`}>
            {experience.technologies.map((tech, i) => (
              <span 
                key={i} 
                className="px-3 py-1 text-sm bg-neon-blue/10 text-neon-blue rounded-full border border-neon-blue/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:flex justify-center items-center">
        <div className="p-3 bg-neon-blue rounded-full shadow-[0_0_15px_rgba(0,249,255,0.5)] z-10">
          <Briefcase size={24} className="text-dark-base" />
        </div>
      </div>

      <div className="hidden md:block w-5/12"></div>
    </motion.div>
  );
};

export default Experience;