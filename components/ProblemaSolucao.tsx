import Link from "next/link";
import { ArrowRight, BadgeCheck, BrainCircuit, MessageCircleMore } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const dores = [
  {
    numero: "01",
    titulo: "Não encontra você",
    descricao: "Quando o cliente pesquisa, sua empresa simplesmente não aparece.",
  },
  {
    numero: "02",
    titulo: "Não confia em você",
    descricao:
      "A presença digital não transmite autoridade e o cliente escolhe quem parece mais profissional.",
  },
  {
    numero: "03",
    titulo: "Não vê motivo para agir",
    descricao:
      "A comunicação não deixa claro o que você faz nem por que falar com você agora.",
  },
];

const solucoes = [
  {
    titulo: "Estratégia antes da execução",
    descricao:
      "Entendemos oferta, público e mercado antes de postar, anunciar ou automatizar.",
    icon: BrainCircuit,
  },
  {
    titulo: "Conteúdo com intenção comercial",
    descricao:
      "Cada peça constrói percepção de valor e aproxima o cliente da decisão.",
    icon: BadgeCheck,
  },
  {
    titulo: "Tráfego e WhatsApp conectados",
    descricao:
      "Campanhas, páginas e automações trabalhando juntas para gerar conversas melhores.",
    icon: MessageCircleMore,
  },
];

export default function ProblemaSolucao() {
  return (
    <section className="relative overflow-hidden bg-[#05070D] px-6 py-20 md:py-28">
      <div className="premium-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(33,68,255,0.22)_0%,transparent_70%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <FadeIn className="max-w-4xl">
          <p className="section-kicker">O problema</p>
          <h2 className="display mt-5 text-4xl text-white md:text-6xl">
            Sua empresa pode estar{" "}
            <span className="gradient-text">perdendo vendas</span> sem perceber.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#B8C4D6]">
            Antes de chamar no WhatsApp, o cliente passa por três decisões. Se
            sua empresa falha em uma, a venda vai para o concorrente.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {dores.map((dor, i) => (
            <FadeIn key={dor.numero} delay={i * 120}>
              <div className="border-t border-white/15 pt-6">
                <span className="display outline-num block text-7xl md:text-8xl">
                  {dor.numero}
                </span>
                <h3 className="mt-5 text-2xl font-extrabold text-white">
                  {dor.titulo}
                </h3>
                <p className="mt-3 text-base leading-7 text-[#9AA8B6]">
                  {dor.descricao}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={100}>
          <div className="relative mt-20 overflow-hidden rounded-[2rem] border border-[#3B82FF]/30 bg-[linear-gradient(135deg,#0D1B45_0%,#0A1130_60%,#100A3A_100%)] p-8 md:p-12">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(59,130,255,0.35)_0%,transparent_70%)] blur-2xl" />
            <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7FB0FF]">
                  Como a Reisart resolve
                </p>
                <h3 className="display mt-4 text-3xl text-white md:text-4xl">
                  Presença, percepção e conversão no mesmo plano.
                </h3>
                <Link href="/diagnostico" className="btn-white mt-8">
                  Quero esse diagnóstico
                  <ArrowRight size={18} />
                </Link>
              </div>

              <ul className="grid gap-4">
                {solucoes.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={item.titulo}
                      className="glass flex gap-4 rounded-2xl p-5"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#3B82FF]/20">
                        <Icon className="text-[#8DB8FF]" size={24} strokeWidth={1.8} />
                      </span>
                      <div>
                        <h4 className="text-lg font-extrabold text-white">
                          {item.titulo}
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-[#B8C8D8]">
                          {item.descricao}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
