"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties, type ElementType } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
}

export default function FadeIn({
  children,
  delay = 0,
  className = "",
  style,
  as: Tag = "div",
}: FadeInProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = delay ? `${delay}ms` : "";
          el.classList.add("in-view");
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const Element = Tag;

  return (
    <Element
      ref={ref}
      className={`fade-in ${className}`}
      style={style}
    >
      {children}
    </Element>
  );
}
