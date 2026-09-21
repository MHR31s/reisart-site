import { Sparkles } from "lucide-react";

const itens = [
  "Tráfego Pago",
  "Google Meu Negócio",
  "Criação de Sites",
  "Redes Sociais",
  "Automação com IA",
  "Identidade Visual",
  "Produção de Conteúdo",
];

function Fila() {
  return (
    <div className="flex shrink-0 items-center" aria-hidden="true">
      {itens.map((item) => (
        <div key={item} className="flex items-center">
          <span className="px-8 text-sm font-extrabold uppercase tracking-[0.18em] text-white md:text-base">
            {item}
          </span>
          <Sparkles size={16} className="text-white/60" />
        </div>
      ))}
    </div>
  );
}

export default function Ticker() {
  return (
    <div
      role="presentation"
      className="relative overflow-hidden bg-gradient-to-r from-[#1A35D1] via-[#2144FF] to-[#3B82FF] py-4"
    >
      <div className="marquee marquee-fast">
        <Fila />
        <Fila />
      </div>
    </div>
  );
}
