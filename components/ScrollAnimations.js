"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    const spotlightEls = document.querySelectorAll(
      ".service-card, .feature-box, .testimonial-card"
    );
    const handleSpotlightMove = (e) => {
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
      el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
    };
    spotlightEls.forEach((el) => {
      el.addEventListener("pointermove", handleSpotlightMove);
    });

    return () => {
      spotlightEls.forEach((el) => {
        el.removeEventListener("pointermove", handleSpotlightMove);
      });
    };
  }, []);

  return null;
}
