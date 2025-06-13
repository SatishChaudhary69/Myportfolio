import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/skillsData';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  // Group skills by category
  const categories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    tools: skills.filter(skill => skill.category === 'tools'),
    languages: skills.filter(skill => skill.category === 'languages'),
  };

  return (
    <section id="skills" className="py-20 bg-dark-base relative overflow-hidden">
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
              My Skills
            </h2>
            <div className="w-32 h-2 bg-neon-pink mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SkillCategory 
              title="Frontend Development" 
              skills={categories.frontend} 
              inView={inView} 
              startIndex={0} 
            />
            
            <SkillCategory 
              title="Backend Development" 
              skills={categories.backend} 
              inView={inView} 
              startIndex={categories.frontend.length} 
            />
            
            <SkillCategory 
              title="Tools & DevOps" 
              skills={categories.tools} 
              inView={inView} 
              startIndex={categories.frontend.length + categories.backend.length} 
            />
            
            <SkillCategory 
              title="Programming Languages" 
              skills={categories.languages} 
              inView={inView} 
              startIndex={categories.frontend.length + categories.backend.length + categories.tools.length} 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface SkillCategoryProps {
  title: string;
  skills: {
    name: string;
    level: number;
    category: string;
  }[];
  inView: boolean;
  startIndex: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, inView, startIndex }) => {
  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: startIndex * 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: 0.2 + i * 0.05,
      },
    }),
  };

  return (
    <motion.div 
      variants={categoryVariants}
      className="bg-dark-light/50 backdrop-blur-sm p-8 rounded-2xl border border-neon-blue/20 shadow-[0_0_15px_rgba(0,249,255,0.2)] hover:shadow-[0_0_30px_rgba(0,249,255,0.3)] transition-all duration-300"
    >
      <h3 className="text-2xl font-bold text-neon-blue mb-6 pb-3 border-b border-neon-blue/20">
        {title}
      </h3>
      
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            custom={index}
            variants={itemVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-white font-medium">
                {skill.name}
              </span>
              <span className="text-sm text-neon-pink">
                {skill.level === 1 && "Basic"}
                {skill.level === 2 && "Intermediate"}
                {skill.level === 3 && "Proficient"}
                {skill.level === 4 && "Advanced"}
                {skill.level === 5 && "Expert"}
              </span>
            </div>
            <div className="w-full bg-dark-base/50 rounded-full h-2">
              <motion.div
                className="bg-neon-blue h-2 rounded-full shadow-[0_0_10px_rgba(0,249,255,0.5)]"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level * 20}%` }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;