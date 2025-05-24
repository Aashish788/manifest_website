import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { AnimateIn } from '../ui/animations';

const UseCasesSection = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.getBoundingClientRect().top;
      const containerHeight = containerRef.current.offsetHeight;
      const scrollPosition = window.scrollY;

      // Determine which section is most visible
      let newActiveSection = 0;
      let maxVisibility = 0;

      sectionRefs.current.forEach((section, index) => {
        if (!section) return;

        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;
        const viewportHeight = window.innerHeight;

        const visiblePx =
          Math.min(sectionTop + sectionHeight, viewportHeight) -
          Math.max(sectionTop, 0);
        const visiblePercent = visiblePx / sectionHeight;

        if (visiblePercent > maxVisibility) {
          maxVisibility = visiblePercent;
          newActiveSection = index;
        }
      });

      setActiveSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Store refs for sections
  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !sectionRefs.current[index]) {
      sectionRefs.current[index] = el;
    }
  };

  const sections = [
    {
      id: "daily-journaling",
      title: "Daily Journaling",
      description:
        "Manifest guides you through daily journaling with purpose-driven prompts that help clarify your intentions, process emotions, and cultivate gratitude to manifest your desires with greater clarity.",
      imageUrl: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "vision-boards",
      title: "Vision Boards",
      description:
        "Create beautiful digital vision boards that help you visualize your goals and desires. Add images, affirmations, and color themes that resonate with your dreams and aspirations.",
      imageUrl: "https://images.unsplash.com/photo-1483546416237-76fd26bbcdd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "habit-tracking",
      title: "Habit Tracking",
      description:
        "Track your manifestation practices and daily habits with our intuitive system. Set intentions, monitor progress, and celebrate your consistency as you align your actions with your dreams.",
      imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <div
      id="usage"
      className="mx-auto max-w-7xl pt-32 select-none relative"
      ref={containerRef}
    >
      {/* Static background gradient - removed infinite animation */}
      <div 
        className="absolute top-1/4 right-1/4 w-1/3 h-1/3 opacity-15 rounded-full"
        style={{
          filter: 'blur(120px)',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5), rgba(79, 70, 229, 0.2))'
        }}
      />
      
      <AnimateIn>
        <h1 className="text-4xl font-medium max-w-md mx-4 sm:mx-8 lg:-mb-12 text-gradient bg-gradient-to-r from-purple-600 to-indigo-600">
          Three Paths to Manifestation
        </h1>
      </AnimateIn>

      {/* Mobile-first responsive layout */}
      <div className="block md:flex md:flex-row mt-8 md:mt-0">
        {/* Mobile: Show each section with its own image */}
        <div className="block md:hidden">
          {sections.map((section, idx) => (
            <div key={`mobile-${section.id}`} className="mb-16">
              {/* Image for mobile */}
              <div className="w-full mb-8 flex justify-center">
                <img
                  src={section.imageUrl}
                  alt={`${section.title} image`}
                  className="w-full max-w-sm h-64 object-cover rounded-2xl shadow-premium"
                  width="400"
                  height="256"
                />
              </div>
              {/* Text content for mobile */}
              <div className="px-8">
                <h2 className="text-4xl font-medium mb-4 text-center">
                  {section.title}
                </h2>
                <p className="text-lg text-zinc-600 text-center">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Original layout with sticky image */}
        <div className="hidden md:flex md:flex-row w-full">
          {/* Image column - stays fixed while scrolling on desktop */}
          <div className="w-3/5 sticky top-0 h-screen flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {/* Images for each section, showing based on active section */}
              {sections.map((section, idx) => (
                <motion.div
                  key={section.id}
                  className={`absolute w-full h-full flex items-center justify-center transition-opacity duration-500 ${
                    activeSection === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ 
                    opacity: activeSection === idx ? 1 : 0,
                    scale: activeSection === idx ? 1 : 0.95
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={section.imageUrl}
                    alt={`${section.title} image`}
                    className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-premium"
                    width="697"
                    height="519"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 via-transparent to-purple-600/20 opacity-0 rounded-2xl"
                    whileHover={{ opacity: 0.6 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>          {/* Text sections column - scrolls normally */}
          <div className="w-1/2 ml-auto">
            {sections.map((section, idx) => (
              <div
                key={section.id}
                ref={(el) => addToRefs(el, idx)}
                className="lg:min-h-screen flex items-center overflow-hidden"
                style={{ willChange: 'transform' }}
              >
                <div className="max-w-xl w-full">
                  <div className="p-8 lg:pl-20">
                    <motion.h2 
                      className="text-5xl font-medium mb-4"
                      initial={{ opacity: 0.5, y: 10 }}
                      animate={{ 
                        opacity: activeSection === idx ? 1 : 0.5,
                        y: activeSection === idx ? 0 : 10
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {section.title}
                    </motion.h2>
                    <motion.p 
                      className="text-xl text-zinc-600 max-w-94"
                      initial={{ opacity: 0.5, y: 10 }}
                      animate={{ 
                        opacity: activeSection === idx ? 1 : 0.5,
                        y: activeSection === idx ? 0 : 10
                      }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      {section.description}
                    </motion.p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCasesSection;
