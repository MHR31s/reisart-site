import Image from "next/image";

const depoimentos = [
  {
    nome: "Construvip Edificações",
    contexto: "Materiais para Construção",
    texto:
      "Precisávamos fortalecer nossa presença digital e transmitir mais profissionalismo. A organização da comunicação trouxe mais credibilidade para a marca e melhorou a percepção dos clientes antes mesmo do primeiro contato.",
  },
  {
    nome: "Robert Auto Elétrica",
    contexto: "Serviços Automotivos",
    texto:
      "Nossa empresa já possuía tradição e qualidade no atendimento. Com uma comunicação mais estratégica, conseguimos apresentar isso de forma mais clara, fortalecendo a confiança de quem procura nossos serviços.",
  },
  {
    nome: "Suzana Limpeza Premium",
    contexto: "Serviços Residenciais Premium",
    texto:
      "O posicionamento premium ajudou nossa marca a transmitir mais valor e profissionalismo. Hoje os clientes entendem melhor a qualidade do serviço antes mesmo de solicitar um orçamento.",
  },
];

const logos = [
  { name: "Construvip Edificações", logo: "/case-construvip.png" },
  { name: "Robert Auto Elétrica", logo: "/case-robert.png" },
  { name: "Suzana Limpeza Premium", logo: "/case-suzana.png" },
  { name: "Santana na Brasa", logo: "/case-santana.png" },
];

const resultImage1 = "";
const resultImage2 = "";

const evidencias = [
  {
    titulo: "Crescimento de presença digital",
    descricao:
      "Alcance, visualizações e evolução de presença através de conteúdo, posicionamento e campanhas.",
    imagem: resultImage1,
    alt: "Resultados de alcance e visualizações",
  },
  {
    titulo: "Geração de oportunidades",
    descricao:
      "Conversas, solicitações de orçamento e contatos gerados através da operação digital.",
    imagem: resultImage2,
    alt: "Conversas e oportunidades geradas",
  },
];

export default function ProvaSocialResultados() {
  return (
    <section className="bg-[#0B1018] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div>
          <p className="section-kicker">Prova social</p>
          <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-5xl">
            Transformações construídas na prática.
          </h2>

          <p className="premium-copy mt-7 max-w-3xl text-lg leading-8 text-[#AAB7C4]">
            Empresas locais que organizaram sua presença digital, fortaleceram
            sua autoridade e passaram a comunicar mais valor para o mercado.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {depoimentos.map((depoimento) => (
            <article
              key={`${depoimento.nome}-${depoimento.contexto}`}
              className="border border-white/10 bg-[#101720] p-7"
            >
              <p className="premium-copy text-base leading-8 text-[#DDE7F1]">
                “{depoimento.texto}”
              </p>
              <div className="mt-7 border-t border-white/10 pt-5">
                <h3 className="font-black text-white">{depoimento.nome}</h3>
                <p className="mt-1 text-sm text-[#9AA8B6]">
                  {depoimento.contexto}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border border-white/10 bg-[#101720] p-7">
            <h3 className="text-xl font-black text-white">
              Clientes e segmentos atendidos
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10">
              {logos.map((client) => (
                <div
                  key={client.name}
                  className="flex min-h-32 items-center justify-center bg-[#0B1018] p-5"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={150}
                    height={80}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="border border-white/10 bg-[#101720] p-7">
            <h3 className="text-xl font-black text-white">
              Evidências da operação
            </h3>
            <p className="premium-copy mt-4 text-sm leading-7 text-[#9AA8B6]">
              Resultados reais, oportunidades geradas e crescimento de presença
              digital construídos através de estratégia e execução.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {evidencias.map((evidencia) => (
                <article
                  key={evidencia.titulo}
                  className="group border border-white/10 bg-[#0B1018] p-4 transition duration-300 hover:border-[#D8A84E]/45 hover:bg-[#111B27]"
                >
                  <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border border-white/10 bg-[#101720]">
                    {evidencia.imagem ? (
                      <Image
                        src={evidencia.imagem}
                        alt={evidencia.alt}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <span className="max-w-40 text-center text-xs font-bold uppercase tracking-[0.24em] text-[#D8A84E]/70">
                        Imagem em breve
                      </span>
                    )}
                  </div>
                  <h4 className="mt-5 text-base font-black text-white">
                    {evidencia.titulo}
                  </h4>
                  <p className="premium-copy mt-3 text-sm leading-6 text-[#9AA8B6]">
                    {evidencia.descricao}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
