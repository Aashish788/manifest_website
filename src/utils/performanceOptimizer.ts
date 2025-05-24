// Performance optimization utilities for better website performance
export class PerformanceOptimizer {
  private static rafId: number | null = null;
  private static observers: IntersectionObserver[] = [];
  
  // Throttle function execution
  static throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return function (this: any, ...args: Parameters<T>) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  // Debounce function execution
  static debounce<T extends (...args: any[]) => any>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => void {
    let timeoutId: NodeJS.Timeout;
    return function (this: any, ...args: Parameters<T>) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  }

  // Optimize animations for better performance
  static optimizeAnimation(element: HTMLElement, properties: string[]) {
    // Enable hardware acceleration
    element.style.willChange = properties.join(', ');
    element.style.transform = 'translate3d(0, 0, 0)';
    element.style.backfaceVisibility = 'hidden';
    element.style.perspective = '1000px';
  }

  // Clean up will-change after animation
  static cleanupAnimation(element: HTMLElement) {
    element.style.willChange = 'auto';
  }

  // Intersection observer for lazy animations
  static createIntersectionObserver(
    callback: (entries: IntersectionObserverEntry[]) => void,
    options?: IntersectionObserverInit
  ): IntersectionObserver {
    const observer = new IntersectionObserver(callback, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options,
    });
    this.observers.push(observer);
    return observer;
  }

  // Cleanup all observers
  static cleanup() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  // Check if user prefers reduced motion
  static prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  // Optimize scroll handling
  static optimizeScroll(callback: () => void) {
    if (this.rafId) return;
    
    this.rafId = requestAnimationFrame(() => {
      callback();
      this.rafId = null;
    });
  }
}

// Export performance-optimized animation settings
export const OPTIMIZED_ANIMATION_CONFIG = {
  // Reduced durations for better performance
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
  },
  
  // Optimized easing functions
  easing: {
    easeOut: [0.25, 0.46, 0.45, 0.94],
    easeInOut: [0.4, 0, 0.2, 1],
    spring: { type: 'spring', stiffness: 300, damping: 30 },
  },
  
  // Performance-conscious defaults
  defaults: {
    duration: 0.3,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
  
  // Reduced motion settings
  reducedMotion: {
    duration: 0.01,
    ease: 'linear',
  },
};
