"use client";

import { FormEvent } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import {
  trackContactConversion,
  trackLeadConversion,
} from "@/lib/conversions";

const whatsappNumber = "5519991392850";
const checks = [
  "Presença digital",
  "Oferta e posicionamento",
  "Canais de aquisição",
  "Oportunidades de automação",
];

export default function Diagnostico() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const nome = String(formData.get("nome") || "").trim();
    const empresa = String(formData.get("empresa") || "").trim();
    const whatsapp = String(formData.get("whatsapp") || "").trim();
    const instagram = String(formData.get("instagram") || "").trim();
    const desafio = String(formData.get("desafio") || "").trim();

    const mensagem = [
      "Olá, Maycon! Quero solicitar um diagnóstico estratégico.",
      "",
      `Nome: ${nome || "Não informado"}`,
      `Empresa: ${empresa || "Não informado"}`,
      `WhatsApp: ${whatsapp || "Não informado"}`,
      `Instagram: ${instagram || "Não informado"}`,
      `Maior desafio: ${desafio || "Não informado"}`,
    ].join("\n");

    trackLeadConversion({
      content_name: "formulario_contato",
      source: "formulario_site",
    });

    trackContactConversion({
      content_name: "whatsapp_form_redirect",
      location: "contact_form",
    });

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section id="contato" className="bg-[#07111F] px-6 py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="section-kicker">Diagnóstico estratégico</p>
          <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-5xl">
            Descubra o que está travando seu crescimento digital.
          </h2>

          <p className="premium-copy mt-7 max-w-xl text-lg leading-8 text-[#C7D2DE]">
            Envie suas informações e receba uma primeira leitura sobre onde sua
            empresa pode melhorar para gerar mais autoridade, contatos e vendas.
          </p>

          <div className="mt-10 grid gap-4">
            {checks.map((item) => (
              <div key={item} className="flex items-center gap-3 text-[#DDE7F1]">
                <CheckCircle2 size={20} className="text-[#54D2C0]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-5 border border-white/10 bg-[#101720] p-6 shadow-2xl shadow-black/30 md:grid-cols-2 md:p-8"
        >
          <input
            name="nome"
            type="text"
            placeholder="Seu nome"
            required
            className="premium-input"
          />

          <input
            name="empresa"
            type="text"
            placeholder="Nome da empresa"
            required
            className="premium-input"
          />

          <input
            name="whatsapp"
            type="text"
            placeholder="WhatsApp"
            required
            className="premium-input"
          />

          <input
            name="instagram"
            type="text"
            placeholder="@instagram"
            className="premium-input"
          />

          <textarea
            name="desafio"
            placeholder="Qual é o maior desafio da sua empresa hoje?"
            rows={5}
            required
            className="premium-input md:col-span-2"
          />

          <button type="submit" className="premium-button md:col-span-2">
            Solicitar diagnóstico pelo WhatsApp
            <ArrowUpRight size={20} />
          </button>
        </form>
      </div>
    </section>
  );
}
