"use client";

import {
  CheckCircle2,
  Crown,
  MapPin,
  Rocket,
  TrendingUp,
} from "lucide-react";
import { trackLeadConversion } from "@/lib/conversions";
import FadeIn from "@/components/FadeIn";

const planos = [
  {
    nome: "Básico",
    slug: "basico",
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
      "Google Ads e Meta Ads em conjunto",
      "Campanhas para WhatsApp e promoções",
      "Remarketing para interessados",
      "Conteúdo institucional e promocional",
      "Calendário editorial estratégico",
    ],
  },
  {
    nome: "Escala",
    slug: "escala",
    subtitulo: "Domine sua região e acelere suas vendas.",
    objetivo:
      "Gerar alto volume de leads, aumentar vendas e posicionar a marca como referência local.",
    ideal:
      "Empresas que buscam resultados mais agressivos, consistentes e escaláveis.",
    destaque: "Crescimento regional",
    icon: Crown,
    topicos: [
      "Estratégias avançadas de segmentação",
      "Campanhas simultâneas para máximo alcance",
      "Conteúdo de autoridade e bastidores",
      "Otimizações frequentes e testes A/B",
      "Análise de métricas e ajustes estratégicos",
    ],
  },
  {
    nome: "Presença Total",
    slug: "presenca_total",
    subtitulo: "Premium presencial para dominar sua região.",
    objetivo:
      "Unir marketing completo, conteúdo real e presença presencial para construir autoridade e resultados reais.",
    ideal:
      "Empresas que querem terceirizar o marketing e se tornar referência no mercado local.",
    destaque: "Premium presencial",
    icon: MapPin,
    topicos: [
      "Captação presencial de fotos e vídeos",
      "Gravação de reels, bastidores e depoimentos",
      "Campanhas completas em Google Ads e Meta Ads",
      "Materiais criativos para anúncios",
      "Marketing completo com estratégia e execução",
    ],
  },
];

export default function Planos() {
  return (
    <section id="planos" className="bg-[#07111F] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="section-kicker">Planos REISART</p>
          <h2 className="mt-5 max-w-4xl text-3xl font-black leading-tight tracking-tight text-white md:text-5xl">
            Escolha o nível de presença que combina com o momento da sua empresa.
          </h2>
          <p className="premium-copy mt-7 max-w-3xl text-lg leading-[1.85] text-[#8A9AAA]">
            Do primeiro passo digital à presença premium presencial, cada plano
            organiza estratégia, conteúdo, tráfego e acompanhamento para gerar
            mais autoridade e oportunidades comerciais.
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
                      ? "border border-[#D8A84E]/60 bg-[#0E1A26] shadow-[0_0_40px_rgba(244,199,107,0.08),0_0_0_1px_rgba(244,199,107,0.08)]"
                      : "border border-white/[0.07] bg-[#0D1520] hover:border-[#D8A84E]/35 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]",
                  ].join(" ")}
                >
                  {isRecomendado && (
                    <span className="absolute -top-3 left-5 bg-[#F4C76B] px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-[#07111F]">
                      Mais escolhido
                    </span>
                  )}

                  <div className="flex items-center justify-between gap-4">
                    <div className={[
                      "flex h-10 w-10 items-center justify-center",
                      isRecomendado
                        ? "border border-[#D8A84E]/40 bg-[#D8A84E]/10"
                        : "border border-white/10 bg-white/[0.04]",
                    ].join(" ")}>
                      <Icon
                        className={isRecomendado ? "text-[#F4C76B]" : "text-[#9AA8B6]"}
                        size={20}
                        strokeWidth={1.8}
                      />
                    </div>
                    <span className="border border-[#54D2C0]/30 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#54D2C0]">
                      {plano.destaque}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-black tracking-tight text-white">
                    {plano.nome}
                  </h3>

                  <p className={[
                    "mt-2.5 text-sm font-bold leading-6",
                    isRecomendado ? "text-[#F4C76B]" : "text-[#8A9AAA]",
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
                              isRecomendado ? "text-[#F4C76B]" : "text-[#54D2C0]",
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
                          ? "bg-[#F4C76B] text-[#07111F] hover:bg-[#ffe08a] hover:shadow-[0_8px_24px_rgba(244,199,107,0.25)]"
                          : "border border-[#D8A84E]/30 text-[#F4C76B] hover:border-[#F4C76B] hover:bg-[#F4C76B] hover:text-[#07111F]",
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
          <div className="mt-10 flex flex-col items-start justify-between gap-5 border border-[#D8A84E]/25 bg-[#0B1018] p-7 md:flex-row md:items-center">
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
