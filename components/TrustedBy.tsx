import Image from "next/image";

const clients = [
  { name: "Construvip Edificações", logo: "/case-construvip.png" },
  { name: "Robert Auto Elétrica", logo: "/case-robert.png" },
  { name: "Suzana Limpeza Premium", logo: "/case-suzana.png" },
  { name: "Santana na Brasa", logo: "/case-santana.png" },
  { name: "Ponto Alto Planejados", logo: "/case-pontoalto.png" },
  { name: "União Vila Fátima", logo: "/case-uvf.png" },
];

export default function TrustedBy() {
  return (
    <section className="bg-[#07111F] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 border-y border-white/10 py-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="section-kicker">Prova social</p>
            <h2 className="mt-4 text-2xl font-black text-white md:text-4xl">
              Marcas que confiaram seu posicionamento à Reisart.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-[#9AA8B6]">
            Clientes de segmentos diferentes, com o mesmo objetivo: parecer
            mais forte, comunicar melhor e criar mais oportunidades.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden border-x border-b border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex min-h-40 items-center justify-center bg-[#0B1018] p-6"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={170}
                height={90}
                className="max-h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
