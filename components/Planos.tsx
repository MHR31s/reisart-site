"use client";

import {
  CheckCircle2,
  Crown,
  MapPin,
  Rocket,
  TrendingUp,
} from "lucide-react";
import { trackLeadConversion } from "@/lib/conversions";

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
        <div>
          <p className="section-kicker">Planos REISART</p>
          <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-5xl">
            Escolha o nível de presença que combina com o momento da sua empresa.
          </h2>

          <p className="premium-copy mt-7 max-w-3xl text-lg leading-8 text-[#AAB7C4]">
            Do primeiro passo digital à presença premium presencial, cada plano
            organiza estratégia, conteúdo, tráfego e acompanhamento para gerar
            mais autoridade e oportunidades comerciais.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-4">
          {planos.map((plano) => {
            const Icon = plano.icon;

            return (
              <article
                key={plano.nome}
                className="relative flex min-h-full flex-col border border-white/10 bg-[#101720] p-6 transition-colors hover:border-[#D8A84E]/60"
              >
                {plano.recomendado && (
                  <span className="absolute -top-3 left-6 bg-[#F4C76B] px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#07111F]">
                    Mais escolhido
                  </span>
                )}

                <div className="flex items-center justify-between gap-4">
                  <Icon className="text-[#F4C76B]" size={30} strokeWidth={1.8} />
                  <span className="border border-[#54D2C0]/40 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-[#54D2C0]">
                    {plano.destaque}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-black text-white">
                  {plano.nome}
                </h3>

                <p className="mt-3 text-base font-bold leading-6 text-[#F4C76B]">
                  {plano.subtitulo}
                </p>

                <p className="premium-copy mt-5 text-sm leading-7 text-[#AAB7C4]">
                  {plano.objetivo}
                </p>

                <div className="mt-7 border-t border-white/10 pt-6">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#6F7D8B]">
                    Tópicos incluídos
                  </p>

                  <ul className="mt-5 space-y-3">
                    {plano.topicos.map((topico) => (
                      <li
                        key={topico}
                        className="flex gap-3 text-sm leading-6 text-[#DDE7F1]"
                      >
                        <CheckCircle2
                          className="mt-0.5 shrink-0 text-[#54D2C0]"
                          size={17}
                        />
                        <span>{topico}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-7">
                  <p className="premium-copy border-t border-white/10 pt-5 text-sm leading-6 text-[#9AA8B6]">
                    <strong className="text-white">Ideal para:</strong>{" "}
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
                    className="mt-5 inline-flex w-full items-center justify-center border border-[#D8A84E]/45 px-4 py-3 text-sm font-black text-[#F4C76B] hover:border-[#F4C76B] hover:bg-[#F4C76B] hover:text-[#07111F]"
                  >
                    Solicitar Proposta
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 border border-[#D8A84E]/35 bg-[#0B1018] p-6 md:flex-row md:items-center">
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
      </div>
    </section>
  );
}
