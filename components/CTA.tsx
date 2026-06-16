import { ArrowRight, CheckCircle2 } from "lucide-react";

const itens = [
  "Instagram",
  "Google",
  "WhatsApp",
  "Posicionamento",
  "Autoridade",
];

export default function CTA() {
  return (
    <section
      id="contato"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-blue-600/10" />

      <div className="relative max-w-5xl mx-auto">

        <div
          className="
            bg-white/[0.03]
            backdrop-blur-xl
            border
            border-white/10
            rounded-[40px]
            p-10
            md:p-16
            text-center
          "
        >
          <span className="text-sky-400 uppercase tracking-[0.3em] text-sm font-semibold">
            Diagnóstico Estratégico
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold text-white leading-tight">
            Sua empresa está preparada para crescer?
          </h2>

          <p className="mt-8 text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Descubra os principais pontos que podem estar limitando os resultados
            da sua empresa e identifique oportunidades reais de crescimento.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            {itens.map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  rounded-2xl
                  bg-white/[0.04]
                  border
                  border-white/5
                "
              >
                <CheckCircle2
                  size={18}
                  className="text-sky-400"
                />

                <span className="text-slate-200">
                  {item}
                </span>
              </div>
            ))}

          </div>

          <a
            href="https://wa.me/5519991392850"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-3
              mt-14
              px-10
              py-5
              rounded-2xl
              bg-gradient-to-r
              from-sky-500
              to-blue-600
              text-white
              font-semibold
              text-lg
              hover:scale-105
              transition-all
              duration-300
              shadow-lg
              shadow-sky-500/20
            "
          >
            Começar Diagnóstico

            <ArrowRight size={20} />
          </a>

          <p className="mt-6 text-slate-500 text-sm">
            Em breve: diagnóstico automatizado integrado ao WhatsApp.
          </p>

        </div>

      </div>
    </section>
  );
}