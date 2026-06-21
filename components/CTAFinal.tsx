import { ArrowUpRight, MessageCircle } from "lucide-react";
import TrackedLink from "@/components/TrackedLink";

const whatsappLink =
  "https://wa.me/5519991392850?text=Ol%C3%A1,%20quero%20solicitar%20um%20diagn%C3%B3stico%20estrat%C3%A9gico%20para%20minha%20empresa.";

export default function CTAFinal() {
  return (
    <section id="cta-final" className="bg-[#07111F] px-6 py-28">
      <div className="mx-auto max-w-7xl overflow-hidden border border-[#D8A84E]/40 bg-[#101720] p-8 shadow-2xl shadow-black/30 md:p-12 lg:p-16">
        <div>
          <p className="section-kicker">Próximo passo</p>
          <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-5xl">
            Sua empresa está pronta para crescer?
          </h2>
          <p className="premium-copy mt-7 max-w-4xl text-lg leading-8 text-[#C7D2DE]">
            A REISART une estratégia, tecnologia, conteúdo e automação para
            transformar presença digital em oportunidades reais de negócio.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <TrackedLink
            href="#contato"
            eventName="diagnostico_click"
            eventParams={{ source: "cta_final" }}
            className="premium-button"
          >
            Solicitar Diagnóstico
            <ArrowUpRight size={20} />
          </TrackedLink>

          <TrackedLink
            href={whatsappLink}
            eventName="whatsapp_click"
            eventParams={{ location: "cta_final" }}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-button-secondary"
          >
            <MessageCircle size={20} />
            Falar no WhatsApp
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
