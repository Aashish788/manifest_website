import { motion } from 'framer-motion';
import { AnimateIn, StaggerContainer, StaggerItem, GlassCard } from '../ui/animations';
import React from 'react';

const DarkThemeSection = React.memo(() => {
  return (
    <div className="relative overflow-hidden py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-900">
      {/* Optimized Static Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 30% 20%, rgba(139, 92, 246, 0.2), transparent 60%)',
            filter: 'blur(100px)',
            transform: 'translate3d(0, 0, 0)'
          }}
        />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(circle at 70% 80%, rgba(79, 70, 229, 0.15), transparent 50%)',
            filter: 'blur(120px)',
            transform: 'translate3d(0, 0, 0)'
          }}
        />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
        <AnimateIn className="text-center mb-8 sm:mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-sm sm:text-base font-semibold text-purple-300 uppercase tracking-[0.2em] mb-4">
              ✦ Premium Experience ✦
            </p>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-indigo-200 to-purple-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <span className="block">Transform Your Life</span>
            <span className="block text-white mt-2">Through Reflection</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto font-medium text-slate-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Daily journaling, guided meditations, and powerful affirmations to help you manifest your dreams with clarity and intention.
          </motion.p>
        </AnimateIn>

        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {/* Ultra Premium Feature 1 - Mobile-First Design */}
          <StaggerContainer className="group">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 lg:items-center">
              {/* Premium Mobile-Optimized Text Card */}
              <StaggerItem className="order-1">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.01, y: -4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {/* Subtle Static Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-3xl blur-xl" />
                  
                  {/* Premium Glass Card */}
                  <div className="relative backdrop-blur-3xl border border-white/30 rounded-3xl bg-gradient-to-br from-white/15 via-white/10 to-white/5 shadow-2xl overflow-hidden p-6 sm:p-8 lg:p-10">
                    {/* Static Background Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5" />
                    
                    {/* Premium Icon */}
                    <motion.div
                      className="relative inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-500 via-indigo-600 to-purple-700 mb-4 sm:mb-6 shadow-2xl"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: '0 25px 50px -12px rgba(168, 85, 247, 0.4)'
                      }}
                      transition={{ duration: 0.15 }}
                    >
                      <svg 
                        className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </motion.div>
                    
                    {/* Premium Typography */}
                    <motion.h3 
                      className="relative text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3 sm:mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.05 }}
                    >
                      Guided Journaling
                    </motion.h3>
                    
                    <motion.p 
                      className="relative text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-medium"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      Daily prompts designed to help you reflect, process emotions, and clarify your intentions. Our structured approach makes journaling effortless and productive.
                    </motion.p>
                  </div>
                </motion.div>
              </StaggerItem>

              {/* Premium Image Container */}
              <StaggerItem className="order-2">
                <motion.div
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  whileHover={{ scale: 1.02, y: -6 }}
                >
                  {/* Subtle Static Glow for Image */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-3xl blur-xl opacity-40" />
                  
                  <motion.div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-3xl border border-white/30">
                    <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
                      <motion.img
                        alt="Journal screenshot showing daily prompts and reflection"
                        src="https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=95"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </div>
                    
                    {/* Simplified Overlay Effects */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 via-transparent to-purple-600/10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </motion.div>
                </motion.div>
              </StaggerItem>
            </div>
          </StaggerContainer>

          {/* Ultra Premium Feature 2 - Mobile-First Design */}
          <StaggerContainer className="group">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 lg:items-center">
              {/* Premium Mobile-Optimized Text Card - Right on Desktop */}
              <StaggerItem className="order-1 lg:order-2">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.01, y: -4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl" />
                  
                  <div className="relative backdrop-blur-3xl border border-white/30 rounded-3xl bg-gradient-to-br from-white/15 via-white/10 to-white/5 shadow-2xl overflow-hidden p-8 sm:p-10 lg:p-12">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-pink-500/5" />
                    
                    <motion.div
                      className="relative inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-700 mb-6 sm:mb-8 shadow-2xl"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: '0 25px 50px -12px rgba(79, 70, 229, 0.4)'
                      }}
                      transition={{ duration: 0.15 }}
                    >
                      <svg 
                        className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </motion.div>
                    
                    <motion.h3 
                      className="relative text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3 sm:mb-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.05 }}
                    >
                      Visualization Board
                    </motion.h3>
                    
                    <motion.p 
                      className="relative text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-medium"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      Create beautiful digital vision boards that help you focus on your goals. Add images, affirmations, and milestones to visualize your perfect future.
                    </motion.p>
                  </div>
                </motion.div>
              </StaggerItem>
              
              {/* Premium Image Container - Left on Desktop */}
              <StaggerItem className="order-2 lg:order-1">
                <motion.div
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
                  whileHover={{ scale: 1.02, y: -6 }}
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-40" />
                  
                  <motion.div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-3xl border border-white/30">
                    <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
                      <motion.img
                        alt="Vision board with images representing goals and dreams"
                        src="https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=95"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </div>
                    
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-transparent to-indigo-600/10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </motion.div>
                </motion.div>
              </StaggerItem>
            </div>
          </StaggerContainer>

          {/* Ultra Premium Feature 3 - Mobile-First Design */}
          <StaggerContainer className="group">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 lg:items-center">
              {/* Premium Mobile-Optimized Text Card */}
              <StaggerItem className="order-1">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.01, y: -4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl" />
                  
                  <div className="relative backdrop-blur-3xl border border-white/30 rounded-3xl bg-gradient-to-br from-white/15 via-white/10 to-white/5 shadow-2xl overflow-hidden p-8 sm:p-10 lg:p-12">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5" />
                    
                    <motion.div
                      className="relative inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-500 via-pink-600 to-purple-700 mb-6 sm:mb-8 shadow-2xl"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: '0 25px 50px -12px rgba(236, 72, 153, 0.4)'
                      }}
                      transition={{ duration: 0.15 }}
                    >
                      <svg 
                        className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </motion.div>
                    
                    <motion.h3 
                      className="relative text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4 sm:mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.05 }}
                    >
                      Daily Affirmations
                    </motion.h3>
                    
                    <motion.p 
                      className="relative text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-medium"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      Personalized positive statements designed to rewire your thoughts and attract what you desire. Schedule notifications to reinforce positive thinking throughout your day.
                    </motion.p>
                  </div>
                </motion.div>
              </StaggerItem>
              
              {/* Premium Image Container */}
              <StaggerItem className="order-2">
                <motion.div
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                  whileHover={{ scale: 1.02, y: -6 }}
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-40" />
                  
                  <motion.div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-3xl border border-white/30">
                    <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
                      <motion.img
                        alt="Phone showing affirmation notifications and calendar"
                        src="https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=95"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </div>
                    
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-transparent to-pink-600/10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </motion.div>
                </motion.div>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </div>
    </div>
  );
});

export default DarkThemeSection;
