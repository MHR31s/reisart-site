import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

const navLinks = [
  { href: "/servicos", label: "Serviços" },
  { href: "/automacoes", label: "Automações" },
  { href: "/#planos", label: "Planos" },
  { href: "/#metodo", label: "Método" },
  { href: "/cases", label: "Cases" },
  { href: "/diagnostico", label: "Diagnóstico" },
];

function InstagramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#05070D]">
      {/* Linha superior com glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3B82FF]/25 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Reisart" width={48} height={48} className="object-contain" />
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.26em] text-white">
                  Reisart
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#5A6E7E]">
                  Marketing Digital
                </p>
              </div>
            </div>

            <p className="premium-copy mt-6 max-w-sm text-sm leading-7 text-[#7A8E9E]">
              Consultoria estratégica para empresas locais que querem crescer
              com posicionamento, autoridade e previsibilidade comercial.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://www.instagram.com/reisartmkd/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.09] text-[#7A8E9E] hover:border-[#3B82FF]/40 hover:text-[#3B82FF]"
                aria-label="Instagram Reisart"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/reisart.ads"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.09] text-[#7A8E9E] hover:border-[#3B82FF]/40 hover:text-[#3B82FF]"
                aria-label="Facebook Reisart"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://wa.me/5519991392850"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.09] text-[#7A8E9E] hover:border-[#3B82FF]/40 hover:text-[#3B82FF]"
                aria-label="WhatsApp Reisart"
              >
                <MessageCircle size={15} />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.24em] text-[#5A6E7E]">
              Navegação
            </h4>
            <div className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-[#7A8E9E] hover:text-[#3B82FF]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.24em] text-[#5A6E7E]">
              Contato
            </h4>
            <div className="mt-5 space-y-3 text-sm text-[#7A8E9E]">
              <p>(19) 99139-2850</p>
              <a
                href="https://www.instagram.com/reisartmkd/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#3B82FF]"
              >
                @reisartmkd
              </a>
              <p>reisartmkd.com.br</p>
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/5519991392850"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#3B82FF]/30 px-4 py-2.5 text-xs font-bold text-[#3B82FF] hover:border-[#2144FF] hover:bg-[#2144FF] hover:text-white"
              >
                Falar com Maycon
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-[#4A5E6E]">
            © 2026 Reisart Marketing Digital. Todos os direitos reservados.
          </p>
          <p className="text-xs text-[#3A4E5E]">
            Piracicaba — SP
          </p>
        </div>
      </div>
    </footer>
  );
}
