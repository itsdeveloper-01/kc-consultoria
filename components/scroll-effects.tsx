"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function ScrollEffects() {
  useEffect(() => {
    let context: gsap.Context | undefined;

    const setup = async () => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      context = gsap.context(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion) {
          return;
        }

        gsap.utils.toArray<HTMLElement>("[data-reveal='up']").forEach((element) => {
          gsap.fromTo(
            element,
            { opacity: 0, y: 36 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
              },
            },
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-reveal='fade']").forEach((element) => {
          gsap.fromTo(
            element,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
              },
            },
          );
        });
      });
    };

    void setup();

    return () => {
      context?.revert();
    };
  }, []);

  return null;
}
