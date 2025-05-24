import { motion } from 'framer-motion';
import { AnimateIn } from '../ui/animations';
import React from 'react';

const CtaSection = React.memo(() => {
  return (
    <div className="relative mx-auto max-w-7xl py-60 mt-10 lg:mt-0 select-none overflow-hidden">
      {/* Static background effect - removed infinite animation */}
      <div 
        className="absolute inset-0 opacity-15 -z-10"
        style={{
          background: 'radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.3), transparent 70%)',
          filter: 'blur(80px)',
          transform: 'translate3d(0, 0, 0)'
        }}
      />
      
      {/* Removed floating particles to improve performance */}
      <div className="absolute top-[20%] right-[15%] w-[200px] h-[200px] rounded-full backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-blue-500/5 border border-white/20 shadow-glass-color -z-1" />
      
      <div className="relative z-[1] text-center">
        <AnimateIn className="mb-8">
          <span className="uppercase text-zinc-500 tracking-wider text-lg font-medium">Begin Your Journey</span>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-zinc-900 sm:text-6xl max-w-3xl mx-auto">
            Transform Your <span className="text-gradient bg-gradient-to-r from-purple-600 to-indigo-600">Thoughts</span> Into Reality.
          </h1>
          <p className="mt-6 text-xl text-zinc-600 max-w-2xl mx-auto">
            Visualize, affirm, and manifest the life of your dreams with our powerful tools for intentional living.
          </p>
        </AnimateIn>
        
        <AnimateIn className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6" delay={0.2}>
          <motion.a 
            href="https://apps.apple.com"
            className="group relative rounded-full bg-gradient-to-br from-slate-600/90 via-blue-600/80 to-slate-700/90 px-8 py-3.5 text-md font-semibold text-white shadow-lg border border-blue-400/20 outline-none transition-all duration-300 hover:shadow-[0_8px_25px_-5px_rgba(59,130,246,0.4)] hover:border-blue-300/30 hover:bg-gradient-to-br hover:from-blue-600/90 hover:via-indigo-500/80 hover:to-slate-600/90 flex items-center gap-2"
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <svg className="w-5 h-5" viewBox="0 0 384 512" fill="currentColor">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
            </svg>
            Download for iOS
          </motion.a>
          
          <motion.a 
            href="https://play.google.com"
            className="group relative rounded-full bg-gradient-to-br from-gray-600/90 via-slate-600/80 to-gray-700/90 px-8 py-3.5 text-md font-semibold text-white shadow-lg border border-slate-400/20 outline-none transition-all duration-300 hover:shadow-[0_8px_25px_-5px_rgba(71,85,105,0.4)] hover:border-slate-300/30 hover:bg-gradient-to-br hover:from-slate-600/90 hover:via-blue-500/80 hover:to-gray-600/90 flex items-center gap-2"
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993.9993.4483.9993.9993c0 .5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0729L4.841 5.4207a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6892-7.5743-6.0775-9.4396"/>
            </svg>
            Download for Android
          </motion.a>
        </AnimateIn>
      </div>
    </div>
  );
});

export default CtaSection;
