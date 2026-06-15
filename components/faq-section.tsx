"use client";

import { useState } from "react";

const items = [
  {
    question: "¿Qué tipo de empresas atienden?",
    answer:
      "Trabajamos con empresas familiares, compañías en expansión, grupos corporativos y direcciones financieras que necesitan asesoría jurídica y contable coordinada.",
  },
  {
    question: "¿Cómo es el proceso de trabajo?",
    answer:
      "Iniciamos con una sesión de diagnóstico, definimos prioridades y construimos un plan con entregables claros, responsables y seguimiento ejecutivo.",
  },
  {
    question: "¿Con qué industrias tienen experiencia?",
    answer:
      "Hemos acompañado operaciones en servicios profesionales, manufactura ligera, comercio, tecnología, desarrollo inmobiliario y fondos de inversión.",
  },
  {
    question: "¿Dónde se encuentran ubicados?",
    answer:
      "Contamos con oficinas en Xalapa, Veracruz; Ciudad de México y Monterrey, Nuevo León. Atendemos de forma presencial o remota a clientes en distintos estados del país.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-[1728px] border-t border-black/10 px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,420px)_1fr]">
        <div className="space-y-3" data-reveal="up">
          <p className="kc-kicker">Preguntas frecuentes</p>
          <h2 className="max-w-[10ch] text-balance text-4xl font-medium leading-[1] tracking-[-0.05em] text-[var(--color-ink)] sm:text-5xl">
            Resolvemos tus dudas para que tomes decisiones con confianza.
          </h2>
        </div>

        <div className="border-t border-black/10">
          {items.map((item, index) => {
            const open = openIndex === index;

            return (
              <article key={item.question} className="border-b border-black/10" data-reveal="up">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-center justify-between gap-5 py-5 text-left"
                  aria-expanded={open}
                >
                  <span className="text-lg font-medium text-[var(--color-ink)]">{item.question}</span>
                  <span
                    className="shrink-0 text-2xl leading-none text-[var(--color-gold)] transition-transform duration-300 ease-out"
                    style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>

                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm leading-7 text-[var(--color-muted)]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
