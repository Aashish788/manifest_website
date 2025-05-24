import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com/manifestapp', icon: 'M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z' },
    { name: 'Instagram', url: 'https://www.instagram.com/manifestapp', icon: 'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@manifestapp', icon: 'M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z' }
  ];

  return (
    <footer className="bg-gradient-to-b from-black to-purple-950 text-white relative flex flex-col w-full select-none pt-12 overflow-hidden">
      {/* Background effects */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(139, 92, 246, 0.3), transparent 70%)',
          filter: 'blur(100px)'
        }}
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <div className="container mx-auto px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-x-2">
              <motion.div 
                className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold text-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                M
              </motion.div>
              <span className="text-2xl font-semibold">Manifest</span>
            </div>
            <p className="text-zinc-300 text-sm max-w-xs">
              A powerful tool for manifestation, journaling, and goal tracking to help you transform your dreams into reality.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5" viewBox="0 0 512 512" fill="currentColor">
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">App Features</h3>
            <ul className="space-y-3">
              <li>
                <a href="/features/journaling" className="text-zinc-300 hover:text-purple-300 transition">Daily Journaling</a>
              </li>
              <li>
                <a href="/features/vision-board" className="text-zinc-300 hover:text-purple-300 transition">Vision Board</a>
              </li>
              <li>
                <a href="/features/goals" className="text-zinc-300 hover:text-purple-300 transition">Goal Tracking</a>
              </li>
              <li>
                <a href="/features/affirmations" className="text-zinc-300 hover:text-purple-300 transition">Affirmations</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="/blog" className="text-zinc-300 hover:text-purple-300 transition">Blog</a>
              </li>
              <li>
                <a href="/guides" className="text-zinc-300 hover:text-purple-300 transition">Manifestation Guides</a>
              </li>
              <li>
                <a href="/stories" className="text-zinc-300 hover:text-purple-300 transition">Success Stories</a>
              </li>
              <li>
                <a href="/support" className="text-zinc-300 hover:text-purple-300 transition">Help Center</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-zinc-300 hover:text-purple-300 transition">About Us</a>
              </li>
              <li>
                <a href="/careers" className="text-zinc-300 hover:text-purple-300 transition">Careers</a>
              </li>
              <li>
                <a href="/privacy" className="text-zinc-300 hover:text-purple-300 transition">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="text-zinc-300 hover:text-purple-300 transition">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-zinc-400">© {new Date().getFullYear()} Manifest App. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <motion.button
              className="text-sm text-zinc-400 hover:text-purple-300 transition flex items-center gap-2"
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to top
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
