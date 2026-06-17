import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TrackedLink from "@/components/TrackedLink";

const whatsappLink =
  "https://wa.me/5519991392850?text=Ol%C3%A1,%20quero%20solicitar%20um%20diagn%C3%B3stico%20estrat%C3%A9gico%20para%20minha%20empresa.";

const cases = [
  {
    name: "Construvip Edificações",
    slug: "construvip",
    segment: "Materiais para Construção",
    done:
      "Organização da presença digital, comunicação institucional e fortalecimento da percepção profissional da marca.",
    logo: "/case-construvip.png",
    href: "/cases/construvip",
  },
  {
    name: "Robert Auto Elétrica",
    slug: "robert_auto_eletrica",
    segment: "Serviços Automotivos",
    done:
      "Comunicação mais estratégica para apresentar tradição, confiança e qualidade de atendimento ao mercado local.",
    logo: "/case-robert.png",
    href: "/cases/robert-auto-eletrica",
  },
  {
    name: "Suzana Limpeza Premium",
    slug: "suzana_limpeza",
    segment: "Serviços Residenciais Premium",
    done:
      "Posicionamento premium para transmitir valor, profissionalismo e qualidade antes da solicitação de orçamento.",
    logo: "/case-suzana.png",
    href: "/cases/suzana-limpeza-premium",
  },
];

export const metadata: Metadata = {
  title: "Cases e Projetos da REISART",
  description:
    "Conheça projetos da REISART com empresas locais que organizaram presença digital, fortaleceram autoridade e melhoraram sua comunicação.",
};

export default function CasesPage() {
  return (
    <>
      <Header />

      <main className="bg-[#07111F] pt-20">
        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <p className="section-kicker">Cases</p>
            <h1 className="mt-5 max-w-5xl text-4xl font-black leading-tight text-white md:text-6xl">
              Cases e Projetos da REISART
            </h1>
            <p className="premium-copy mt-7 max-w-3xl text-lg leading-8 text-[#AAB7C4]">
              Projetos criados para empresas locais que precisavam organizar
              presença digital, comunicar valor e fortalecer autoridade no
              mercado.
            </p>
          </div>
        </section>

        <section className="bg-[#0B1018] px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
            {cases.map((item) => (
              <article
                key={item.name}
                className="border border-white/10 bg-[#101720] p-7 transition duration-300 hover:border-[#D8A84E]/50 hover:bg-[#111B27]"
              >
                <div className="flex h-24 items-center border-b border-white/10 pb-6">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={170}
                    height={80}
                    className="max-h-20 w-auto object-contain"
                  />
                </div>
                <p className="mt-7 text-xs font-bold uppercase tracking-[0.24em] text-[#54D2C0]">
                  {item.segment}
                </p>
                <h2 className="mt-4 text-2xl font-black text-white">
                  {item.name}
                </h2>
                <p className="premium-copy mt-5 text-base leading-7 text-[#AAB7C4]">
                  {item.done}
                </p>
                <TrackedLink
                  href={item.href}
                  eventName="case_view"
                  eventParams={{ case_name: item.slug }}
                  className="mt-8 inline-flex font-bold text-[#F4C76B] hover:text-white"
                >
                  Ver case
                </TrackedLink>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-7xl">
            <TrackedLink
              href={whatsappLink}
              eventName="diagnostico_click"
              eventParams={{ source: "cases_page" }}
              events={[
                {
                  name: "diagnostico_click",
                  params: { source: "cases_page" },
                },
                {
                  name: "whatsapp_click",
                  params: { location: "cases_page" },
                },
              ]}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-button inline-flex"
            >
              Solicitar Diagnóstico Estratégico
            </TrackedLink>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
