'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Award, Building2, Star } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    {
      year: '2023 - Present',
      title: 'Software Developer',
      company: 'ServiceNow, Hyderabad',
      description: 'Building web applications using JavaScript, React, Seismic, Tectonic, StoryBook and ServiceNow Next Experience components and web components.',
      icon: Building2,
      color: 'from-blue-500 to-purple-600',
    },
    {
      year: '2021 - 2023',
      title: 'Full Stack Developer',
      company: '7-Eleven, Bangalore',
      description: 'Worked with React, Micro frontends, Webpack, TypeScript, and modern web technologies.',
      icon: Briefcase,
      color: 'from-green-500 to-blue-500',
    },
    {
      year: '2018 - 2021',
      title: 'Full Stack Developer',
      company: 'Manhattan Associates, Bangalore',
      description: 'Developed applications using Java, Spring Boot, Microservices, Angular, React, and TypeScript.',
      icon: GraduationCap,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const stats = [
    { label: 'Years Experience', value: '7+', color: 'from-blue-600 to-purple-600', icon: Star },
    { label: 'Projects Completed', value: '50+', color: 'from-green-600 to-blue-600', icon: Award },
    { label: 'Technologies', value: '25+', color: 'from-purple-600 to-pink-600', icon: Building2 },
    { label: 'Blog Posts', value: '15+', color: 'from-amber-600 to-red-600', icon: GraduationCap },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto font-medium leading-relaxed">
            I&apos;m a passionate software developer with 7+ years of experience in creating innovative solutions 
            and sharing knowledge with the community.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
              My Story
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-200 text-base leading-relaxed">
              <p>
                I am Shashank Korthiwada, a Software Developer with 7+ years of experience currently working at ServiceNow in Hyderabad. 
                My journey in software development started in 2018 with Manhattan Associates in Bangalore, where I began my IT career as a Full Stack Developer.
              </p>
              <p>
                Throughout my career, I&apos;ve worked with diverse technologies including Java, Spring Boot, Microservices, Angular, React, TypeScript, 
                Micro frontends, Webpack, and modern web technologies. I believe in continuous learning and staying updated with the latest technologies.
              </p>
              <p>
                Currently at ServiceNow, I&apos;m building web applications using JavaScript, React, Seismic, Tectonic, StoryBook and ServiceNow Next Experience components. 
                When I&apos;m not coding, you can find me writing technical blogs, contributing to open-source projects, or exploring new technologies.
              </p>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="card-accent p-4 text-center group"
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-5 h-5 text-blue-500 dark:text-blue-400 group-hover:animate-bounce-gentle" />
                  </div>
                  <div className={`text-2xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative"
          >
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">
              My Journey
            </h3>
            
            {/* Enhanced Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
              
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2, type: "spring", stiffness: 100 }}
                  className="relative flex items-start mb-8"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 w-3 h-3 bg-gradient-to-r ${item.color} rounded-full border-2 border-white dark:border-gray-900 shadow-md transform -translate-x-1/2 z-10`} />
                  
                  {/* Content */}
                  <div className="ml-12 flex-1">
                    <motion.div 
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="card p-6 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`p-2 bg-gradient-to-r ${item.color} rounded-lg text-white`}>
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-600 dark:text-gray-400 font-semibold">
                            {item.year}
                          </div>
                          <div className="text-lg font-black text-gray-900 dark:text-white">
                            {item.title}
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mb-2 font-medium">
                        {item.company}
                      </div>
                      <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Enhanced Location & Education */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          className="grid md:grid-cols-2 gap-8 mt-16"
        >
          {/* Location */}
          <motion.div 
            whileHover={{ scale: 1.02, y: -2 }}
            className="card-accent p-6"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-black text-gray-900 dark:text-white">
                Location
              </h4>
            </div>
            <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed">
              Currently based in Hyderabad, India - working at ServiceNow and contributing to innovative web applications.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div 
            whileHover={{ scale: 1.02, y: -2 }}
            className="card-accent p-6"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg text-white">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-black text-gray-900 dark:text-white">
                Experience
              </h4>
            </div>
            <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed">
              7+ years of professional experience in full-stack development with expertise in modern web technologies and enterprise solutions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 