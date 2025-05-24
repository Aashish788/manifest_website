import { motion } from 'framer-motion';
import { AnimateIn, StaggerContainer, StaggerItem, GlassCard } from '../ui/animations';
import React from 'react';

const DarkThemeSection = React.memo(() => {
  return (
    <div className="dark-gradient relative overflow-hidden py-10">
      {/* Static background effect - removed infinite animation */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(139, 92, 246, 0.15), transparent 50%)',
          filter: 'blur(80px)',
          transform: 'translate3d(0, 0, 0)'
        }}
      />
      
      <div className="mx-auto max-w-6xl px-4 sm:text-center pt-18 lg:pt-26 relative z-10">
        <AnimateIn className="max-w-80 mx-auto lg:max-w-6xl mb-16">
          <h2 className="mt-2 text-3xl lg:text-5xl font-semibold tracking-tight text-white sm:text-5xl sm:text-balance mb-4">
            <span className="text-gradient bg-gradient-to-r from-purple-400 to-indigo-400">Transform Your Life</span> Through Reflection
          </h2>
          <motion.p 
            className="mt-4 text-lg lg:text-xl max-w-lg mx-auto font-medium tracking-tight text-zinc-300 leading-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Daily journaling, guided meditations, and powerful affirmations to help you manifest your dreams with clarity and intention.
          </motion.p>
        </AnimateIn>

        <div className="mt-12 select-none">
          {/* Feature 1 */}
          <StaggerContainer className="py-16 mx-auto grid grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5 items-center">
            <StaggerItem className="lg:pr-8 pl-8 lg:pl-0 col-span-2">
              <GlassCard className="text-left p-8 lg:p-10 backdrop-blur-2xl">
                <h2 className="text-2xl font-medium tracking-tight text-white mb-4">Guided Journaling</h2>
                <p className="text-base text-zinc-300 leading-relaxed">
                  Daily prompts designed to help you reflect, process emotions, and clarify your intentions. Our structured approach makes journaling effortless and productive.
                </p>
              </GlassCard>
            </StaggerItem>
            <StaggerItem className="lg:order-2 col-span-3 p-8 lg:p-0 -mt-14 lg:mt-0">
              <motion.div
                className="relative rounded-[18px] overflow-hidden shadow-premium"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  alt="Journal screenshot showing daily prompts and reflection"
                  src="https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  className="bg-[#1D2025] rounded-[18px] w-full max-w-none ring-1 ring-white/10 transition-transform duration-500 hover:scale-[102%]"
                  width="672"
                  height="499"
                  loading="lazy"
                  decoding="async"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 via-transparent to-purple-600/20 opacity-0"
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </StaggerItem>
          </StaggerContainer>

          {/* Feature 2 */}
          <StaggerContainer className="py-16 mx-auto grid grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5 items-center">
            <StaggerItem className="lg:ml-auto pl-8 lg:order-2 col-span-2">
              <GlassCard className="text-left p-8 lg:p-10 backdrop-blur-2xl">
                <h2 className="text-2xl font-medium tracking-tight text-white mb-4">Visualization Board</h2>
                <p className="text-base text-zinc-300 leading-relaxed">
                  Create beautiful digital vision boards that help you focus on your goals. Add images, affirmations, and milestones to visualize your perfect future.
                </p>
              </GlassCard>
            </StaggerItem>
            <StaggerItem className="lg:order-1 col-span-3 p-8 lg:p-0 -mt-14 lg:mt-0">
              <motion.div
                className="relative rounded-[18px] overflow-hidden shadow-premium"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  alt="Vision board with images representing goals and dreams"
                  src="https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  className="bg-[#1D2025] rounded-[18px] w-full max-w-none ring-1 ring-white/10 transition-transform duration-500 hover:scale-[102%]"
                  width="672"
                  height="500"
                  loading="lazy"
                  decoding="async"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-transparent to-indigo-600/20 opacity-0"
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </StaggerItem>
          </StaggerContainer>

          {/* Feature 3 */}
          <StaggerContainer className="py-16 mx-auto grid grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5 items-center">
            <StaggerItem className="lg:pr-8 pl-8 lg:pl-0 col-span-2">
              <GlassCard className="text-left p-8 lg:p-10 backdrop-blur-2xl">
                <h2 className="text-2xl font-medium tracking-tight text-white mb-4">Daily Affirmations</h2>
                <p className="text-base text-zinc-300 leading-relaxed">
                  Personalized positive statements designed to rewire your thoughts and attract what you desire. Schedule notifications to reinforce positive thinking throughout your day.
                </p>
              </GlassCard>
            </StaggerItem>
            <StaggerItem className="lg:order-2 col-span-3 p-8 lg:p-0 -mt-14 lg:mt-0">
              <motion.div
                className="relative rounded-[18px] overflow-hidden shadow-premium"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  alt="Phone showing affirmation notifications and calendar"
                  src="https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  className="bg-[#1D2025] rounded-[18px] w-full max-w-none ring-1 ring-white/10 transition-transform duration-500 hover:scale-[102%]"
                  width="672"
                  height="499"
                  loading="lazy"
                  decoding="async"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 via-transparent to-purple-600/20 opacity-0"
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
      
      {/* Removed animated particles to improve performance */}
    </div>
  );
});

export default DarkThemeSection;
