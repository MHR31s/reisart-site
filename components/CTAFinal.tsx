import { ArrowUpRight, MessageCircle } from "lucide-react";
import TrackedLink from "@/components/TrackedLink";

export default function CTAFinal() {
  return (
    <section id="cta-final" className="bg-[#07111F] px-6 py-28">
      <div className="mx-auto max-w-7xl overflow-hidden border border-[#D8A84E]/40 bg-[#101720] p-8 shadow-2xl shadow-black/30 md:p-12 lg:p-16">
        <div>
          <p className="section-kicker">Próximo passo</p>
          <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-5xl">
            Você não precisa de mais marketing.
          </h2>
          <p className="mt-7 text-xl font-bold leading-8 text-[#F4C76B] md:text-2xl">
            Você precisa de um sistema que transforme atenção em oportunidade.
          </p>
          <p className="premium-copy mt-7 max-w-3xl text-lg leading-8 text-[#C7D2DE]">
            Se a sua empresa já é boa no que faz, talvez o problema não esteja
            no serviço. Talvez esteja na forma como o mercado percebe o seu
            valor.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <TrackedLink
            href="#contato"
            eventName="diagnostico_click"
            eventParams={{ source: "cta_final" }}
            className="premium-button"
          >
            Solicitar diagnóstico estratégico
            <ArrowUpRight size={20} />
          </TrackedLink>

          <TrackedLink
            href="https://wa.me/5519991392850"
            eventName="whatsapp_click"
            eventParams={{ location: "cta_final" }}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-button-secondary"
          >
            <MessageCircle size={20} />
            Falar com Maycon
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
