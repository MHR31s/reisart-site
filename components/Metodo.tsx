import FadeIn from "@/components/FadeIn";

const etapas = [
  {
    numero: "01",
    titulo: "Diagnóstico",
    descricao: "Analisamos sua presença digital e mapeamos o cenário atual.",
  },
  {
    numero: "02",
    titulo: "Estruturação",
    descricao: "Organizamos todos os ativos digitais com clareza estratégica.",
  },
  {
    numero: "03",
    titulo: "Posicionamento",
    descricao: "Fortalecemos sua marca e comunicamos valor com precisão.",
  },
  {
    numero: "04",
    titulo: "Geração de Leads",
    descricao: "Implementamos campanhas para gerar oportunidades qualificadas.",
  },
  {
    numero: "05",
    titulo: "Escala",
    descricao: "Automações, dados e crescimento contínuo e previsível.",
  },
];

export default function Metodo() {
  return (
    <section id="metodo" className="bg-[#0D1520] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="max-w-4xl">
            <p className="section-kicker">Método MH360°</p>
            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-white md:text-5xl">
              Marketing com visão completa do negócio.
            </h2>
            <p className="premium-copy mt-7 max-w-2xl text-lg leading-[1.85] text-[#8A9AAA]">
              Antes de executar posts ou anúncios, a REISART entende o cenário,
              organiza a presença digital e conecta estratégia, tecnologia,
              conteúdo e atendimento para gerar oportunidades reais.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-4 lg:grid-cols-5">
          {etapas.map((etapa, i) => (
            <FadeIn key={etapa.numero} delay={i * 90}>
              <article className="group relative flex h-full flex-col border border-white/[0.07] bg-[#0A1219] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#D8A84E]/40 hover:bg-[#0F1C28] hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
                {/* Número */}
                <span className="font-black tracking-[0.3em] text-[#F4C76B]" style={{ fontSize: "0.7rem" }}>
                  {etapa.numero}
                </span>

                {/* Linha de progresso */}
                <div className="mt-4 h-px w-full bg-white/[0.06]">
                  <div
                    className="h-full bg-gradient-to-r from-[#F4C76B]/60 to-[#D8A84E]/20"
                    style={{ width: `${(i + 1) * 20}%` }}
                  />
                </div>

                <h3 className="mt-7 text-xl font-black tracking-tight text-white">
                  {etapa.titulo}
                </h3>
                <p className="premium-copy mt-4 text-sm leading-7 text-[#7A8E9E]">
                  {etapa.descricao}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={100}>
          <div className="mt-8 border border-[#D8A84E]/20 bg-[#090F17] p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-5">
              <p className="text-3xl font-black tracking-tight text-[#F4C76B] md:text-4xl">
                MH360°
              </p>
              <p className="premium-copy text-base leading-7 text-[#C7D2DE]">
                Marketing Humano com visão completa do negócio — estratégia, conteúdo, tráfego e atendimento integrados.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
