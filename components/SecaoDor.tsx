import { SearchX, ShieldAlert, TimerOff } from "lucide-react";

const dores = [
  {
    titulo: "Não encontra você",
    descricao: "Quando pesquisa, sua empresa não aparece.",
    icon: SearchX,
  },
  {
    titulo: "Não confia em você",
    descricao: "A presença digital não transmite autoridade.",
    icon: ShieldAlert,
  },
  {
    titulo: "Não vê motivo para agir",
    descricao: "A comunicação não gera urgência nem clareza.",
    icon: TimerOff,
  },
];

export default function SecaoDor() {
  return (
    <section className="bg-[#101720] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div>
          <p className="section-kicker">Presença, percepção e conversão</p>
          <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-5xl">
            Sua empresa pode estar perdendo vendas sem perceber.
          </h2>
          <p className="premium-copy mt-6 max-w-3xl text-xl leading-8 text-[#C7D2DE]">
            O cliente passa por três decisões antes de entrar em contato.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
          {dores.map((dor) => {
            const Icon = dor.icon;

            return (
              <article key={dor.titulo} className="bg-[#0B1018] p-7">
                <Icon className="text-[#F4C76B]" size={30} strokeWidth={1.8} />
                <h3 className="mt-7 text-xl font-black text-white md:text-2xl">
                  {dor.titulo}
                </h3>
                <p className="premium-copy mt-4 text-base leading-7 text-[#AAB7C4]">
                  {dor.descricao}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 border-l border-[#D8A84E]/60 pl-6">
          <p className="premium-copy max-w-3xl text-lg leading-8 text-[#DDE7F1]">
            É nesse espaço que concorrentes ganham mercado. A Reisart trabalha
            exatamente nesses três pontos: presença, percepção e conversão.
          </p>
        </div>
      </div>
    </section>
  );
}
