"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2, MessageCircle } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

type LeadFormProps = {
  variant: "overlay" | "mobile";
};

export function LeadForm({ variant }: LeadFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      whatsapp: String(formData.get("whatsapp") ?? "").trim(),
      acceptedTerms: formData.get("acceptedTerms") === "on",
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        message?: string;
        whatsappUrl?: string;
      };

      if (!response.ok || !result.ok) {
        throw new Error(result.message ?? "Nao foi possivel enviar o formulario.");
      }

      setState("success");
      setMessage("Cadastro recebido. Vamos falar com voce pelo WhatsApp.");
      form.reset();

      if (result.whatsappUrl) {
        window.open(result.whatsappUrl, "_blank", "noopener,noreferrer");
      }
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Nao foi possivel enviar o formulario."
      );
    }
  }

  return (
    <form
      className={`lead-form lead-form--${variant}`}
      onSubmit={handleSubmit}
      noValidate
    >
      <h2>Preencha e ganhe um voucher</h2>

      <label>
        <span>Nome</span>
        <input name="name" type="text" autoComplete="name" required />
      </label>

      <label>
        <span>E-mail</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>

      <label>
        <span>WhatsApp</span>
        <input
          name="whatsapp"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
        />
      </label>

      <label className="terms-row">
        <input name="acceptedTerms" type="checkbox" required />
        <span>Aceito os termos de uso.</span>
      </label>

      <button type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? (
          <Loader2 aria-hidden="true" className="spin" size={32} />
        ) : state === "success" ? (
          <CheckCircle2 aria-hidden="true" size={32} />
        ) : (
          <MessageCircle aria-hidden="true" size={32} />
        )}
        <span>
          {state === "submitting" ? "Enviando..." : "Falar no WhatsApp agora"}
        </span>
      </button>

      <p className={`form-message form-message--${state}`} aria-live="polite">
        {message}
      </p>
    </form>
  );
}
