const etapas = [
  {
    numero: "01",
    titulo: "Diagnóstico",
    descricao:
      "Mapeamos posicionamento, oferta, canais, concorrência e gargalos que reduzem a conversão.",
  },
  {
    numero: "02",
    titulo: "Arquitetura",
    descricao:
      "Definimos narrativa, prioridades, funil e indicadores para a operação não depender de achismo.",
  },
  {
    numero: "03",
    titulo: "Execução",
    descricao:
      "Colocamos conteúdo, campanhas, site e automações para trabalhar com a mesma direção.",
  },
  {
    numero: "04",
    titulo: "Otimização",
    descricao:
      "Acompanhamos os sinais do mercado para ajustar rota, ampliar o que funciona e proteger investimento.",
  },
];

export default function Metodo() {
  return (
    <section id="metodo" className="bg-[#101720] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div>
          <p className="section-kicker">Método MH360</p>
          <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-5xl">
            Crescimento fica mais previsível quando o plano vem antes do post.
          </h2>
        </div>

        <div className="mt-16 border-y border-white/10">
          {etapas.map((etapa) => (
            <div
              key={etapa.numero}
              className="grid gap-6 border-b border-white/10 py-8 last:border-b-0 md:grid-cols-[150px_0.7fr_1fr] md:items-start"
            >
              <span className="text-sm font-bold tracking-[0.28em] text-[#F4C76B]">
                {etapa.numero}
              </span>

              <h3 className="text-2xl font-black text-white md:text-3xl">
                {etapa.titulo}
              </h3>

              <p className="premium-copy text-lg leading-8 text-[#AAB7C4]">
                {etapa.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
