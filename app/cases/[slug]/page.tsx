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
    transformation:
      "A comunicação passou a refletir melhor a experiência real da empresa, fortalecendo a confiança de quem procura os serviços.",
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
    transformation:
      "A marcenaria passou a ter conteúdo para divulgar o trabalho e materiais organizados para a produção.",
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
    transformation:
      "A mensagem passou a ser a do serviço de churrasqueiro para eventos, o que ajuda quem busca esse tipo de contratação a entender a oferta.",
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
            <div className="border border-white/10 bg-[#0B1638] p-10">
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
              <h2 className="text-2xl font-extrabold text-white">
                Transformação percebida
              </h2>
              <p className="premium-copy mt-5 text-base leading-8 text-[#AAB7C4]">
                {item.transformation}
              </p>
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
