import { BadgeCheck, BrainCircuit, MessageCircleMore } from "lucide-react";

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
        <div className="border-y border-white/10 py-12">
          <div>
            <p className="section-kicker">Por que a Reisart</p>
            <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-5xl">
              O problema não é a falta de marketing. É a falta de estratégia por trás dele.
            </h2>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {motivos.map((motivo) => {
              const Icon = motivo.icon;

              return (
                <article key={motivo.titulo} className="bg-[#101720] p-6">
                  <Icon className="text-[#F4C76B]" size={28} />
                  <h3 className="mt-6 text-xl font-black text-white">
                    {motivo.titulo}
                  </h3>
                  <p className="premium-copy mt-4 text-sm leading-7 text-[#9AA8B6]">
                    {motivo.descricao}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
