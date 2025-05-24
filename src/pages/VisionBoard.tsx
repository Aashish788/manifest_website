import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { AnimateIn, StaggerContainer, StaggerItem, GlassCard } from '../components/ui/animations';

const VisionBoard = () => {
  // Sample vision board categories
  const categories = [
    {
      title: "Career & Purpose",
      description: "Visualize your ideal career path, work environment, and professional achievements",
      icon: (
        <svg className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Relationships & Love",
      description: "Create a visual representation of your ideal relationships, love life, and social connections",
      icon: (
        <svg className="w-8 h-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "Health & Wellness",
      description: "Visualize your optimal health, fitness goals, and wellness practices",
      icon: (
        <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Wealth & Abundance",
      description: "Create a visual representation of your financial goals, dream home, and material aspirations",
      icon: (
        <svg className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-amber-500 to-orange-600"
    },
    {
      title: "Personal Growth",
      description: "Visualize your journey of self-improvement, learning, and spiritual development",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Travel & Adventure",
      description: "Create a visual map of places you want to visit and experiences you want to have",
      icon: (
        <svg className="w-8 h-8 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-teal-500 to-cyan-600"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative py-28 lg:py-32 overflow-hidden">
          {/* Background effects */}
          <motion.div 
            className="absolute inset-0 opacity-20 -z-10"
            style={{
              background: 'radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.3), transparent 70%)',
              filter: 'blur(80px)'
            }}
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          
          <div className="container mx-auto px-6 relative z-10">
            <AnimateIn className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-semibold tracking-tight mb-6">
                Create Your Digital <span className="text-gradient bg-gradient-to-r from-purple-600 to-indigo-600">Vision Board</span>
              </h1>
              <p className="text-xl text-zinc-600 max-w-2xl mx-auto mb-12">
                Visualize your dreams, manifest your desires, and bring your goals to life with our intuitive vision board creator.
              </p>
              
              <motion.a 
                href="/app"
                className="inline-flex items-center gap-x-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-3.5 text-lg font-semibold text-white shadow-premium outline-none transition-all duration-300 hover:shadow-glow hover:scale-[102%]"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Creating
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </AnimateIn>
          </div>
        </div>
        
        {/* Vision Board Categories */}
        <div className="py-20 bg-gray-50/80">
          <div className="container mx-auto px-6">
            <AnimateIn className="text-center mb-16">
              <h2 className="text-lg/10 font-base text-zinc-500 uppercase tracking-wider font-medium mb-3">
                Visualization Categories
              </h2>
              <p className="text-4xl font-medium tracking-tight">
                Create Vision Boards For Every Area Of Your Life
              </p>
            </AnimateIn>
            
            <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" delay={0.1} staggerDelay={0.1}>
              {categories.map((category, index) => (
                <StaggerItem key={index}>
                  <motion.div 
                    className="bg-white rounded-2xl p-8 shadow-soft h-full"
                    whileHover={{ y: -10, boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`p-3 mb-5 inline-flex items-center justify-center rounded-xl bg-gradient-to-r ${category.color} text-white`}>
                      {category.icon}
                    </div>
                    
                    <h3 className="text-2xl font-semibold mb-3">{category.title}</h3>
                    <p className="text-zinc-600">{category.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
        
        {/* How It Works */}
        <div className="py-20">
          <div className="container mx-auto px-6">
            <AnimateIn className="text-center mb-16">
              <h2 className="text-lg/10 font-base text-zinc-500 uppercase tracking-wider font-medium mb-3">
                The Process
              </h2>
              <p className="text-4xl font-medium tracking-tight">
                How To Create Your <span className="text-gradient bg-gradient-to-r from-purple-600 to-indigo-600">Vision Board</span>
              </p>
            </AnimateIn>
            
            <div className="max-w-4xl mx-auto">
              <StaggerContainer className="relative" delay={0.2} staggerDelay={0.15}>
                {/* Connecting line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-indigo-600 hidden md:block"></div>
                
                {/* Steps */}
                {[
                  {
                    number: "01",
                    title: "Set Clear Intentions",
                    description: "Begin by clarifying exactly what you want to manifest in your life. Be specific about your goals and desires."
                  },
                  {
                    number: "02",
                    title: "Gather Visual Inspiration",
                    description: "Upload images, quotes, and symbols that represent your dreams and goals. Our app provides a library of inspirational visuals to choose from."
                  },
                  {
                    number: "03",
                    title: "Design Your Board",
                    description: "Arrange your visuals in a way that feels inspiring to you. Add colors, text, and effects to enhance your vision board."
                  },
                  {
                    number: "04",
                    title: "Practice Daily Visualization",
                    description: "Set reminders to view your vision board daily. Spend time visualizing yourself already having achieved your desires."
                  }
                ].map((step, index) => (
                  <StaggerItem key={index} className="mb-12 md:mb-16 relative">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="relative z-10">
                        <motion.div 
                          className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xl font-semibold"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          {step.number}
                        </motion.div>
                      </div>
                      
                      <div className="md:pt-2">
                        <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                        <p className="text-zinc-600">{step.description}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
        
        {/* App CTA */}
        <div className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <AnimateIn>
                <h2 className="text-4xl font-semibold mb-6">Ready to Manifest Your Dreams?</h2>
                <p className="text-xl text-purple-100 mb-10">
                  Download our app today and start creating beautiful vision boards that will help you attract everything you desire.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <motion.a 
                    href="https://apps.apple.com"
                    className="group relative overflow-hidden rounded-full bg-white px-8 py-3.5 text-md font-semibold text-purple-900 shadow-premium outline-none transition-all duration-300 hover:shadow-glow hover:scale-[102%] flex items-center gap-2"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 384 512" fill="currentColor">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                    </svg>
                    Download for iOS
                  </motion.a>
                  
                  <motion.a 
                    href="https://play.google.com"
                    className="group relative overflow-hidden rounded-full bg-white px-8 py-3.5 text-md font-semibold text-purple-900 shadow-premium outline-none transition-all duration-300 hover:shadow-glow hover:scale-[102%] flex items-center gap-2"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993.9993.4483.9993.9993c0 .5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0729L4.841 5.4207a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6892-7.5743-6.0775-9.4396"/>
                    </svg>
                    Download for Android
                  </motion.a>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VisionBoard;
