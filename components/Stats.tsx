export default function Stats() {
  const stats = [
    { numero: "+20", titulo: "Projetos Desenvolvidos" },
    { numero: "+5", titulo: "Segmentos Atendidos" },
    { numero: "100%", titulo: "Foco em Resultado" },
    { numero: "24h", titulo: "Suporte Estratégico" },
  ];

  return (
    <section className="bg-[#07111F] py-20 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-center">

        {stats.map((item) => (
          <div key={item.titulo}>
            <h2 className="text-5xl font-bold text-sky-400">
              {item.numero}
            </h2>

            <p className="text-slate-400 mt-4">
              {item.titulo}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}