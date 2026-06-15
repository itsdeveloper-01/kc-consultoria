"use client";

import { useState, useEffect, useCallback } from "react";
import { Play, ChevronLeft, ChevronRight, X, ArrowUpRight } from "lucide-react";

type MediaItem = {
  id: string;
  category: string;
  title: string;
  description: string;
  type: "video" | "article";
  href: string;
  videoId?: string;
};

const mediaItems: MediaItem[] = [
  {
    id: "video-modalidad-40-profundidad",
    category: "Pensiones y Modalidad 40",
    title: "Modalidad 40: Revisión a profundidad",
    description:
      "Explicación detallada sobre requisitos, beneficios y estrategias para incrementar el monto de la pensión.",
    type: "video",
    href: "https://www.youtube.com/watch?v=qdhrUlkP1SE",
    videoId: "qdhrUlkP1SE",
  },
  {
    id: "video-imss-fraudes-pensiones",
    category: "Pensiones y Modalidad 40",
    title: "IMSS advierte sobre fraudes en pensiones y Modalidad 40",
    description:
      "Información oficial del IMSS sobre fraudes, semanas cotizadas y trámites pensionarios.",
    type: "video",
    href: "https://www.youtube.com/watch?v=JRdXu1p4bt8",
    videoId: "JRdXu1p4bt8",
  },
  {
    id: "articulo-modalidad-40-pensionissste",
    category: "Pensiones y Modalidad 40",
    title: "Hablemos de la Modalidad 40 del IMSS",
    description:
      "Material informativo de PENSIONISSSTE sobre el funcionamiento y beneficios de la Modalidad 40.",
    type: "article",
    href: "https://www.gob.mx/pensionissste/articulos/hablemos-de-la-modalidad-40-del-imss",
  },
  {
    id: "articulo-modalidad-40-continuar",
    category: "Pensiones y Modalidad 40",
    title: "Si dejaste de cotizar al IMSS, la Modalidad 40 te permitirá pensionarte",
    description:
      "Explicación oficial sobre cómo continuar cotizando y mejorar las condiciones de retiro.",
    type: "article",
    href: "https://www.gob.mx/pensionissste/es/articulos/si-dejaste-de-cotizar-al-imss-la-modalidad-40-te-permitira-pensionarte",
  },
];

export default function VideoSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [modalVideoId, setModalVideoId] = useState<string | null>(null);

  const goTo = useCallback((index: number) => {
    if (index === activeIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 240);
  }, [activeIndex]);

  const prev = () => goTo((activeIndex - 1 + mediaItems.length) % mediaItems.length);
  const next = () => goTo((activeIndex + 1) % mediaItems.length);

  useEffect(() => {
    if (!modalVideoId) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setModalVideoId(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalVideoId]);

  useEffect(() => {
    document.body.style.overflow = modalVideoId ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalVideoId]);

  const current = mediaItems[activeIndex];

  const handlePrimaryAction = () => {
    if (current.type === "video" && current.videoId) {
      setModalVideoId(current.videoId);
    } else {
      window.open(current.href, "_blank", "noreferrer");
    }
  };

  return (
    <>
      <section id="videos" className="mx-auto max-w-[1728px] border-t border-black/10 px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start lg:gap-14">

          <div className="space-y-4 lg:sticky lg:top-28" data-reveal="up">
            <p className="kc-kicker">Videos y recursos</p>
            <h2 className="max-w-[10ch] text-balance text-4xl font-medium leading-[1] tracking-[-0.05em] text-[var(--color-ink)] sm:text-5xl">
              Aprende con expertos
            </h2>
            <p className="max-w-[28ch] text-sm leading-7 text-[var(--color-muted)] sm:text-[1rem]">
              Material audiovisual y recursos oficiales para entender tus derechos y opciones en materia de seguridad social.
            </p>
          </div>

          <div className="space-y-4" data-reveal="fade">
            {/* Featured card */}
            <div className={`transition-opacity duration-[240ms] ease-out ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
              <div className="group relative overflow-hidden border border-black/10 bg-[var(--color-surface)] shadow-[0_24px_70px_rgba(6,27,51,0.07)]">

                {/* Thumbnail / placeholder */}
                <div
                  className="relative cursor-pointer overflow-hidden"
                  style={{ aspectRatio: "16/9" }}
                  onClick={handlePrimaryAction}
                >
                  {current.type === "video" && current.videoId ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://img.youtube.com/vi/${current.videoId}/hqdefault.jpg`}
                        alt={current.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,18,36,0.08)_0%,rgba(3,18,36,0.55)_100%)]" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm transition-[background-color,transform] duration-200 group-hover:scale-105 group-hover:bg-white/20">
                          <Play className="h-7 w-7 translate-x-0.5 fill-white text-white" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <a
                      href={current.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[linear-gradient(135deg,var(--color-navy-deep)_0%,var(--color-navy)_100%)] transition-opacity duration-150 hover:opacity-90"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">
                        gob.mx
                      </span>
                      <span className="text-center text-base font-medium text-white/80 sm:text-lg">
                        Visualízalo en gob.mx
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-white/40" strokeWidth={1.5} />
                    </a>
                  )}
                </div>

                {/* Info */}
                <div className="flex items-start justify-between gap-4 p-5 sm:p-6 lg:p-8">
                  <div className="space-y-2">
                    <p className="kc-kicker">{current.category}</p>
                    <h3 className="text-lg font-medium leading-snug tracking-[-0.03em] text-[var(--color-ink)] sm:text-xl">
                      {current.title}
                    </h3>
                    <p className="max-w-[56ch] text-sm leading-7 text-[var(--color-muted)]">
                      {current.description}
                    </p>
                    <div className="pt-2">
                      {current.type === "video" ? (
                        <button
                          onClick={handlePrimaryAction}
                          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-gold)] transition-colors duration-150 hover:text-[var(--color-ink)]"
                        >
                          Ver video
                          <Play className="h-3.5 w-3.5 fill-current" />
                        </button>
                      ) : (
                        <a
                          href={current.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-gold)] transition-colors duration-150 hover:text-[var(--color-ink)]"
                        >
                          Ver información
                          <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Arrows */}
                  <div className="flex shrink-0 gap-2 pt-1">
                    <button
                      onClick={prev}
                      aria-label="Anterior"
                      className="flex h-9 w-9 items-center justify-center border border-black/10 bg-[var(--color-panel)] text-[var(--color-ink)] transition-[border-color,background-color,transform] duration-150 hover:-translate-y-px hover:border-[var(--color-gold)]/28 hover:text-[var(--color-gold)]"
                    >
                      <ChevronLeft className="h-4 w-4" strokeWidth={1.8} />
                    </button>
                    <button
                      onClick={next}
                      aria-label="Siguiente"
                      className="flex h-9 w-9 items-center justify-center border border-black/10 bg-[var(--color-panel)] text-[var(--color-ink)] transition-[border-color,background-color,transform] duration-150 hover:-translate-y-px hover:border-[var(--color-gold)]/28 hover:text-[var(--color-gold)]"
                    >
                      <ChevronRight className="h-4 w-4" strokeWidth={1.8} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="grid grid-cols-4 gap-3">
              {mediaItems.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => goTo(i)}
                  className={`group/thumb relative overflow-hidden border transition-[border-color,opacity] duration-200 ${
                    i === activeIndex
                      ? "border-[var(--color-gold)]/60 opacity-100"
                      : "border-black/8 opacity-55 hover:opacity-80"
                  }`}
                  style={{ aspectRatio: "16/9" }}
                  aria-label={item.title}
                >
                  {item.type === "video" && item.videoId ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://img.youtube.com/vi/${item.videoId}/mqdefault.jpg`}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <Play className="h-4 w-4 fill-white text-white drop-shadow" />
                      </div>
                    </>
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-1 bg-[var(--color-navy)]">
                      <span className="text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-gold)]">
                        gob.mx
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-white/30" strokeWidth={1.5} />
                    </div>
                  )}
                  {i === activeIndex && (
                    <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[var(--color-gold)]" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video modal */}
      {modalVideoId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/88 p-4 sm:p-8"
          onClick={() => setModalVideoId(null)}
        >
          <button
            onClick={() => setModalVideoId(null)}
            aria-label="Cerrar video"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-white/20 bg-white/10 text-white transition-[background-color] duration-150 hover:bg-white/20 sm:right-6 sm:top-6"
          >
            <X className="h-5 w-5" strokeWidth={1.8} />
          </button>
          <div
            className="w-full max-w-4xl"
            style={{ aspectRatio: "16/9" }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${modalVideoId}?autoplay=1&rel=0`}
              title="Video"
              className="h-full w-full border-0"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
