import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutMaycon from "@/components/AboutMaycon";
import PorQueReisart from "@/components/PorQueReisart";
import SecaoDor from "@/components/SecaoDor";
import Servicos from "@/components/Servicos";
import Planos from "@/components/Planos";
import TrustedBy from "@/components/TrustedBy";
import ProvaSocialResultados from "@/components/ProvaSocialResultados";
import Metodo from "@/components/Metodo";
import Cases from "@/components/Cases";
import FAQ, { faqJsonLd } from "@/components/FAQ";
import Diagnostico from "@/components/Diagnostico";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Reisart Agência de Marketing Digital",
  url: "https://www.reisartmkd.com.br",
  logo: "https://www.reisartmkd.com.br/logo.png",
  image: "https://www.reisartmkd.com.br/og-image.jpg",
  description:
    "A Reisart ajuda empresas locais a gerar mais visibilidade, autoridade e oportunidades comerciais através de marketing digital, tráfego pago, sites, Google Meu Negócio e automações.",
  telephone: "+55 19 99139-2850",
  areaServed: {
    "@type": "City",
    name: "Piracicaba",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Piracicaba",
      addressRegion: "SP",
      addressCountry: "BR",
    },
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Piracicaba",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  sameAs: ["https://www.instagram.com/reisartmkd/"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55 19 99139-2850",
    contactType: "customer service",
    areaServed: "BR",
    availableLanguage: "pt-BR",
  },
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Meta Ads para empresas locais",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Google Ads para empresas locais",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Google Meu Negócio",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Criação de sites profissionais",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Automações para WhatsApp",
      },
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Reisart Agência de Marketing Digital",
  url: "https://www.reisartmkd.com.br",
  inLanguage: "pt-BR",
  publisher: {
    "@type": "Organization",
    name: "Reisart Agência de Marketing Digital",
    url: "https://www.reisartmkd.com.br",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([businessJsonLd, websiteJsonLd, faqJsonLd]),
        }}
      />

      <Header />

      <main className="overflow-x-hidden bg-[#07111F]">
        <Hero />

        <AboutMaycon />

        <PorQueReisart />

        <SecaoDor />

        <Servicos />

        <Planos />

        <ProvaSocialResultados />

        <TrustedBy />

        <Metodo />

        <Cases />

        <FAQ />

        <Diagnostico />

        <CTAFinal />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}
