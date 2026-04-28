import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type LeadPayload = {
  name?: unknown;
  email?: unknown;
  whatsapp?: unknown;
  acceptedTerms?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizePhone(value: string) {
  return value.replace(/\D/g, "");
}

function getWhatsappUrl(name: string) {
  const number = process.env.WHATSAPP_NUMBER ?? "556935212801";
  const text = encodeURIComponent(
    `Ola, sou ${name}. Preenchi o formulario da Nossa Lavoura e quero falar com a equipe.`
  );

  return `https://wa.me/${number.replace(/\D/g, "")}?text=${text}`;
}

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Envie os dados em JSON." },
      { status: 400 }
    );
  }

  const name = normalizeText(payload.name);
  const email = normalizeText(payload.email).toLowerCase();
  const whatsapp = normalizeText(payload.whatsapp);
  const whatsappDigits = normalizePhone(whatsapp);
  const acceptedTerms = payload.acceptedTerms === true;

  if (name.length < 2) {
    return NextResponse.json(
      { ok: false, message: "Informe seu nome." },
      { status: 400 }
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { ok: false, message: "Informe um e-mail valido." },
      { status: 400 }
    );
  }

  if (whatsappDigits.length < 10 || whatsappDigits.length > 14) {
    return NextResponse.json(
      { ok: false, message: "Informe um WhatsApp valido." },
      { status: 400 }
    );
  }

  if (!acceptedTerms) {
    return NextResponse.json(
      { ok: false, message: "Aceite os termos de uso para continuar." },
      { status: 400 }
    );
  }

  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      {
        ok: false,
        message: "DATABASE_URL nao foi configurada.",
      },
      { status: 500 }
    );
  }

  const sql = neon(process.env.DATABASE_URL);

  await sql`
    CREATE TABLE IF NOT EXISTS nossa_lavoura_leads (
      id BIGSERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      whatsapp TEXT NOT NULL,
      accepted_terms BOOLEAN NOT NULL DEFAULT TRUE,
      source TEXT NOT NULL DEFAULT 'landing_page',
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;

  await sql`
    INSERT INTO nossa_lavoura_leads (
      name,
      email,
      whatsapp,
      accepted_terms
    )
    VALUES (
      ${name},
      ${email},
      ${whatsappDigits},
      ${acceptedTerms}
    )
  `;

  return NextResponse.json({
    ok: true,
    whatsappUrl: getWhatsappUrl(name),
  });
}
