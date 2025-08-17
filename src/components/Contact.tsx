'use client';

import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Send, Github, Linkedin, Twitter, Mail, MessageCircle } from 'lucide-react';
import { handleEmailClick } from '@/lib/email';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/shashankorthiwada', label: 'GitHub', color: 'from-gray-600 to-gray-700' },
    { icon: Linkedin, href: 'https://in.linkedin.com/in/shashank-korthiwada-3800a18b', label: 'LinkedIn', color: 'from-blue-600 to-blue-700' },
    { icon: Twitter, href: 'https://twitter.com/IamKorthiwada', label: 'Twitter', color: 'from-blue-400 to-cyan-400' },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6 tracking-tight">
            Let&apos;s <span className="text-gradient-primary">Connect</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 max-w-4xl mx-auto font-medium leading-relaxed px-4">
            I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-6 sm:mb-8 tracking-tight">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="grid md:grid-cols-2 gap-4 sm:gap-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-modern input w-full px-4 py-3 placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-modern input w-full px-4 py-3 placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              >
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-modern input w-full px-4 py-3 placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="What's this about?"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              >
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="form-modern input w-full px-4 py-3 placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              >
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full flex items-center justify-center space-x-3 text-lg"
                >
                  <Send size={24} />
                  <span>Send Message</span>
                </motion.button>
              </motion.div>
            </form>
          </motion.div>

          {/* Enhanced Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-6 sm:mb-8 tracking-tight">
                Get In Touch
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-6 sm:mb-8">
                I&apos;m always excited to hear about new opportunities and interesting projects. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
              </p>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="w-full p-4 sm:p-6 flex items-center space-x-3 sm:space-x-4 group card hover:shadow-xl transition-all duration-300 text-left"
              >
                <div className="p-3 sm:p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 dark:text-white text-base sm:text-lg">Phone</h4>
                  <p className="text-gray-700 dark:text-gray-200 font-medium text-sm sm:text-base">+91 98765 43210</p>
                </div>
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="w-full p-4 sm:p-6 flex items-center space-x-3 sm:space-x-4 group card hover:shadow-xl transition-all duration-300 text-left"
              >
                <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 dark:text-white text-base sm:text-lg">Location</h4>
                  <p className="text-gray-700 dark:text-gray-200 font-medium text-sm sm:text-base">Hyderabad, India</p>
                </div>
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.02, y: -2 }}
                onClick={handleEmailClick}
                className="w-full p-4 sm:p-6 flex items-center space-x-3 sm:space-x-4 group card hover:shadow-xl transition-all duration-300 text-left"
              >
                <div className="p-3 sm:p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 dark:text-white text-base sm:text-lg">Email</h4>
                  <p className="text-gray-700 dark:text-gray-200 font-medium text-sm sm:text-base">shashankorthiwada@gmail.com</p>
                </div>
              </motion.button>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6 tracking-tight">
                Follow Me
              </h4>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1, type: "spring", stiffness: 100 }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -4,
                      boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 sm:p-4 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 
                             hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all duration-300 
                             hover:shadow-lg group border border-transparent hover:border-blue-200 dark:hover:border-blue-700"
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="sm:w-6 sm:h-6 group-hover:animate-bounce-gentle" />
                  </motion.a>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="card-accent p-4 sm:p-6"
            >
              <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h4 className="font-black text-gray-900 dark:text-white text-base sm:text-lg">Currently Available</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-200 text-sm sm:text-base">
                I&apos;m currently open to new opportunities and collaborations. Feel free to reach out if you&apos;d like to work together!
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="text-center mt-16 sm:mt-20"
        >
          <div className="card-accent p-8 sm:p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <MessageCircle className="w-8 h-8 text-blue-500 dark:text-blue-400 animate-pulse" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6 tracking-tight">
              Ready to Start a Project?
            </h3>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 leading-relaxed mb-6 sm:mb-8">
              Let&apos;s discuss your ideas and turn them into reality. I&apos;m excited to hear about your project and see how we can work together.
            </p>
            <motion.button
              onClick={handleEmailClick}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary inline-flex items-center space-x-3 text-lg"
            >
              <Mail size={20} className="sm:w-6 sm:h-6" />
              <span>Start a Conversation</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 