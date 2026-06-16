import Image from "next/image";

const cases = [
  {
    cliente: "Construvip Edificações",
    logo: "/case-construvip.png",
    segmento: "Construção e reformas",
    desafio: "Organizar a comunicação e fortalecer a presença digital.",
    resultado: "Imagem mais profissional e geração contínua de oportunidades.",
  },
  {
    cliente: "Robert Auto Elétrica",
    logo: "/case-robert.png",
    segmento: "Serviços automotivos",
    desafio: "Aumentar percepção de confiança e autoridade local.",
    resultado: "Marca fortalecida e maior proximidade com clientes.",
  },
  {
    cliente: "Suzana Limpeza Premium",
    logo: "/case-suzana.png",
    segmento: "Serviço premium",
    desafio: "Posicionar uma oferta de alto valor em mercado competitivo.",
    resultado: "Percepção premium mais clara e comunicação sofisticada.",
  },
];

export default function Cases() {
  return (
    <section id="cases" className="bg-[#0B1018] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div>
          <p className="section-kicker">Cases reais</p>
          <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-5xl">
            Marcas locais tratadas com critério de marca grande.
          </h2>

          <p className="premium-copy mt-7 max-w-3xl text-lg leading-8 text-[#AAB7C4]">
            A proposta não é apenas publicar. É organizar percepção, criar
            confiança e posicionar empresas para disputarem mercado com mais
            maturidade.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {cases.map((item) => (
            <article
              key={item.cliente}
              className="border border-white/10 bg-[#101720] p-7 transition-colors hover:border-[#D8A84E]/50"
            >
              <div className="flex h-24 items-center border-b border-white/10 pb-6">
                <Image
                  src={item.logo}
                  alt={item.cliente}
                  width={170}
                  height={80}
                  className="max-h-20 w-auto object-contain"
                />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.24em] text-[#54D2C0]">
                {item.segmento}
              </p>

              <h3 className="mt-4 text-xl font-black text-white md:text-2xl">
                {item.cliente}
              </h3>

              <div className="mt-7 space-y-6 text-sm leading-7 text-[#AAB7C4]">
                <p>
                  <span className="block font-bold uppercase tracking-[0.18em] text-[#F4C76B]">
                    Desafio
                  </span>
                  {item.desafio}
                </p>

                <p>
                  <span className="block font-bold uppercase tracking-[0.18em] text-[#F4C76B]">
                    Resultado
                  </span>
                  {item.resultado}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
