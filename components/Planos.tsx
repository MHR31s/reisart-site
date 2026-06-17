"use client";

import {
  CheckCircle2,
  Crown,
  MapPin,
  Rocket,
  TrendingUp,
} from "lucide-react";
import { trackEvent } from "@/lib/gtag";

const planos = [
  {
    nome: "Presença",
    slug: "presenca",
    subtitulo: "Para empresas que precisam aparecer.",
    objetivo:
      "Criar uma base digital clara para que o cliente encontre, entenda e comece a confiar na empresa.",
    ideal: "Empresas pequenas, negócios locais e marcas que estão começando no digital.",
    destaque: "Primeiro passo",
    icon: Rocket,
    topicos: [
      "Campanhas em Google Ads ou Meta Ads",
      "Anúncios otimizados para WhatsApp",
      "Segmentação de público local",
      "Planejamento de conteúdo básico",
      "Posts, stories e calendário mensal",
      "Relatório mensal com principais resultados",
    ],
  },
  {
    nome: "Autoridade",
    slug: "autoridade",
    subtitulo: "Para empresas que querem ser lembradas.",
    objetivo:
      "Fortalecer presença, conteúdo e campanhas para gerar mais confiança, mais leads e mais vendas.",
    ideal: "Empresas que já vendem e querem crescer com mais previsibilidade.",
    destaque: "Mais escolhido",
    recomendado: true,
    icon: TrendingUp,
    topicos: [
      "Google Ads e Meta Ads em conjunto",
      "Campanhas para WhatsApp, promocionais e sazonais",
      "Remarketing para quem já interagiu",
      "Públicos personalizados e lookalike",
      "Conteúdo de autoridade, promocional e institucional",
      "Reels, roteiros e calendário editorial estratégico",
    ],
  },
  {
    nome: "Expansão",
    slug: "expansao",
    subtitulo: "Para empresas que desejam dominar a região.",
    objetivo:
      "Aumentar volume de leads, presença regional e consistência para acelerar o crescimento.",
    ideal: "Empresas que buscam resultados mais agressivos, consistentes e escaláveis.",
    destaque: "Crescimento regional",
    icon: Crown,
    topicos: [
      "Estratégias avançadas de segmentação",
      "Remarketing avançado e campanhas simultâneas",
      "Campanhas para produtos e ofertas específicas",
      "Otimizações frequentes e testes A/B constantes",
      "Conteúdo de autoridade, bastidores e provas sociais",
      "Análise de métricas e otimização de conteúdo",
    ],
  },
  {
    nome: "Dominância",
    slug: "dominancia",
    subtitulo: "Para marcas que querem liderar o mercado local.",
    objetivo:
      "Unir estratégia avançada, presença presencial e conteúdo real para transformar a marca em referência.",
    ideal: "Empresas que querem dominar a região e se tornar referência no mercado.",
    destaque: "Premium presencial",
    icon: MapPin,
    topicos: [
      "Captação presencial de fotos, vídeos e ofertas",
      "Gravação de reels, bastidores e depoimentos",
      "Campanhas completas em Google Ads e Meta Ads",
      "Conteúdo autêntico com produtos, serviços e equipe",
      "Materiais criativos para anúncios",
      "Marketing completo para crescer sem depender do improviso",
    ],
  },
];

export default function Planos() {
  return (
    <section id="planos" className="bg-[#07111F] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div>
          <p className="section-kicker">Planos</p>
          <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-5xl">
            Escolha a intensidade certa para o momento da sua empresa.
          </h2>

          <p className="premium-copy mt-7 max-w-3xl text-lg leading-8 text-[#AAB7C4]">
            Os planos organizam as principais entregas de tráfego, conteúdo,
            posicionamento e acompanhamento. A recomendação ideal é definida
            depois do diagnóstico.
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
                      trackEvent("plano_click", { plano: plano.slug })
                    }
                    className="mt-5 inline-flex w-full items-center justify-center border border-[#D8A84E]/45 px-4 py-3 text-sm font-black text-[#F4C76B] hover:border-[#F4C76B] hover:bg-[#F4C76B] hover:text-[#07111F]"
                  >
                    Quero esse nível de estratégia
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
              trackEvent("diagnostico_click", { source: "planos" })
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
