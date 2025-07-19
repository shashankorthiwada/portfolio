'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Heart, Star, Calendar, Clock } from 'lucide-react';
import { useRouter } from 'next/navigation';

const AlchemistBlog = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/#blog');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-green-500 to-emerald-500 text-white py-8"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={handleGoBack}
              whileHover={{ scale: 1.05, x: -4 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-white/30 transition-all duration-300"
            >
              <ArrowLeft size={20} />
              <span>Back to Blog</span>
            </motion.button>
            <div className="flex items-center space-x-2">
              <BookOpen size={24} />
              <span className="text-lg font-semibold">Personal Growth</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            The <span className="text-gradient-primary">Alchemist</span>
          </h1>
          <div className="flex items-center justify-center space-x-4 text-gray-600 dark:text-gray-400 mb-4">
            <span className="flex items-center space-x-1">
              <Calendar size={16} />
              <span>Oct 10, 2023</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock size={16} />
              <span>3 min read</span>
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8"
        >
          {/* Book Image */}
          <div className="text-center">
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              src="https://images-na.ssl-images-amazon.com/images/I/410llGwMZGL._AC_SY400_.jpg"
              alt="The Alchemist by Paulo Coelho"
              className="rounded-xl shadow-2xl mx-auto max-w-sm"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed"
            >
              I have recently read a book named <strong className="text-blue-600 dark:text-blue-400">The Alchemist</strong> by <strong className="text-blue-600 dark:text-blue-400">Paulo Coelho</strong> which definitely motivates one who reads the book with heart. The Book Explains <em className="text-blue-500 dark:text-blue-400 font-semibold">"When you want something, all the Universe Conspires in helping you to achieve it"</em>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed"
            >
              This book is about a young man who wants to become a shepherd instead of priest and he want to learn the purpose of his life and also he want to know his destiny. Someone suggested him that you can learn the meaning of life and you will find yourself by travelling.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed"
            >
              Then he started his voyage with flocks........ and while travelling he met different kinds of people (king, merchant, desert woman, alchemist). They changed his life and also he understood the purpose of life, his dream, his destiny and more.... And finally he achieved his goal but to know how he achieved and how he learnt while travelling then you have to read this book.
            </motion.p>

            {/* My Words Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 my-8 border border-blue-200 dark:border-blue-700"
            >
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                <Heart className="w-6 h-6 text-red-500" />
                <span>My words to you:</span>
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                Every creature on this earth has a purpose. Even you and I existed on this earth for a purpose. But we need to find that purpose which we call it as goal, dream, destiny. And whatever you do, you need learn from that work because it may helps on a way to your destiny.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mt-4">
                Do you why we encounter with problems or failures? Because If you learn from that experience then it may helpful in future or else if you skip that experience you may reach your destiny but you will be in fear of failure or you may be in trouble. So I suggest you to tackle the failure whenever it encounters don't skip otherwise you will be in trouble.
              </p>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="text-center py-8"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl p-8 shadow-xl">
                <Star className="w-8 h-8 mx-auto mb-4 animate-pulse" />
                <p className="text-xl font-bold">
                  <strong>LEARNING FROM EXPERIENCE IS THE BEST WAY TO SUCCESS</strong>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-center pt-8"
          >
            <motion.button
              onClick={handleGoBack}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <ArrowLeft size={20} />
              <span>Back to Blog</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AlchemistBlog; 