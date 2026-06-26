import { BadgeCheck, BrainCircuit, MessageCircleMore } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const motivos = [
  {
    titulo: "Estratégia antes da execução",
    descricao:
      "Antes de postar, anunciar ou automatizar, entendemos oferta, público, mercado e prioridades comerciais.",
    icon: BrainCircuit,
  },
  {
    titulo: "Conteúdo com intenção comercial",
    descricao:
      "Cada peça precisa fortalecer percepção de valor, criar confiança e aproximar o cliente da decisão.",
    icon: BadgeCheck,
  },
  {
    titulo: "Tráfego e WhatsApp conectados",
    descricao:
      "Campanhas, páginas e automações trabalham juntas para gerar conversas melhores, não apenas curtidas.",
    icon: MessageCircleMore,
  },
];

export default function PorQueReisart() {
  return (
    <section className="bg-[#07111F] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="border-y border-white/[0.07] py-14">
          <FadeIn>
            <p className="section-kicker">Por que a Reisart</p>
            <h2 className="mt-5 max-w-4xl text-3xl font-black leading-tight tracking-tight text-white md:text-5xl">
              O problema não é a falta de marketing.{" "}
              <span className="text-[#9AA8B6]">É a falta de estratégia por trás dele.</span>
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-px overflow-hidden border border-white/[0.07] bg-white/[0.06] md:grid-cols-3">
            {motivos.map((motivo, i) => {
              const Icon = motivo.icon;
              return (
                <FadeIn key={motivo.titulo} delay={i * 100}>
                  <article className="group h-full bg-[#0D1622] p-7 transition-colors hover:bg-[#111E2C]">
                    <div className="inline-flex h-11 w-11 items-center justify-center border border-[#D8A84E]/25 bg-[#D8A84E]/[0.08]">
                      <Icon className="text-[#F4C76B]" size={22} />
                    </div>
                    <h3 className="mt-6 text-lg font-black tracking-tight text-white">
                      {motivo.titulo}
                    </h3>
                    <p className="premium-copy mt-4 text-sm leading-7 text-[#8A9AAA]">
                      {motivo.descricao}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
