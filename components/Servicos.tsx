import {
  Bot,
  ChartNoAxesCombined,
  Globe2,
  Megaphone,
  MessageSquareText,
  Search,
  Sparkles,
  Store,
} from "lucide-react";

const servicos = [
  {
    titulo: "Posicionamento digital",
    descricao:
      "Organiza a forma como sua empresa é percebida para o cliente entender valor antes de perguntar preço.",
    icon: Sparkles,
  },
  {
    titulo: "Gestão de conteúdo",
    descricao:
      "Transforma redes sociais em uma vitrine que educa, gera confiança e prepara o cliente para comprar.",
    icon: MessageSquareText,
  },
  {
    titulo: "Meta Ads",
    descricao:
      "Coloca sua oferta na frente das pessoas certas e estimula conversas qualificadas no WhatsApp.",
    icon: Megaphone,
  },
  {
    titulo: "Google Ads",
    descricao:
      "Faz sua empresa aparecer quando o cliente já está procurando por uma solução como a sua.",
    icon: Search,
  },
  {
    titulo: "Google Meu Negócio",
    descricao:
      "Aumenta confiança local e facilita o contato de quem pesquisa por empresas próximas.",
    icon: Store,
  },
  {
    titulo: "Sites comerciais",
    descricao:
      "Cria uma página clara, rápida e preparada para transformar visitantes em oportunidades comerciais.",
    icon: Globe2,
  },
  {
    titulo: "IA e automações",
    descricao:
      "Acelera atendimento, pré-qualifica interessados e reduz perda de contatos por demora na resposta.",
    icon: Bot,
  },
  {
    titulo: "Diagnóstico estratégico",
    descricao:
      "Mostra onde a empresa está perdendo oportunidades e qual ação tem mais potencial de retorno.",
    icon: ChartNoAxesCombined,
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="bg-[#0B1018] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div>
          <p className="section-kicker">Serviços</p>
          <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-5xl">
            Uma operação digital que vende antes do primeiro contato.
          </h2>

          <p className="premium-copy mt-7 max-w-3xl text-lg leading-8 text-[#AAB7C4]">
            Cada entrega existe para aumentar percepção de valor, reduzir
            improviso comercial e criar uma jornada mais forte entre descoberta,
            confiança e decisão.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {servicos.map((servico) => {
            const Icon = servico.icon;

            return (
              <article
                key={servico.titulo}
                className="group min-h-[250px] bg-[#0E1622] p-7 transition-colors hover:bg-[#121E2B]"
              >
                <Icon className="text-[#54D2C0]" size={26} strokeWidth={1.7} />

                <h3 className="mt-8 text-xl font-bold text-white">
                  {servico.titulo}
                </h3>

                <p className="premium-copy mt-4 text-sm leading-7 text-[#9AA8B6]">
                  {servico.descricao}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
