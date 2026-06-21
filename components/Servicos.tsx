import Link from "next/link";
import {
  Bot,
  ChartNoAxesCombined,
  Camera,
  Globe2,
  Megaphone,
  MessageSquareText,
  Palette,
  Store,
} from "lucide-react";

const servicos = [
  {
    titulo: "Gestão de Redes Sociais",
    descricao:
      "Planejamento, calendário e conteúdo para transformar redes sociais em presença profissional.",
    href: "/servicos/gestao-redes-sociais",
    icon: MessageSquareText,
  },
  {
    titulo: "Tráfego Pago",
    descricao:
      "Campanhas em Google, Meta e canais estratégicos para gerar conversas e oportunidades.",
    href: "/servicos/trafego-pago",
    icon: Megaphone,
  },
  {
    titulo: "Criação de Sites",
    descricao:
      "Sites profissionais para apresentar sua marca, organizar sua oferta e gerar contatos.",
    href: "/servicos/criacao-de-sites",
    icon: Globe2,
  },
  {
    titulo: "Google Meu Negócio",
    descricao:
      "Otimização da presença local para melhorar confiança, descoberta e contato no Google.",
    href: "/servicos/google-meu-negocio",
    icon: Store,
  },
  {
    titulo: "Identidade Visual",
    descricao:
      "Construção de uma imagem consistente para sua empresa parecer mais profissional.",
    href: "/servicos/identidade-visual",
    icon: Palette,
  },
  {
    titulo: "Produção de Conteúdo",
    descricao:
      "Fotos, vídeos, bastidores e materiais criativos para comunicar valor com autenticidade.",
    href: "/servicos/producao-de-conteudo",
    icon: Camera,
  },
  {
    titulo: "Consultoria Estratégica",
    descricao:
      "Diagnóstico, direção e plano de ação para organizar presença, campanhas e atendimento.",
    href: "/servicos/consultoria-estrategica",
    icon: ChartNoAxesCombined,
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="bg-[#0B1018] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div>
          <p className="section-kicker">Serviços Individuais</p>
          <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-5xl">
            Escolha o serviço certo para fortalecer sua presença digital.
          </h2>

          <p className="premium-copy mt-7 max-w-3xl text-lg leading-8 text-[#AAB7C4]">
            Cada serviço foi pensado para resolver um ponto específico da
            operação digital: presença, tráfego, autoridade, conversão,
            identidade, conteúdo e estratégia.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {servicos.map((servico) => {
            const Icon = servico.icon;

            return (
              <article
                key={servico.titulo}
                className="group flex min-h-[280px] flex-col border border-white/10 bg-[#0E1622] p-7 transition-colors hover:border-[#D8A84E]/50 hover:bg-[#121E2B]"
              >
                <Icon className="text-[#54D2C0]" size={26} strokeWidth={1.7} />

                <h3 className="mt-8 text-xl font-bold text-white">
                  {servico.titulo}
                </h3>

                <p className="premium-copy mt-4 text-sm leading-7 text-[#9AA8B6]">
                  {servico.descricao}
                </p>

                <Link
                  href={servico.href}
                  className="mt-auto inline-flex pt-7 font-bold text-[#F4C76B] hover:text-white"
                >
                  Saiba Mais
                </Link>
              </article>
            );
          })}

          <article className="flex min-h-[280px] flex-col justify-between border border-[#D8A84E]/35 bg-[#101720] p-7 lg:col-span-3">
            <div>
              <Bot className="text-[#F4C76B]" size={28} strokeWidth={1.7} />
              <h3 className="mt-8 text-2xl font-black text-white">
                Precisa combinar serviços?
              </h3>
              <p className="premium-copy mt-4 max-w-3xl text-base leading-7 text-[#AAB7C4]">
                A REISART também monta operações completas reunindo conteúdo,
                tráfego, site, Google Meu Negócio e automações conforme o
                diagnóstico da empresa.
              </p>
            </div>
            <Link
              href="/diagnostico"
              className="premium-button mt-7 inline-flex w-fit"
            >
              Diagnóstico de Presença Digital
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
