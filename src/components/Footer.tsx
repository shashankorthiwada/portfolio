'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/shashankorthiwada', label: 'GitHub' },
    { icon: Linkedin, href: 'https://in.linkedin.com/in/shashank-korthiwada-3800a18b', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/IamKorthiwada', label: 'Twitter' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-900 dark:bg-gray-950 text-white overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Enhanced Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h3 className="font-black text-2xl tracking-tight text-white mb-2">
                Shashank Korthiwada
              </h3>
              <p className="text-gray-300 text-sm font-medium">
                Full Stack Software Developer
              </p>
            </div>
            <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-md">
              Passionate about creating innovative solutions and sharing knowledge with the community. 
              Let&apos;s build something amazing together!
            </p>
            
            {/* Enhanced Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1, type: "spring", stiffness: 100 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -2,
                    boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-lg 
                           transition-all duration-300 group border border-transparent 
                           hover:border-blue-500/30"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="group-hover:animate-bounce-gentle" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-black mb-6 tracking-tight text-white">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'About', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Skills', href: '#skills' },
                { name: 'Blog', href: '#blog' },
                { name: 'Contact', href: '#contact' },
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1, type: "spring", stiffness: 100 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 
                             font-medium hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Enhanced Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-black mb-6 tracking-tight text-white">Get In Touch</h3>
            <div className="space-y-4">
              <motion.a
                href="mailto:shashankorthiwada@gmail.com"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 
                         transition-colors duration-300 group"
              >
                <span className="text-sm">shashankorthiwada@gmail.com</span>
              </motion.a>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                className="text-gray-300 text-sm"
              >
                <p>Hyderabad, India</p>
                <p>Available for opportunities</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-gray-300 text-sm"
            >
              <span>&copy; {currentYear} Shashank Korthiwada. All rights reserved.</span>
              <span className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart size={14} className="text-red-400 animate-pulse" />
                <span>in India</span>
              </span>
            </motion.div>

            {/* Enhanced Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1, 
                y: -4,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 
                       hover:to-purple-500 text-white rounded-lg shadow-lg hover:shadow-xl 
                       transition-all duration-300 group border border-transparent 
                       hover:border-blue-400/30"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} className="group-hover:animate-bounce-gentle" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600" />
    </footer>
  );
};

export default Footer; 