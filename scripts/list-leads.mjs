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

const rows = await sql`
  SELECT id, name, email, whatsapp, created_at
  FROM nossa_lavoura_leads
  ORDER BY created_at DESC
  LIMIT 5
`;

console.log(JSON.stringify(rows, null, 2));
