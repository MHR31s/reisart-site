import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const depoimentos = [
  {
    nome: "Construvip Edificações",
    contexto: "Materiais para Construção",
    logo: "/case-construvip.png",
    texto:
      "Precisávamos fortalecer nossa presença digital e transmitir mais profissionalismo. A organização da comunicação trouxe mais credibilidade para a marca e melhorou a percepção dos clientes antes mesmo do primeiro contato.",
  },
  {
    nome: "Robert Auto Elétrica",
    contexto: "Serviços Automotivos",
    logo: "/case-robert.png",
    texto:
      "Nossa empresa já possuía tradição e qualidade no atendimento. Com uma comunicação mais estratégica, conseguimos apresentar isso de forma mais clara, fortalecendo a confiança de quem procura nossos serviços.",
  },
  {
    nome: "Suzana Limpeza Premium",
    contexto: "Serviços Residenciais Premium",
    logo: "/case-suzana.png",
    texto:
      "O posicionamento premium ajudou nossa marca a transmitir mais valor e profissionalismo. Hoje os clientes entendem melhor a qualidade do serviço antes mesmo de solicitar um orçamento.",
  },
];

export default function ProvaSocialResultados() {
  return (
    <section className="relative overflow-hidden bg-[#0B1638] px-6 py-20 md:py-28">
      <div className="pointer-events-none absolute -right-40 -top-20 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(59,130,255,0.25)_0%,transparent_70%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <FadeIn className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="section-kicker">Quem já passou por aqui</p>
            <h2 className="display mt-5 text-4xl text-white md:text-6xl">
              Empresas reais.{" "}
              <span className="gradient-text">Presença mais forte.</span>
            </h2>
          </div>
          <Link
            href="/cases"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#8DB8FF] hover:text-white"
          >
            Ver todos os cases
            <ArrowRight size={16} />
          </Link>
        </FadeIn>

        <div className="-mx-6 mt-14 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto px-6 pb-4 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0">
          {depoimentos.map((depoimento, i) => (
            <FadeIn key={depoimento.nome} delay={i * 100} className="w-[84vw] max-w-sm shrink-0 snap-center lg:w-auto lg:max-w-none">
              <article className="no-surface flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur">
                <Quote className="text-[#3B82FF]" size={34} strokeWidth={1.5} />
                <p className="mt-5 flex-1 text-base leading-8 text-[#E4ECF7]">
                  {depoimento.texto}
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                  <span className="flex h-14 w-20 shrink-0 items-center justify-center rounded-xl bg-white px-2">
                    <Image
                      src={depoimento.logo}
                      alt=""
                      width={72}
                      height={40}
                      style={{ width: "auto", height: "auto" }}
                      loading="eager"
                      className="max-h-9 max-w-full object-contain"
                    />
                  </span>
                  <div>
                    <h3 className="font-extrabold text-white">
                      {depoimento.nome}
                    </h3>
                    <p className="mt-0.5 text-sm text-[#9AA8B6]">
                      {depoimento.contexto}
                    </p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
