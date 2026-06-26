import { ArrowUpRight, MessageCircle } from "lucide-react";
import TrackedLink from "@/components/TrackedLink";
import FadeIn from "@/components/FadeIn";

const whatsappLink =
  "https://wa.me/5519991392850?text=Ol%C3%A1,%20quero%20solicitar%20um%20diagn%C3%B3stico%20estrat%C3%A9gico%20para%20minha%20empresa.";

export default function CTAFinal() {
  return (
    <section id="cta-final" className="bg-[#07111F] px-6 py-28">
      <FadeIn>
        <div className="relative mx-auto max-w-7xl overflow-hidden border border-[#D8A84E]/30 bg-[#0D1520] p-8 md:p-12 lg:p-16">
          {/* Glow de fundo */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(244,199,107,0.07)_0%,transparent_70%)]" />

          {/* Linha superior dourada */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D8A84E]/50 to-transparent" />

          <div className="relative">
            <p className="section-kicker">Próximo passo</p>
            <h2 className="mt-5 max-w-4xl text-3xl font-black leading-tight tracking-tight text-white md:text-5xl">
              Sua empresa está pronta para{" "}
              <span className="gradient-text">crescer?</span>
            </h2>
            <p className="premium-copy mt-7 max-w-3xl text-lg leading-[1.85] text-[#B8C8D8]">
              A REISART une estratégia, tecnologia, conteúdo e automação para
              transformar presença digital em oportunidades reais de negócio.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href="#contato"
                eventName="diagnostico_click"
                eventParams={{ source: "cta_final" }}
                className="premium-button"
              >
                Solicitar Diagnóstico
                <ArrowUpRight size={18} />
              </TrackedLink>

              <TrackedLink
                href={whatsappLink}
                eventName="whatsapp_click"
                eventParams={{ location: "cta_final" }}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button-secondary"
              >
                <MessageCircle size={18} />
                Falar no WhatsApp
              </TrackedLink>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
