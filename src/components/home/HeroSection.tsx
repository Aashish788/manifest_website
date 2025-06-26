import { motion } from 'framer-motion';
import { AnimateIn, StaggerContainer, StaggerItem } from '../ui/animations';
import { PerformanceOptimizer } from '../../utils/performanceOptimizer';
import React from 'react';

const HeroSection = React.memo(() => {
  const shouldAnimate = !PerformanceOptimizer.prefersReducedMotion();
  
  return (
    <div className="relative py-32 sm:py-48 lg:py-60 select-none hero-gradient overflow-hidden">
      {/* Simplified background elements - no continuous animations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Static background element with subtle gradient */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.15), transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        
        {/* Subtle decorative elements - much less visible */}
        <div className="absolute inset-[3rem] rounded-[12rem] bg-white/3 shadow-[0_0_30px_rgba(173,216,255,0.1)] blur-[3px]" />
        <div className="absolute inset-[10rem] rounded-[8rem] bg-white/3 shadow-[inset_0_0_30px_rgba(255,255,255,0.2)] blur-[2px]" />
      </div>

      <div className="relative z-[2] mx-auto max-w-3xl lg:pb-16 px-4">
        <StaggerContainer className="text-center">
          <StaggerItem as="h1" className="text-4xl font-semibold tracking-tight text-balance text-zinc-900 sm:text-7xl mb-5 relative">
            <span className="relative">
              Manifest Your Dreams.{" "}
              <span className="relative inline-block">
                Realize Your Vision.
                {/* Removed continuous animation for better performance */}
                <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"></span>
              </span>
            </span>
          </StaggerItem>
          
          <StaggerItem as="p" className="mx-auto max-w-lg text-lg/6 lg:text-xl/6 font-medium text-balance text-zinc-500 mb-10">
            Transform your dreams into reality with our powerful manifestation, journal, and goal tracking app. Visualize, affirm, and achieve.
          </StaggerItem>

          <StaggerItem className="flex flex-col sm:flex-row items-center justify-center gap-y-4 gap-x-4 mt-10">
            <motion.a 
              href="https://play.google.com/store/apps/details?id=com.manifestom.app"
              className="group relative rounded-full bg-gradient-to-br from-slate-600/90 via-blue-600/80 to-slate-700/90 px-8 py-3.5 text-md font-semibold text-white shadow-lg border border-blue-400/20 outline-none transition-all duration-200 hover:shadow-[0_4px_15px_-5px_rgba(59,130,246,0.3)] hover:border-blue-300/30 flex items-center gap-2"
              whileHover={shouldAnimate ? { y: -1, scale: 1.005 } : {}}
              whileTap={shouldAnimate ? { scale: 0.995 } : {}}
              style={{ willChange: shouldAnimate ? 'transform' : 'auto' }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993.9993.4483.9993.9993c0 .5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0729L4.841 5.4207a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6892-7.5743-6.0775-9.4396"/>
              </svg>
              Download for Android
            </motion.a>
            
            <motion.div    
              className="group relative rounded-full bg-gradient-to-br from-gray-600/90 via-slate-600/80 to-gray-700/90 px-8 py-3.5 text-md font-semibold text-white shadow-lg border border-slate-400/20 outline-none transition-all duration-200 hover:shadow-[0_4px_15px_-5px_rgba(71,85,105,0.3)] hover:border-slate-300/30 flex items-center gap-2 cursor-not-allowed opacity-75"
              whileHover={shouldAnimate ? { y: -1, scale: 1.005 } : {}}
              whileTap={shouldAnimate ? { scale: 0.995 } : {}}
              style={{ willChange: shouldAnimate ? 'transform' : 'auto' }}
            >
              <svg className="w-5 h-5" viewBox="0 0 384 512" fill="currentColor">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              <span className="flex flex-col">
                <span>Download for iOS</span>
                <span className="text-xs text-gray-300 font-normal">Coming Soon</span>
              </span>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />
    </div>
  );
});

export default HeroSection;
