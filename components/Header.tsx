"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, Menu, Phone, X } from "lucide-react";
import TrackedLink from "@/components/TrackedLink";

const navItems = [
  { href: "/servicos", label: "Serviços" },
  { href: "/automacoes", label: "Automações" },
  { href: "/#planos", label: "Planos" },
  { href: "/#metodo", label: "Método" },
  { href: "/cases", label: "Cases" },
  { href: "/diagnostico", label: "Diagnóstico" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || menuOpen
          ? "bg-[#05070D]/92 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "bg-transparent",
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 transition-all duration-300 lg:px-8",
          scrolled ? "h-[68px]" : "h-20",
        ].join(" ")}
      >
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Reisart Marketing Digital"
            width={46}
            height={46}
            priority
            className="object-contain"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-extrabold uppercase tracking-[0.26em] text-white">
              Reisart
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#8FA2B3]">
              Marketing Digital
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm font-semibold text-[#D3DEEA] hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full bg-[#3B82FF] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+5519991392850"
            aria-label="Ligar para a Reisart"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white hover:border-[#3B82FF] hover:bg-[#3B82FF]/20"
          >
            <Phone size={18} />
          </a>
          <TrackedLink
            href="https://wa.me/5519991392850"
            eventName="whatsapp_click"
            eventParams={{ location: "header_icon" }}
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="Falar no WhatsApp"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#25D366]/40 bg-[#25D366]/15 text-[#5CE38B] hover:bg-[#25D366] hover:text-white"
          >
            <MessageCircle size={18} />
          </TrackedLink>
          <TrackedLink
            href="/diagnostico"
            eventName="diagnostico_click"
            eventParams={{ source: "header" }}
            className="premium-button !min-h-11 !px-5"
          >
            Diagnóstico grátis
            <ArrowUpRight size={16} />
          </TrackedLink>
        </div>

        <button
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 text-white md:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          type="button"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/[0.07] md:hidden">
          <nav className="flex flex-col px-6 py-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/[0.07] py-4 text-base font-semibold text-[#D3DEEA] hover:text-[#3B82FF]"
              >
                {item.label}
              </a>
            ))}

            <div className="mt-5 grid grid-cols-2 gap-3">
              <a
                href="tel:+5519991392850"
                className="btn-white !min-h-12"
              >
                <Phone size={18} />
                Ligar
              </a>
              <TrackedLink
                href="https://wa.me/5519991392850"
                eventName="whatsapp_click"
                eventParams={{ location: "header_mobile" }}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button !min-h-12"
              >
                <MessageCircle size={18} />
                WhatsApp
              </TrackedLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
