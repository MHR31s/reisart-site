import Image from "next/image";

const clients = [
  {
    name: "Construvip",
    segment: "Materiais para construção",
    logo: "/case-construvip.png",
  },
  {
    name: "Robert Auto Elétrica",
    segment: "Serviços automotivos",
    logo: "/case-robert.png",
  },
  {
    name: "Daniel Sepulturas",
    segment: "Serviço especializado",
  },
  {
    name: "Suzana Limpeza Premium",
    segment: "Serviços residenciais premium",
    logo: "/case-suzana.png",
  },
  {
    name: "União Vila Fátima",
    segment: "Projeto institucional",
    logo: "/case-uvf.png",
  },
  {
    name: "Mary Studio",
    segment: "Beleza e estética",
  },
];

export default function TrustedBy() {
  return (
    <section className="bg-[#07111F] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 border-y border-white/10 py-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="section-kicker">Prova social</p>
            <h2 className="mt-4 text-2xl font-black text-white md:text-4xl">
              Empresas que confiam na REISART
            </h2>
          </div>

          <p className="premium-copy max-w-xl text-base leading-7 text-[#9AA8B6]">
            Marcas locais de segmentos diferentes usando posicionamento,
            presença digital e estratégia para comunicar mais valor ao mercado.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client) => (
            <article
              key={client.name}
              className="group min-h-56 border border-white/10 bg-[#101720] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#D8A84E]/50 hover:bg-[#121E2B]"
            >
              <div className="flex h-24 items-center justify-center border border-white/10 bg-[#0B1018] p-4">
                {client.logo ? (
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={170}
                    height={90}
                    className="max-h-16 w-auto object-contain"
                  />
                ) : (
                  <span className="text-center text-xl font-black text-[#F4C76B]">
                    {client.name}
                  </span>
                )}
              </div>

              <p className="mt-6 text-xs font-black uppercase tracking-[0.24em] text-[#54D2C0]">
                {client.segment}
              </p>
              <h3 className="mt-3 text-2xl font-black text-white">
                {client.name}
              </h3>
              <p className="premium-copy mt-4 text-sm leading-7 text-[#9AA8B6]">
                Estrutura preparada para adicionar case completo, evidências e
                detalhes do projeto.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
