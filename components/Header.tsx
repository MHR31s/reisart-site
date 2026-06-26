"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
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

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#07111F]/90 backdrop-blur-xl">
      {/* Linha inferior com gradiente dourado */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D8A84E]/30 to-transparent" />

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
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
            <p className="text-sm font-black uppercase tracking-[0.26em] text-white">
              Reisart
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#7A8E9E]">
              Marketing Digital
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm font-semibold text-[#B8C8D8] transition-colors hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#F4C76B] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <TrackedLink
          href="https://wa.me/5519991392850"
          eventName="whatsapp_click"
          eventParams={{ location: "header" }}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 border border-[#D8A84E]/40 px-5 py-2.5 text-sm font-bold text-[#F4C76B] hover:border-[#F4C76B] hover:bg-[#F4C76B] hover:text-[#07111F] md:inline-flex"
        >
          <MessageCircle size={16} />
          Falar com Maycon
        </TrackedLink>

        <button
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center border border-white/10 text-white hover:border-white/20 md:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          type="button"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/[0.07] bg-[#07111F]/98 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-0 px-6 py-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/[0.07] py-4 text-base font-semibold text-[#C7D2DE] hover:text-[#F4C76B]"
              >
                {item.label}
              </a>
            ))}

            <TrackedLink
              href="https://wa.me/5519991392850"
              eventName="whatsapp_click"
              eventParams={{ location: "header_mobile" }}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 bg-[#F4C76B] px-6 py-4 font-black text-[#07111F]"
            >
              <MessageCircle size={20} />
              Falar com Maycon
            </TrackedLink>
          </nav>
        </div>
      )}
    </header>
  );
}
