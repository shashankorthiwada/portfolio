'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Globe, Star } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration. Features include user authentication, product management, shopping cart, and payment processing.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS', 'PostgreSQL'],
      github: 'https://github.com/shashankorthiwada/ecommerce-platform',
      live: 'https://ecommerce-platform.vercel.app',
      color: 'from-blue-500 to-purple-600',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
      github: 'https://github.com/shashankorthiwada/task-manager',
      live: 'https://task-manager-app.vercel.app',
      color: 'from-green-500 to-blue-500',
    },
  ];

  const moreProjects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing my skills, projects, and experience with smooth animations and interactive elements.',
      technologies: ['Next.js', 'TypeScript', 'Framer Motion'],
      github: 'https://github.com/shashankorthiwada/portfolio',
      live: 'https://shashank-korthiwada.vercel.app',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application with real-time data, interactive maps, and detailed weather forecasts for multiple locations.',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      github: 'https://github.com/shashankorthiwada/weather-app',
      live: 'https://weather-dashboard.vercel.app',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Blog Platform',
      description: 'A content management system for blogs with markdown support, SEO optimization, and admin dashboard.',
      technologies: ['Next.js', 'MDX', 'Prisma'],
      github: 'https://github.com/shashankorthiwada/blog-platform',
      live: 'https://blog-platform.vercel.app',
      color: 'from-emerald-500 to-green-500',
    },
    {
      title: 'API Gateway',
      description: 'A microservices API gateway with rate limiting, authentication, and request routing capabilities.',
      technologies: ['Node.js', 'Express', 'Redis'],
      github: 'https://github.com/shashankorthiwada/api-gateway',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6 tracking-tight">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 max-w-4xl mx-auto font-medium leading-relaxed px-4">
            Here are some of the projects I&apos;ve worked on. Each one represents a learning experience and
            a step forward in my development journey.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group"
            >
              <div className="card overflow-hidden hover:shadow-xl transition-all duration-500">
                <div className="relative overflow-hidden">
                  <div className={`aspect-video bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <div className="text-4xl sm:text-6xl text-white opacity-80">🚀</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-lg text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                      <Github size={18} className="sm:w-5 sm:h-5" />
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-lg text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200">
                        <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-3 sm:mb-4 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.2 + techIndex * 0.1, type: "spring", stiffness: 100 }}
                        className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-full text-xs sm:text-sm border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 transition-colors duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex space-x-3 sm:space-x-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base hover:text-blue-600 dark:hover:text-blue-400">
                      <Code size={16} className="sm:w-4.5 sm:h-4.5" />
                      <span>View Code</span>
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center space-x-2 text-sm sm:text-base">
                        <Globe size={16} className="sm:w-4.5 sm:h-4.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-6 sm:mb-8 tracking-tight">
            More Projects
          </h3>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 max-w-2xl mx-auto px-4">
            Explore more of my work and see how I approach different challenges and technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {moreProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 + index * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="group"
            >
              <div className="card overflow-hidden h-full hover:shadow-xl transition-all duration-500">
                <div className="relative overflow-hidden">
                  <div className={`aspect-video bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <div className="text-3xl sm:text-4xl text-white opacity-80">💻</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-1 sm:p-1.5 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-lg text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                      <Github size={14} className="sm:w-4 sm:h-4" />
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-1 sm:p-1.5 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-lg text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200">
                        <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-4 sm:p-6 flex flex-col h-full">
                  <h3 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white mb-2 sm:mb-3 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={tech} className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-400 font-medium rounded-full text-xs border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-medium rounded-full text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-2 sm:space-x-3 mt-auto">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 sm:space-x-1.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-medium rounded-lg transition-all duration-300 text-xs sm:text-sm hover:text-blue-600 dark:hover:text-blue-400">
                      <Code size={12} className="sm:w-3.5 sm:h-3.5" />
                      <span>Code</span>
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 sm:space-x-1.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 text-white font-medium rounded-lg transition-all duration-300 text-xs sm:text-sm">
                        <Globe size={12} className="sm:w-3.5 sm:h-3.5" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
          className="text-center mt-16 sm:mt-20"
        >
          <div className="card-accent p-8 sm:p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-blue-500 dark:text-blue-400 animate-pulse" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6 tracking-tight">
              Want to See More?
            </h3>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 leading-relaxed mb-6 sm:mb-8">
              I&apos;m always working on new projects and learning new technologies. Check out my GitHub for the latest updates and contributions.
            </p>
            <motion.a 
              href="https://github.com/shashankorthiwada" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary inline-flex items-center space-x-3 text-lg"
            >
              <Github size={20} className="sm:w-6 sm:h-6" />
              <span>View All Projects</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 