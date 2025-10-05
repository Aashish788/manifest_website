import { motion } from 'framer-motion';
import { AnimateIn, StaggerContainer, StaggerItem } from '../ui/animations';
import { PerformanceOptimizer } from '../../utils/performanceOptimizer';
import React from 'react';

const FeaturesSection = React.memo(() => {
  const blurSettings = PerformanceOptimizer.getOptimizedBlur();
  
  const features = [
    {
      title: "Daily Journaling",
      description: "Reflect on your thoughts and track your manifestation journey",
      icon: (
        <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      gradient: "from-purple-500/10 via-indigo-500/5 to-transparent",
      iconBg: "from-purple-500/10 to-indigo-500/10",
      accent: "purple-500",
    },
    {
      title: "Vision Boards",
      description: "Create powerful visual representations of your goals and dreams",
      icon: (
        <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-indigo-500/10 via-blue-500/5 to-transparent",
      iconBg: "from-indigo-500/10 to-blue-500/10",
      accent: "indigo-500",
    },
    {
      title: "Goal Tracking",
      description: "Track progress and celebrate your achievements",
      icon: (
        <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
      iconBg: "from-emerald-500/10 to-teal-500/10",
      accent: "emerald-500",
    }
  ];

  return (
    <div id="features" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Light mode background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-indigo-50/30 dark:opacity-0"
        style={{ transform: 'translate3d(0, 0, 0)' }}
        animate={{ 
          background: [
            'linear-gradient(135deg, rgba(248, 250, 252, 0.5) 0%, rgba(255, 255, 255, 1) 50%, rgba(238, 242, 255, 0.3) 100%)',
            'linear-gradient(135deg, rgba(248, 250, 252, 0.3) 0%, rgba(255, 255, 255, 1) 50%, rgba(238, 242, 255, 0.5) 100%)',
            'linear-gradient(135deg, rgba(248, 250, 252, 0.5) 0%, rgba(255, 255, 255, 1) 50%, rgba(238, 242, 255, 0.3) 100%)'
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Dark mode premium background effects */}
      <div className="absolute inset-0 opacity-0 dark:opacity-100">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.15), transparent 60%)',
            filter: 'blur(100px)',
            transform: 'translate3d(0, 0, 0)'
          }}
        />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(circle at 80% 70%, rgba(79, 70, 229, 0.12), transparent 50%)',
            filter: 'blur(120px)',
            transform: 'translate3d(0, 0, 0)'
          }}
        />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.08), transparent 70%)',
            filter: 'blur(150px)',
            transform: 'translate3d(0, 0, 0)'
          }}
        />
      </div>
      
      {/* Enhanced floating blur elements with animation */}
      <motion.div 
        className="absolute top-1/4 -right-32 w-64 h-64 bg-gradient-to-l from-purple-200/40 dark:from-purple-500/20 to-transparent rounded-full"
        style={{ filter: blurSettings.backgroundBlur, transform: 'translate3d(0, 0, 0)' }}
        animate={{ 
          x: [0, 20, 0],
          y: [0, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-indigo-200/40 dark:from-indigo-500/20 to-transparent rounded-full"
        style={{ filter: blurSettings.backgroundBlur, transform: 'translate3d(0, 0, 0)' }}
        animate={{ 
          x: [0, -20, 0],
          y: [0, 10, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Enhanced Premium Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <AnimateIn direction="up">
            <motion.p 
              className="text-sm sm:text-base font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-3"
              animate={{ 
                opacity: [0.8, 1, 0.8],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Premium Features
            </motion.p>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.1}>
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-4"
            >
              Transform Your{' '}
              <motion.span 
                className="text-gradient bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-[length:200%_100%]"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Dreams
              </motion.span>
            </motion.h2>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.2}>
            <motion.p 
              className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Powerful tools designed for manifestation and personal growth
            </motion.p>
          </AnimateIn>
          
          {/* Premium decorative elements */}
          <motion.div 
            className="flex justify-center items-center space-x-2 mt-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"
                animate={{ 
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.3, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: i * 0.3 
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Premium Animated Cards Grid */}
        <StaggerContainer>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="group relative h-full"
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.01,
                    transition: { duration: 0.15, ease: "easeOut" }
                  }}
                >
                  <div className="relative p-5 sm:p-6 rounded-2xl border border-white/50 dark:border-gray-600/30 backdrop-blur-xl shadow-xl dark:shadow-2xl overflow-hidden h-full transition-all duration-200 group-hover:shadow-2xl bg-white/95 dark:bg-gray-800/90 group-hover:dark:bg-gray-700/90">
                    {/* Premium gradient overlay with hover animation */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} dark:opacity-50 transition-opacity duration-200`}
                      initial={{ opacity: 0.3 }}
                      whileHover={{ opacity: 0.6 }}
                    />
                    
                    {/* Enhanced shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-purple-400/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                      initial={{ x: '-200%' }}
                      whileHover={{ x: '200%' }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Enhanced Icon Container with pulse animation */}
                      <div className="flex items-start justify-between mb-4">
                        <motion.div 
                          className={`relative inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${feature.iconBg} border border-white/40 dark:border-gray-600/40 backdrop-blur-sm shadow-lg dark:shadow-purple-500/20`}
                          whileHover={{ 
                            scale: 1.15, 
                            rotate: 10,
                            boxShadow: `0 10px 30px -5px rgba(${feature.accent === 'purple-500' ? '147, 51, 234' : feature.accent === 'indigo-500' ? '99, 102, 241' : '16, 185, 129'}, 0.4)`
                          }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                        >
                          <div className="relative z-10">
                            {feature.icon}
                          </div>
                        </motion.div>
                        
                        {/* Animated indicator dot */}
                        <motion.div 
                          className={`w-2 h-2 rounded-full bg-${feature.accent}`}
                          animate={{ 
                            opacity: [0.4, 1, 0.4],
                            scale: [1, 1.3, 1]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            delay: 1 + index * 0.3 
                          }}
                        />
                      </div>
                      
                      {/* Enhanced Content with staggered reveals */}
                      <div className="flex-1">
                        <motion.h3 
                          className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 leading-tight"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.2, 
                            delay: 0.2 + index * 0.05 
                          }}
                        >
                          {feature.title}
                        </motion.h3>
                        <motion.p 
                          className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.2, 
                            delay: 0.25 + index * 0.05 
                          }}
                        >
                          {feature.description}
                        </motion.p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </div>
  );
});

export default FeaturesSection;
