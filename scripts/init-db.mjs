import { readFileSync, existsSync } from "node:fs";
import { neon } from "@neondatabase/serverless";

for (const envFile of [".env.local", ".env"]) {
  if (!existsSync(envFile)) {
    continue;
  }

  const lines = readFileSync(envFile, "utf8").split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const separator = trimmed.indexOf("=");

    if (separator === -1) {
      continue;
    }

    const key = trimmed.slice(0, separator).trim();
    const value = trimmed
      .slice(separator + 1)
      .trim()
      .replace(/^["']|["']$/g, "");

    process.env[key] ??= value;
  }
}

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL nao foi configurada.");
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
  CREATE INDEX IF NOT EXISTS idx_nossa_lavoura_leads_created_at
  ON nossa_lavoura_leads (created_at DESC)
`;

const [table] = await sql`
  SELECT table_name
  FROM information_schema.tables
  WHERE table_schema = 'public'
    AND table_name = 'nossa_lavoura_leads'
`;

console.log(
  JSON.stringify({
    ok: table?.table_name === "nossa_lavoura_leads",
    table: table?.table_name ?? null,
  })
);
