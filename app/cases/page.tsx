import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TrackedLink from "@/components/TrackedLink";
import MetaPageEvent from "@/components/MetaPageEvent";

const whatsappLink =
  "https://wa.me/5519991392850?text=Ol%C3%A1,%20quero%20solicitar%20um%20diagn%C3%B3stico%20estrat%C3%A9gico%20para%20minha%20empresa.";

const cases = [
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
    name: "Marcenaria Ponto Alto",
    slug: "marcenaria_ponto_alto",
    segment: "Marcenaria e móveis planejados",
    done:
      "Conteúdo para redes sociais e materiais de apoio à rotina de produção da marcenaria.",
    logo: "/case-pontoalto.png",
    href: "/cases/marcenaria-ponto-alto",
  },
  {
    name: "Santana na Brasa",
    slug: "santana_na_brasa",
    segment: "Churrasqueiro para eventos",
    done:
      "Comunicação para vender o serviço de churrasqueiro contratado para eventos, com orçamento personalizado.",
    logo: "/case-santana.png",
    href: "/cases/santana-na-brasa",
  },
  {
    name: "Fabinho Elétrica & Mecânica",
    slug: "fabinho_eletrica_mecanica",
    segment: "Oficina de elétrica e mecânica",
    done:
      "Visibilidade no Instagram para a oficina. Segundo o próprio Fabinho, a clientela aumentou 30%.",
    logo: "/case-fabinho.png",
    href: "/cases/fabinho-eletrica-mecanica",
  },
  {
    name: "Dra. Adilaine Guastalli",
    slug: "adilaine_guastalli",
    segment: "Odontologia",
    done:
      "Organização do perfil no Google, do Instagram e das informações do consultório, com identidade visual consistente.",
    logo: "/case-adilaine.png",
    href: "/cases/adilaine-guastalli",
    claro: true,
  },
  {
    name: "AS Distribuidora",
    slug: "as_distribuidora",
    segment: "Produtos hospitalares e EPIs",
    done:
      "Catálogo digital com pedido pelo WhatsApp e painel de gestão de vendas.",
    logo: "/case-as-distribuidora.png",
    href: "/cases/as-distribuidora",
    claro: true,
  },
  {
    name: "Evertoon Tattoo",
    slug: "evertoon_tattoo",
    segment: "Tatuagem",
    done:
      "Organização do Instagram e criação da marca pessoal do tatuador.",
    logo: "/case-evertoon.png",
    href: "/cases/evertoon-tattoo",
  },
  {
    name: "Marmoraria Vila Sônia",
    slug: "marmoraria_vila_sonia",
    segment: "Granitos, mármores e quartzitos",
    done:
      "Reestruturação do perfil no Instagram, com nova bio, nome, categoria profissional e contato.",
    logo: "/case-vilasonia.png",
    href: "/cases/marmoraria-vila-sonia",
  },
];

export const metadata: Metadata = {
  title: "Cases e Projetos da REISART",
  alternates: { canonical: "/cases" },
  description:
    "Conheça projetos da REISART com empresas locais que organizaram presença digital, fortaleceram autoridade e melhoraram sua comunicação.",
};

export default function CasesPage() {
  return (
    <>
      <MetaPageEvent
        eventName="ViewContent"
        params={{
          content_name: "portfolio",
          content_category: "cases",
        }}
      />

      <Header />

      <main className="bg-[#05070D] pt-20">
        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <p className="section-kicker">Cases</p>
            <h1 className="mt-5 max-w-5xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Cases e Projetos da REISART
            </h1>
            <p className="premium-copy mt-7 max-w-3xl text-lg leading-8 text-[#AAB7C4]">
              Projetos criados para empresas locais que precisavam organizar
              presença digital, comunicar valor e fortalecer autoridade no
              mercado.
            </p>
          </div>
        </section>

        <section className="bg-[#05070D] px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
            {cases.map((item) => (
              <article
                key={item.name}
                className="border border-white/10 bg-[#0B1638] p-7 transition duration-300 hover:border-[#3B82FF]/50 hover:bg-[#0B1638]"
              >
                <div
                  className={
                    "claro" in item && item.claro
                      ? "flex h-24 items-center justify-center rounded-xl bg-white px-4"
                      : "flex h-24 items-center border-b border-white/10 pb-6"
                  }
                >
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={170}
                    height={80}
                    className="max-h-20 w-auto object-contain"
                  />
                </div>
                <p className="mt-7 text-xs font-bold uppercase tracking-[0.24em] text-[#3B82FF]">
                  {item.segment}
                </p>
                <h2 className="mt-4 text-2xl font-extrabold text-white">
                  {item.name}
                </h2>
                <p className="premium-copy mt-5 text-base leading-7 text-[#AAB7C4]">
                  {item.done}
                </p>
                <TrackedLink
                  href={item.href}
                  eventName="case_view"
                  eventParams={{ case_name: item.slug }}
                  className="mt-8 inline-flex font-bold text-[#3B82FF] hover:text-white"
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
