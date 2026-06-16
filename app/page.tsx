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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
