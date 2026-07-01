import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}
export function ParallaxSection({
  children,
  className = '',
  speed = 0.3,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = rect.top + scrolled;
      const viewportHeight = window.innerHeight;
      const relativeScroll = scrolled - elementTop + viewportHeight;
      setOffset(relativeScroll * speed);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <div
        style={{ transform: `translateY(${offset}px)` }}
        className="transition-transform duration-75"
      >
        {children}
      </div>
    </div>
  );
}
interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}
export function FadeInSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);
  const getTransform = () => {
    const distance = 40;
    switch (direction) {
      case 'up':
        return `translateY(${distance}px)`;
      case 'down':
        return `translateY(-${distance}px)`;
      case 'left':
        return `translateX(${distance}px)`;
      case 'right':
        return `translateX(-${distance}px)`;
      default:
        return `translateY(${distance}px)`;
    }
  };
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : getTransform(),
      }}
    >
      {children}
    </div>
  );
}
interface StaggerChildrenProps {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
}
export function StaggerChildren({
  children,
  className = '',
  staggerDelay = 100,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const childCount = React.Children.count(children);
          const delays = Array.from(
            { length: childCount },
            (_, i) => i * staggerDelay
          );
          delays.forEach((delay, i) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, i]);
            }, delay);
          });
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [children, staggerDelay]);
  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          style={{
            opacity: visibleItems.includes(index) ? 1 : 0,
            transform: visibleItems.includes(index)
              ? 'translateY(0)'
              : 'translateY(30px)',
            transition: 'all 0.6s ease-out',
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}