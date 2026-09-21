import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const marcas = [
  { name: "Robert Auto Elétrica", logo: "/case-robert.png" },
  { name: "Marcenaria Ponto Alto", logo: "/case-pontoalto.png" },
  { name: "Santana na Brasa", logo: "/case-santana.png" },
  { name: "União Vila Fátima", logo: "/case-uvf.png" },
  { name: "Suzana Limpeza Premium", logo: "/case-suzana.png" },
  { name: "Construvip", logo: "/case-construvip.png" },
];

const numeros = [
  { valor: "+50", rotulo: "projetos entregues" },
  { valor: "5", rotulo: "fases no método MH360°" },
  { valor: "1:1", rotulo: "atendimento direto com o fundador" },
];

function Fila({ ocultar = false }: { ocultar?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center gap-5 pr-5" aria-hidden={ocultar}>
      {marcas.map((marca) => (
        <li
          key={marca.name}
          className="flex h-24 w-52 items-center justify-center rounded-2xl border border-[#DCE3F5] bg-white px-6 shadow-[0_6px_20px_rgba(33,68,255,0.06)]"
        >
          <Image
            src={marca.logo}
            alt={ocultar ? "" : marca.name}
            width={150}
            height={75}
            style={{ width: "auto", height: "auto" }}
            className="max-h-14 max-w-full object-contain"
          />
        </li>
      ))}
    </ul>
  );
}

export default function LogoStrip() {
  return (
    <section className="bg-[#F3F6FF] px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="text-center text-sm font-bold uppercase tracking-[0.16em] text-[#4A5878]">
            Marcas locais que já passaram pela Reisart
          </p>
        </FadeIn>
      </div>

      <div className="fade-edges mt-9 overflow-hidden">
        <div className="marquee">
          <Fila />
          <Fila ocultar />
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-5xl">
        <dl className="grid divide-y divide-[#DCE3F5] overflow-hidden rounded-3xl border border-[#DCE3F5] bg-white shadow-[0_20px_60px_rgba(33,68,255,0.08)] md:grid-cols-3 md:divide-x md:divide-y-0">
          {numeros.map((n) => (
            <div key={n.rotulo} className="px-8 py-9 text-center">
              <dt className="display gradient-text-light text-6xl">{n.valor}</dt>
              <dd className="mt-3 text-sm font-semibold text-[#4A5878]">
                {n.rotulo}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
