import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import TrackedLink from "@/components/TrackedLink";

const pontos = [
  "Diagnóstico antes da proposta",
  "Estratégia antes do investimento",
  "Execução com critério comercial",
];

export default function AboutMaycon() {
  return (
    <section id="sobre" className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
        <FadeIn className="relative order-2 lg:order-1">
          <div className="relative mx-auto max-w-md">
            <div className="absolute inset-x-0 bottom-0 top-16 rounded-[2rem] bg-[linear-gradient(160deg,#2144FF_0%,#5B3DF5_100%)]" />
            <div className="absolute -left-6 top-24 h-24 w-24 rounded-full bg-[#2144FF]/10 blur-xl" />
            <Image
              src="/maycon-about.png"
              alt="Maycon Reis, fundador da Reisart"
              width={600}
              height={700}
              className="relative z-10 mx-auto h-auto max-h-[560px] w-auto object-contain"
            />
            <div className="absolute -bottom-5 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-2xl bg-white px-6 py-3 text-center shadow-[0_18px_40px_rgba(11,22,56,0.2)]">
              <p className="text-sm font-extrabold text-[#0B1638]">Maycon Reis</p>
              <p className="text-xs font-semibold text-[#4A5878]">
                Fundador · Reisart
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="order-1 lg:order-2" delay={100}>
          <p className="section-kicker text-[#2144FF]">
            Quem está por trás da Reisart
          </p>

          <h2 className="display mt-5 text-4xl text-[#0B1638] md:text-6xl">
            Estratégia antes de execução.{" "}
            <span className="gradient-text-light">Sempre.</span>
          </h2>

          <div className="mt-8 max-w-2xl space-y-5 text-[1.05rem] leading-[1.85] text-[#3B4A6B]">
            <p>
              Durante anos observei empresas investirem em marketing sem saber
              exatamente o que estavam construindo.
            </p>
            <p>
              Produziam conteúdo. Faziam anúncios. Contratavam ferramentas. Mas
              continuavam dependentes da sorte.
            </p>
            <p>
              A Reisart nasceu para mudar isso. Antes de qualquer campanha,
              entendemos o negócio, o mercado e o comportamento das pessoas que
              precisam comprar.
            </p>
            <p>
              Porque marketing sem direção gera movimento.{" "}
              <strong className="font-extrabold text-[#0B1638]">
                Estratégia gera crescimento.
              </strong>
            </p>
          </div>

          <ul className="mt-9 flex flex-wrap gap-3">
            {pontos.map((ponto) => (
              <li
                key={ponto}
                className="rounded-full border border-[#CBD5EE] bg-[#F3F6FF] px-4 py-2 text-sm font-bold text-[#1F3BD6]"
              >
                {ponto}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <TrackedLink
              href="https://wa.me/5519991392850?text=Ol%C3%A1%20Maycon%2C%20vim%20pelo%20site%20da%20Reisart%20e%20quero%20conversar."
              eventName="whatsapp_click"
              eventParams={{ location: "about_maycon" }}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-button"
            >
              <MessageCircle size={18} />
              Conversar com o Maycon
            </TrackedLink>
            <Link
              href="/cases"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#2144FF] hover:underline"
            >
              Ver trabalhos realizados
              <ArrowRight size={16} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
