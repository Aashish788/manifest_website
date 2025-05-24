import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShimmerButton, PremiumButton } from '../ui/animations';

interface NavbarProps {
  transparent?: boolean;
}

const Navbar = ({ transparent = false }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      ticking = false;
    };

    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);
  
  const handleScrollTo = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`mx-auto fixed flex left-0 right-0 top-0 w-full z-[12] items-center justify-between max-w-[76rem] select-none transition-all duration-300 lg:mt-5 translate-y-0`}
    >
      <header className={`relative isolate w-full backdrop-blur-md ${scrolled ? 'bg-white/80 shadow-premium' : transparent ? 'bg-transparent' : 'bg-white/70'} rounded-full mx-5 transition-all duration-500`}>
        <nav className="flex items-center justify-between p-3 lg:p-4">
          {/* Logo/Brand */}
          <div className="flex lg:flex-1 ml-2">
            <Link className="flex items-center gap-x-1.5 transition group" to="/">
              <motion.div 
                className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold text-sm"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                M
              </motion.div>
              <span className="text-lg font-semibold transition group-hover:text-gradient group-hover:bg-gradient-to-r from-purple-500 to-indigo-600">Manifest</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <motion.button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </motion.button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex lg:gap-x-12">
            {[
              { name: 'Manifestation', link: '/#features', id: 'features' },
              { name: 'Journaling', link: '/#usage', id: 'usage' },
              { name: 'Vision Board', link: '/vision-board', id: '' },
              { name: 'Pricing', link: '/pricing', id: '' }
            ].map((item, index) => {
              const isInternal = !item.id;
              
              const NavItem = () => (
                <motion.span
                  className="text-sm/6 font-semibold text-zinc-900 transition hover:text-gradient hover:bg-gradient-to-r from-purple-500 to-indigo-600 relative"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                  <motion.span 
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"
                    initial={{ width: 0, left: '50%', transform: 'translateX(-50%)' }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.span>
              );
              
              return isInternal ? (
                <Link key={index} to={item.link}>
                  <NavItem />
                </Link>
              ) : (
                <a key={index} href={item.link}>
                  <NavItem />
                </a>
              );
            })}
          </div>

          {/* Desktop Auth Links */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-x-5">
            <motion.a 
              className="text-sm/6 font-semibold text-zinc-900 relative group"
              href="/login"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Log in
              <motion.span 
                className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"
                initial={{ width: 0, left: '50%', transform: 'translateX(-50%)' }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
            
            <PremiumButton
              className="flex px-4 py-2 gap-x-1.5 text-sm/6 font-semibold"
              variant="purple"
              onClick={() => window.location.href = '/signup'}
            >
              Start Manifesting
            </PremiumButton>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm">
                <motion.div 
                  className="fixed inset-y-0 right-0 z-50 w-full bg-white/95 backdrop-blur-lg px-6 py-6 sm:max-w-sm shadow-premium border-l border-white/20"
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center justify-between">
                    <Link to="/" className="-m-1.5 p-1.5 text-lg font-medium flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                      <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        M
                      </div>
                      <span className="font-semibold">Manifest</span>
                    </Link>
                    <motion.button
                      type="button"
                      className="-m-2.5 rounded-md p-2.5 text-gray-700"
                      onClick={() => setIsMenuOpen(false)}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="sr-only">Close menu</span>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </motion.button>
                  </div>
                  <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                      <div className="space-y-2 py-6">
                        {[
                          { name: 'Manifestation', link: '/#features', id: 'features' },
                          { name: 'Journaling', link: '/#usage', id: 'usage' },
                          { name: 'Vision Board', link: '/vision-board', id: '' },
                          { name: 'Pricing', link: '/pricing', id: '' }
                        ].map((item, index) => {
                          const isInternal = !item.id;
                          
                          return (
                            <motion.div
                              key={index}
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              {isInternal ? (
                                <Link 
                                  to={item.link}
                                  className="-mx-3 block rounded-lg px-4 py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50/80 flex items-center justify-between" 
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {item.name}
                                  <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </Link>
                              ) : (
                                <button
                                  className="-mx-3 block rounded-lg px-4 py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50/80 w-full text-left flex items-center justify-between"
                                  onClick={() => handleScrollTo(item.id)}
                                >
                                  {item.name}
                                  <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </button>
                              )}
                            </motion.div>
                          );
                        })}
                      </div>
                      <div className="py-6 space-y-4">
                        <a href="/login" className="-mx-3 block rounded-lg px-4 py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50/80 flex items-center">
                          Log in
                          <svg className="w-5 h-5 ml-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                          </svg>
                        </a>
                        <a href="/signup" className="-mx-3 block rounded-lg px-4 py-3 text-base font-semibold leading-7 text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-between">
                          Start Manifesting
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </motion.div>
  );
};

export default Navbar;
