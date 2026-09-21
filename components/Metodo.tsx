import { Compass, Layers, Megaphone, Rocket, Target, type LucideIcon } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const etapas: {
  numero: string;
  titulo: string;
  descricao: string;
  icon: LucideIcon;
}[] = [
  {
    numero: "01",
    titulo: "Diagnóstico",
    descricao: "Analisamos sua presença digital e mapeamos o cenário atual.",
    icon: Compass,
  },
  {
    numero: "02",
    titulo: "Estruturação",
    descricao: "Organizamos todos os ativos digitais com clareza estratégica.",
    icon: Layers,
  },
  {
    numero: "03",
    titulo: "Posicionamento",
    descricao: "Fortalecemos sua marca e comunicamos valor com precisão.",
    icon: Target,
  },
  {
    numero: "04",
    titulo: "Geração de Leads",
    descricao: "Implementamos campanhas para gerar oportunidades qualificadas.",
    icon: Megaphone,
  },
  {
    numero: "05",
    titulo: "Escala",
    descricao: "Automações, dados e crescimento contínuo e previsível.",
    icon: Rocket,
  },
];

export default function Metodo() {
  return (
    <section
      id="metodo"
      className="relative overflow-hidden bg-[#05070D] px-6 py-20 md:py-28"
    >
      <div className="premium-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(33,68,255,0.25)_0%,transparent_70%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="section-kicker justify-center">Método MH360°</p>
          <h2 className="display mt-5 text-4xl text-white md:text-6xl">
            Marketing com visão completa do{" "}
            <span className="gradient-text">negócio.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#B8C4D6]">
            Antes de executar posts ou anúncios, a Reisart entende o cenário,
            organiza a presença digital e conecta estratégia, tecnologia,
            conteúdo e atendimento.
          </p>
        </FadeIn>

        <div className="relative mt-20">
          {/* linha horizontal (desktop) */}
          <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-[linear-gradient(90deg,transparent,#3B82FF_15%,#5B3DF5_85%,transparent)] shadow-[0_0_20px_rgba(59,130,255,0.8)] lg:block" />
          {/* linha vertical (mobile) */}
          <div className="absolute bottom-6 left-8 top-6 w-px bg-[linear-gradient(180deg,#3B82FF,#5B3DF5)] shadow-[0_0_16px_rgba(59,130,255,0.7)] lg:hidden" />

          <ol className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {etapas.map((etapa, i) => {
              const Icon = etapa.icon;
              return (
                <li key={etapa.numero}>
                  <FadeIn delay={i * 110}>
                    <div className="flex gap-6 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
                      <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#3B82FF]/50 bg-[#0B1638] shadow-[0_0_30px_rgba(59,130,255,0.35)]">
                        <Icon className="text-[#8DB8FF]" size={26} strokeWidth={1.7} />
                      </span>
                      <div className="lg:mt-7">
                        <span className="text-sm font-extrabold tracking-[0.3em] text-[#5B8CFF]">
                          {etapa.numero}
                        </span>
                        <h3 className="mt-2 text-xl font-extrabold text-white">
                          {etapa.titulo}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-[#9AA8B6]">
                          {etapa.descricao}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </li>
              );
            })}
          </ol>
        </div>

        <FadeIn delay={100}>
          <div className="glass mx-auto mt-20 flex max-w-4xl flex-col items-center gap-3 rounded-3xl px-8 py-8 text-center md:flex-row md:gap-8 md:text-left">
            <p className="display gradient-text shrink-0 text-5xl">MH360°</p>
            <p className="text-base leading-7 text-[#C7D2DE]">
              Marketing Humano com visão completa do negócio: estratégia,
              conteúdo, tráfego e atendimento integrados.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
