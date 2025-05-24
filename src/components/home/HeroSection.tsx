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
              href="https://apps.apple.com"
              className="group relative rounded-full bg-gradient-to-br from-slate-600/90 via-blue-600/80 to-slate-700/90 px-8 py-3.5 text-md font-semibold text-white shadow-lg border border-blue-400/20 outline-none transition-all duration-200 hover:shadow-[0_4px_15px_-5px_rgba(59,130,246,0.3)] hover:border-blue-300/30 flex items-center gap-2"
              whileHover={shouldAnimate ? { y: -1, scale: 1.005 } : {}}
              whileTap={shouldAnimate ? { scale: 0.995 } : {}}
              style={{ willChange: shouldAnimate ? 'transform' : 'auto' }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.5 3a5.25 5.25 0 0 0-4.5 2.562A5.25 5.25 0 0 0 7.5 3 5.25 5.25 0 0 0 2.25 8.25c0 3.347 3.216 6.099 8.066 10.229a.75.75 0 0 0 1.03.054l.084-.075C16.283 14.35 19.5 11.597 19.5 8.25A5.25 5.25 0 0 0 16.5 3Z" />
              </svg>
              Download for iOS
            </motion.a>
            
            <motion.a 
              href="https://play.google.com"
              className="group relative rounded-full bg-gradient-to-br from-gray-600/90 via-slate-600/80 to-gray-700/90 px-8 py-3.5 text-md font-semibold text-white shadow-lg border border-slate-400/20 outline-none transition-all duration-200 hover:shadow-[0_4px_15px_-5px_rgba(71,85,105,0.3)] hover:border-slate-300/30 flex items-center gap-2"
              whileHover={shouldAnimate ? { y: -1, scale: 1.005 } : {}}
              whileTap={shouldAnimate ? { scale: 0.995 } : {}}
              style={{ willChange: shouldAnimate ? 'transform' : 'auto' }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993.9993.4483.9993.9993c0 .5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0729L4.841 5.4207a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6892-7.5743-6.0775-9.4396"/>
              </svg>
              Download for Android
            </motion.a>
          </StaggerItem>
        </StaggerContainer>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />
    </div>
  );
});

export default HeroSection;
