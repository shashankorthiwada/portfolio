'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, ExternalLink } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const router = useRouter();

  const blogPosts = [
    {
      id: 1,
      title: 'What are Design Patterns?',
      excerpt: 'A Design Pattern is a general, reusable solution to a commonly occurring problem within a given context in software design. It\'s like a description of how to tackle the problems and design a solution.',
      category: 'Software Design',
      featured: true,
      date: 'Dec 15, 2023',
      readTime: '5 min read',
      link: 'https://shashankorthiwada.hashnode.dev/what-are-design-patterns-and-why-developers-should-know-them',
      color: 'from-blue-500 to-purple-600',
      external: true,
    },
    {
      id: 2,
      title: 'What is Hoisting In JavaScript?',
      excerpt: 'Hoisting is a Phenomenon in JavaScript by which you can access the variables and functions even before we have initialized them. Understanding this concept is crucial for writing better JavaScript code.',
      category: 'JavaScript',
      featured: false,
      date: 'Nov 20, 2023',
      readTime: '4 min read',
      link: 'https://shashankorthiwada.hashnode.dev/what-is-hoisting-in-javascript',
      color: 'from-yellow-500 to-orange-500',
      external: true,
    },
    {
      id: 3,
      title: 'The Book Which Inspired Me...',
      excerpt: 'I have recently read a book named The Alchemist by Paulo Coelho which definitely motivates one who reads the book with heart. The Book Explains the journey of following your dreams.',
      category: 'Personal Growth',
      featured: false,
      date: 'Oct 10, 2023',
      readTime: '3 min read',
      link: '/blog/alchemist',
      color: 'from-green-500 to-emerald-500',
      external: false,
      internalLink: '/blog/alchemist',
    },
  ];

  const handleBlogClick = (post: any) => {
    if (post.external) {
      window.open(post.link, '_blank');
    } else {
      router.push(post.internalLink);
    }
  };

  return (
    <section id="blog" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4">
            My <span className="text-gradient-primary">Blog</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 max-w-3xl mx-auto px-4">
            I love sharing my knowledge and experiences through writing. Here are some of my recent blog posts about technology, development, and personal growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group card overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => handleBlogClick(post)}
            >
              <div className={`relative h-40 sm:h-48 bg-gradient-to-br ${post.color}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 sm:w-16 sm:h-16 text-white opacity-80" />
                </div>
                {post.featured && (
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                    Featured
                  </div>
                )}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/20 backdrop-blur-sm text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium border border-white/30">
                  {post.category}
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="sm:w-3.5 sm:h-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="sm:w-3.5 sm:h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-200 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <motion.div 
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm transition-colors duration-300"
                >
                  <span>Read More</span>
                  <ExternalLink className="sm:w-4 sm:h-4 group-hover:animate-bounce-gentle" />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="text-center mt-12 sm:mb-16"
        >
          <motion.a 
            href="https://hashnode.com/@ShashanKorthiwada" 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary inline-flex items-center space-x-2"
          >
            <BookOpen className="sm:w-5 sm:h-5" />
            <span>Read More on Hashnode</span>
            <ExternalLink className="sm:w-5 sm:h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog; 