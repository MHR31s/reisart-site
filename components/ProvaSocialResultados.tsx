import Image from "next/image";

const depoimentos = [
  {
    nome: "Cliente Reisart",
    contexto: "Negócio local",
    texto:
      "Placeholder para depoimento real: substitua por uma fala objetiva sobre clareza, atendimento, autoridade ou geração de oportunidades.",
  },
  {
    nome: "Cliente Reisart",
    contexto: "Serviços",
    texto:
      "Placeholder para depoimento real: inclua a principal transformação percebida após organizar presença, conteúdo e campanhas.",
  },
  {
    nome: "Cliente Reisart",
    contexto: "Comércio local",
    texto:
      "Placeholder para depoimento real: use uma frase curta que mostre confiança, profissionalismo ou melhoria no fluxo comercial.",
  },
];

const logos = [
  { name: "Construvip Edificações", logo: "/case-construvip.png" },
  { name: "Robert Auto Elétrica", logo: "/case-robert.png" },
  { name: "Suzana Limpeza Premium", logo: "/case-suzana.png" },
  { name: "Santana na Brasa", logo: "/case-santana.png" },
];

export default function ProvaSocialResultados() {
  return (
    <section className="bg-[#0B1018] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div>
          <p className="section-kicker">Prova social</p>
          <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-5xl">
            Resultados construídos na prática.
          </h2>

          <p className="premium-copy mt-7 max-w-3xl text-lg leading-8 text-[#AAB7C4]">
            Mais do que campanhas, construímos operações digitais que aproximam
            empresas dos seus clientes.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {depoimentos.map((depoimento) => (
            <article
              key={`${depoimento.nome}-${depoimento.contexto}`}
              className="border border-white/10 bg-[#101720] p-7"
            >
              {/* Substituir por depoimento real quando disponível. */}
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

          <div className="border border-dashed border-[#D8A84E]/45 bg-[#101720] p-7">
            {/* Substituir estes espaços por prints reais de resultados quando disponíveis. */}
            <h3 className="text-xl font-black text-white">
              Espaço para prints de resultados
            </h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="flex min-h-44 items-center justify-center border border-white/10 bg-[#0B1018] p-5 text-center text-sm leading-6 text-[#9AA8B6]">
                Print de campanha, mensagens ou crescimento aqui
              </div>
              <div className="flex min-h-44 items-center justify-center border border-white/10 bg-[#0B1018] p-5 text-center text-sm leading-6 text-[#9AA8B6]">
                Print de métricas, agenda ou oportunidades aqui
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
