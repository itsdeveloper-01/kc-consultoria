"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type CaseItem = {
  quote: string;
  author: string;
  role: string;
  area: string;
};

export default function CasesCarousel({
  cases,
  disclaimer,
}: {
  cases: readonly CaseItem[];
  disclaimer: string;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "left" | "right") => {
    const container = scrollerRef.current;

    if (!container) {
      return;
    }

    const card = container.querySelector<HTMLElement>("[data-case-card]");
    const amount = card ? card.offsetWidth + 16 : 420;

    container.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-end gap-2" data-reveal="up">
        <button
          type="button"
          aria-label="Ver testimonio anterior"
          onClick={() => scrollByCard("left")}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-[var(--color-panel)] text-[var(--color-ink)] transition-[border-color,color,transform] duration-150 hover:border-[var(--color-gold)]/28 hover:text-[var(--color-gold)] active:scale-[0.94]"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.8} />
        </button>
        <button
          type="button"
          aria-label="Ver siguiente testimonio"
          onClick={() => scrollByCard("right")}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-[var(--color-panel)] text-[var(--color-ink)] transition-[border-color,color,transform] duration-150 hover:border-[var(--color-gold)]/28 hover:text-[var(--color-gold)] active:scale-[0.94]"
        >
          <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
        </button>
      </div>

      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {cases.map((item, index) => {
          const initials = item.author
            .split(",")[0]
            .split(" ")
            .map((part) => part.charAt(0))
            .slice(0, 2)
            .join("");

          return (
            <article
              key={`${item.author}-${index}`}
              data-case-card
              className="flex min-h-[520px] w-[84vw] max-w-[380px] shrink-0 snap-start flex-col justify-between border border-black/8 bg-[var(--color-panel)] p-7 shadow-[0_24px_70px_rgba(6,27,51,0.05)] sm:h-[500px] sm:min-h-[500px] sm:w-[380px] sm:p-8"
              data-reveal="up"
            >
              <div className="space-y-12">
                <div className="flex items-start justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-gold)]/20 bg-[rgba(248,243,235,0.9)] text-sm font-medium tracking-[0.12em] text-[var(--color-ink)]">
                      {initials}
                    </div>
                    <p className="max-w-[12ch] text-[11px] uppercase tracking-[0.22em] text-[var(--color-gold)]">
                      {item.area}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 pt-1 text-[var(--color-ink)]">
                    <span className="inline-flex h-5 w-5 rounded-full bg-[var(--color-ink)]/88" />
                    <span className="inline-flex h-5 w-5 -ml-3 rounded-full bg-[var(--color-ink)]" />
                    <span className="pl-1 text-lg font-medium tracking-[-0.04em]">KC Despacho</span>
                  </div>
                </div>

                <p className="text-[1.12rem] leading-[1.34] tracking-[-0.028em] text-[var(--color-ink)]">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="border-t border-black/10 pt-6">
                <div className="flex gap-5">
                  <span className="mt-1 h-[52px] w-px shrink-0 bg-[var(--color-ink)]/28" />
                  <div>
                    <p className="text-[1.04rem] font-medium text-[var(--color-ink)]">{item.author}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">{item.role}</p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div
        className="border border-black/8 bg-[rgba(248,243,235,0.5)] px-5 py-4 text-sm leading-7 text-[var(--color-muted)]"
        data-reveal="up"
      >
        {disclaimer}
      </div>
    </div>
  );
}
