import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import DiagnosticoForm from "@/components/DiagnosticoForm";
import MetaPageEvent from "@/components/MetaPageEvent";

export const metadata: Metadata = {
  title: "Diagnóstico Estratégico Digital",
  description:
    "Receba uma análise estratégica da presença digital da sua empresa e descubra oportunidades em Instagram, Google, site, SEO, anúncios, WhatsApp e automações.",
};

const checklist = [
  "Instagram",
  "Google Meu Negócio",
  "Site",
  "SEO",
  "Anúncios",
  "WhatsApp",
  "Automações",
  "Concorrência",
];

const benefits = [
  "Entender gargalos que reduzem sua visibilidade",
  "Identificar oportunidades reais de geração de clientes",
  "Priorizar ações antes de investir em marketing",
  "Ter mais clareza sobre o próximo passo digital",
];

export default function DiagnosticoPage() {
  return (
    <>
      <MetaPageEvent
        eventName="ViewContent"
        params={{
          content_name: "diagnostico",
          content_category: "diagnostico",
        }}
      />

      <Header />

      <main className="bg-[#07111F] pt-20">
        <section className="px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="section-kicker">Diagnóstico de presença digital</p>
              <h1 className="mt-5 text-4xl font-black leading-tight text-white md:text-6xl">
                Descubra o que está impedindo sua empresa de crescer no digital.
              </h1>
              <p className="premium-copy mt-7 text-lg leading-8 text-[#AAB7C4]">
                Receba uma análise estratégica da sua presença digital.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {checklist.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border border-white/10 bg-[#101720] p-4 text-[#DDE7F1]"
                  >
                    <CheckCircle2 className="text-[#54D2C0]" size={18} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <DiagnosticoForm />
          </div>
        </section>

        <section className="bg-[#0B1018] px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
            <article className="border border-white/10 bg-[#101720] p-7">
              <h2 className="text-2xl font-black text-white">
                Para quem é indicado
              </h2>
              <p className="premium-copy mt-5 text-base leading-8 text-[#AAB7C4]">
                Para empresas locais que querem vender mais, melhorar a imagem
                digital, aparecer melhor no Google, organizar o atendimento e
                transformar presença em oportunidade.
              </p>
            </article>

            <article className="border border-white/10 bg-[#101720] p-7">
              <h2 className="text-2xl font-black text-white">
                Benefícios da análise
              </h2>
              <div className="mt-6 grid gap-4">
                {benefits.map((benefit) => (
                  <p
                    key={benefit}
                    className="flex gap-3 border-b border-white/10 pb-4 text-[#AAB7C4]"
                  >
                    <CheckCircle2
                      className="mt-1 shrink-0 text-[#54D2C0]"
                      size={16}
                    />
                    {benefit}
                  </p>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
