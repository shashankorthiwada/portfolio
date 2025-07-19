'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      name: 'Frontend',
      skills: [
        { name: 'React', level: 95, color: 'from-blue-500 to-purple-600' },
        { name: 'TypeScript', level: 90, color: 'from-blue-600 to-cyan-500' },
        { name: 'JavaScript', level: 95, color: 'from-yellow-500 to-orange-500' },
        { name: 'Angular', level: 85, color: 'from-red-500 to-pink-500' },
        { name: 'HTML/CSS', level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'StoryBook', level: 80, color: 'from-purple-500 to-pink-500' },
      ]
    },
    {
      name: 'Backend & Services',
      skills: [
        { name: 'Java', level: 85, color: 'from-orange-500 to-red-500' },
        { name: 'Spring Boot', level: 80, color: 'from-green-500 to-emerald-500' },
        { name: 'Microservices', level: 85, color: 'from-blue-500 to-indigo-500' },
        { name: 'REST APIs', level: 90, color: 'from-green-600 to-blue-600' },
        { name: 'ServiceNow', level: 75, color: 'from-blue-600 to-purple-600' },
        { name: 'Seismic/Tectonic', level: 70, color: 'from-purple-600 to-pink-600' },
      ]
    },
    {
      name: 'Tools & DevOps',
      skills: [
        { name: 'Git', level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'Webpack', level: 80, color: 'from-blue-500 to-cyan-500' },
        { name: 'Micro Frontends', level: 85, color: 'from-purple-500 to-pink-500' },
        { name: 'Docker', level: 75, color: 'from-blue-500 to-indigo-500' },
        { name: 'AWS', level: 70, color: 'from-orange-500 to-yellow-500' },
        { name: 'VS Code', level: 95, color: 'from-blue-500 to-purple-500' },
      ]
    }
  ];

  const technologies = [
    { name: 'React', icon: '⚛️', category: 'Frontend', color: 'from-blue-500 to-purple-600' },
    { name: 'TypeScript', icon: '📘', category: 'Frontend', color: 'from-blue-600 to-cyan-500' },
    { name: 'JavaScript', icon: '🟨', category: 'Frontend', color: 'from-yellow-500 to-orange-500' },
    { name: 'Angular', icon: '🅰️', category: 'Frontend', color: 'from-red-500 to-pink-500' },
    { name: 'Java', icon: '☕', category: 'Backend', color: 'from-orange-500 to-red-500' },
    { name: 'Spring Boot', icon: '🍃', category: 'Backend', color: 'from-green-500 to-emerald-500' },
    { name: 'Microservices', icon: '🔧', category: 'Backend', color: 'from-blue-500 to-indigo-500' },
    { name: 'ServiceNow', icon: '⚙️', category: 'Platform', color: 'from-blue-600 to-purple-600' },
    { name: 'Seismic', icon: '🌊', category: 'Platform', color: 'from-purple-600 to-pink-600' },
    { name: 'Tectonic', icon: '🏔️', category: 'Platform', color: 'from-gray-600 to-gray-700' },
    { name: 'StoryBook', icon: '📚', category: 'Frontend', color: 'from-purple-500 to-pink-500' },
    { name: 'Git', icon: '📝', category: 'Tools', color: 'from-orange-500 to-red-500' },
    { name: 'Webpack', icon: '📦', category: 'Tools', color: 'from-blue-500 to-cyan-500' },
    { name: 'Micro Frontends', icon: '🧩', category: 'Architecture', color: 'from-purple-500 to-pink-500' },
    { name: 'Docker', icon: '🐳', category: 'DevOps', color: 'from-blue-500 to-indigo-500' },
    { name: 'AWS', icon: '☁️', category: 'Cloud', color: 'from-orange-500 to-yellow-500' },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            Skills & <span className="text-gradient-primary">Technologies</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto font-medium leading-relaxed">
            I&apos;m familiar with a wide range of technologies and always eager to learn new ones.
          </p>
        </motion.div>

        {/* Enhanced Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + categoryIndex * 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="card-accent p-6"
            >
              <h3 className="text-xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + categoryIndex * 0.2 + skillIndex * 0.1, type: "spring", stiffness: 100 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.2, delay: 0.6 + categoryIndex * 0.2 + skillIndex * 0.1, ease: "easeOut" }}
                        className={`skill-progress bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Technologies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            Technologies I Work With
          </h3>
          <p className="text-base text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
            I&apos;m constantly exploring new technologies and frameworks to stay current with industry trends and deliver the best solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ 
                scale: 1.05, 
                y: -4,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)"
              }}
              className="card p-4 text-center group hover:border-blue-200 dark:hover:border-blue-700"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <h4 className="font-black text-gray-900 dark:text-white text-base mb-1">
                {tech.name}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 font-medium">
                {tech.category}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
          className="mt-16 text-center"
        >
          <div className="card-accent p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
              Always Learning
            </h3>
            <p className="text-base text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
              I believe in continuous learning and staying updated with the latest technologies. 
              Currently exploring advanced React patterns, cloud architecture, and emerging web technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: 'GraphQL', color: 'from-pink-500 to-purple-500' },
                { name: 'Rust', color: 'from-orange-500 to-red-500' },
                { name: 'WebAssembly', color: 'from-purple-500 to-pink-500' },
                { name: 'Machine Learning', color: 'from-blue-500 to-cyan-500' },
                { name: 'Blockchain', color: 'from-green-500 to-emerald-500' },
                { name: 'Microservices', color: 'from-indigo-500 to-purple-500' }
              ].map((tech, index) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.8 + index * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`px-3 py-1 bg-gradient-to-r ${tech.color} text-white font-medium rounded-full text-sm 
                           shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 