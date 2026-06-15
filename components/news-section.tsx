"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowUpRight } from "lucide-react";

const newsItems = [
  {
    id: "noticia-modalidad-40-2026-requisitos",
    category: "Seguridad Social",
    date: "19 dic 2025",
    title: "Modalidad 40 del IMSS: nuevos requisitos y ajustes para 2026",
    excerpt:
      "A partir de 2026, la Modalidad 40 continúa vigente, pero con ajustes en cuotas y mayores controles en los registros salariales. Los cambios buscan fortalecer la sostenibilidad del sistema de pensiones y tienen un impacto directo en quienes buscan mejorar el monto de su pensión bajo la Ley de 1973.",
    href: "https://www.infobae.com/mexico/2025/12/19/modalidad-40-del-imss-estos-son-los-nuevos-requisitos-para-2026-y-como-impactan-tu-pension/",
  },
  {
    id: "noticia-modalidad-40-cuotas-2026",
    category: "Seguridad Social",
    date: "20 dic 2025",
    title: "Aumentan las cuotas de la Modalidad 40 para 2026",
    excerpt:
      "El IMSS aplicó un nuevo incremento en las cuotas de la Continuación Voluntaria en el Régimen Obligatorio. Este ajuste afecta a quienes utilizan la Modalidad 40 como estrategia para incrementar su futura pensión.",
    href: "https://www.adn40.mx/tramites/2025-12-20/aumentan-cuotas-modalidad-40-imss-para-2026/",
  },
  {
    id: "noticia-imss-reglas-modalidad-40",
    category: "Seguridad Social",
    date: "10 ene 2026",
    title: "IMSS confirma ajustes y reglas vigentes para Modalidad 40",
    excerpt:
      "El Instituto recordó los requisitos para incorporarse a la Modalidad 40 y reiteró aspectos relacionados con las semanas cotizadas, plazos y cálculo de cuotas para 2026.",
    href: "https://netnoticias.mx/amp/ajusta-imss-reglas-y-cuotas-de-la-modalidad-40-para-2026",
  },
  {
    id: "noticia-infonavit-creditos",
    category: "INFONAVIT",
    date: "15 feb 2026",
    title: "INFONAVIT amplía el acceso a créditos para más personas",
    excerpt:
      "El Consejo de Administración del INFONAVIT aprobó modificaciones que permitirán a trabajadores independientes, migrantes y personas sin relación laboral vigente acceder a financiamiento para vivienda.",
    href: "https://www.cronista.com/mexico/actualidad-mx/infonavit-cambia-la-entrega-de-creditos-hipotecarios-inmigrantes-personas-sin-aportes-e-independientes-podran-tener-su-casa-propia/",
  },
  {
    id: "noticia-infonavit-t100",
    category: "INFONAVIT",
    date: "27 ene 2026",
    title: "Nuevo modelo T100 de INFONAVIT reduce requisitos para obtener crédito",
    excerpt:
      "El INFONAVIT implementó un nuevo esquema que reduce significativamente los puntos requeridos para solicitar un crédito hipotecario, facilitando el acceso a la vivienda para más trabajadores.",
    href: "https://elpais.com/mexico/2026-01-27/puntos-infonavit-en-2026-asi-funciona-el-nuevo-modelo-t100-para-comprar-casa.html",
  },
  {
    id: "noticia-debate-pensiones",
    category: "Pensiones",
    date: "6 jun 2026",
    title: "Debate nacional sobre el sistema de pensiones en México",
    excerpt:
      "Especialistas analizan la viabilidad financiera de regresar a esquemas pensionarios anteriores y las alternativas para fortalecer el sistema actual de pensiones en México.",
    href: "https://elpais.com/mexico/2026-06-06/el-insostenible-modelo-de-pensiones-que-pide-la-cnte-regresar-al-viejo-sistema-de-pensiones-es-imposible.html",
  },
];

export default function NewsSection() {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setFeaturedIndex(index);
      setIsTransitioning(false);
    }, 280);
  }, []);

  const advance = useCallback(() => {
    goTo((featuredIndex + 1) % newsItems.length);
  }, [featuredIndex, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(advance, 6000);
    return () => clearInterval(id);
  }, [advance, isPaused]);

  const featured = newsItems[featuredIndex];
  const secondaryItems = [
    ...newsItems.slice(featuredIndex + 1),
    ...newsItems.slice(0, featuredIndex),
  ].slice(0, 4);

  return (
    <section id="noticias" className="border-t border-white/8 bg-[var(--color-navy)]">
      <div className="mx-auto max-w-[1728px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start lg:gap-14">
          <div className="space-y-4 lg:sticky lg:top-28">
            <p className="kc-kicker">Noticias</p>
            <h2 className="max-w-[10ch] text-balance text-4xl font-medium leading-[1] tracking-[-0.05em] text-white sm:text-5xl">
              Actualidad jurídica y fiscal
            </h2>
            <p className="max-w-[28ch] text-sm leading-7 text-white/55 sm:text-[1rem]">
              Los cambios normativos más relevantes para empresas y trabajadores, en un solo lugar.
            </p>
          </div>

          <div className="space-y-4">
            <article
              className={`border border-white/10 bg-white/[0.04] p-6 transition-opacity duration-[280ms] ease-out sm:p-8 lg:p-10 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex items-center border border-[var(--color-gold)]/30 px-2 py-0.5 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                  {featured.category}
                </span>
                <span className="text-xs text-white/35">{featured.date}</span>
              </div>

              <h3 className="mb-3 text-xl font-medium leading-snug tracking-[-0.03em] text-white sm:text-2xl lg:text-[1.65rem]">
                {featured.title}
              </h3>

              <p className="mb-7 max-w-[60ch] text-sm leading-7 text-white/55">
                {featured.excerpt}
              </p>

              <div className="flex items-center justify-between gap-6">
                <a
                  href={featured.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-gold)] transition-colors duration-150 hover:text-white"
                >
                  Leer nota completa
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
                </a>

                <div className="flex shrink-0 items-center gap-2">
                  {newsItems.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      aria-label={`Ver noticia ${i + 1}`}
                      className={`h-[5px] rounded-full transition-[width,background-color] duration-300 ease-out ${
                        i === featuredIndex
                          ? "w-6 bg-[var(--color-gold)]"
                          : "w-[5px] bg-white/20 hover:bg-white/45"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </article>

            <div className="grid gap-4 sm:grid-cols-2">
              {secondaryItems.map((item) => (
                <article
                  key={item.id}
                  className="flex h-full flex-col border border-white/8 bg-white/[0.02] p-5 transition-[border-color,background-color] duration-200 hover:border-white/[0.16] hover:bg-white/[0.05]"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-gold)]">
                      {item.category}
                    </span>
                    <span className="text-[0.68rem] text-white/25">·</span>
                    <span className="text-[0.68rem] text-white/35">{item.date}</span>
                  </div>

                  <h3 className="mb-4 text-[0.93rem] font-medium leading-snug tracking-[-0.02em] text-white/82">
                    {item.title}
                  </h3>

                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-gold)] transition-colors duration-150 hover:text-white"
                  >
                    Leer más
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.8} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
