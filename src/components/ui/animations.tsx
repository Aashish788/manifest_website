import React, { HTMLAttributes, ReactNode, forwardRef, useCallback, useMemo } from 'react';
import { motion, useInView, Variants, HTMLMotionProps, ForwardRefComponent, motion as motionComponents } from 'framer-motion';
import { PerformanceOptimizer, OPTIMIZED_ANIMATION_CONFIG } from '../../utils/performanceOptimizer';

type AnimateInProps = {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  once?: boolean;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
};

export const AnimateIn: React.FC<AnimateInProps> = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = OPTIMIZED_ANIMATION_CONFIG.duration.normal,
  once = true,
  as = 'div',
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once, margin: '50px' });

  // Check for reduced motion preference
  const shouldAnimate = !PerformanceOptimizer.prefersReducedMotion();

  const getDirectionVariants = useCallback((): Variants => {
    if (!shouldAnimate) {
      return {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      };
    }

    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -10 },
          visible: { opacity: 1, y: 0 },
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: 10 },
          visible: { opacity: 1, x: 0 },
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: -10 },
          visible: { opacity: 1, x: 0 },
        };
      case 'none':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      default:
        return {
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        };
    }
  }, [direction, shouldAnimate]);

  const variants = useMemo(() => getDirectionVariants(), [getDirectionVariants]);

  const transition = useMemo(() => 
    shouldAnimate 
      ? { duration, delay, ease: OPTIMIZED_ANIMATION_CONFIG.easing.easeOut }
      : OPTIMIZED_ANIMATION_CONFIG.reducedMotion
  , [duration, delay, shouldAnimate]);

  // Use optimized component selection
  let Component: any;
  if (typeof as === 'string') {
    Component = motion[as as keyof typeof motion] || motion.div;
  } else {
    Component = motion(as);
  }

  return (
    <Component
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={transition}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </Component>
  );
};

interface StaggerContainerProps extends Omit<HTMLMotionProps<"div">, "animate" | "initial" | "variants" | "transition"> {
  children: ReactNode;
  delay?: number;
  staggerDelay?: number;
  className?: string;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = '',
  delay = 0,
  staggerDelay = 0.05, // Reduced for better performance
  ...props
}) => {
  const shouldAnimate = !PerformanceOptimizer.prefersReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: shouldAnimate ? staggerDelay : 0,
      },
    },
  };

  // Filter out any props that might conflict with motion
  const safeProps = { ...props };
  delete safeProps.onAnimationStart;
  delete safeProps.onAnimationComplete;
  delete safeProps.onDrag;
  delete safeProps.onDragStart;
  delete safeProps.onDragEnd;

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '50px' }}
      style={{ willChange: shouldAnimate ? 'transform, opacity' : 'auto' }}
      {...safeProps}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  delay?: number;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  className = '',
  as = 'div',
  delay = 0,
}) => {
  const shouldAnimate = !PerformanceOptimizer.prefersReducedMotion();

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldAnimate ? 10 : 0 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: shouldAnimate 
        ? {
            duration: OPTIMIZED_ANIMATION_CONFIG.duration.normal,
            ease: OPTIMIZED_ANIMATION_CONFIG.easing.easeOut,
            delay,
          }
        : OPTIMIZED_ANIMATION_CONFIG.reducedMotion
    },
  };

  // Use optimized component selection
  let Component: any;
  if (typeof as === 'string') {
    Component = motion[as as keyof typeof motion] || motion.div;
  } else {
    Component = motion(as);
  }

  return (
    <Component 
      className={className} 
      variants={itemVariants}
      style={{ willChange: shouldAnimate ? 'transform, opacity' : 'auto' }}
    >
      {children}
    </Component>
  );
};

interface ShimmerButtonProps extends Omit<HTMLMotionProps<"button">, "animate" | "initial" | "transition" | "whileHover" | "whileTap"> {
  children?: ReactNode;
  className?: string;
  shimmerClassName?: string;
  onClick?: () => void;
  delay?: number;
  type?: 'button' | 'submit' | 'reset';
}

// Optimized shimmer button with performance improvements
export const ShimmerButton: React.FC<ShimmerButtonProps> = ({
  children,
  className = '',
  shimmerClassName = '',
  onClick,
  delay = 0,
  type = 'button',
  ...props
}) => {
  const shouldAnimate = !PerformanceOptimizer.prefersReducedMotion();
  
  // Filter out animation-related props to avoid type conflicts
  const safeProps = { ...props };
  delete safeProps.onAnimationStart;
  delete safeProps.onAnimationComplete;
  delete safeProps.onDrag;
  delete safeProps.onDragStart;
  delete safeProps.onDragEnd;

  return (
    <motion.button
      type={type}
      className={`relative overflow-hidden rounded-lg px-5 py-2.5 ${className}`}
      onClick={onClick}
      whileHover={shouldAnimate ? { scale: 1.01 } : {}}
      whileTap={shouldAnimate ? { scale: 0.99 } : {}}
      initial={{ opacity: 0, y: shouldAnimate ? 5 : 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        duration: OPTIMIZED_ANIMATION_CONFIG.duration.normal,
        ease: OPTIMIZED_ANIMATION_CONFIG.easing.easeOut
      }}
      style={{ willChange: shouldAnimate ? 'transform, opacity' : 'auto' }}
      {...safeProps}
    >
      <span className="relative z-10">{children}</span>
      {shouldAnimate && (
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent ${shimmerClassName}`}
          style={{ backgroundSize: '200% 100%' }}
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 2,
            ease: 'linear',
            delay: 1, // Delay initial shimmer
          }}
        />
      )}
    </motion.button>
  );
};

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

// Simplified glass card with better performance
export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  const shouldAnimate = !PerformanceOptimizer.prefersReducedMotion();
  
  return (
    <motion.div
      className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-premium ${className}`}
      whileHover={shouldAnimate ? { 
        y: -3,
        transition: { duration: 0.2 }
      } : {}}
      style={{ willChange: shouldAnimate ? 'transform' : 'auto' }}
    >
      {children}
    </motion.div>
  );
};

interface PremiumButtonProps extends Omit<HTMLMotionProps<"button">, "animate" | "initial" | "transition" | "whileHover" | "whileTap"> {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  delay?: number;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'purple' | 'teal' | 'default' | 'minimal-blue' | 'minimal-slate';
}

export const PremiumButton: React.FC<PremiumButtonProps> = ({
  children,
  className = '',
  onClick,
  delay = 0,
  type = 'button',
  variant = 'default',
  ...props
}) => {
  const shouldAnimate = !PerformanceOptimizer.prefersReducedMotion();
  
  // Filter out animation-related props to avoid type conflicts
  const safeProps = { ...props };
  delete safeProps.onAnimationStart;
  delete safeProps.onAnimationComplete;
  delete safeProps.onDrag;
  delete safeProps.onDragStart;
  delete safeProps.onDragEnd;

  // Apply different styles based on the variant
  const getButtonStyle = () => {
    switch (variant) {
      case 'purple':
        return 'bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 border border-purple-500/20 hover:shadow-[0_4px_15px_-5px_rgba(124,58,237,0.4)] hover:border-purple-400/30';
      case 'teal':
        return 'bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 border border-teal-500/20 hover:shadow-[0_4px_15px_-5px_rgba(20,184,166,0.4)] hover:border-teal-400/30';
      case 'minimal-blue':
        return 'bg-gradient-to-br from-slate-600/90 via-blue-600/80 to-slate-700/90 border border-blue-400/20 hover:shadow-[0_4px_15px_-5px_rgba(59,130,246,0.3)] hover:border-blue-300/30';
      case 'minimal-slate':
        return 'bg-gradient-to-br from-gray-600/90 via-slate-600/80 to-gray-700/90 border border-slate-400/20 hover:shadow-[0_4px_15px_-5px_rgba(71,85,105,0.3)] hover:border-slate-300/30';
      default:
        return 'bg-gradient-to-r from-purple-600 to-indigo-600 border border-indigo-500/20 hover:shadow-[0_4px_15px_-5px_rgba(99,102,241,0.4)] hover:border-indigo-400/30';
    }
  };

  return (
    <motion.button
      type={type}
      className={`relative rounded-full px-5 py-2.5 text-white font-semibold shadow-lg ${getButtonStyle()} transition-all duration-200 ${className}`}
      onClick={onClick}
      whileHover={shouldAnimate ? { y: -1, scale: 1.005 } : {}}
      whileTap={shouldAnimate ? { scale: 0.995 } : {}}
      initial={{ opacity: 0, y: shouldAnimate ? 5 : 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        duration: OPTIMIZED_ANIMATION_CONFIG.duration.normal,
        ease: OPTIMIZED_ANIMATION_CONFIG.easing.easeOut
      }}
      style={{ willChange: shouldAnimate ? 'transform, opacity' : 'auto' }}
      {...safeProps}
    >
      {children}
    </motion.button>
  );
};