"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

export default function SiteHeader({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1728px] items-center justify-between px-5 py-5 sm:px-8 lg:px-10 lg:py-7">
        <a href="#" className="flex min-w-0 items-center gap-3">
          <span className="relative h-12 w-12 overflow-hidden rounded-full border border-white/16 shadow-[0_12px_28px_rgba(0,0,0,0.2)]">
            <Image
              src="/images/logo-01.png"
              alt="Logo de KC Despacho Juridico y Contable."
              fill
              priority
              sizes="48px"
              className="object-cover object-[50%_30%] scale-[1.8]"
            />
          </span>
          <span className="hidden min-w-0 lg:block">
            <span className="block truncate text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-gold-soft)]">
              KC Despacho Juridico y Contable
            </span>
            <span className="mt-1 block truncate text-[10px] uppercase tracking-[0.16em] text-white/58">
              Asesoria profesional de excelencia
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 rounded-[18px] border border-white/10 bg-[rgba(3,18,36,0.4)] px-5 py-3 text-sm text-white/82 shadow-[0_18px_40px_rgba(0,0,0,0.14)] backdrop-blur-md lg:flex">
          {items.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-white">
              {item.label}
            </a>
          ))}
            <a
              href="#contacto"
              className="inline-flex h-11 items-center rounded-[14px] border border-white/18 px-5 text-sm font-medium text-white transition hover:border-white/32 hover:bg-white/6"
            >
              Empezar
            </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-white/14 bg-[rgba(3,18,36,0.36)] text-white backdrop-blur-md lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
        >
          {open ? <X className="h-5 w-5" strokeWidth={1.8} /> : <Menu className="h-5 w-5" strokeWidth={1.8} />}
        </button>
      </div>

      {open ? (
        <div className="px-5 pb-4 sm:px-8 lg:hidden">
          <nav className="mx-auto flex max-w-[1728px] flex-col gap-2 rounded-[24px] border border-white/10 bg-[rgba(3,18,36,0.92)] p-3 shadow-[0_22px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-[16px] px-4 py-3 text-base text-white/82 transition hover:bg-white/6 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-12 items-center justify-center rounded-[16px] border border-[var(--color-gold)]/40 bg-[var(--color-gold)] px-5 text-sm font-medium text-[var(--color-navy)]"
            >
              Empezar
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
