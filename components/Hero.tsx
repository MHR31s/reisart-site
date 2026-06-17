import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import TrackedLink from "@/components/TrackedLink";

const metrics = [
  { value: "+20", label: "projetos posicionados" },
  { value: "+6", label: "segmentos atendidos" },
  { value: "360", label: "visão estratégica" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#07111F]">
      <div className="absolute inset-0 premium-grid opacity-50" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B1018] to-transparent" />

      <div className="relative mx-auto grid min-h-[92svh] max-w-7xl items-center gap-12 px-6 pb-14 pt-28 lg:grid-cols-[1.03fr_0.97fr] lg:px-8 lg:pt-32">
        <div className="max-w-3xl">
          <p className="section-kicker">Reisart Marketing Digital</p>

          <h1 className="mt-6 text-4xl font-black leading-[1.02] text-white sm:text-5xl lg:text-6xl">
            Marketing local com cara de marca grande.
          </h1>

          <p className="premium-copy mt-8 max-w-2xl text-lg leading-8 text-[#C7D2DE] md:text-xl">
            Sua empresa pode ser excelente e ainda assim passar despercebida.
          </p>

          <p className="premium-copy mt-4 max-w-2xl text-lg leading-8 text-[#C7D2DE] md:text-xl">
            Ajudamos negócios locais a construírem autoridade, atraírem
            clientes qualificados e venderem com mais previsibilidade.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              href="#contato"
              eventName="diagnostico_click"
              eventParams={{ source: "hero" }}
              className="premium-button"
            >
              Solicitar diagnóstico
              <ArrowUpRight size={20} />
            </TrackedLink>

            <TrackedLink
              href="#cases"
              eventName="case_view"
              eventParams={{ case_name: "home_cases" }}
              className="premium-button-secondary"
            >
              Ver cases reais
            </TrackedLink>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {metrics.map((item) => (
              <div key={item.label} className="border-l border-[#D8A84E]/50 pl-4">
                <strong className="block text-2xl font-black text-[#F4C76B] md:text-3xl">
                  {item.value}
                </strong>
                <span className="mt-1 block text-sm text-[#9AA8B6]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-end justify-center lg:min-h-[720px]">
          <div className="absolute bottom-10 h-[66%] w-[76%] bg-[radial-gradient(circle_at_50%_42%,rgba(244,199,107,0.16),transparent_42%),radial-gradient(circle_at_50%_62%,rgba(84,210,192,0.10),transparent_45%)] blur-2xl" />
          <Image
            src="/logo.png"
            alt=""
            width={980}
            height={980}
            aria-hidden="true"
            className="absolute bottom-24 z-[1] w-[96%] max-w-[680px] opacity-[0.18] mix-blend-screen drop-shadow-[0_0_42px_rgba(244,199,107,0.22)]"
          />
          <div className="absolute right-4 top-32 hidden h-28 w-px bg-gradient-to-b from-transparent via-[#F4C76B]/60 to-transparent lg:block" />
          <div className="absolute left-8 top-28 hidden h-px w-28 bg-gradient-to-r from-transparent via-[#F4C76B]/45 to-transparent lg:block" />

          <Image
            src="/maycon-hero.png"
            alt="Maycon Reis, fundador da Reisart Marketing Digital"
            width={1000}
            height={1400}
            priority
            className="relative z-10 h-auto max-h-[620px] w-auto object-contain drop-shadow-[0_42px_80px_rgba(0,0,0,0.62)] lg:max-h-[760px]"
          />
        </div>
      </div>
    </section>
  );
}
