import { motion } from 'framer-motion';
import { AnimateIn, StaggerContainer, StaggerItem } from '../ui/animations';
import React from 'react';

const FeaturesSection = React.memo(() => {
  const features = [
    {
      title: "Dream Journaling",
      description: "Record your dreams, aspirations, and goals. Our structured templates make it easy to clarify what you truly want to manifest.",
      icon: (
        <svg className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      borderColor: "from-purple-500/20 to-transparent",
    },
    {
      title: "Visualization Boards",
      description: "Create beautiful digital vision boards with images, affirmations, and goals that represent your ideal future and what you want to attract.",
      icon: (
        <svg className="w-8 h-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      borderColor: "from-indigo-500/20 to-transparent",
    },
    {
      title: "Goal Tracking",
      description: "Set milestones, track your progress, and celebrate your achievements. Our system helps you stay accountable to your manifestation journey.",
      icon: (
        <svg className="w-8 h-8 text-fuchsia-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      borderColor: "from-fuchsia-500/20 to-transparent",
    }
  ];

  return (
    <div id="features" className="mx-auto max-w-7xl pt-20 lg:pt-24 select-none relative">
      {/* Static background blur effects - removed infinite animations */}
      <div 
        className="absolute top-1/4 right-0 w-1/3 h-1/3 opacity-20 rounded-full"
        style={{
          filter: 'blur(120px)',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3), rgba(79, 70, 229, 0.1))',
          transform: 'translate3d(0, 0, 0)'
        }}
      />
      
      <div 
        className="absolute bottom-1/4 left-0 w-1/3 h-1/3 opacity-20 rounded-full"
        style={{
          filter: 'blur(120px)',
          background: 'radial-gradient(circle, rgba(192, 132, 252, 0.3), rgba(139, 92, 246, 0.1))',
          transform: 'translate3d(0, 0, 0)'
        }}
      />

      {/* Section Header */}
      <div className="mx-auto max-w-2xl sm:text-center px-5 lg:px-0 relative z-10">
        <AnimateIn direction="up">
          <h2 className="text-lg/10 font-base text-zinc-500 uppercase tracking-wider font-medium">
            The power of intention
          </h2>
        </AnimateIn>
        <AnimateIn direction="up" delay={0.1}>
          <p className="mt-2 text-4xl font-medium tracking-tight text-pretty text-black sm:text-5xl sm:text-balance mb-4">
            Transform your dreams into <span className="text-gradient">reality</span> with intention
          </p>
        </AnimateIn>
      </div>

      {/* Features Grid */}
      <div className="mt-20 mb-16 lg:mb-20 px-5 lg:px-0 relative z-10">
        <StaggerContainer className="grid gap-8 lg:grid-cols-3" delay={0.2} staggerDelay={0.15}>
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <motion.div 
                className="relative p-8 rounded-2xl border border-zinc-200/80 bg-white/70 backdrop-blur-sm shadow-soft overflow-hidden"
                whileHover={{ y: -5, boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 right-0 w-48 h-24 -mr-12 -mt-12 bg-gradient-to-bl opacity-20 rounded-full blur-3xl"
                     style={{ background: `linear-gradient(to bottom left, ${feature.borderColor.split(' ')[1].replace('to-', '')}, transparent)`}} />
                
                <div className="p-3 mb-5 inline-flex items-center justify-center rounded-xl bg-gradient-to-br bg-opacity-10 backdrop-blur-sm border border-zinc-200/80 shadow-soft">
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-base/relaxed text-zinc-600">{feature.description}</p>

                <motion.div 
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.borderColor} w-full`}
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: '100%', opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Decorative element */}
      <div className="hidden lg:block absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent opacity-50" />
    </div>
  );
});

export default FeaturesSection;
