import { useEffect, useRef, useState } from 'react';

export const useAutoScroll = (
  scrollAmount: number,
  intervalDuration: number,
  threshold: number = 0.5
) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold }
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => {
      if (scrollRef.current) {
        observer.unobserve(scrollRef.current);
      }
    };
  }, [threshold]);

  useEffect(() => {
    if (!isInView) return;

    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        });

        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    }, intervalDuration);

    return () => clearInterval(scrollInterval);
  }, [isInView, scrollAmount, intervalDuration]);

  return scrollRef;
};
