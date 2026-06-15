"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("legislacion");

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting || entry.boundingClientRect.top < 0);
      },
      {
        threshold: 0.18,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <a
      href="#"
      aria-label="Volver al inicio"
      className={`fixed bottom-6 right-5 z-40 inline-flex h-12 w-12 items-center justify-center border border-black/10 bg-[var(--color-panel)] text-[var(--color-ink)] shadow-[0_18px_40px_rgba(6,27,51,0.12)] transition-all duration-300 hover:border-[var(--color-gold)]/28 hover:text-[var(--color-gold)] sm:bottom-8 sm:right-8 ${
        visible ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp className="h-4 w-4" strokeWidth={1.9} />
    </a>
  );
}
