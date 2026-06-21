import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TrackedLink from "@/components/TrackedLink";

const whatsappLink =
  "https://wa.me/5519991392850?text=Ol%C3%A1,%20quero%20solicitar%20um%20diagn%C3%B3stico%20estrat%C3%A9gico%20para%20minha%20empresa.";

const services = {
  "gestao-redes-sociais": {
    title: "Gestão de Redes Sociais",
    description:
      "Gestão de redes sociais para empresas locais que querem comunicar valor, fortalecer autoridade e manter presença digital profissional.",
    intro:
      "A REISART transforma redes sociais em uma vitrine estratégica, com planejamento, calendário, conteúdo e direção para comunicar valor com consistência.",
    problem:
      "Muitas empresas publicam sem frequência, sem mensagem clara e sem conexão com objetivos comerciais, o que reduz confiança e enfraquece a percepção da marca.",
    solution:
      "A REISART organiza temas, formatos, linguagem e calendário para sustentar uma presença digital mais profissional e alinhada ao público certo.",
    benefits: [
      "Mais consistência na comunicação",
      "Conteúdo alinhado ao posicionamento da marca",
      "Presença digital mais profissional",
      "Mais confiança antes do primeiro contato",
    ],
    indicated: [
      "Empresas que querem melhorar o Instagram",
      "Negócios locais que precisam manter presença ativa",
      "Marcas que querem comunicar valor com mais clareza",
    ],
  },
  "trafego-pago": {
    title: "Tráfego Pago para Empresas Locais",
    description:
      "Tráfego pago para empresas locais que querem gerar visibilidade, conversas no WhatsApp e oportunidades comerciais com estratégia.",
    intro:
      "O tráfego pago coloca sua empresa na frente das pessoas certas, combinando Meta Ads, Google Ads e campanhas orientadas para geração de oportunidades.",
    problem:
      "Sem estratégia, anúncios podem gerar cliques sem qualidade, consumir verba e não se conectar com a oferta, o atendimento e o momento do cliente.",
    solution:
      "A REISART estrutura campanhas, públicos, criativos, palavras-chave e acompanhamento para transformar mídia em conversas e oportunidades.",
    benefits: [
      "Mais alcance qualificado",
      "Mais conversas no WhatsApp",
      "Campanhas conectadas ao objetivo comercial",
      "Melhor leitura dos canais que geram oportunidades",
    ],
    indicated: [
      "Empresas que querem acelerar contatos",
      "Negócios que precisam divulgar ofertas ou serviços",
      "Marcas que querem anunciar com critério",
    ],
  },
  "meta-ads": {
    title: "Meta Ads para Empresas Locais",
    description:
      "Campanhas de Meta Ads para empresas locais que querem gerar conversas, fortalecer presença e atrair oportunidades com estratégia.",
    intro:
      "Anúncios no Instagram e Facebook precisam ir além de impulsionamento. A REISART estrutura campanhas com posicionamento, público, criativos e mensagem alinhados ao objetivo comercial da empresa.",
    problem:
      "Muitas empresas anunciam sem clareza de público, oferta ou caminho de atendimento. O resultado é investimento disperso, mensagens pouco qualificadas e dificuldade para entender o que realmente funciona.",
    solution:
      "A REISART organiza a estratégia, configura campanhas, acompanha os dados e ajusta a comunicação para transformar atenção em conversas com mais intenção.",
    benefits: [
      "Mais visibilidade para a marca no mercado local",
      "Campanhas orientadas para WhatsApp e geração de conversas",
      "Segmentação alinhada ao perfil ideal de cliente",
      "Criativos e mensagens pensados para transmitir valor",
    ],
    indicated: [
      "Empresas locais que querem atrair mais contatos",
      "Negócios que precisam fortalecer presença no Instagram e Facebook",
      "Marcas que desejam anunciar com mais critério comercial",
    ],
  },
  "google-ads": {
    title: "Google Ads para Empresas Locais",
    description:
      "Google Ads para empresas locais que desejam aparecer para pessoas que já estão pesquisando por seus produtos ou serviços.",
    intro:
      "No Google, a intenção do cliente já existe. A REISART cria campanhas para conectar sua empresa com pessoas que procuram soluções, serviços e fornecedores no momento certo.",
    problem:
      "Sem uma estrutura clara, campanhas podem atrair buscas erradas, consumir verba com baixa intenção e gerar contatos pouco alinhados ao que a empresa vende.",
    solution:
      "A REISART organiza palavras-chave, anúncios, extensões, segmentação e otimizações para aumentar a qualidade das oportunidades geradas.",
    benefits: [
      "Presença em pesquisas estratégicas",
      "Anúncios direcionados para pessoas com intenção de compra",
      "Melhor aproveitamento do investimento em mídia",
      "Acompanhamento de termos, conversões e oportunidades",
    ],
    indicated: [
      "Empresas que vendem serviços ou produtos buscados no Google",
      "Negócios locais que precisam aparecer com mais autoridade",
      "Marcas que querem gerar demanda mais qualificada",
    ],
  },
  "google-meu-negocio": {
    title: "Google Meu Negócio para Empresas Locais",
    description:
      "Gestão e otimização do Google Meu Negócio para empresas locais que querem melhorar presença, confiança e descoberta no Google.",
    intro:
      "O perfil da empresa no Google é uma das primeiras impressões que o cliente tem. A REISART organiza esse canal para transmitir confiança e facilitar o contato.",
    problem:
      "Perfis incompletos, desatualizados ou sem estratégia reduzem a percepção de profissionalismo e podem fazer a empresa perder oportunidades para concorrentes mais bem posicionados.",
    solution:
      "A REISART estrutura informações, comunicação, imagens, categorias e rotina de presença para tornar o perfil mais claro, confiável e útil para o cliente.",
    benefits: [
      "Melhor apresentação da empresa no Google",
      "Mais clareza sobre serviços, endereço e canais de contato",
      "Fortalecimento da confiança antes do primeiro contato",
      "Apoio à presença local e ao posicionamento da marca",
    ],
    indicated: [
      "Empresas com atendimento local ou regional",
      "Negócios que dependem de busca no Google e mapas",
      "Marcas que querem melhorar a primeira impressão digital",
    ],
  },
  "criacao-de-sites": {
    title: "Criação de Sites Profissionais",
    description:
      "Criação de sites profissionais para empresas que precisam transmitir autoridade, organizar sua oferta e converter visitantes em contatos.",
    intro:
      "Um site profissional precisa comunicar valor com clareza. A REISART cria páginas pensadas para posicionamento, confiança e conversão.",
    problem:
      "Muitas empresas dependem apenas de redes sociais e perdem credibilidade quando o cliente procura uma presença mais estruturada antes de solicitar orçamento.",
    solution:
      "A REISART constrói sites com narrativa clara, organização de serviços, prova social e chamadas para ação que facilitam o contato comercial.",
    benefits: [
      "Presença digital mais profissional e confiável",
      "Organização clara dos serviços e diferenciais",
      "Base própria para campanhas e SEO",
      "Mais autoridade antes do primeiro atendimento",
    ],
    indicated: [
      "Empresas que ainda não têm site profissional",
      "Negócios que querem melhorar sua percepção de valor",
      "Marcas que precisam de uma base digital para campanhas",
    ],
  },
  automacoes: {
    title: "Automações para Atendimento e Vendas",
    description:
      "Automações para atendimento e vendas que ajudam empresas locais a organizar conversas, responder melhor e perder menos oportunidades.",
    intro:
      "O atendimento precisa acompanhar a velocidade do cliente. A REISART estrutura automações para tornar a comunicação mais organizada sem perder o toque humano.",
    problem:
      "Quando contatos chegam por WhatsApp, Instagram ou campanhas sem fluxo, muitas oportunidades esfriam por demora, falta de padrão ou ausência de acompanhamento.",
    solution:
      "A REISART desenha fluxos de atendimento, mensagens estratégicas e caminhos de qualificação para ajudar sua empresa a responder melhor e vender com mais previsibilidade.",
    benefits: [
      "Menos oportunidades perdidas por falta de resposta",
      "Atendimento mais organizado e profissional",
      "Qualificação inicial de interessados",
      "Mais clareza no caminho entre contato e orçamento",
    ],
    indicated: [
      "Empresas que recebem contatos pelo WhatsApp",
      "Negócios que querem padronizar atendimento",
      "Marcas que precisam organizar o fluxo comercial",
    ],
  },
  "identidade-visual": {
    title: "Identidade Visual para Empresas Locais",
    description:
      "Identidade visual para empresas que precisam transmitir profissionalismo, confiança e valor em todos os pontos de contato.",
    intro:
      "A identidade visual ajuda o cliente a reconhecer, confiar e lembrar da sua marca. A REISART organiza elementos visuais para deixar a comunicação mais forte.",
    problem:
      "Quando a empresa usa artes, cores e materiais sem padrão, a percepção de profissionalismo diminui e a marca fica menos memorável.",
    solution:
      "A REISART cria direção visual, padrões e materiais que deixam a marca mais consistente nas redes, anúncios, site e apresentação comercial.",
    benefits: [
      "Imagem mais profissional",
      "Mais consistência na comunicação",
      "Materiais visuais mais alinhados ao posicionamento",
      "Percepção de valor mais clara",
    ],
    indicated: [
      "Empresas que querem melhorar a aparência da marca",
      "Negócios que precisam padronizar comunicação visual",
      "Marcas que querem parecer mais confiáveis",
    ],
  },
  "producao-de-conteudo": {
    title: "Produção de Conteúdo",
    description:
      "Produção de conteúdo para empresas que querem mostrar bastidores, serviços, equipe e ofertas com mais autenticidade.",
    intro:
      "Conteúdo real aproxima a marca das pessoas. A REISART ajuda sua empresa a transformar rotina, serviços e diferenciais em fotos, vídeos e materiais criativos.",
    problem:
      "Muitas empresas têm bons serviços, mas não mostram isso com clareza. Sem conteúdo real, o público tem menos confiança para entrar em contato.",
    solution:
      "A REISART planeja e produz materiais que reforçam autoridade, bastidores, diferenciais e ofertas, conectando conteúdo com posicionamento e vendas.",
    benefits: [
      "Mais autenticidade na comunicação",
      "Conteúdo visual para redes e anúncios",
      "Mais confiança antes do orçamento",
      "Melhor percepção dos serviços oferecidos",
    ],
    indicated: [
      "Empresas que precisam mostrar mais o que fazem",
      "Negócios com serviços visuais ou presenciais",
      "Marcas que querem conteúdo próprio para campanhas",
    ],
  },
  "consultoria-estrategica": {
    title: "Consultoria Estratégica Digital",
    description:
      "Consultoria estratégica para empresas que precisam organizar presença, canais, campanhas e próximos passos digitais.",
    intro:
      "Antes de executar, é preciso entender o cenário. A consultoria da REISART identifica gargalos, prioridades e caminhos para uma presença digital mais forte.",
    problem:
      "Muitas empresas fazem ações soltas, sem saber qual canal priorizar, que mensagem usar ou como transformar presença em oportunidade.",
    solution:
      "A REISART analisa presença, posicionamento, conteúdo, tráfego e atendimento para indicar um plano mais claro de crescimento digital.",
    benefits: [
      "Mais clareza sobre prioridades",
      "Direção estratégica antes de investir",
      "Melhor organização da presença digital",
      "Plano de ação mais conectado ao objetivo comercial",
    ],
    indicated: [
      "Empresas que estão perdidas no digital",
      "Negócios que querem crescer com mais método",
      "Marcas que precisam de direção antes da execução",
    ],
  },
} as const;

type ServiceSlug = keyof typeof services;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug as ServiceSlug];

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services[slug as ServiceSlug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="bg-[#07111F] pt-20">
        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <p className="section-kicker">Serviço estratégico</p>
            <h1 className="mt-5 max-w-5xl text-4xl font-black leading-tight text-white md:text-6xl">
              {service.title}
            </h1>
            <p className="premium-copy mt-7 max-w-3xl text-lg leading-8 text-[#AAB7C4]">
              {service.intro}
            </p>
            <div className="mt-12">
              <TrackedLink
                href={whatsappLink}
                eventName="diagnostico_click"
                eventParams={{ source: `servico_${slug}` }}
                events={[
                  {
                    name: "diagnostico_click",
                    params: { source: `servico_${slug}` },
                  },
                  {
                    name: "whatsapp_click",
                    params: { location: `servico_${slug}` },
                  },
                ]}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button inline-flex"
              >
                Solicitar Diagnóstico Estratégico
              </TrackedLink>
            </div>
          </div>
        </section>

        <section className="bg-[#0B1018] px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
            <article className="border border-white/10 bg-[#101720] p-7">
              <p className="section-kicker">Problema do cliente</p>
              <h2 className="mt-4 text-2xl font-black text-white md:text-3xl">
                O que normalmente trava o resultado
              </h2>
              <p className="premium-copy mt-5 text-base leading-8 text-[#AAB7C4]">
                {service.problem}
              </p>
            </article>

            <article className="border border-white/10 bg-[#101720] p-7">
              <p className="section-kicker">Como a Reisart resolve</p>
              <h2 className="mt-4 text-2xl font-black text-white md:text-3xl">
                Estratégia antes da execução
              </h2>
              <p className="premium-copy mt-5 text-base leading-8 text-[#AAB7C4]">
                {service.solution}
              </p>
            </article>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="section-kicker">Benefícios</p>
              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
                O que sua empresa ganha com esse serviço
              </h2>
              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {service.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="border border-white/10 bg-[#101720] p-5 text-[#DDE7F1]"
                  >
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            <aside className="border border-[#D8A84E]/35 bg-[#101720] p-7">
              <h2 className="text-2xl font-black text-white">
                Para quem é indicado
              </h2>
              <div className="mt-6 space-y-4">
                {service.indicated.map((item) => (
                  <p
                    key={item}
                    className="border-b border-white/10 pb-4 text-[#AAB7C4]"
                  >
                    {item}
                  </p>
                ))}
              </div>
              <TrackedLink
                href={whatsappLink}
                eventName="diagnostico_click"
                eventParams={{ source: `servico_${slug}_aside` }}
                events={[
                  {
                    name: "diagnostico_click",
                    params: { source: `servico_${slug}_aside` },
                  },
                  {
                    name: "whatsapp_click",
                    params: { location: `servico_${slug}_aside` },
                  },
                ]}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button mt-8 inline-flex"
              >
                Solicitar Diagnóstico Estratégico
              </TrackedLink>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
