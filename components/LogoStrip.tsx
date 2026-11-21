import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const marcas = [
  { name: "Robert Auto Elétrica", logo: "/case-robert.png" },
  { name: "Marcenaria Ponto Alto", logo: "/case-pontoalto.png" },
  { name: "Santana na Brasa", logo: "/case-santana.png" },
  { name: "União Vila Fátima", logo: "/case-uvf.png" },
  { name: "Fabinho Elétrica & Mecânica", logo: "/case-fabinho.png", escuro: true },
  { name: "Dra. Adilaine Guastalli", logo: "/case-adilaine.png" },
  { name: "AS Distribuidora", logo: "/case-as-distribuidora.png" },
  { name: "Evertoon Tattoo", logo: "/case-evertoon.png", escuro: true },
  { name: "Marmoraria Vila Sônia", logo: "/case-vilasonia.png", escuro: true },
];

function Fila({ ocultar = false }: { ocultar?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center gap-5 pr-5" aria-hidden={ocultar}>
      {marcas.map((marca) => (
        <li
          key={marca.name}
          className={[
            "flex h-24 w-52 items-center justify-center rounded-2xl border px-6 shadow-[0_6px_20px_rgba(33,68,255,0.06)]",
            "escuro" in marca && marca.escuro
              ? "border-[#0B1638] bg-[#0B1638]"
              : "border-[#DCE3F5] bg-white",
          ].join(" ")}
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

    </section>
  );
}
