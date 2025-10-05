import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative flex items-center justify-center w-14 h-6 rounded-full p-1 transition-all duration-300
        ${theme === 'dark' 
          ? 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/25' 
          : 'bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg shadow-orange-500/25'
        }
        hover:scale-105 active:scale-95
      `}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Toggle circle */}
      <motion.div
        className={`
          absolute w-4 h-4 rounded-full shadow-md flex items-center justify-center text-xs
          ${theme === 'dark' ? 'bg-gray-800 text-blue-400' : 'bg-white text-yellow-600'}
        `}
        style={{
          left: '4px', // Start at padding position
        }}
        animate={{
          x: theme === 'dark' ? 32 : 0, // Travel 32px to stay within bounds
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      >
        {/* Icon */}
        <motion.div
          initial={false}
          animate={{ rotate: theme === 'dark' ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          {theme === 'dark' ? (
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2" />
              <path d="M12 21v2" />
              <path d="m4.22 4.22 1.42 1.42" />
              <path d="m18.36 18.36 1.42 1.42" />
              <path d="M1 12h2" />
              <path d="M21 12h2" />
              <path d="m4.22 19.78 1.42-1.42" />
              <path d="m18.36 5.64 1.42-1.42" />
            </svg>
          )}
        </motion.div>
      </motion.div>
      
      {/* Background stars for dark mode */}
      {theme === 'dark' && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="absolute top-1 left-2 w-0.5 h-0.5 bg-white rounded-full opacity-60"></div>
          <div className="absolute top-2 left-1 w-0.5 h-0.5 bg-white rounded-full opacity-40"></div>
        </motion.div>
      )}
    </motion.button>
  );
}; 