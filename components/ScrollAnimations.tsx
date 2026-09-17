"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    document.querySelectorAll<HTMLElement>("[data-reveal-delay]").forEach((el) => {
      el.style.setProperty("--reveal-delay", el.dataset.revealDelay ?? "0");
    });

    const revealEls = document.querySelectorAll<HTMLElement>(".reveal");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let revealObserver: IntersectionObserver | undefined;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    } else {
      revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
      );
      revealEls.forEach((el) => revealObserver!.observe(el));
    }

    const bars = document.querySelector<HTMLElement>(".bars");
    let barsObserver: IntersectionObserver | undefined;
    const startBars = () => {
      bars?.querySelectorAll<HTMLElement>("span").forEach((bar) => {
        bar.style.setProperty("--bar-height", `${bar.dataset.height}%`);
      });
      bars?.classList.add("is-animated");
    };
    if (bars) {
      if (prefersReducedMotion || !("IntersectionObserver" in window)) {
        startBars();
      } else {
        barsObserver = new IntersectionObserver(
          (entries, observer) => {
            if (entries[0].isIntersecting) {
              startBars();
              observer.disconnect();
            }
          },
          { threshold: 0.4 }
        );
        barsObserver.observe(bars);
      }
    }

    const countEls = document.querySelectorAll<HTMLElement>(".count-up");
    const animateCount = (el: HTMLElement) => {
      const target = parseFloat(el.dataset.countTo ?? "0");
      const suffix = el.dataset.suffix || "";
      const isDecimal = String(el.dataset.countTo).includes(".");
      const duration = 1400;
      const start = performance.now();

      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;
        el.textContent = `${isDecimal ? value.toFixed(1) : Math.round(value)}${suffix}`;
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    };

    let countObserver: IntersectionObserver | undefined;
    if (countEls.length) {
      if (prefersReducedMotion || !("IntersectionObserver" in window)) {
        countEls.forEach((el) => {
          el.textContent = `${el.dataset.countTo}${el.dataset.suffix || ""}`;
        });
      } else {
        countObserver = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                animateCount(entry.target as HTMLElement);
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.6 }
        );
        countEls.forEach((el) => countObserver!.observe(el));
      }
    }

    const spotlightEls = document.querySelectorAll<HTMLElement>(
      ".service-card, .feature-box, .testimonial-card"
    );
    const handleSpotlightMove = (e: PointerEvent) => {
      const el = e.currentTarget as HTMLElement;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
      el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
    };
    spotlightEls.forEach((el) => {
      el.addEventListener("pointermove", handleSpotlightMove);
    });

    return () => {
      revealObserver?.disconnect();
      barsObserver?.disconnect();
      countObserver?.disconnect();
      spotlightEls.forEach((el) => {
        el.removeEventListener("pointermove", handleSpotlightMove);
      });
    };
  }, []);

  return null;
}
