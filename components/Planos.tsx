"use client";

import {
  Bot,
  CheckCircle2,
  Crown,
  Rocket,
  TrendingUp,
} from "lucide-react";
import { trackLeadConversion } from "@/lib/conversions";
import FadeIn from "@/components/FadeIn";

const planos = [
  {
    nome: "Essencial",
    slug: "essencial",
    subtitulo: "Comece a ser visto. Comece a vender.",
    objetivo:
      "Criar presença digital, atrair o público certo e gerar as primeiras oportunidades de venda.",
    ideal:
      "Empresas pequenas, negócios locais e marcas que estão começando no digital.",
    destaque: "Primeiro passo",
    icon: Rocket,
    topicos: [
      "Campanhas em Google Ads ou Meta Ads",
      "Planejamento de conteúdo básico",
      "Posts e stories mensais",
      "Anúncios otimizados para WhatsApp",
      "Relatório mensal com principais resultados",
    ],
  },
  {
    nome: "Crescimento",
    slug: "crescimento",
    subtitulo: "Mais visibilidade, mais leads e mais vendas.",
    objetivo:
      "Aumentar o volume de leads qualificados, fortalecer a marca e gerar crescimento consistente.",
    ideal:
      "Empresas que já vendem e querem crescer com mais previsibilidade.",
    destaque: "Mais escolhido",
    recomendado: true,
    icon: TrendingUp,
    topicos: [
      "Gestão de Instagram e Google Meu Negócio",
      "Google Ads e Meta Ads em conjunto",
      "Remarketing para quem já demonstrou interesse",
      "Relatórios mensais de desempenho",
      "Reunião estratégica mensal",
    ],
  },
  {
    nome: "Performance",
    slug: "performance",
    subtitulo: "Domine sua região e acelere suas vendas.",
    objetivo:
      "Gerar alto volume de leads, aumentar vendas e posicionar a marca como referência local.",
    ideal:
      "Empresas que buscam resultados mais agressivos, consistentes e escaláveis.",
    destaque: "Crescimento regional",
    icon: Crown,
    topicos: [
      "Tráfego pago avançado com públicos estratégicos",
      "Otimização constante de campanhas",
      "Funis de conversão completos",
      "Testes A/B e ajustes contínuos",
      "Conteúdo de autoridade e bastidores",
    ],
  },
  {
    nome: "Premium",
    slug: "premium",
    subtitulo: "Tecnologia e inteligência para dominar o mercado digital.",
    objetivo:
      "Unir tecnologia, automação e inteligência de dados para escalar atendimento, conversão e resultados.",
    ideal:
      "Empresas que já têm tração e querem operar com tecnologia de ponta e presença digital completa.",
    destaque: "Tecnologia e IA",
    icon: Bot,
    topicos: [
      "Sites e landing pages profissionais",
      "Automações e chatbots de atendimento",
      "Agentes de IA para vendas e suporte",
      "Relatórios e inteligência de dados",
    ],
  },
];

export default function Planos() {
  return (
    <section id="planos" className="bg-[#05070D] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="section-kicker">Planos REISART</p>
          <h2 className="mt-5 max-w-4xl text-3xl font-black leading-tight tracking-tight text-white md:text-5xl">
            Escolha o nível de presença que combina com o momento da sua empresa.
          </h2>
          <p className="premium-copy mt-7 max-w-3xl text-lg leading-[1.85] text-[#8A9AAA]">
            Do primeiro passo digital à tecnologia, automação e inteligência
            de dados, cada plano organiza estratégia, conteúdo, tráfego e
            acompanhamento para gerar mais autoridade e oportunidades
            comerciais.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-5 lg:grid-cols-4">
          {planos.map((plano, i) => {
            const Icon = plano.icon;
            const isRecomendado = plano.recomendado;

            return (
              <FadeIn key={plano.nome} delay={i * 80}>
                <article
                  className={[
                    "relative flex h-full min-h-full flex-col p-6 transition-all duration-300",
                    isRecomendado
                      ? "border border-[#3B82FF]/60 bg-[#0B1638] shadow-[0_0_40px_rgba(33,68,255,0.08),0_0_0_1px_rgba(33,68,255,0.08)]"
                      : "border border-white/[0.07] bg-[#0B1638] hover:border-[#3B82FF]/35 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]",
                  ].join(" ")}
                >
                  {isRecomendado && (
                    <span className="absolute -top-3 left-5 bg-[#2144FF] px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-white">
                      Mais escolhido
                    </span>
                  )}

                  <div className="flex items-center justify-between gap-4">
                    <div className={[
                      "flex h-10 w-10 items-center justify-center",
                      isRecomendado
                        ? "border border-[#3B82FF]/40 bg-[#3B82FF]/10"
                        : "border border-white/10 bg-white/[0.04]",
                    ].join(" ")}>
                      <Icon
                        className={isRecomendado ? "text-[#3B82FF]" : "text-[#9AA8B6]"}
                        size={20}
                        strokeWidth={1.8}
                      />
                    </div>
                    <span className="border border-[#3B82FF]/30 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#3B82FF]">
                      {plano.destaque}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-black tracking-tight text-white">
                    {plano.nome}
                  </h3>

                  <p className={[
                    "mt-2.5 text-sm font-bold leading-6",
                    isRecomendado ? "text-[#3B82FF]" : "text-[#8A9AAA]",
                  ].join(" ")}>
                    {plano.subtitulo}
                  </p>

                  <p className="premium-copy mt-4 text-sm leading-7 text-[#7A8E9E]">
                    {plano.objetivo}
                  </p>

                  <div className="mt-6 border-t border-white/[0.07] pt-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#4E6070]">
                      Tópicos incluídos
                    </p>
                    <ul className="mt-4 space-y-2.5">
                      {plano.topicos.map((topico) => (
                        <li
                          key={topico}
                          className="flex gap-3 text-sm leading-6 text-[#C7D2DE]"
                        >
                          <CheckCircle2
                            className={[
                              "mt-0.5 shrink-0",
                              "text-[#3B82FF]",
                            ].join(" ")}
                            size={15}
                          />
                          <span>{topico}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-6">
                    <p className="premium-copy border-t border-white/[0.07] pt-5 text-sm leading-6 text-[#7A8E9E]">
                      <strong className="text-[#C7D2DE]">Ideal para:</strong>{" "}
                      {plano.ideal}
                    </p>

                    <a
                      href="#contato"
                      onClick={() =>
                        trackLeadConversion({
                          content_name: "solicitar_proposta",
                          plano: plano.slug,
                          source: "planos",
                        })
                      }
                      className={[
                        "mt-5 inline-flex w-full items-center justify-center px-4 py-3 text-sm font-black",
                        isRecomendado
                          ? "bg-[#2144FF] text-white hover:bg-[#1a35d1] hover:shadow-[0_8px_24px_rgba(59,130,255,0.3)]"
                          : "border border-[#3B82FF]/30 text-[#3B82FF] hover:border-[#2144FF] hover:bg-[#2144FF] hover:text-white",
                      ].join(" ")}
                    >
                      Solicitar Proposta
                    </a>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 border border-[#3B82FF]/25 bg-[#05070D] p-7 md:flex-row md:items-center">
            <p className="premium-copy max-w-3xl text-base leading-7 text-[#C7D2DE]">
              Quer saber qual plano faz mais sentido para sua empresa agora? O
              diagnóstico ajuda a definir prioridade, canais e ritmo de execução.
            </p>
            <a
              href="#contato"
              onClick={() =>
                trackLeadConversion({
                  content_name: "solicitar_diagnostico",
                  source: "planos",
                })
              }
              className="premium-button shrink-0"
            >
              Solicitar diagnóstico
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
