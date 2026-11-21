import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TrackedLink from "@/components/TrackedLink";

const whatsappLink =
  "https://wa.me/5519991392850?text=Ol%C3%A1,%20quero%20solicitar%20um%20diagn%C3%B3stico%20estrat%C3%A9gico%20para%20minha%20empresa.";

const cases = {
  "robert-auto-eletrica": {
    name: "Robert Auto Elétrica",
    segment: "Serviços Automotivos",
    logo: "/case-robert.png",
    description:
      "Projeto de comunicação estratégica para uma empresa automotiva com tradição e atendimento reconhecido.",
    challenge:
      "A empresa já possuía qualidade e tradição, mas precisava apresentar esses atributos de forma mais clara no ambiente digital.",
    strategy:
      "A REISART trabalhou uma comunicação voltada à confiança, autoridade local e clareza na apresentação dos serviços.",
    deliveries: [
      "Posicionamento da marca no digital",
      "Comunicação orientada à confiança",
      "Organização da presença local",
      "Apoio à percepção de qualidade no atendimento",
    ],
  },
  "fabinho-eletrica-mecanica": {
    name: "Fabinho Elétrica & Mecânica",
    segment: "Oficina de elétrica e mecânica",
    logo: "/case-fabinho.png",
    description:
      "Projeto de anúncios e conteúdo para o Instagram de uma oficina de elétrica e mecânica.",
    challenge:
      "Dar visibilidade à loja e atrair mais clientes pelo Instagram.",
    strategy:
      "A estratégia foi criar anúncios e conteúdo pensados para a rotina da oficina, com mensagem clara e foco em levar a pessoa ao contato.",
    deliveries: [
      "Anúncios para Instagram",
      "Conteúdo para redes sociais",
      "Comunicação alinhada ao dia a dia da oficina",
      "Acompanhamento direto com o fundador da Reisart",
    ],
    transformation:
      "Em depoimento em áudio, o próprio Fabinho relata que a clientela aumentou 30% e que a demanda ficou grande demais para dar conta. Número informado pelo cliente.",
  },
  "marcenaria-ponto-alto": {
    name: "Marcenaria Ponto Alto",
    segment: "Marcenaria e móveis planejados",
    logo: "/case-pontoalto.png",
    description:
      "Conteúdo para redes sociais e apoio à rotina de produção de uma marcenaria de móveis planejados.",
    challenge:
      "A marcenaria precisava divulgar os móveis nas redes sociais e organizar a rotina de produção do dia a dia.",
    strategy:
      "A Reisart combinou conteúdo para as redes com materiais de apoio à produção, mantendo tudo alinhado à identidade da marca.",
    deliveries: [
      "Conteúdo para redes sociais",
      "Desenhos técnicos e plantas de móveis",
      "Lista de corte e materiais",
      "Cronograma de controle de produção",
    ],
  },
  "santana-na-brasa": {
    name: "Santana na Brasa",
    segment: "Churrasqueiro para eventos",
    logo: "/case-santana.png",
    description:
      "Comunicação para um churrasqueiro contratado para eventos, voltada a gerar pedidos de orçamento.",
    challenge:
      "Deixar claro que o Santana é um churrasqueiro contratado para eventos, e não um restaurante.",
    strategy:
      "A comunicação foi construída para vender o serviço contratado, com orçamento personalizado e os tipos de evento atendidos.",
    deliveries: [
      "Conteúdo para redes sociais",
      "Comunicação focada em orçamento personalizado",
      "Apresentação dos tipos de evento atendidos",
      "Identidade visual aplicada aos materiais",
    ],
  },
  "adilaine-guastalli": {
    name: "Dra. Adilaine Guastalli",
    segment: "Odontologia",
    logo: "/case-adilaine.png",
    claro: true,
    description:
      "Organização da presença digital de uma cirurgiã-dentista: Google, Instagram e informações do consultório.",
    challenge:
      "Dar sentido e consistência ao que a Dra. Adilaine já tinha, antes de pensar em anúncios.",
    strategy:
      "A Reisart começou organizando o perfil no Google, o Instagram e as informações do consultório, com a identidade visual dela como referência para todos os canais.",
    deliveries: [
      "Organização do perfil da empresa no Google",
      "Organização do Instagram",
      "Artes e vídeos alinhados à identidade visual",
      "Nome profissional padronizado em todos os canais",
    ],
  },
  "as-distribuidora": {
    name: "AS Distribuidora",
    segment: "Produtos hospitalares e EPIs",
    logo: "/case-as-distribuidora.png",
    claro: true,
    description:
      "Catálogo digital com pedido pelo WhatsApp e painel de gestão de vendas para uma distribuidora de produtos hospitalares e EPIs.",
    challenge:
      "Vender mais pelo WhatsApp, site e Instagram, com uma operação comercial mais organizada.",
    strategy:
      "A Reisart criou um catálogo digital com pedido pelo WhatsApp e um painel para acompanhar as vendas.",
    deliveries: [
      "Catálogo digital com pedido pelo WhatsApp",
      "Painel de gestão de vendas",
      "Organização do fluxo de pedidos",
      "Apoio comercial pelo WhatsApp",
    ],
  },
  "evertoon-tattoo": {
    name: "Evertoon Tattoo",
    segment: "Tatuagem",
    logo: "/case-evertoon.png",
    description:
      "Organização do Instagram e criação da marca pessoal de um tatuador premiado.",
    challenge:
      "Deixar claro quem é o Evertoon e quais são os trabalhos dele, separando a marca pessoal da marca do estúdio.",
    strategy:
      "A Reisart organizou o Instagram e criou a marca pessoal Evertoon, partindo da assinatura real do tatuador.",
    deliveries: [
      "Organização do Instagram e dos posts",
      "Marca pessoal Evertoon",
      "Reels e stories de eventos e trabalhos",
      "Linguagem visual própria para os vídeos",
    ],
  },
  "marmoraria-vila-sonia": {
    name: "Marmoraria Vila Sônia",
    segment: "Granitos, mármores e quartzitos",
    logo: "/case-vilasonia.png",
    description:
      "Reestruturação do perfil no Instagram de uma marmoraria de Piracicaba.",
    challenge:
      "Deixar o perfil da marmoraria mais claro e profissional para quem chega pelo Instagram.",
    strategy:
      "A Reisart reestruturou a bio, o nome, a categoria profissional e o contato do perfil.",
    deliveries: [
      "Nova bio",
      "Nome do perfil com a cidade",
      "Categoria profissional",
      "Telefone de contato igual ao WhatsApp da bio",
    ],
  },
} as const;

type CaseSlug = keyof typeof cases;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(cases).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = cases[slug as CaseSlug];

  if (!item) {
    return {};
  }

  return {
    title: `${item.name} | Case REISART`,
    description: item.description,
    alternates: { canonical: `/cases/${slug}` },
  };
}

export default async function CasePage({ params }: PageProps) {
  const { slug } = await params;
  const item = cases[slug as CaseSlug];

  if (!item) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="bg-[#05070D] pt-20">
        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div
              className={[
                "border border-white/10 p-10",
                "claro" in item && item.claro ? "bg-white" : "bg-[#0B1638]",
              ].join(" ")}
            >
              <Image
                src={item.logo}
                alt={item.name}
                width={260}
                height={140}
                className="mx-auto max-h-28 w-auto object-contain"
              />
            </div>
            <div>
              <p className="section-kicker">{item.segment}</p>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white md:text-6xl">
                {item.name}
              </h1>
              <p className="premium-copy mt-7 text-lg leading-8 text-[#AAB7C4]">
                {item.description}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#05070D] px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-[#0B1638] p-7">
              <h2 className="text-2xl font-extrabold text-white">
                Desafio inicial
              </h2>
              <p className="premium-copy mt-5 text-base leading-8 text-[#AAB7C4]">
                {item.challenge}
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-[#0B1638] p-7">
              <h2 className="text-2xl font-extrabold text-white">
                Estratégia aplicada
              </h2>
              <p className="premium-copy mt-5 text-base leading-8 text-[#AAB7C4]">
                {item.strategy}
              </p>
            </article>
          </div>
        </section>

        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-2xl border border-white/10 bg-[#0B1638] p-7">
              <h2 className="text-2xl font-extrabold text-white">
                Entregas realizadas
              </h2>
              <div className="mt-6 space-y-4">
                {item.deliveries.map((delivery) => (
                  <p
                    key={delivery}
                    className="border-b border-white/10 pb-4 text-[#AAB7C4]"
                  >
                    {delivery}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[#3B82FF]/35 bg-[#0B1638] p-7">
              {"transformation" in item ? (
                <>
                  <h2 className="text-2xl font-extrabold text-white">
                    Relato do cliente
                  </h2>
                  <p className="premium-copy mt-5 text-base leading-8 text-[#AAB7C4]">
                    {item.transformation}
                  </p>
                </>
              ) : (
                <h2 className="text-2xl font-extrabold text-white">
                  Quer conversar sobre o seu negócio?
                </h2>
              )}
              <TrackedLink
                href={whatsappLink}
                eventName="diagnostico_click"
                eventParams={{ source: `case_${slug}` }}
                events={[
                  {
                    name: "diagnostico_click",
                    params: { source: `case_${slug}` },
                  },
                  {
                    name: "whatsapp_click",
                    params: { location: `case_${slug}` },
                  },
                ]}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button mt-8 inline-flex"
              >
                Solicitar Diagnóstico Estratégico
              </TrackedLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
