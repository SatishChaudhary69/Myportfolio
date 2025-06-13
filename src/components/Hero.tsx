import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, GithubIcon as GitHubIcon, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen bg-white dark:bg-dark-base overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-neon-blue/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-purple/20 rounded-full filter blur-3xl animate-float delay-1000"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,249,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-start pt-32 md:pt-40">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
          {/* Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center md:text-left"
          >
            <motion.h2 
              variants={itemVariants} 
              className="text-neon-blue text-2xl md:text-3xl font-bold mb-6 tracking-wider inline-block"
            >
              Portfolio
            </motion.h2>
            
            <motion.h1 
              variants={itemVariants} 
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-gray-900 dark:text-white tracking-tight leading-tight"
              style={{
                textShadow: '0 0 20px rgba(0,249,255,0.3), 0 0 40px rgba(0,249,255,0.2)'
              }}
            >
              I'm Satish<br/>Chaudhary
            </motion.h1>
            
            <motion.h3 
              variants={itemVariants} 
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8"
            >
              <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
                Full Stack Developer & Content Creator
              </span>
            </motion.h3>
            
            <motion.p 
              variants={itemVariants} 
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto md:mx-0"
            >
              A passionate full-stack developer specializing in creating modern web applications 
              and digital experiences. Also experienced in content creation and thumbnail design 
              for social media platforms.
            </motion.p>
            
            <motion.div 
              variants={itemVariants} 
              className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start mb-10"
            >
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-neon-blue/10 text-neon-blue font-bold rounded-full text-lg border border-neon-blue hover:bg-neon-blue hover:text-dark-base transition-all duration-300"
              >
                Contact Me
              </motion.a>
              <motion.a 
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-neon-pink/10 text-neon-pink font-bold rounded-full text-lg border border-neon-pink hover:bg-neon-pink hover:text-dark-base transition-all duration-300"
              >
                View My Work
              </motion.a>
            </motion.div>
            
            <motion.div className="flex gap-8 justify-center md:justify-start">
              <motion.a
                href="https://github.com/SatishChaudhary69"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-neon-blue hover:text-neon-pink transition-colors duration-300"
              >
                <GitHubIcon size={32} className="filter drop-shadow-[0_0_8px_rgba(0,249,255,0.5)]" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-neon-blue hover:text-neon-pink transition-colors duration-300"
              >
                <Linkedin size={32} className="filter drop-shadow-[0_0_8px_rgba(0,249,255,0.5)]" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-neon-blue hover:text-neon-pink transition-colors duration-300"
              >
                <Twitter size={32} className="filter drop-shadow-[0_0_8px_rgba(0,249,255,0.5)]" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-neon-blue hover:text-neon-pink transition-colors duration-300"
              >
                <Instagram size={32} className="filter drop-shadow-[0_0_8px_rgba(0,249,255,0.5)]" />
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-neon-blue hover:text-neon-pink transition-colors duration-300"
              >
                <Facebook size={32} className="filter drop-shadow-[0_0_8px_rgba(0,249,255,0.5)]" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative order-first md:order-last"
          >
            <div className="relative w-full h-[600px] md:h-[700px]">
              <img 
                src="https://i.postimg.cc/hvW0wRpz/viber-image-2025-04-25-14-41-38-373.jpg" 
                alt="Satish Chaudhary"
                className="w-full h-full object-cover object-center"
              />
              
              {/* Decorative glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neon-blue/20 pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.a 
        href="#about"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-neon-blue animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={40} className="filter drop-shadow-[0_0_8px_rgba(0,249,255,0.5)]" />
      </motion.a>
    </section>
  );
};

export default Hero;