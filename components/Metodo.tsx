const etapas = [
  {
    numero: "01",
    titulo: "Diagnóstico",
    descricao: "Analisamos sua presença digital.",
  },
  {
    numero: "02",
    titulo: "Estruturação",
    descricao: "Organizamos todos os ativos digitais.",
  },
  {
    numero: "03",
    titulo: "Posicionamento",
    descricao: "Fortalecemos sua marca.",
  },
  {
    numero: "04",
    titulo: "Geração de Leads",
    descricao: "Implementamos campanhas e estratégias.",
  },
  {
    numero: "05",
    titulo: "Escala",
    descricao: "Automações, dados e crescimento contínuo.",
  },
];

export default function Metodo() {
  return (
    <section id="metodo" className="bg-[#101720] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="section-kicker">Método MH360°</p>
          <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-5xl">
            Marketing com visão completa do negócio.
          </h2>
          <p className="premium-copy mt-7 text-lg leading-8 text-[#AAB7C4]">
            Antes de executar posts ou anúncios, a REISART entende o cenário,
            organiza a presença digital e conecta estratégia, tecnologia,
            conteúdo e atendimento para gerar oportunidades reais.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-5">
          {etapas.map((etapa) => (
            <article
              key={etapa.numero}
              className="border border-white/10 bg-[#0B1018] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#D8A84E]/50 hover:bg-[#111B27]"
            >
              <span className="text-sm font-black tracking-[0.28em] text-[#F4C76B]">
                {etapa.numero}
              </span>
              <h3 className="mt-8 text-2xl font-black text-white">
                {etapa.titulo}
              </h3>
              <p className="premium-copy mt-5 text-base leading-7 text-[#AAB7C4]">
                {etapa.descricao}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 border border-[#D8A84E]/35 bg-[#0B1018] p-7">
          <p className="text-2xl font-black text-[#F4C76B] md:text-3xl">
            MH360°
          </p>
          <p className="premium-copy mt-3 text-lg leading-8 text-[#DDE7F1]">
            Marketing com visão completa do negócio.
          </p>
        </div>
      </div>
    </section>
  );
}
