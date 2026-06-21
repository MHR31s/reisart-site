import Link from "next/link";
import { ArrowUpRight, Bot, Globe2, Megaphone, Search, Share2 } from "lucide-react";

const objetivos = [
  {
    titulo: "Quero aparecer mais",
    solucoes: ["Google Meu Negócio", "Redes Sociais"],
    href: "/servicos/google-meu-negocio",
    icon: Search,
  },
  {
    titulo: "Quero mais clientes",
    solucoes: ["Tráfego Pago", "Landing Pages"],
    href: "/servicos/trafego-pago",
    icon: Megaphone,
  },
  {
    titulo: "Quero profissionalizar minha empresa",
    solucoes: ["Site", "Identidade Visual"],
    href: "/servicos/criacao-de-sites",
    icon: Globe2,
  },
  {
    titulo: "Quero automatizar meu atendimento",
    solucoes: ["Automações", "WhatsApp Inteligente"],
    href: "/automacoes",
    icon: Bot,
  },
];

export default function FunilObjetivo() {
  return (
    <section className="bg-[#07111F] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="section-kicker">Funil de decisão</p>
          <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-5xl">
            Qual é o seu objetivo?
          </h2>
          <p className="premium-copy mt-7 text-lg leading-8 text-[#AAB7C4]">
            Escolha o caminho mais próximo do momento da sua empresa e veja a
            solução mais indicada para transformar presença digital em
            oportunidade.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {objetivos.map((objetivo) => {
            const Icon = objetivo.icon;

            return (
              <Link
                key={objetivo.titulo}
                href={objetivo.href}
                className="group border border-white/10 bg-[#101720] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D8A84E]/50 hover:bg-[#121E2B]"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-12 w-12 items-center justify-center border border-[#54D2C0]/25 bg-[#54D2C0]/10">
                    <Icon
                      className="text-[#54D2C0]"
                      size={24}
                      strokeWidth={1.7}
                    />
                  </div>
                  <ArrowUpRight
                    className="text-[#F4C76B] opacity-70 transition group-hover:opacity-100"
                    size={22}
                  />
                </div>

                <h3 className="mt-8 text-2xl font-black text-white">
                  {objetivo.titulo}
                </h3>

                <div className="mt-6 grid gap-3">
                  {objetivo.solucoes.map((solucao) => (
                    <p
                      key={solucao}
                      className="flex items-center gap-3 text-base font-bold text-[#DDE7F1]"
                    >
                      <Share2 size={16} className="text-[#F4C76B]" />
                      {solucao}
                    </p>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
