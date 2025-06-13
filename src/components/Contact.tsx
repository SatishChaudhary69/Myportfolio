import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current!,
        'YOUR_PUBLIC_KEY'
      );

      if (result.text === 'OK') {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setStatus({ type: null, message: '' });
      }, 5000);
    }
  };

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
    <section id="contact" className="py-20 bg-dark-base relative overflow-hidden">
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
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={headerVariants} className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black text-neon-blue mb-4 tracking-tight"
                style={{ textShadow: '4px 4px 0px rgba(255, 20, 147, 0.5)' }}>
              Get In Touch
            </h2>
            <div className="w-32 h-2 bg-neon-pink mx-auto rounded-full mb-8"></div>
            <p className="text-white/80 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            <motion.div 
              variants={itemVariants} 
              className="md:col-span-2 space-y-6"
            >
              <motion.div 
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
                className="bg-dark-light/50 backdrop-blur-sm p-6 rounded-2xl border border-neon-blue/20 shadow-[0_0_15px_rgba(0,249,255,0.2)] hover:shadow-[0_0_30px_rgba(0,249,255,0.3)] transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="p-3 bg-neon-blue/10 rounded-full flex-shrink-0">
                    <MapPin className="text-neon-blue" />
                  </div>
                  <div className="ml-4 min-w-0 flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Location
                    </h3>
                    <motion.a 
                      href="https://www.google.com/maps/place/Koteshwor,+Kathmandu,+Nepal"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className="text-[#00aaff] hover:text-[#007acc] font-medium cursor-pointer transition-all duration-300 hover:underline break-words block"
                      style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                      title="Click to view location on Google Maps"
                    >
                      Kathmandu, Koteshwor
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
                className="bg-dark-light/50 backdrop-blur-sm p-6 rounded-2xl border border-neon-blue/20 shadow-[0_0_15px_rgba(0,249,255,0.2)] hover:shadow-[0_0_30px_rgba(0,249,255,0.3)] transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="p-3 bg-neon-blue/10 rounded-full flex-shrink-0">
                    <Mail className="text-neon-blue" />
                  </div>
                  <div className="ml-4 min-w-0 flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Email
                    </h3>
                    <motion.a 
                      href="mailto:Satisfyineverything777@gmail.com"
                      whileHover={{ scale: 1.02 }}
                      className="text-[#00aaff] hover:text-[#007acc] font-medium cursor-pointer transition-all duration-300 hover:underline text-sm sm:text-base leading-relaxed block"
                      style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                      title="Click to send email"
                    >
                      Satisfyineverything777@gmail.com
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
                className="bg-dark-light/50 backdrop-blur-sm p-6 rounded-2xl border border-neon-blue/20 shadow-[0_0_15px_rgba(0,249,255,0.2)] hover:shadow-[0_0_30px_rgba(0,249,255,0.3)] transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="p-3 bg-neon-blue/10 rounded-full flex-shrink-0">
                    <Phone className="text-neon-blue" />
                  </div>
                  <div className="ml-4 min-w-0 flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Phone
                    </h3>
                    <motion.a 
                      href="tel:+9779814710000"
                      whileHover={{ scale: 1.02 }}
                      className="text-[#00aaff] hover:text-[#007acc] font-medium cursor-pointer transition-all duration-300 hover:underline break-words block"
                      style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                      title="Click to call"
                    >
                      +977-9814710000
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              className="md:col-span-3 bg-dark-light/50 backdrop-blur-sm p-8 rounded-2xl border border-neon-blue/20 shadow-[0_0_15px_rgba(0,249,255,0.2)] hover:shadow-[0_0_30px_rgba(0,249,255,0.3)] transition-all duration-300"
            >
              {status.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded-lg ${
                    status.type === 'success' 
                      ? 'bg-green-500/10 text-green-400' 
                      : 'bg-red-500/10 text-red-400'
                  }`}
                >
                  <div className="flex items-center">
                    {status.type === 'success' ? (
                      <CheckCircle className="w-5 h-5 mr-2" />
                    ) : (
                      <AlertCircle className="w-5 h-5 mr-2" />
                    )}
                    {status.message}
                  </div>
                </motion.div>
              )}

              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-dark-base/50 border border-neon-blue/20 rounded-lg text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/50 placeholder-white/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-dark-base/50 border border-neon-blue/20 rounded-lg text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/50 placeholder-white/50"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark-base/50 border border-neon-blue/20 rounded-lg text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/50 placeholder-white/50"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-2 bg-dark-base/50 border border-neon-blue/20 rounded-lg text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/50 placeholder-white/50 resize-none"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg bg-neon-blue text-dark-base font-bold flex items-center justify-center shadow-[0_0_15px_rgba(0,249,255,0.3)] hover:shadow-[0_0_30px_rgba(0,249,255,0.5)] transition-all duration-300 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-dark-base" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;