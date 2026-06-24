"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import {
  trackContactConversion,
  trackLeadConversion,
} from "@/lib/conversions";

const whatsappNumber = "5519991392850";
const n8nWebhookUrl =
  "https://energeticflea-n8n.cloudfy.live/webhook/reisart-lead-site";

const checks = [
  "Presença digital",
  "Oferta e posicionamento",
  "Canais de aquisição",
  "Oportunidades de automação",
];

const servicosInteresse = [
  "Diagnóstico Estratégico",
  "Gestão de Redes Sociais",
  "Tráfego Pago",
  "Google Meu Negócio",
  "Criação de Sites",
  "Automações e Inteligência Artificial",
  "Consultoria de Marketing",
  "Outro",
];

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 2) {
    return digits;
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

export default function Diagnostico() {
  const [telefone, setTelefone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTelefone(formatPhone(event.target.value));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const nome = String(formData.get("nome") || "").trim();
    const empresa = String(formData.get("empresa") || "").trim();
    const whatsapp = String(formData.get("whatsapp") || "").trim();
    const instagram = String(formData.get("instagram") || "").trim();
    const servicoInteresse = String(
      formData.get("servicoInteresse") || "",
    ).trim();
    const desafio = String(formData.get("desafio") || "").trim();

    const payload = {
      nome,
      empresa,
      telefone: whatsapp.replace(/\D/g, ""),
      instagram,
      servicoInteresse,
      desafio,
      origem: "Site",
      status: "Lead",
    };

    const mensagem = [
      "Olá, Maycon! Quero solicitar atendimento pelo site.",
      "",
      `Nome: ${nome || "Não informado"}`,
      `Empresa: ${empresa || "Não informado"}`,
      `WhatsApp: ${whatsapp || "Não informado"}`,
      `Instagram: ${instagram || "Não informado"}`,
      `Serviço de interesse: ${servicoInteresse || "Não informado"}`,
      `Maior desafio: ${desafio || "Não informado"}`,
    ].join("\n");

    trackLeadConversion({
      content_name: "formulario_contato",
      source: "formulario_site",
      servico_interesse: servicoInteresse,
    });

    trackContactConversion({
      content_name: "whatsapp_form_redirect",
      location: "contact_form",
      servico_interesse: servicoInteresse,
    });

    try {
      const response = await fetch(n8nWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Webhook respondeu com status ${response.status}`);
      }

      setFeedback({
        type: "success",
        message:
          "Dados enviados com sucesso. Vamos abrir o WhatsApp para finalizar o contato.",
      });
      form.reset();
      setTelefone("");
    } catch (error) {
      console.error("Erro ao enviar lead para o webhook do n8n:", error);
      setFeedback({
        type: "error",
        message:
          "Não foi possível enviar os dados agora, mas vamos abrir o WhatsApp para você continuar o atendimento.",
      });
    } finally {
      setIsSubmitting(false);
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`,
        "_blank",
        "noopener,noreferrer",
      );
    }
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
            placeholder="Nome Completo"
            required
            autoComplete="name"
            className="premium-input"
          />

          <input
            name="empresa"
            type="text"
            placeholder="Empresa"
            required
            autoComplete="organization"
            className="premium-input"
          />

          <input
            name="whatsapp"
            type="tel"
            placeholder="Telefone / WhatsApp"
            value={telefone}
            onChange={handlePhoneChange}
            required
            autoComplete="tel"
            inputMode="tel"
            className="premium-input"
          />

          <input
            name="instagram"
            type="text"
            placeholder="@instagram"
            required
            autoComplete="off"
            className="premium-input"
          />

          <select
            name="servicoInteresse"
            required
            defaultValue=""
            className="premium-input md:col-span-2"
          >
            <option value="" disabled>
              Serviço de Interesse
            </option>
            {servicosInteresse.map((servico) => (
              <option key={servico} value={servico}>
                {servico}
              </option>
            ))}
          </select>

          <textarea
            name="desafio"
            placeholder="Principal Desafio"
            rows={5}
            required
            className="premium-input md:col-span-2"
          />

          {feedback && (
            <p
              className={`md:col-span-2 border px-4 py-3 text-sm leading-6 ${
                feedback.type === "success"
                  ? "border-[#54D2C0]/40 bg-[#54D2C0]/10 text-[#DDE7F1]"
                  : "border-[#F4C76B]/45 bg-[#F4C76B]/10 text-[#F4C76B]"
              }`}
              role="status"
              aria-live="polite"
            >
              {feedback.message}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="premium-button md:col-span-2 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                Enviando...
                <Loader2 size={20} className="animate-spin" />
              </>
            ) : (
              <>
                Solicitar diagnóstico pelo WhatsApp
                <ArrowUpRight size={20} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
