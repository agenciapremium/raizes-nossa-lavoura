# Raizes Nossa Lavoura

Landing page em Next.js com formulario integrado ao Neon.

## Variaveis de ambiente

Crie as variaveis no projeto da Vercel:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST/neondb?sslmode=require"
WHATSAPP_NUMBER="556935212801"
```

O endpoint `POST /api/leads` cria a tabela `nossa_lavoura_leads` automaticamente, caso ela ainda nao exista, e grava os envios do formulario.

## Desenvolvimento

```bash
npm install
npm run dev
```
