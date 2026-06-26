import Image from "next/image";
import Link from "next/link";
import { ExternalLink, MessageCircle } from "lucide-react";

const navLinks = [
  { href: "/servicos", label: "Serviços" },
  { href: "/#planos", label: "Planos" },
  { href: "/#metodo", label: "Método" },
  { href: "/cases", label: "Cases" },
  { href: "/diagnostico", label: "Diagnóstico" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#070C14]">
      {/* Linha superior com glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D8A84E]/25 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Reisart" width={48} height={48} className="object-contain" />
              <div>
                <p className="text-sm font-black uppercase tracking-[0.26em] text-white">
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
                className="flex h-9 w-9 items-center justify-center border border-white/[0.09] text-[#7A8E9E] hover:border-[#D8A84E]/40 hover:text-[#F4C76B]"
                aria-label="Instagram Reisart"
              >
                <ExternalLink size={15} />
              </a>
              <a
                href="https://wa.me/5519991392850"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center border border-white/[0.09] text-[#7A8E9E] hover:border-[#D8A84E]/40 hover:text-[#F4C76B]"
                aria-label="WhatsApp Reisart"
              >
                <MessageCircle size={15} />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.24em] text-[#5A6E7E]">
              Navegação
            </h4>
            <div className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-[#7A8E9E] hover:text-[#F4C76B]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.24em] text-[#5A6E7E]">
              Contato
            </h4>
            <div className="mt-5 space-y-3 text-sm text-[#7A8E9E]">
              <p>(19) 99139-2850</p>
              <p>@reisartmkd</p>
              <p>reisartmkd.com.br</p>
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/5519991392850"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#D8A84E]/30 px-4 py-2.5 text-xs font-bold text-[#F4C76B] hover:border-[#F4C76B] hover:bg-[#F4C76B] hover:text-[#07111F]"
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
