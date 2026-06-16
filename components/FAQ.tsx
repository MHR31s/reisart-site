const faqs = [
  {
    pergunta: "Em quanto tempo aparecem os resultados?",
    resposta:
      "Depende do ponto de partida da empresa, do mercado e do investimento. Em geral, os primeiros sinais aparecem quando a presença, a oferta e os canais começam a trabalhar juntos com consistência.",
  },
  {
    pergunta: "Quanto preciso investir em anúncios?",
    resposta:
      "O investimento ideal é definido após o diagnóstico. A recomendação considera objetivo, região, concorrência e capacidade de atendimento para evitar gastar sem direção.",
  },
  {
    pergunta: "O tráfego pago funciona para negócios locais?",
    resposta:
      "Sim, quando existe estratégia. Para negócios locais, tráfego pago funciona melhor quando campanha, página, WhatsApp e prova social estão conectados.",
  },
  {
    pergunta: "Preciso ter redes sociais ativas?",
    resposta:
      "Sim. Redes sociais ativas ajudam a construir confiança antes do contato. Não se trata apenas de postar, mas de sustentar autoridade e percepção de valor.",
  },
  {
    pergunta: "Vocês atendem qualquer segmento?",
    resposta:
      "A Reisart atende diferentes segmentos locais, mas a recomendação depende do diagnóstico. O objetivo é entender se existe encaixe entre demanda, oferta e estratégia.",
  },
];

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.pergunta,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.resposta,
    },
  })),
};

export default function FAQ() {
  return (
    <section className="bg-[#101720] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <p className="section-kicker">FAQ</p>
        <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-5xl">
          Perguntas frequentes
        </h2>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq) => (
            <details key={faq.pergunta} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-xl font-black text-white">
                <span>{faq.pergunta}</span>
                <span
                  aria-hidden="true"
                  className="text-[#F4C76B] transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="premium-copy mt-5 max-w-3xl text-base leading-8 text-[#AAB7C4]">
                {faq.resposta}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
