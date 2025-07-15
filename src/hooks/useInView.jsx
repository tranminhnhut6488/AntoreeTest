import { useEffect, useState, useCallback } from 'react';

export const useInView = (threshold = 0.1) => {
  const [node, setNode] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const ref = useCallback((element) => {
    setNode(element);
  }, []);

  useEffect(() => {
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [node, threshold]);

  return [ref, isVisible];
};
