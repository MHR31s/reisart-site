import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TrackedLink from "@/components/TrackedLink";

const whatsappLink =
  "https://wa.me/5519991392850?text=Ol%C3%A1,%20quero%20solicitar%20um%20diagn%C3%B3stico%20estrat%C3%A9gico%20para%20minha%20empresa.";

export const metadata: Metadata = {
  title: "Diagnóstico Estratégico Digital",
  description:
    "Solicite um diagnóstico estratégico digital para entender presença, posicionamento, canais de aquisição e oportunidades de melhoria da sua empresa.",
};

const analyses = [
  "Presença digital atual da empresa",
  "Clareza da comunicação e posicionamento",
  "Canais de aquisição e oportunidades",
  "Percepção de valor antes do contato",
  "Pontos de melhoria para gerar mais oportunidades",
];

const benefits = [
  "Mais clareza sobre o que está travando sua presença digital",
  "Direcionamento estratégico antes de investir em mídia",
  "Identificação de oportunidades de comunicação e atendimento",
  "Visão mais profissional para planejar os próximos passos",
];

export default function DiagnosticoPage() {
  return (
    <>
      <Header />

      <main className="bg-[#07111F] pt-20">
        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <p className="section-kicker">Diagnóstico</p>
            <h1 className="mt-5 max-w-5xl text-4xl font-black leading-tight text-white md:text-6xl">
              Diagnóstico Estratégico Digital
            </h1>
            <p className="premium-copy mt-7 max-w-3xl text-lg leading-8 text-[#AAB7C4]">
              Uma análise inicial para entender como sua empresa aparece,
              comunica valor e transforma presença digital em oportunidades
              reais de negócio.
            </p>
            <div className="mt-12">
              <TrackedLink
                href={whatsappLink}
                eventName="diagnostico_click"
                eventParams={{ source: "diagnostico_page_hero" }}
                events={[
                  {
                    name: "diagnostico_click",
                    params: { source: "diagnostico_page_hero" },
                  },
                  {
                    name: "whatsapp_click",
                    params: { location: "diagnostico_page_hero" },
                  },
                ]}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button inline-flex"
              >
                Quero meu Diagnóstico Estratégico
              </TrackedLink>
            </div>
          </div>
        </section>

        <section className="bg-[#0B1018] px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
            <article className="border border-white/10 bg-[#101720] p-7">
              <h2 className="text-2xl font-black text-white">
                O que é o diagnóstico
              </h2>
              <p className="premium-copy mt-5 text-base leading-8 text-[#AAB7C4]">
                É uma leitura estratégica da presença digital da empresa, feita
                para identificar gargalos, oportunidades e caminhos mais claros
                antes de executar campanhas, conteúdo ou automações.
              </p>
            </article>

            <article className="border border-white/10 bg-[#101720] p-7">
              <h2 className="text-2xl font-black text-white">
                Para quem é indicado
              </h2>
              <p className="premium-copy mt-5 text-base leading-8 text-[#AAB7C4]">
                Para empresas locais que querem crescer com mais critério,
                melhorar a percepção de valor, organizar sua comunicação e gerar
                oportunidades com mais previsibilidade.
              </p>
            </article>

            <article className="border border-white/10 bg-[#101720] p-7">
              <h2 className="text-2xl font-black text-white">
                Como acontece
              </h2>
              <p className="premium-copy mt-5 text-base leading-8 text-[#AAB7C4]">
                A conversa começa pelo WhatsApp, com entendimento do momento da
                empresa, principais desafios e canais digitais usados hoje.
              </p>
            </article>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
            <div>
              <p className="section-kicker">Análise</p>
              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
                O que será analisado
              </h2>
              <div className="mt-10 grid gap-4">
                {analyses.map((item) => (
                  <div
                    key={item}
                    className="border border-white/10 bg-[#101720] p-5 text-[#DDE7F1]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <aside className="border border-[#D8A84E]/35 bg-[#101720] p-7">
              <h2 className="text-2xl font-black text-white">Benefícios</h2>
              <div className="mt-6 space-y-4">
                {benefits.map((item) => (
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
                eventParams={{ source: "diagnostico_page_benefits" }}
                events={[
                  {
                    name: "diagnostico_click",
                    params: { source: "diagnostico_page_benefits" },
                  },
                  {
                    name: "whatsapp_click",
                    params: { location: "diagnostico_page_benefits" },
                  },
                ]}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button mt-8 inline-flex"
              >
                Quero meu Diagnóstico Estratégico
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
