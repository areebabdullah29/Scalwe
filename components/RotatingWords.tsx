"use client";

import { useEffect, useState } from "react";

type RotatingWordsProps = {
  words: string[];
  interval?: number;
};

export default function RotatingWords({ words, interval = 2400 }: RotatingWordsProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (words.length < 2) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setVisible(true);
      }, 350);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <span className={`rotating-word${visible ? " is-visible" : ""}`}>
      {words[index]}
    </span>
  );
}
