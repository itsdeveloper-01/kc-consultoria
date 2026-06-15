"use client";

import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export type NavDropdownItem = {
  label: string;
  href: string;
};

export type NavDropdownGroup = {
  title: string;
  items: NavDropdownItem[];
};

export type NavItem =
  | {
      type: "link";
      label: string;
      href: string;
    }
  | {
      type: "dropdown";
      label: string;
      groups: NavDropdownGroup[];
    };

type SiteHeaderProps = {
  items: NavItem[];
};

export default function SiteHeader({ items }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1728px] items-center justify-between px-5 py-5 sm:px-8 lg:px-10 lg:py-7">
        <a href="#" className="flex min-w-0 items-center gap-3">
          <span className="inline-flex items-center rounded-sm bg-white/10 px-3 py-1.5 backdrop-blur-sm">
            <Image
              src="/images/logoKC.png"
              alt="Logo de KC Despacho Juridico y Contable."
              width={120}
              height={40}
              priority
              className="h-8 w-auto object-contain"
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

        <nav className="hidden items-center gap-6 rounded-[18px] border border-white/10 bg-[rgba(3,18,36,0.4)] px-5 py-3 text-sm text-white/82 shadow-[0_18px_40px_rgba(0,0,0,0.14)] backdrop-blur-md lg:flex">
          {items.map((item) =>
            item.type === "link" ? (
              <a key={item.label} href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </a>
            ) : (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-1.5 transition-colors hover:text-white"
                  aria-expanded="false"
                >
                  <span>{item.label}</span>
                  <ChevronDown className="h-4 w-4 text-white/56 transition-transform duration-200 group-hover:rotate-180 group-hover:text-white/84" />
                </button>

                <div className="pointer-events-none absolute left-1/2 top-full z-20 hidden w-[560px] -translate-x-1/2 pt-4 group-hover:block group-focus-within:block">
                  <div className="pointer-events-auto overflow-hidden rounded-[24px] border border-white/10 bg-[rgba(3,18,36,0.94)] p-5 shadow-[0_28px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl">
                    <div className={`grid gap-6 ${item.groups.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                      {item.groups.map((group) => (
                        <div key={group.title} className="space-y-3">
                          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-gold-soft)]/92">
                            {group.title}
                          </p>
                          <div className="space-y-1">
                            {group.items.map((subitem) => (
                              <a
                                key={subitem.label}
                                href={subitem.href}
                                className="block rounded-[14px] px-3 py-2.5 text-sm text-white/78 transition hover:bg-white/6 hover:text-white"
                              >
                                {subitem.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ),
          )}
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
            {items.map((item) =>
              item.type === "link" ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-[16px] px-4 py-3 text-base text-white/82 transition hover:bg-white/6 hover:text-white"
                >
                  {item.label}
                </a>
              ) : (
                <div key={item.label} className="rounded-[16px] border border-white/8 bg-white/[0.03]">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMobileDropdown((current) => (current === item.label ? null : item.label))
                    }
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-base text-white/82"
                    aria-expanded={openMobileDropdown === item.label}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        openMobileDropdown === item.label ? "rotate-180 text-white" : "text-white/56"
                      }`}
                    />
                  </button>

                  {openMobileDropdown === item.label ? (
                    <div className="space-y-4 border-t border-white/8 px-4 py-4">
                      {item.groups.map((group) => (
                        <div key={group.title} className="space-y-2">
                          <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-gold-soft)]/92">
                            {group.title}
                          </p>
                          <div className="space-y-1">
                            {group.items.map((subitem) => (
                              <a
                                key={subitem.label}
                                href={subitem.href}
                                onClick={() => {
                                  setOpen(false);
                                  setOpenMobileDropdown(null);
                                }}
                                className="block rounded-[12px] px-3 py-2.5 text-sm text-white/72 transition hover:bg-white/6 hover:text-white"
                              >
                                {subitem.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              ),
            )}
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
