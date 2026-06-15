"use client";

import { ArrowUpRight } from "lucide-react";
import { FormEvent } from "react";

const TEST_EMAIL = "contacto@kcdespacho.com";

const serviceOptions = [
  "Seguridad Social",
  "Pensiones y Modalidad 40",
  "Consultoria Juridica",
  "Consultoria Contable y Fiscal",
  "Auditorias",
  "Consultoria Estrategica",
  "Reclutamiento y Capacitacion",
];

export default function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fullName = String(formData.get("fullName") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();

    const subject = encodeURIComponent(`Solicitud de consulta - ${service || "Servicio pendiente"}`);
    const body = encodeURIComponent(
      [
        "Hola, me interesa recibir informacion.",
        "",
        `Nombre Completo: ${fullName}`,
        `Correo Electronico: ${email}`,
        `Telefono: ${phone}`,
        `Servicio de Interes: ${service}`,
      ].join("\n"),
    );

    window.location.href = `mailto:${TEST_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="mt-5 grid gap-3 sm:grid-cols-2" onSubmit={handleSubmit}>
      <div className="space-y-2 sm:col-span-2">
        <label className="text-xs uppercase tracking-[0.18em] text-white/52" htmlFor="full-name">
          Nombre completo
        </label>
        <input
          id="full-name"
          name="fullName"
          type="text"
          required
          placeholder="Tu nombre completo"
          className="h-12 w-full border border-white/12 bg-white px-4 text-sm text-[var(--color-ink)] outline-none transition placeholder:text-black/35 focus:border-[var(--color-gold)]"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs uppercase tracking-[0.18em] text-white/52" htmlFor="email">
          Correo electrónico
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="nombre@empresa.com"
          className="h-12 w-full border border-white/12 bg-white px-4 text-sm text-[var(--color-ink)] outline-none transition placeholder:text-black/35 focus:border-[var(--color-gold)]"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs uppercase tracking-[0.18em] text-white/52" htmlFor="phone">
          Teléfono
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="+52 000 000 0000"
          className="h-12 w-full border border-white/12 bg-white px-4 text-sm text-[var(--color-ink)] outline-none transition placeholder:text-black/35 focus:border-[var(--color-gold)]"
        />
      </div>

      <div className="space-y-2 sm:col-span-2">
        <label className="text-xs uppercase tracking-[0.18em] text-white/52" htmlFor="service">
          Servicio de interés
        </label>
        <select
          id="service"
          name="service"
          defaultValue=""
          required
          className="h-12 w-full border border-white/12 bg-white px-4 text-sm text-[var(--color-ink)] outline-none transition focus:border-[var(--color-gold)]"
        >
          <option value="" disabled>
            Servicio de Interes
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="kc-button-solid mt-1 h-12 justify-center px-5 sm:col-span-2">
        Agendar consulta
        <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
      </button>
    </form>
  );
}
