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
  construvip: {
    name: "Construvip Edificações",
    segment: "Materiais para Construção",
    logo: "/case-construvip.png",
    description:
      "Projeto de posicionamento e presença digital para uma empresa local do segmento de materiais para construção.",
    challenge:
      "A marca precisava fortalecer sua presença digital e transmitir mais profissionalismo para aumentar a confiança antes do primeiro contato.",
    strategy:
      "A estratégia foi organizar a comunicação, valorizar a autoridade local e construir uma presença mais consistente para o público da região.",
    deliveries: [
      "Organização da comunicação digital",
      "Fortalecimento da presença institucional",
      "Direcionamento de conteúdo para credibilidade",
      "Apoio ao posicionamento da marca no mercado local",
    ],
    transformation:
      "A empresa passou a comunicar mais profissionalismo e credibilidade, melhorando a percepção dos clientes sobre a marca.",
  },
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
  "suzana-limpeza-premium": {
    name: "Suzana Limpeza Premium",
    segment: "Serviços Residenciais Premium",
    logo: "/case-suzana.png",
    description:
      "Projeto de posicionamento premium para uma marca de serviços residenciais com foco em valor e profissionalismo.",
    challenge:
      "A marca precisava transmitir uma percepção premium em um mercado competitivo e deixar mais clara a qualidade do serviço.",
    strategy:
      "A estratégia foi construir uma comunicação mais sofisticada, orientada a valor, confiança e diferenciação antes do orçamento.",
    deliveries: [
      "Direcionamento de posicionamento premium",
      "Comunicação focada em valor percebido",
      "Organização da apresentação dos serviços",
      "Fortalecimento da autoridade e confiança",
    ],
    transformation:
      "A marca passou a transmitir mais valor e profissionalismo, ajudando os clientes a entenderem melhor a qualidade do serviço antes do contato.",
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

      <main className="bg-[#07111F] pt-20">
        <section className="px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="border border-white/10 bg-[#101720] p-10">
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
              <h1 className="mt-5 text-4xl font-black leading-tight text-white md:text-6xl">
                {item.name}
              </h1>
              <p className="premium-copy mt-7 text-lg leading-8 text-[#AAB7C4]">
                {item.description}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#0B1018] px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
            <article className="border border-white/10 bg-[#101720] p-7">
              <h2 className="text-2xl font-black text-white">
                Desafio inicial
              </h2>
              <p className="premium-copy mt-5 text-base leading-8 text-[#AAB7C4]">
                {item.challenge}
              </p>
            </article>

            <article className="border border-white/10 bg-[#101720] p-7">
              <h2 className="text-2xl font-black text-white">
                Estratégia aplicada
              </h2>
              <p className="premium-copy mt-5 text-base leading-8 text-[#AAB7C4]">
                {item.strategy}
              </p>
            </article>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border border-white/10 bg-[#101720] p-7">
              <h2 className="text-2xl font-black text-white">
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

            <div className="border border-[#D8A84E]/35 bg-[#101720] p-7">
              <h2 className="text-2xl font-black text-white">
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
