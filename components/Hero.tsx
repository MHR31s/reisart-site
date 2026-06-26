import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import TrackedLink from "@/components/TrackedLink";

const metrics = [
  { value: "+50", label: "Projetos Entregues" },
  { value: "1:1", label: "Atendimento Personalizado" },
  { value: "MH360°", label: "Estratégia Proprietária" },
];

const whatsappLink =
  "https://wa.me/5519991392850?text=Ol%C3%A1,%20quero%20solicitar%20um%20diagn%C3%B3stico%20estrat%C3%A9gico%20para%20minha%20empresa.";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#07111F]">
      {/* Grid de fundo */}
      <div className="absolute inset-0 premium-grid" />

      {/* Glow camada 1 — dourado central */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[680px] w-[680px] rounded-full bg-[radial-gradient(circle,rgba(244,199,107,0.1)_0%,transparent_65%)] blur-3xl" />
      </div>

      {/* Glow camada 2 — mint lateral direito */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(84,210,192,0.07)_0%,transparent_70%)] blur-3xl" />

      {/* Fade inferior */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B1018] to-transparent" />

      <div className="relative mx-auto grid min-h-[92svh] max-w-7xl items-center gap-12 px-6 pb-14 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-32">

        {/* ── Coluna esquerda ── */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2.5 border border-[#D8A84E]/30 bg-[#D8A84E]/[0.07] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F4C76B]" />
            <span className="section-kicker !text-[0.68rem]">Reisart Marketing Digital</span>
          </div>

          <h1 className="mt-7 text-4xl font-black leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-[3.6rem]">
            Transformamos empresas locais em{" "}
            <span className="gradient-text">máquinas de geração de clientes.</span>
          </h1>

          <p className="premium-copy mt-8 max-w-xl text-lg leading-[1.85] text-[#B8C8D8]">
            Sites, Google, Tráfego Pago, Redes Sociais e Automações
            Inteligentes para aumentar sua visibilidade, gerar oportunidades e
            vender mais.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              href="#contato"
              eventName="diagnostico_click"
              eventParams={{ source: "hero" }}
              className="premium-button"
            >
              Solicitar Diagnóstico Gratuito
              <ArrowUpRight size={18} />
            </TrackedLink>

            <TrackedLink
              href={whatsappLink}
              eventName="whatsapp_click"
              eventParams={{ location: "hero" }}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-button-secondary"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </TrackedLink>
          </div>

          {/* Métricas */}
          <div className="mt-12 grid gap-0 divide-x divide-white/10 border border-white/[0.08] bg-white/[0.02] sm:grid-cols-3">
            {metrics.map((item) => (
              <div key={item.label} className="px-5 py-5">
                <strong className="block text-2xl font-black tracking-tight text-[#F4C76B] md:text-3xl">
                  {item.value}
                </strong>
                <span className="mt-1.5 block text-xs font-medium uppercase tracking-[0.18em] text-[#7A8E9E]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Coluna direita — imagem ── */}
        <div className="relative flex items-end justify-center lg:min-h-[720px]">
          {/* Glow atrás da foto */}
          <div className="absolute bottom-10 h-[70%] w-[80%] bg-[radial-gradient(ellipse_at_50%_50%,rgba(244,199,107,0.13)_0%,rgba(84,210,192,0.06)_40%,transparent_70%)] blur-3xl" />

          {/* Logo fantasma */}
          <Image
            src="/logo.png"
            alt=""
            width={980}
            height={980}
            aria-hidden="true"
            className="absolute bottom-24 z-[1] w-[94%] max-w-[640px] opacity-[0.13] mix-blend-screen drop-shadow-[0_0_60px_rgba(244,199,107,0.18)]"
          />

          {/* Linhas decorativas */}
          <div className="absolute right-6 top-28 hidden h-32 w-px bg-gradient-to-b from-transparent via-[#F4C76B]/50 to-transparent lg:block" />
          <div className="absolute left-10 top-24 hidden h-px w-24 bg-gradient-to-r from-transparent via-[#F4C76B]/40 to-transparent lg:block" />
          <div className="absolute bottom-32 left-6 hidden h-px w-16 bg-gradient-to-r from-transparent via-[#54D2C0]/35 to-transparent lg:block" />

          {/* Foto principal */}
          <Image
            src="/maycon-hero.png"
            alt="Maycon Reis, fundador da Reisart Marketing Digital"
            width={1000}
            height={1400}
            priority
            className="relative z-10 h-auto max-h-[620px] w-auto object-contain drop-shadow-[0_48px_96px_rgba(0,0,0,0.7)] lg:max-h-[760px]"
          />
        </div>
      </div>
    </section>
  );
}
