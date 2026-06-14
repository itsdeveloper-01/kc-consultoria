"use client";

import { useState } from "react";

const items = [
  {
    question: "Que tipo de empresas atienden?",
    answer:
      "Trabajamos con empresas familiares, companias en expansion, grupos corporativos y direcciones financieras que necesitan asesoria juridica y contable coordinada.",
  },
  {
    question: "Como es el proceso de trabajo?",
    answer:
      "Iniciamos con una sesion de diagnostico, definimos prioridades y construimos un plan con entregables claros, responsables y seguimiento ejecutivo.",
  },
  {
    question: "Con que industrias tienen experiencia?",
    answer:
      "Hemos acompanado operaciones en servicios profesionales, manufactura ligera, comercio, tecnologia, desarrollo inmobiliario y fondos de inversion.",
  },
  {
    question: "Donde se encuentran ubicados?",
    answer:
      "Atendemos desde Ciudad de Mexico y trabajamos de forma presencial o remota con empresas en distintos estados del pais.",
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
                  <span className="text-2xl leading-none text-[var(--color-gold)]">{open ? "−" : "+"}</span>
                </button>
                {open ? <p className="max-w-[60ch] pb-5 text-sm leading-6 text-[var(--color-muted)]">{item.answer}</p> : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
