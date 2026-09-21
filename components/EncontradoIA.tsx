import Link from "next/link";
import {
  ArrowRight,
  MapPinned,
  MessagesSquare,
  PanelsTopLeft,
  Search,
  Sparkles,
  Star,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";

const pilares = [
  {
    titulo: "Google Meu Negócio otimizado",
    descricao:
      "Dados corretos, categorias, fotos e avaliações para aparecer nas buscas locais.",
    icon: MapPinned,
  },
  {
    titulo: "Site claro e bem estruturado",
    descricao:
      "Páginas rápidas, com serviços e perguntas frequentes que pessoas e IAs entendem.",
    icon: PanelsTopLeft,
  },
  {
    titulo: "Conteúdo e reputação consistentes",
    descricao:
      "Presença coerente em redes, site e avaliações para sua marca ser reconhecida.",
    icon: MessagesSquare,
  },
];

export default function EncontradoIA() {
  return (
    <section className="relative overflow-hidden bg-[#070B1E] px-6 py-20 md:py-28">
      <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(91,61,245,0.32)_0%,transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(33,68,255,0.28)_0%,transparent_70%)] blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
        <FadeIn className="min-w-0">
          <p className="section-kicker">Busca em nova era</p>
          <h2 className="display mt-5 text-4xl text-white md:text-6xl">
            Seja encontrado onde seu cliente pesquisa:{" "}
            <span className="gradient-text">no Google e no ChatGPT.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#B8C4D6]">
            Cada vez mais pessoas perguntam a assistentes de IA quem contratar.
            Para aparecer nessas respostas, sua empresa precisa de uma presença
            clara e consistente.
          </p>

          <ul className="mt-9 grid gap-5">
            {pilares.map((pilar) => {
              const Icon = pilar.icon;
              return (
                <li key={pilar.titulo} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#3B82FF]/15 ring-1 ring-[#3B82FF]/30">
                    <Icon className="text-[#8DB8FF]" size={22} strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="text-base font-extrabold text-white">
                      {pilar.titulo}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[#9AA8B6]">
                      {pilar.descricao}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

          <Link href="/diagnostico" className="btn-white mt-10">
            Quero ser encontrado
            <ArrowRight size={18} />
          </Link>
          <p className="mt-5 max-w-xl text-xs leading-6 text-[#7C8AA0]">
            Ninguém controla as respostas das IAs. O nosso trabalho é deixar sua
            empresa fácil de encontrar e de citar.
          </p>
        </FadeIn>

        <FadeIn delay={120} className="min-w-0">
          <div className="relative mx-auto w-full max-w-xl">
            <div className="float-slow glass rounded-3xl p-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] md:p-7">
              <div className="flex items-center gap-3 rounded-full bg-white px-5 py-3 text-[#0B1638] shadow-lg">
                <Search size={18} className="shrink-0 text-[#2144FF]" />
                <span className="min-w-0 truncate text-sm font-semibold md:text-base">
                  melhor empresa de serviço perto de mim
                </span>
              </div>

              <div className="mt-5 flex gap-2 text-xs font-bold">
                <span className="rounded-full bg-white/15 px-3 py-1.5 text-white">
                  Google
                </span>
                <span className="rounded-full px-3 py-1.5 text-[#9AA8B6]">
                  ChatGPT
                </span>
                <span className="rounded-full px-3 py-1.5 text-[#9AA8B6]">
                  Maps
                </span>
              </div>

              <div className="mt-5 rounded-2xl bg-white p-5 text-[#0B1638]">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[#6B7A99]">
                  Sua empresa, do jeito certo
                </p>
                <p className="mt-2 text-lg font-extrabold">Nome da sua empresa</p>
                <div className="mt-1 flex items-center gap-1 text-[#F5B301]">
                  {[0, 1, 2, 3, 4].map((n) => (
                    <Star key={n} size={15} fill="currentColor" />
                  ))}
                  <span className="ml-2 text-xs font-semibold text-[#6B7A99]">
                    avaliações reais de clientes
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-[#4A5878]">
                  Descrição clara, serviços listados, fotos, horário e botão de
                  WhatsApp — tudo pronto para o cliente decidir.
                </p>
              </div>

              <div className="mt-4 flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-4">
                <Sparkles size={18} className="mt-0.5 shrink-0 text-[#8DB8FF]" />
                <p className="text-sm leading-6 text-[#C7D2DE]">
                  Quando sua presença é clara, fica mais fácil para o Google e
                  para as IAs entenderem e recomendarem sua empresa.
                </p>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-[#7C8AA0]">
              Exemplo ilustrativo
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
