import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TrackedLink from "@/components/TrackedLink";

const whatsappLink =
  "https://wa.me/5519991392850?text=Ol%C3%A1,%20quero%20solicitar%20um%20diagn%C3%B3stico%20estrat%C3%A9gico%20para%20minha%20empresa.";

const services = [
  {
    title: "Meta Ads",
    description:
      "Campanhas para Instagram e Facebook voltadas a alcance, conversas qualificadas e fortalecimento da presença local.",
    href: "/servicos/meta-ads",
  },
  {
    title: "Google Ads",
    description:
      "Anúncios para capturar pessoas que já estão pesquisando por soluções, serviços ou empresas como a sua.",
    href: "/servicos/google-ads",
  },
  {
    title: "Google Meu Negócio",
    description:
      "Organização da presença local para melhorar a percepção da empresa em pesquisas e mapas.",
    href: "/servicos/google-meu-negocio",
  },
  {
    title: "Criação de Sites",
    description:
      "Sites profissionais para transmitir autoridade, clareza comercial e confiança antes do primeiro contato.",
    href: "/servicos/criacao-de-sites",
  },
  {
    title: "Automação para WhatsApp",
    description:
      "Fluxos de atendimento para reduzir perda de oportunidades e tornar a comunicação mais organizada.",
    href: "/servicos/automacoes",
  },
  {
    title: "Gestão de Redes Sociais",
    description:
      "Conteúdo planejado para posicionar a marca, fortalecer autoridade e sustentar a presença digital.",
    href: "/#servicos",
  },
];

export const metadata: Metadata = {
  title: "Serviços de Marketing Digital para Empresas Locais",
  description:
    "Conheça os serviços da REISART para empresas que desejam fortalecer sua presença digital, gerar mais oportunidades e crescer com estratégia.",
};

export default function ServicosPage() {
  return (
    <>
      <Header />

      <main className="bg-[#07111F] pt-20">
        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <p className="section-kicker">Serviços</p>
            <h1 className="mt-5 max-w-5xl text-4xl font-black leading-tight text-white md:text-6xl">
              Serviços de Marketing Digital para Empresas Locais
            </h1>
            <p className="premium-copy mt-7 max-w-3xl text-lg leading-8 text-[#AAB7C4]">
              Conheça os serviços da REISART para empresas que desejam
              fortalecer sua presença digital, gerar mais oportunidades e
              crescer com estratégia.
            </p>

            <div className="mt-12">
              <TrackedLink
                href={whatsappLink}
                eventName="diagnostico_click"
                eventParams={{ source: "servicos_page" }}
                events={[
                  {
                    name: "diagnostico_click",
                    params: { source: "servicos_page" },
                  },
                  {
                    name: "whatsapp_click",
                    params: { location: "servicos_page" },
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
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="border border-white/10 bg-[#101720] p-7 transition duration-300 hover:border-[#D8A84E]/50 hover:bg-[#111B27]"
              >
                <h2 className="text-2xl font-black text-white">
                  {service.title}
                </h2>
                <p className="premium-copy mt-5 text-base leading-7 text-[#AAB7C4]">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-8 inline-flex font-bold text-[#F4C76B] hover:text-white"
                >
                  Conhecer serviço
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
