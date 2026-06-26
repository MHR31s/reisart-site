import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const pontos = [
  "Diagnóstico antes da proposta",
  "Estratégia antes do investimento",
  "Execução com critério comercial",
];

export default function AboutMaycon() {
  return (
    <section id="sobre" className="bg-[#0D1520] px-6 py-28">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <FadeIn className="relative order-2 lg:order-1">
          <div className="absolute inset-x-16 bottom-8 top-24 bg-[radial-gradient(circle_at_50%_45%,rgba(244,199,107,0.1),transparent_48%),radial-gradient(circle_at_50%_72%,rgba(84,210,192,0.07),transparent_48%)] blur-3xl" />
          <Image
            src="/maycon-about.png"
            alt="Maycon Reis"
            width={600}
            height={700}
            className="relative z-10 mx-auto h-auto max-h-[640px] w-auto object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
          />
        </FadeIn>

        <FadeIn className="order-1 lg:order-2" delay={100}>
          <p className="section-kicker">Quem está por trás da Reisart</p>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-white md:text-5xl">
            Estratégia antes de execução.{" "}
            <span className="text-[#9AA8B6]">Sempre.</span>
          </h2>

          <div className="mt-8 max-w-2xl space-y-5 text-[1.05rem] leading-[1.85] text-[#B8C8D8]">
            <p className="premium-copy">
              Durante anos observei empresas investirem em marketing sem saber
              exatamente o que estavam construindo.
            </p>
            <p className="premium-copy">
              Produziam conteúdo. Faziam anúncios. Contratavam ferramentas. Mas
              continuavam dependentes da sorte.
            </p>
            <p className="premium-copy">
              A Reisart nasceu para mudar isso. Antes de qualquer campanha,
              entendemos o negócio, o mercado e o comportamento das pessoas que
              precisam comprar.
            </p>
            <p className="premium-copy">
              Porque marketing sem direção gera movimento.{" "}
              <strong className="font-black text-white">Estratégia gera crescimento.</strong>
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden border border-white/[0.07] bg-white/[0.05] sm:grid-cols-3">
            {pontos.map((ponto) => (
              <div key={ponto} className="bg-[#0A1219] p-5">
                <p className="text-sm font-bold leading-6 text-[#F4C76B]">
                  {ponto}
                </p>
              </div>
            ))}
          </div>

          <a href="#cases" className="premium-link mt-10 inline-flex">
            Ver estratégia aplicada
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
