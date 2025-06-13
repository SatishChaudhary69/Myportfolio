import React from 'react';
import { GithubIcon as GitHubIcon, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="bg-dark-base relative overflow-hidden py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-neon-blue/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-purple/20 rounded-full filter blur-3xl animate-float delay-1000"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,249,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <motion.div 
              variants={itemVariants}
              className="mb-10"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
                Satish Chaudhary
              </h3>
            </motion.div>
            
            <motion.nav 
              variants={itemVariants}
              className="mb-10"
            >
              <ul className="flex flex-wrap justify-center gap-8">
                <li>
                  <a 
                    href="#home" 
                    className="text-white/80 hover:text-neon-blue transition-colors duration-300 relative group"
                  >
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    className="text-white/80 hover:text-neon-blue transition-colors duration-300 relative group"
                  >
                    About
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#experience" 
                    className="text-white/80 hover:text-neon-blue transition-colors duration-300 relative group"
                  >
                    Experience
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    className="text-white/80 hover:text-neon-blue transition-colors duration-300 relative group"
                  >
                    Projects
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-white/80 hover:text-neon-blue transition-colors duration-300 relative group"
                  >
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              </ul>
            </motion.nav>
            
            <motion.div 
              variants={itemVariants}
              className="mb-10"
            >
              <ul className="flex items-center gap-6">
                <li>
                  <motion.a 
                    href="https://github.com/SatishChaudhary69" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-3 bg-neon-blue/10 text-neon-blue rounded-lg hover:bg-neon-blue hover:text-dark-base transition-all duration-300 shadow-[0_0_15px_rgba(0,249,255,0.2)] hover:shadow-[0_0_30px_rgba(0,249,255,0.4)]"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="GitHub"
                  >
                    <GitHubIcon size={24} />
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-3 bg-neon-blue/10 text-neon-blue rounded-lg hover:bg-neon-blue hover:text-dark-base transition-all duration-300 shadow-[0_0_15px_rgba(0,249,255,0.2)] hover:shadow-[0_0_30px_rgba(0,249,255,0.4)]"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-3 bg-neon-blue/10 text-neon-blue rounded-lg hover:bg-neon-blue hover:text-dark-base transition-all duration-300 shadow-[0_0_15px_rgba(0,249,255,0.2)] hover:shadow-[0_0_30px_rgba(0,249,255,0.4)]"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Twitter"
                  >
                    <Twitter size={24} />
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    href="https://example.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-3 bg-neon-blue/10 text-neon-blue rounded-lg hover:bg-neon-blue hover:text-dark-base transition-all duration-300 shadow-[0_0_15px_rgba(0,249,255,0.2)] hover:shadow-[0_0_30px_rgba(0,249,255,0.4)]"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Website"
                  >
                    <ExternalLink size={24} />
                  </motion.a>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="text-center"
            >
              <div className="bg-dark-light/50 backdrop-blur-sm p-6 rounded-2xl border border-neon-blue/20 shadow-[0_0_15px_rgba(0,249,255,0.2)]">
                <p className="text-white/80 mb-2">
                  © {currentYear} Satish Chaudhary. All Rights Reserved.
                </p>
                <p className="text-white/60">
                  Made with <span className="text-neon-pink">❤</span> using React
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;