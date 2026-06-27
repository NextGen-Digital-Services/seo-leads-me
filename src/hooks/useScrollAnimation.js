import { useEffect } from 'react';

/**
 * Hook to automatically apply visibility classes to elements with the
 * 'fade-up-element' class when they scroll into view.
 * @param {any} dependency - Optional trigger to re-run observation (e.g. pathname)
 */
export const useScrollAnimation = (dependency) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Unobserve after showing so we don't trigger repeated animations
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully in view
      }
    );

    // Timeout ensures that DOM nodes have fully rendered before scanning
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll('.fade-up-element');
      elements.forEach((el) => {
        // If it's already in the viewport, trigger it
        const rect = el.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
          el.classList.add('is-visible');
        } else {
          observer.observe(el);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      const elements = document.querySelectorAll('.fade-up-element');
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [dependency]);
};
export default useScrollAnimation;
