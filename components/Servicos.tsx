import Link from "next/link";
import {
  Bot,
  ChartNoAxesCombined,
  Camera,
  CheckCircle2,
  Globe2,
  Megaphone,
  MessageSquareText,
  Palette,
  Store,
} from "lucide-react";

const servicos = [
  {
    titulo: "Gestão de Redes Sociais",
    subtitulo: "Transforme seguidores em clientes.",
    descricao:
      "Criamos conteúdos estratégicos para sua empresa aparecer, gerar confiança e manter sua marca ativa todos os dias.",
    beneficios: [
      "Mais presença digital",
      "Mais autoridade",
      "Mais engajamento",
      "Mais oportunidades de venda",
    ],
    botao: "Quero Aparecer Mais",
    href: "/servicos/gestao-redes-sociais",
    icon: MessageSquareText,
  },
  {
    titulo: "Tráfego Pago",
    subtitulo: "Anuncie para as pessoas certas.",
    descricao:
      "Criamos campanhas no Google, Facebook e Instagram para gerar mais mensagens, orçamentos e vendas.",
    beneficios: [
      "Google Ads",
      "Instagram Ads",
      "Facebook Ads",
      "Campanhas para WhatsApp",
    ],
    botao: "Quero Mais Clientes",
    href: "/servicos/trafego-pago",
    icon: Megaphone,
  },
  {
    titulo: "Criação de Sites",
    subtitulo: "Sua empresa aberta 24 horas por dia.",
    descricao:
      "Criamos sites profissionais para apresentar sua empresa, gerar credibilidade e transformar visitantes em clientes.",
    beneficios: [
      "Site profissional",
      "WhatsApp integrado",
      "Google Analytics",
      "Otimização para Google",
    ],
    botao: "Quero Um Site Profissional",
    href: "/servicos/criacao-de-sites",
    icon: Globe2,
  },
  {
    titulo: "Google Meu Negócio",
    subtitulo: "Apareça quando alguém procurar sua empresa.",
    descricao:
      "Configuramos e otimizamos sua presença no Google para gerar mais ligações, visitas e contatos.",
    beneficios: [
      "Mais visibilidade local",
      "Mais avaliações",
      "Mais chamadas",
      "Mais clientes da região",
    ],
    botao: "Quero Aparecer no Google",
    href: "/servicos/google-meu-negocio",
    icon: Store,
  },
  {
    titulo: "Identidade Visual",
    subtitulo: "Faça sua empresa parecer profissional.",
    descricao:
      "Criamos uma identidade visual que transmite confiança e diferencia sua marca da concorrência.",
    beneficios: [
      "Logo profissional",
      "Cores da marca",
      "Padronização visual",
      "Mais credibilidade",
    ],
    botao: "Quero Fortalecer Minha Marca",
    href: "/servicos/identidade-visual",
    icon: Palette,
  },
  {
    titulo: "Produção de Conteúdo",
    subtitulo: "Mostre o que sua empresa faz de verdade.",
    descricao:
      "Produzimos fotos, vídeos, bastidores e conteúdos que aproximam clientes da sua marca.",
    beneficios: [
      "Fotos profissionais",
      "Vídeos",
      "Bastidores",
      "Conteúdo para redes sociais",
    ],
    botao: "Quero Criar Conteúdo",
    href: "/servicos/producao-de-conteudo",
    icon: Camera,
  },
  {
    titulo: "Consultoria Estratégica",
    subtitulo: "Descubra exatamente o que sua empresa precisa fazer.",
    descricao:
      "Analisamos sua presença digital e criamos um plano para gerar mais resultados.",
    beneficios: [
      "Diagnóstico completo",
      "Análise da concorrência",
      "Plano de ação",
      "Direcionamento estratégico",
    ],
    botao: "Quero Um Diagnóstico",
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
            O que sua empresa precisa hoje?
          </h2>

          <p className="premium-copy mt-7 max-w-3xl text-lg leading-8 text-[#AAB7C4]">
            Escolha o resultado que você deseja alcançar e descubra qual solução
            da REISART pode acelerar o crescimento da sua empresa.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {servicos.map((servico) => {
            const Icon = servico.icon;

            return (
              <article
                key={servico.titulo}
                className="group flex min-h-[430px] flex-col border border-white/10 bg-[#0E1622] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D8A84E]/50 hover:bg-[#121E2B] hover:shadow-2xl hover:shadow-black/20 md:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center border border-[#54D2C0]/25 bg-[#54D2C0]/10">
                  <Icon className="text-[#54D2C0]" size={24} strokeWidth={1.7} />
                </div>

                <h3 className="mt-8 text-xl font-bold text-white">
                  {servico.titulo}
                </h3>

                <p className="mt-3 text-base font-black leading-6 text-[#F4C76B]">
                  {servico.subtitulo}
                </p>

                <p className="premium-copy mt-5 text-sm leading-7 text-[#9AA8B6]">
                  {servico.descricao}
                </p>

                <ul className="mt-6 grid gap-3 border-t border-white/10 pt-6">
                  {servico.beneficios.map((beneficio) => (
                    <li
                      key={beneficio}
                      className="flex gap-3 text-sm leading-6 text-[#DDE7F1]"
                    >
                      <CheckCircle2
                        className="mt-0.5 shrink-0 text-[#54D2C0]"
                        size={16}
                      />
                      <span>{beneficio}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={servico.href}
                  className="mt-auto inline-flex border border-[#D8A84E]/45 px-4 py-3 text-center text-sm font-black text-[#F4C76B] transition hover:border-[#F4C76B] hover:bg-[#F4C76B] hover:text-[#07111F]"
                >
                  {servico.botao}
                </Link>
              </article>
            );
          })}

          <article className="flex min-h-[280px] flex-col justify-between border border-[#D8A84E]/35 bg-[#101720] p-7 lg:col-span-3">
            <div>
              <Bot className="text-[#F4C76B]" size={28} strokeWidth={1.7} />
              <h3 className="mt-8 text-2xl font-black text-white md:text-3xl">
                Não sabe qual serviço escolher?
              </h3>
              <p className="premium-copy mt-4 max-w-3xl text-base leading-7 text-[#AAB7C4]">
                Realizamos um Diagnóstico de Presença Digital para identificar
                exatamente quais ações podem gerar mais resultados para sua
                empresa.
              </p>
            </div>
            <Link
              href="/diagnostico"
              className="premium-button mt-7 inline-flex w-fit"
            >
              Solicitar Diagnóstico Gratuito
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
