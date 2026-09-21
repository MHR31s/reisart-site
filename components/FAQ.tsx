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
    <section id="faq" className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="section-kicker text-[#2144FF]">FAQ</p>
          <h2 className="display mt-5 text-4xl text-[#0B1638] md:text-5xl">
            Perguntas <span className="gradient-text-light">frequentes</span>
          </h2>
          <p className="mt-6 max-w-sm text-base leading-7 text-[#4A5878]">
            Ainda com dúvida? Peça o diagnóstico gratuito e converse direto com
            o fundador da Reisart.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={faq.pergunta}
              open={i === 0}
              className="group rounded-2xl border border-[#DCE3F5] bg-[#F7F9FF] px-6 py-5 transition open:border-[#2144FF]/40 open:bg-white open:shadow-[0_16px_40px_rgba(33,68,255,0.1)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-extrabold text-[#0B1638]">
                <span>{faq.pergunta}</span>
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EAF0FF] text-xl leading-none text-[#2144FF] transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#3B4A6B]">
                {faq.resposta}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
