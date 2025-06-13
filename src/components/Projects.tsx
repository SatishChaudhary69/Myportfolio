import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, GithubIcon as GitHubIcon } from 'lucide-react';
import { projects } from '../data/projectsData';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);

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

  return (
    <section id="projects" className="py-20 bg-dark-light">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={headerVariants} className="text-center mb-16">
            <h2 className="text-6xl font-black text-neon-blue mb-4 tracking-tight"
                style={{ textShadow: '4px 4px 0px rgba(255, 20, 147, 0.5)' }}>
              My Projects
            </h2>
            <div className="w-32 h-2 bg-neon-pink mx-auto rounded-full mb-8"></div>
            
            <div className="flex justify-center space-x-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter('all')}
                className={`px-6 py-3 rounded-full text-lg font-bold transition-all duration-300 ${
                  filter === 'all'
                    ? 'bg-neon-blue text-dark-base shadow-[0_0_15px_rgba(0,249,255,0.5)]'
                    : 'bg-neon-blue/10 text-neon-blue hover:bg-neon-blue/20 border border-neon-blue/30'
                }`}
              >
                All Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter('featured')}
                className={`px-6 py-3 rounded-full text-lg font-bold transition-all duration-300 ${
                  filter === 'featured'
                    ? 'bg-neon-pink text-dark-base shadow-[0_0_15px_rgba(255,20,147,0.5)]'
                    : 'bg-neon-pink/10 text-neon-pink hover:bg-neon-pink/20 border border-neon-pink/30'
                }`}
              >
                Featured
              </motion.button>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index} 
                  inView={inView} 
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link?: string;
    github?: string;
    featured: boolean;
  };
  index: number;
  inView: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, inView }) => {
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="bg-dark-base rounded-xl overflow-hidden border border-neon-blue/20 shadow-[0_0_15px_rgba(0,249,255,0.2)] hover:shadow-[0_0_30px_rgba(0,249,255,0.3)] transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-dark-base/50 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-neon-blue">
                <ExternalLink size={24} />
              </a>
            )}
          </div>
        </div>
        
        {project.featured && (
          <div className="absolute top-4 right-4 bg-neon-pink text-dark-base text-sm font-bold px-3 py-1 rounded-full shadow-[0_0_10px_rgba(255,20,147,0.5)]">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-neon-blue mb-3">
          {project.title}
        </h3>
        
        <p className="text-white/80 mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <span 
              key={i}
              className="px-3 py-1 text-sm bg-neon-blue/10 text-neon-blue rounded-full border border-neon-blue/30"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between">
          {project.link && (
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-neon-blue hover:text-neon-pink transition-colors duration-300"
            >
              <ExternalLink size={16} className="mr-1" />
              <span className="text-sm font-medium">Live Demo</span>
            </motion.a>
          )}
          
          {project.github && (
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-neon-blue hover:text-neon-pink transition-colors duration-300"
            >
              <GitHubIcon size={16} className="mr-1" />
              <span className="text-sm font-medium">Source Code</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;