import Image from "next/image";
import { ArrowUpRight, CirclePlay, Quote } from "lucide-react";

import FAQSection from "../components/faq-section";
import ScrollEffects from "../components/scroll-effects";
import SiteHeader from "../components/site-header";

const navItems = [
  { label: "Acerca de", href: "#acerca" },
  { label: "Servicios", href: "#servicios" },
  { label: "Casos de exito", href: "#casos" },
  { label: "Puntos de vista", href: "#faq" },
];

const partners = ["GOBIERNO DE XALAPA", "CNBV", "SALYROMERO", "KARLA", "IVAN", "CDMX", "CONSTRUCTORA"];

const pillars = [
  {
    id: "I",
    title: "Diagnostico preciso",
    copy: "Analisis profundo para identificar riesgos, oportunidades y prioridades.",
  },
  {
    id: "II",
    title: "Soluciones practicas",
    copy: "Estrategias accionables adaptadas a la realidad de tu empresa.",
  },
  {
    id: "III",
    title: "Enfoque a largo plazo",
    copy: "Decisiones pensadas para crecimiento, cumplimiento y continuidad.",
  },
];

const services = [
  {
    title: "Consultoria contable y fiscal",
    copy: "Planeacion, cumplimiento y optimizacion fiscal con vision estrategica.",
  },
  {
    title: "Asesoria juridica corporativa",
    copy: "Soluciones legales integrales para proteger y hacer crecer tu negocio.",
  },
  {
    title: "Auditoria y cumplimiento",
    copy: "Evaluamos, fortalecemos y aseguramos el cumplimiento normativo.",
  },
];

const framework = [
  {
    title: "Descubrimiento",
    copy: "Entendemos tu negocio, entorno y retos para identificar oportunidades clave.",
  },
  {
    title: "Analisis",
    copy: "Profundizamos en datos, procesos y normativa para revelar insights criticos.",
  },
  {
    title: "Estrategia",
    copy: "Disenamos un plan claro, alineado a tus objetivos y realidad de mercado.",
  },
  {
    title: "Ejecucion",
    copy: "Implementamos con rigor y control para generar resultados tangibles.",
  },
  {
    title: "Integracion",
    copy: "Conectamos personas, procesos y tecnologia para operar mejor.",
  },
  {
    title: "Optimizacion",
    copy: "Medimos, ajustamos y mejoramos continuamente tu desempeno.",
  },
];

const cases = [
  {
    title: "Reestructura corporativa para expansion regional",
    copy: "Disenamos e implementamos una estructura legal y fiscal eficiente para su crecimiento multisocietario.",
  },
  {
    title: "Optimizacion fiscal y control interno para grupo empresarial",
    copy: "Logramos ahorros significativos y fortalecimos controles, reduciendo riesgos operativos.",
  },
];

const approachItems = [
  {
    id: "1",
    title: "Descubrimiento",
    copy: "Escuchamos y comprendemos a profundidad tu negocio, su contexto y desafios actuales para establecer una base solida de trabajo.",
  },
  {
    id: "2",
    title: "Diseno y arquitectura",
    copy: "Traducimos hallazgos en un plan juridico y contable claro, medible y alineado a tus prioridades.",
  },
  {
    id: "3",
    title: "Implementacion",
    copy: "Acompanamos la ejecucion, resolvemos fricciones y consolidamos procesos para que el cambio permanezca.",
  },
];

const testimonials = [
  {
    quote:
      "La asesoria de KC fue clave para nuestra reestructura. Su equipo entiende el negocio y entrega soluciones practicas que generan valor real.",
    author: "Mariana Lopez",
    role: "Directora financiera, Altivia",
  },
  {
    quote: "Profesionalismo, claridad y resultados. Un aliado estrategico en cada decision importante de nuestra empresa.",
    author: "Carlos Mendez",
    role: "CEO, Noventus Capital",
  },
  {
    quote:
      "Su acompanamiento en auditoria y cumplimiento nos dio tranquilidad y fortalecio nuestra reputacion ante clientes e inversionistas.",
    author: "Andrea Ruiz",
    role: "Directora de operaciones, Praefin",
  },
];

function EmptyVisual({
  label,
  tone = "light",
  className = "",
}: {
  label: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden ${
        tone === "dark"
          ? "bg-[linear-gradient(135deg,rgba(6,27,51,0.96),rgba(3,18,36,0.92))]"
          : "bg-[linear-gradient(135deg,rgba(242,243,245,1),rgba(255,253,248,1))]"
      } ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(199,154,59,0.18),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(199,154,59,0.1)_48%,transparent_100%)]" />
      <div
        className={`absolute bottom-5 left-5 rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.22em] ${
          tone === "dark"
            ? "border-white/14 text-white/46"
            : "border-[var(--color-gold)]/18 text-[color:rgba(8,16,20,0.42)]"
        }`}
      >
        {label}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <main className="bg-[var(--color-cream)] text-[var(--color-ink)]">
        <SiteHeader items={navItems} />

        <section className="relative isolate overflow-hidden bg-[var(--color-navy)] text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/imagen-1.jpeg"
              alt="Oficinas principales de KC Despacho Juridico y Contable."
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,18,36,0.92)_0%,rgba(3,18,36,0.82)_38%,rgba(3,18,36,0.32)_70%,rgba(3,18,36,0.78)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,154,59,0.18),transparent_28%)]" />
          </div>

          <div className="relative mx-auto flex min-h-[760px] max-w-[1728px] flex-col justify-between px-5 pb-10 pt-28 sm:px-8 lg:min-h-[820px] lg:px-10 lg:pt-36">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,640px)_1fr] lg:items-center">
              <div className="max-w-[620px] space-y-8" data-reveal="up">
                <h1 className="max-w-[12ch] text-balance text-5xl font-medium leading-[0.94] tracking-[-0.06em] text-white sm:text-6xl lg:text-[5.5rem]">
                  Estrategias integrales para desafios complejos
                </h1>
                <p className="max-w-[56ch] text-pretty text-base leading-7 text-white/76 sm:text-lg">
                  Ayudamos a las empresas a navegar la complejidad juridica, fiscal y contable con
                  soluciones estrategicas, claridad operativa y acompanamiento de alto nivel.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a className="kc-button-solid" href="#contacto">
                    Agendar una consulta
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
                  </a>
                  <a className="kc-button-outline" href="#casos">
                    Ver casos de exito
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-end justify-between gap-6 pt-14 text-sm text-white/68" data-reveal="fade">
              <span>Construir con intencion</span>
              <div className="hidden h-px flex-1 bg-white/10 lg:block" />
            </div>
          </div>
        </section>

        <section className="border-y border-black/8 bg-white">
          <div className="kc-marquee mx-auto max-w-[1728px] overflow-hidden px-5 py-5 lg:px-10">
            <div className="kc-marquee-track">
              {[...partners, ...partners].map((partner, index) => (
                <div key={`${partner}-${index}`} className="flex shrink-0 items-center gap-2 text-sm text-[var(--color-muted)]">
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-current/30 text-[10px]">
                    +
                  </span>
                  <span className="font-medium tracking-[0.08em]">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="acerca" className="mx-auto max-w-[1728px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,360px)_1fr] lg:items-start">
            <div className="space-y-8">
              <div className="space-y-3" data-reveal="up">
                <p className="kc-kicker">Pilares</p>
                <h2 className="max-w-[10ch] text-balance text-4xl font-medium leading-[0.98] tracking-[-0.05em] text-[var(--color-ink)] sm:text-5xl">
                  Elevando tu estrategia con impacto medible
                </h2>
              </div>

              <div className="space-y-6">
                {pillars.map((pillar) => (
                  <article key={pillar.id} className="flex gap-4" data-reveal="up">
                    <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-gold)]/40 text-sm text-[var(--color-gold)]">
                      {pillar.id}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-medium text-[var(--color-ink)]">{pillar.title}</h3>
                      <p className="max-w-[28ch] text-sm leading-6 text-[var(--color-muted)]">{pillar.copy}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <a
              href="#contacto"
              className="group overflow-hidden rounded-[24px] border border-black/10 bg-[var(--color-navy)] text-white shadow-[0_24px_80px_rgba(6,27,51,0.22)]"
              data-reveal="fade"
            >
              <div className="relative aspect-[16/7.6] min-h-[280px] w-full">
                <EmptyVisual label="Visual pendiente" tone="dark" className="h-full w-full transition-transform duration-700 group-hover:scale-[1.02]" />
              </div>
              <div className="flex items-center justify-between gap-4 px-6 py-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-gold)]/40 text-[var(--color-gold)]">
                    <span className="text-lg">⌘</span>
                  </span>
                  <span className="text-base font-medium">Habla con nosotros</span>
                </div>
                <ArrowUpRight className="h-5 w-5 text-[var(--color-gold-soft)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </a>
          </div>
        </section>

        <section id="servicios" className="mx-auto max-w-[1728px] px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
          <div className="mb-8 space-y-3" data-reveal="up">
            <p className="kc-kicker">Servicios</p>
            <h2 className="max-w-[14ch] text-balance text-4xl font-medium leading-[1] tracking-[-0.05em] text-[var(--color-ink)] sm:text-5xl">
              Servicios disenados para resultados reales
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-[22px] border border-black/10 bg-[var(--color-navy)] text-white"
                data-reveal="fade"
              >
                <div className="absolute right-0 top-0 z-10 flex h-14 w-14 items-center justify-center bg-[var(--color-navy)]/92 text-[var(--color-gold-soft)]">
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <div className="relative aspect-[16/10.7] min-h-[320px]">
                  <EmptyVisual label="Imagen pendiente" tone="dark" className="h-full w-full transition-transform duration-700 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,18,36,0.08)_0%,rgba(3,18,36,0.82)_72%,rgba(3,18,36,0.94)_100%)]" />
                </div>
                <div className="absolute inset-x-0 bottom-0 z-10 space-y-2 p-6">
                  <h3 className="max-w-[14ch] text-2xl font-medium leading-tight tracking-[-0.03em]">{service.title}</h3>
                  <p className="max-w-[34ch] text-sm leading-6 text-white/76">{service.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1728px] border-t border-black/10 px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="mb-8 space-y-3" data-reveal="up">
            <p className="kc-kicker">Marco</p>
            <h2 className="max-w-[13ch] text-balance text-4xl font-medium leading-[1] tracking-[-0.05em] text-[var(--color-ink)] sm:text-5xl">
              Un enfoque probado para transformar tu negocio
            </h2>
          </div>
          <div className="grid border-t border-black/10 lg:grid-cols-3">
            {framework.map((item, index) => (
              <article
                key={item.title}
                className={`grid gap-3 border-b border-black/10 py-6 lg:min-h-[188px] lg:px-8 ${
                  index % 3 !== 2 ? "lg:border-r" : ""
                }`}
                data-reveal="up"
              >
                <span className="text-3xl text-[var(--color-gold)]">⌁</span>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-[var(--color-ink)]">{item.title}</h3>
                  <p className="max-w-[30ch] text-sm leading-6 text-[var(--color-muted)]">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="casos" className="mx-auto max-w-[1728px] px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
          <div className="mb-8 space-y-3" data-reveal="up">
            <p className="kc-kicker">Casos de exito</p>
            <h2 className="max-w-[12ch] text-balance text-4xl font-medium leading-[1] tracking-[-0.05em] text-[var(--color-ink)] sm:text-5xl">
              Soluciones con impacto visible
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {cases.map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[22px] border border-black/10 bg-[var(--color-navy)] text-white"
                data-reveal="fade"
              >
                <div className="relative aspect-[16/7] min-h-[300px]">
                  <EmptyVisual label="Caso visual pendiente" tone="dark" className="h-full w-full transition-transform duration-700 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,18,36,0.84)_0%,rgba(3,18,36,0.36)_55%,rgba(3,18,36,0.82)_100%)]" />
                </div>
                <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 lg:p-8">
                  <div className="max-w-[28rem] space-y-3">
                    <h3 className="text-3xl font-medium leading-[1.02] tracking-[-0.04em]">{item.title}</h3>
                    <p className="max-w-[34ch] text-sm leading-6 text-white/76">{item.copy}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-gold-soft)]">
                    Ver caso completo
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1728px] border-t border-black/10 px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="mb-8 space-y-3" data-reveal="up">
            <p className="kc-kicker">Nuestro enfoque</p>
            <h2 className="max-w-[11ch] text-balance text-4xl font-medium leading-[1] tracking-[-0.05em] text-[var(--color-ink)] sm:text-5xl">
              Acompanar con precision en cada etapa
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-start">
            <div className="overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-[0_24px_80px_rgba(6,27,51,0.08)]" data-reveal="fade">
              <div className="relative aspect-[16/7.2] min-h-[290px]">
                <EmptyVisual label="Boardroom pendiente" className="h-full w-full" />
              </div>
            </div>

            <div className="space-y-0 rounded-[24px] border border-[var(--color-gold)]/25 bg-white" data-reveal="up">
              {approachItems.map((item, index) => (
                <article
                  key={item.id}
                  className={`grid gap-3 px-6 py-5 lg:grid-cols-[44px_1fr_24px] lg:items-start ${
                    index < approachItems.length - 1 ? "border-b border-black/10" : ""
                  }`}
                >
                  <span className="text-sm font-medium text-[var(--color-gold)]">{item.id}</span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-[var(--color-ink)]">{item.title}</h3>
                    <p className="text-sm leading-6 text-[var(--color-muted)]">{item.copy}</p>
                  </div>
                  <span className="text-xl leading-none text-[var(--color-gold)]">{index === 0 ? "−" : "+"}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1728px] border-t border-black/10 px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="mb-8 space-y-3" data-reveal="up">
            <p className="kc-kicker">Testimonios</p>
            <h2 className="max-w-[10ch] text-balance text-4xl font-medium leading-[1] tracking-[-0.05em] text-[var(--color-ink)] sm:text-5xl">
              Confianza construida con resultados
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1fr_1.15fr_1fr]">
            <article className="rounded-[24px] border border-black/10 bg-white p-6 shadow-[0_20px_70px_rgba(6,27,51,0.06)]" data-reveal="up">
              <Quote className="h-6 w-6 text-[var(--color-gold)]" strokeWidth={1.8} />
              <p className="mt-5 text-base leading-7 text-[var(--color-ink)]">{testimonials[0].quote}</p>
              <div className="mt-8 text-sm text-[var(--color-muted)]">
                <p className="font-medium text-[var(--color-ink)]">{testimonials[0].author}</p>
                <p>{testimonials[0].role}</p>
              </div>
            </article>

            <article
              className="group relative isolate overflow-hidden rounded-[24px] border border-black/10 bg-[var(--color-navy)] p-6 text-white shadow-[0_30px_90px_rgba(6,27,51,0.2)]"
              data-reveal="fade"
            >
              <div className="absolute inset-0">
                <EmptyVisual label="Retrato pendiente" tone="dark" className="h-full w-full opacity-70" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,18,36,0.42)_0%,rgba(3,18,36,0.9)_100%)]" />
              </div>
              <div className="relative z-10 flex min-h-[230px] flex-col justify-between">
                <div className="space-y-5">
                  <Quote className="h-6 w-6 text-[var(--color-gold-soft)]" strokeWidth={1.8} />
                  <p className="max-w-[30ch] text-2xl font-medium leading-tight tracking-[-0.03em]">
                    {testimonials[1].quote}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-4 pt-10">
                  <div className="text-sm text-white/78">
                    <p className="font-medium text-white">{testimonials[1].author}</p>
                    <p>{testimonials[1].role}</p>
                  </div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/18 bg-white/8 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                    <CirclePlay className="h-5 w-5 text-[var(--color-gold-soft)]" strokeWidth={1.8} />
                  </span>
                </div>
              </div>
            </article>

            <article className="rounded-[24px] border border-black/10 bg-white p-6 shadow-[0_20px_70px_rgba(6,27,51,0.06)]" data-reveal="up">
              <Quote className="h-6 w-6 text-[var(--color-gold)]" strokeWidth={1.8} />
              <p className="mt-5 text-base leading-7 text-[var(--color-ink)]">{testimonials[2].quote}</p>
              <div className="mt-8 text-sm text-[var(--color-muted)]">
                <p className="font-medium text-[var(--color-ink)]">{testimonials[2].author}</p>
                <p>{testimonials[2].role}</p>
              </div>
            </article>
          </div>
        </section>

        <FAQSection />
      </main>

      <footer id="contacto" className="overflow-hidden bg-[var(--color-navy)] text-white">
        <div className="mx-auto grid max-w-[1728px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]" data-reveal="fade">
            <div className="space-y-6">
              <div>
                <div className="inline-flex rounded-[20px] border border-white/10 bg-white p-3 shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                  <Image
                    src="/images/logo-02.png"
                    alt="Logo de KC Despacho Juridico y Contable."
                    width={320}
                    height={150}
                    className="h-auto w-[220px] sm:w-[260px]"
                  />
                </div>
                <p className="mt-3 text-sm text-white/65">Asesoria profesional de excelencia</p>
              </div>

              <div className="flex items-center gap-4 text-white/72">
                <a className="text-sm transition-colors hover:text-[var(--color-gold-soft)]" href="https://linkedin.com">
                  LinkedIn
                </a>
                <a className="text-sm transition-colors hover:text-[var(--color-gold-soft)]" href="https://x.com">
                  X
                </a>
                <a className="text-sm transition-colors hover:text-[var(--color-gold-soft)]" href="https://instagram.com">
                  Instagram
                </a>
              </div>
            </div>

            <div className="grid gap-6 text-sm text-white/72 sm:grid-cols-3 lg:grid-cols-2">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.22em] text-white/42">Direccion</p>
                <p>Av. Reforma 123, Piso 8</p>
                <p>Col. Juarez, CP 06600</p>
                <p>Ciudad de Mexico, Mexico</p>
              </div>
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.22em] text-white/42">Enlaces</p>
                <p>Acerca de</p>
                <p>Servicios</p>
                <p>Casos de exito</p>
                <p>Contacto</p>
              </div>
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.22em] text-white/42">Legal</p>
                <p>Aviso de privacidad</p>
                <p>Terminos y condiciones</p>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/4 p-4 backdrop-blur-sm" data-reveal="up">
            <p className="max-w-[30ch] text-sm leading-6 text-white/70">
              Dejanos tus datos y uno de nuestros especialistas se pondra en contacto contigo.
            </p>
            <form className="mt-5 flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="email">
                Correo electronico
              </label>
              <input
                id="email"
                type="email"
                placeholder="nombre@empresa.com"
                className="h-12 flex-1 rounded-none border border-white/12 bg-white px-4 text-sm text-[var(--color-ink)] outline-none transition focus:border-[var(--color-gold)]"
              />
              <button type="submit" className="kc-button-solid h-12 justify-center px-5">
                Agendar consulta
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
              </button>
            </form>
          </div>
        </div>
      </footer>

      <ScrollEffects />
    </>
  );
}
