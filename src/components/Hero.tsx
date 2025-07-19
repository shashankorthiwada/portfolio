'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Twitter, ArrowDown } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentChar, setCurrentChar] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const texts = useMemo(() => [
    'Software Developer',
    'Full Stack Engineer',
    'Problem Solver',
    'Tech Enthusiast',
  ], []);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const typeText = () => {
      const currentFullText = texts[currentText];
      
      if (isDeleting) {
        if (currentChar > 0) {
          setTimeout(() => setCurrentChar(currentChar - 1), deleteSpeed);
        } else {
          setIsDeleting(false);
          setCurrentText((currentText + 1) % texts.length);
        }
      } else {
        if (currentChar < currentFullText.length) {
          setTimeout(() => setCurrentChar(currentChar + 1), typeSpeed);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const timer = setTimeout(typeText, 100);
    return () => clearTimeout(timer);
  }, [currentText, currentChar, isDeleting, texts]);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/shashankorthiwada', label: 'GitHub' },
    { icon: Linkedin, href: 'https://in.linkedin.com/in/shashank-korthiwada-3800a18b', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/IamKorthiwada', label: 'Twitter' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-10 w-4 h-4 bg-blue-500 rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-40 right-20 w-6 h-6 bg-purple-500 rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-40 left-20 w-3 h-3 bg-green-500 rounded-full opacity-20"
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Enhanced Name */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-6"
          >
            <h1 className="text-4xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
              Shashank Korthiwada
            </h1>
          </motion.div>

          {/* Enhanced Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 h-8 flex items-center justify-center"
          >
            <span className="text-gradient-primary font-semibold">
              {texts[currentText].substring(0, currentChar)}
            </span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-blue-500 dark:text-blue-400 font-semibold ml-1"
            >
              |
            </motion.span>
          </motion.div>

          {/* Enhanced Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-lg lg:text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
          >
            Full Stack Software Developer with 7+ years of experience, passionate about creating innovative solutions. 
            Currently working at ServiceNow in Hyderabad, mastering modern web technologies and sharing knowledge through blogs.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary flex items-center space-x-2"
            >
              <span>Get In Touch</span>
              <ArrowDown size={20} className="animate-bounce-gentle" />
            </motion.a>
            
            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary flex items-center space-x-2"
            >
              <span>Download Resume</span>
              <Download size={20} />
            </motion.a>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            className="flex justify-center items-center space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -4,
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="p-4 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 
                         hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all duration-300 
                         group border border-transparent hover:border-blue-200 dark:hover:border-blue-700"
                aria-label={social.label}
              >
                <social.icon size={24} className="group-hover:animate-bounce-gentle" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 
                   dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer group"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm font-medium group-hover:scale-105 transition-transform duration-300">
            Scroll Down
          </span>
          <ArrowDown size={20} className="animate-bounce-gentle group-hover:text-blue-500 dark:group-hover:text-blue-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 