"use client";
import React, { useEffect, useState, useRef } from "react";

interface AnimatedElementProps {
  children: React.ReactNode;
  animation?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  once?: boolean;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, animation = "fade-in", delay = 200, duration = 800, threshold = 0.1, rootMargin = "0px", className = "", once = true }) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsAnimated(true);
            }, delay);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setIsAnimated(false);
          }
        });
      },
      {
        threshold: [threshold],
        rootMargin,
      }
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [delay, threshold, rootMargin, once]);

  return (
    <div
      ref={elementRef}
      className={`${className} transition-opacity duration-300 ${isAnimated ? `animate-${animation}` : "opacity-0"}`}
      style={{
        animationDuration: `${duration}ms`,
        transition: `opacity ${duration}ms ease-out`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
