import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
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

  const itemVariants = {
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
    <section id="about" className="py-20 bg-[#1E0087]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black text-[#FFE135] mb-4 tracking-tight"
                style={{ textShadow: '4px 4px 0px rgba(255, 20, 147, 0.5)' }}>
              About Me
            </h2>
            <div className="w-32 h-2 bg-[#FF1493] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <motion.div
              variants={itemVariants}
              className="bg-[#FFE135] p-8 rounded-3xl shadow-[8px_8px_0px_#FF1493] transform hover:translate-x-1 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[#1E0087] rounded-2xl">
                  <Code size={36} className="text-[#FFE135]" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-[#1E0087] text-center mb-4">
                Development
              </h3>
              <p className="text-[#1E0087] text-center text-lg">
                3+ years of experience in web development, specializing in HTML, CSS, JavaScript, React, and modern web technologies.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-[#FFE135] p-8 rounded-3xl shadow-[8px_8px_0px_#FF1493] transform hover:translate-x-1 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[#1E0087] rounded-2xl">
                  <Briefcase size={36} className="text-[#FFE135]" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-[#1E0087] text-center mb-4">
                Professional
              </h3>
              <p className="text-[#1E0087] text-center text-lg">
                Experienced in startup environments and freelancing, creating engaging websites, portfolios, and thumbnails for content creators.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-[#FFE135] p-8 rounded-3xl shadow-[8px_8px_0px_#FF1493] transform hover:translate-x-1 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[#1E0087] rounded-2xl">
                  <GraduationCap size={36} className="text-[#FFE135]" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-[#1E0087] text-center mb-4">
                Education
              </h3>
              <p className="text-[#1E0087] text-center text-lg">
                Currently pursuing BCA from SCHEMS College, affiliated with Pokhara University, while actively engaging in web development projects.
              </p>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-16">
            <div className="bg-[#FFE135] p-10 rounded-3xl shadow-[12px_12px_0px_#FF1493]">
              <div className="space-y-6">
                <p className="text-[#1E0087] text-lg leading-relaxed">
                  I'm a passionate web developer with over 3 years of hands-on experience in creating dynamic and responsive web applications. My expertise spans across the full web development stack, with a particular focus on modern frontend technologies like React, JavaScript, and responsive design principles.
                </p>
                <p className="text-[#1E0087] text-lg leading-relaxed">
                  As a freelancer and startup collaborator, I've had the opportunity to work on diverse projects, from creating engaging portfolios for content creators to developing complex web applications. My approach combines technical expertise with creative problem-solving to deliver solutions that exceed client expectations.
                </p>
                <p className="text-[#1E0087] text-lg leading-relaxed">
                  Currently pursuing my Bachelor's in Computer Application at SCHEMS College, I'm constantly expanding my knowledge while applying academic concepts to real-world projects. Beyond coding, I'm passionate about UI/UX design, content creation, and staying updated with the latest web technologies and industry trends.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;