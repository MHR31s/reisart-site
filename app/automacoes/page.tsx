import type { Metadata } from "next";
import { Bot, CalendarClock, CheckCircle2, MessageSquareText, Network, Sparkles, UserCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TrackedLink from "@/components/TrackedLink";
import MetaPageEvent from "@/components/MetaPageEvent";

const whatsappLink =
  "https://wa.me/5519991392850?text=Ol%C3%A1,%20quero%20solicitar%20um%20diagn%C3%B3stico%20estrat%C3%A9gico%20para%20minha%20empresa.";

export const metadata: Metadata = {
  title: "Automação Inteligente para Empresas",
  description:
    "Automatize processos, ganhe tempo e atenda clientes 24 horas por dia com WhatsApp inteligente, IA, CRM e follow-up automático.",
};

const services = [
  { title: "WhatsApp Inteligente", icon: MessageSquareText },
  { title: "Agendamento Automático", icon: CalendarClock },
  { title: "Follow-up Automático", icon: Sparkles },
  { title: "Integração CRM", icon: Network },
  { title: "Atendimento com IA", icon: Bot },
  { title: "Qualificação de Leads", icon: UserCheck },
];

const benefits = [
  "Mais velocidade",
  "Menos trabalho manual",
  "Mais conversões",
  "Melhor experiência do cliente",
];

export default function AutomacoesPage() {
  return (
    <>
      <MetaPageEvent
        eventName="ViewContent"
        params={{
          content_name: "automacoes",
          content_category: "automacoes",
        }}
      />

      <Header />

      <main className="bg-[#07111F] pt-20">
        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <p className="section-kicker">Automação inteligente</p>
            <h1 className="mt-5 max-w-5xl text-4xl font-black leading-tight text-white md:text-6xl">
              Automação Inteligente para Empresas
            </h1>
            <p className="premium-copy mt-7 max-w-3xl text-lg leading-8 text-[#AAB7C4]">
              Automatize processos, ganhe tempo e atenda clientes 24 horas por
              dia.
            </p>
            <div className="mt-12">
              <TrackedLink
                href={whatsappLink}
                eventName="diagnostico_click"
                eventParams={{ source: "automacoes_page_hero" }}
                events={[
                  {
                    name: "diagnostico_click",
                    params: { source: "automacoes_page_hero" },
                  },
                  {
                    name: "whatsapp_click",
                    params: { location: "automacoes_page_hero" },
                  },
                ]}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button inline-flex"
              >
                Solicitar Diagnóstico
              </TrackedLink>
            </div>
          </div>
        </section>

        <section className="bg-[#0B1018] px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="border border-white/10 bg-[#101720] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D8A84E]/50 hover:bg-[#121E2B]"
                >
                  <div className="flex h-12 w-12 items-center justify-center border border-[#54D2C0]/25 bg-[#54D2C0]/10">
                    <Icon
                      className="text-[#54D2C0]"
                      size={24}
                      strokeWidth={1.7}
                    />
                  </div>
                  <h2 className="mt-8 text-2xl font-black text-white">
                    {service.title}
                  </h2>
                  <p className="premium-copy mt-5 text-base leading-7 text-[#AAB7C4]">
                    Fluxos pensados para responder melhor, organizar o
                    atendimento e reduzir oportunidades perdidas.
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.85fr_1fr]">
            <div>
              <p className="section-kicker">Benefícios</p>
              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
                Atendimento mais rápido, comercial mais organizado.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 border border-white/10 bg-[#101720] p-5 text-[#DDE7F1]"
                >
                  <CheckCircle2 className="text-[#54D2C0]" size={18} />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
