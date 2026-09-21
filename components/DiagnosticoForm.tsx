"use client";

import { FormEvent, useState } from "react";
import {
  trackContactConversion,
  trackLeadConversion,
} from "@/lib/conversions";

const fields = [
  { name: "nome", label: "Nome", type: "text", placeholder: "Seu nome" },
  { name: "empresa", label: "Empresa", type: "text", placeholder: "Nome da empresa" },
  { name: "whatsapp", label: "WhatsApp", type: "tel", placeholder: "(19) 99999-9999" },
  { name: "instagram", label: "Instagram", type: "text", placeholder: "@suaempresa" },
];

export default function DiagnosticoForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const nome = String(formData.get("nome") || "");
    const empresa = String(formData.get("empresa") || "");
    const whatsapp = String(formData.get("whatsapp") || "");
    const instagram = String(formData.get("instagram") || "");
    const objetivo = String(formData.get("objetivo") || "");

    // Envia dados para o n8n via API Route (server-side, com secret protegido)
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, empresa, whatsapp, instagram, objetivo }),
      });
    } catch (error) {
      console.error("Erro ao enviar lead:", error);
    }

    // Dispara conversões Meta
    trackLeadConversion({
      content_name: "diagnostico_form",
      source: "formulario_site",
      objetivo,
    });
    trackContactConversion({
      content_name: "whatsapp_form_redirect",
      location: "diagnostico_form",
    });

    // Abre WhatsApp
    const message = [
      "Olá, quero solicitar um Diagnóstico de Presença Digital.",
      `Nome: ${nome}`,
      `Empresa: ${empresa}`,
      `WhatsApp: ${whatsapp}`,
      `Instagram: ${instagram}`,
      `Principal objetivo: ${objetivo}`,
    ].join("\n");

    window.open(
      `https://wa.me/5519991392850?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-[#3B82FF]/35 bg-[#0B1638] p-6 md:p-8"
    >
      <h2 className="text-2xl font-extrabold text-white">
        Solicitar Diagnóstico
      </h2>
      <p className="premium-copy mt-3 text-sm leading-7 text-[#AAB7C4]">
        Preencha os dados para iniciar a análise estratégica da sua presença
        digital.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name} className="grid gap-2 text-sm font-bold text-white">
            {field.label}
            <input
              required
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              className="border border-white/10 bg-[#05070D] px-4 py-3 text-white outline-none transition placeholder:text-[#647386] focus:border-[#3B82FF]"
            />
          </label>
        ))}
      </div>

      <label className="mt-5 grid gap-2 text-sm font-bold text-white">
        Principal objetivo
        <select
          required
          name="objetivo"
          className="border border-white/10 bg-[#05070D] px-4 py-3 text-white outline-none transition focus:border-[#3B82FF]"
        >
          <option value="">Selecione uma opção</option>
          <option value="aparecer_mais">Quero aparecer mais</option>
          <option value="mais_clientes">Quero mais clientes</option>
          <option value="profissionalizar">Quero profissionalizar minha empresa</option>
          <option value="automatizar">Quero automatizar meu atendimento</option>
        </select>
      </label>

      <button
        type="submit"
        disabled={loading}
        className="premium-button mt-8 w-full justify-center disabled:opacity-60"
      >
        {loading ? "Enviando..." : "Solicitar Diagnóstico"}
      </button>
    </form>
  );
}