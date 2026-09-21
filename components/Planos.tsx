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
    <section
      id="planos"
      className="bg-[#F3F6FF] px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="section-kicker justify-center text-[#2144FF]">
            Planos Reisart
          </p>
          <h2 className="display mt-5 text-4xl text-[#0B1638] md:text-6xl">
            Escolha o nível de presença do{" "}
            <span className="gradient-text-light">momento da sua empresa.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#4A5878]">
            Do primeiro passo digital à tecnologia, automação e inteligência de
            dados, cada plano organiza estratégia, conteúdo, tráfego e
            acompanhamento.
          </p>
        </FadeIn>

        <div className="-mx-6 mt-16 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto px-6 pb-6 pt-5 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0 lg:pt-0">
          {planos.map((plano, i) => {
            const Icon = plano.icon;
            const isRecomendado = plano.recomendado;

            return (
              <FadeIn key={plano.nome} delay={i * 80} className="w-[84vw] max-w-sm shrink-0 snap-center lg:w-auto lg:max-w-none">
                <article
                  className={[
                    "relative flex h-full flex-col rounded-3xl p-7 transition-all duration-300",
                    isRecomendado
                      ? "bg-[linear-gradient(160deg,#2144FF_0%,#4B3DF0_100%)] text-white shadow-[0_30px_70px_rgba(33,68,255,0.4)] lg:-translate-y-4 lg:pb-11 lg:pt-10"
                      : "border border-[#DCE3F5] bg-white text-[#0B1638] shadow-[0_10px_30px_rgba(33,68,255,0.06)] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(33,68,255,0.14)]",
                  ].join(" ")}
                >
                  {isRecomendado && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#2144FF] shadow-lg">
                      Mais escolhido
                    </span>
                  )}

                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={[
                        "flex h-12 w-12 items-center justify-center rounded-2xl",
                        isRecomendado ? "bg-white/20" : "bg-[#EAF0FF]",
                      ].join(" ")}
                    >
                      <Icon
                        className={isRecomendado ? "text-white" : "text-[#2144FF]"}
                        size={22}
                        strokeWidth={1.8}
                      />
                    </span>
                    {!isRecomendado && (
                      <span className="rounded-full bg-[#EAF0FF] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#2144FF]">
                        {plano.destaque}
                      </span>
                    )}
                  </div>

                  <h3 className="display mt-7 text-3xl">{plano.nome}</h3>

                  <p
                    className={[
                      "mt-3 text-sm font-bold leading-6",
                      isRecomendado ? "text-[#DCE6FF]" : "text-[#2144FF]",
                    ].join(" ")}
                  >
                    {plano.subtitulo}
                  </p>

                  <p
                    className={[
                      "mt-4 text-sm leading-7",
                      isRecomendado ? "text-[#E6ECFF]" : "text-[#4A5878]",
                    ].join(" ")}
                  >
                    {plano.objetivo}
                  </p>

                  <ul
                    className={[
                      "mt-6 space-y-3 border-t pt-6",
                      isRecomendado ? "border-white/25" : "border-[#E3E9F7]",
                    ].join(" ")}
                  >
                    {plano.topicos.map((topico) => (
                      <li
                        key={topico}
                        className={[
                          "flex gap-3 text-sm leading-6",
                          isRecomendado ? "text-white" : "text-[#2A3960]",
                        ].join(" ")}
                      >
                        <CheckCircle2
                          className={[
                            "mt-0.5 shrink-0",
                            isRecomendado ? "text-white" : "text-[#2144FF]",
                          ].join(" ")}
                          size={16}
                        />
                        <span>{topico}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-7">
                    <p
                      className={[
                        "text-xs leading-6",
                        isRecomendado ? "text-[#DCE6FF]" : "text-[#6B7A99]",
                      ].join(" ")}
                    >
                      <strong
                        className={isRecomendado ? "text-white" : "text-[#2A3960]"}
                      >
                        Ideal para:
                      </strong>{" "}
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
                        "mt-5 inline-flex w-full items-center justify-center rounded-xl px-4 py-3.5 text-sm font-extrabold transition",
                        isRecomendado
                          ? "bg-white text-[#2144FF] hover:shadow-[0_10px_28px_rgba(0,0,0,0.25)]"
                          : "bg-[#0B1638] text-white hover:bg-[#2144FF]",
                      ].join(" ")}
                    >
                      Solicitar proposta
                    </a>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn>
          <div className="mx-auto mt-16 flex max-w-4xl flex-col items-center justify-between gap-5 rounded-3xl border border-[#DCE3F5] bg-white p-7 text-center shadow-[0_10px_30px_rgba(33,68,255,0.06)] md:flex-row md:text-left">
            <p className="max-w-xl text-base leading-7 text-[#3B4A6B]">
              <strong className="text-[#0B1638]">Não sabe qual plano escolher?</strong>{" "}
              O diagnóstico define prioridade, canais e ritmo de execução para a
              sua empresa agora.
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
