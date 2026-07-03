import { NextResponse } from "next/server";

const N8N_WEBHOOK_URL =
  process.env.N8N_WEBHOOK_URL ??
  "https://energeticflea-n8n.cloudfy.live/webhook/reisart-lead-site";

export async function POST(request: Request) {
  const secret = process.env.N8N_WEBHOOK_SECRET;

  if (!secret) {
    console.error("N8N_WEBHOOK_SECRET não configurado no ambiente.");
    return NextResponse.json(
      { error: "Configuração do servidor incompleta." },
      { status: 500 }
    );
  }

  const body = await request.json();

  const { nome, empresa, whatsapp, instagram, objetivo } = body ?? {};

  if (!nome || !empresa || !whatsapp || !objetivo) {
    return NextResponse.json(
      { error: "Campos obrigatórios ausentes." },
      { status: 400 }
    );
  }

  try {
    const n8nResponse = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Webhook-Secret": secret,
      },
      body: JSON.stringify({
        nome,
        empresa,
        whatsapp,
        instagram,
        objetivo,
        origem: "site_diagnostico",
        data: new Date().toISOString(),
      }),
    });

    if (!n8nResponse.ok) {
      console.error("n8n respondeu com erro:", n8nResponse.status);
      return NextResponse.json(
        { error: "Falha ao registrar o lead." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Erro ao enviar lead para o n8n:", error);
    return NextResponse.json(
      { error: "Falha ao registrar o lead." },
      { status: 502 }
    );
  }
}
