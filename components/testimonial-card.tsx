"use client";

import { useState } from "react";
import { Star } from "lucide-react";

type TestimonialCardProps = {
  src: string;
  alt: string;
  name: string;
  quote: string;
  width: number;
  height: number;
  previewLength?: number;
  fit?: "cover" | "contain";
};

export function TestimonialCard({
  src,
  alt,
  name,
  quote,
  width,
  height,
  previewLength = 220,
  fit = "cover",
}: TestimonialCardProps) {
  const [expanded, setExpanded] = useState(false);
  const isLong = quote.length > previewLength;

  const preview = isLong
    ? quote.slice(0, previewLength).trimEnd() + "…"
    : quote;

  return (
    <article className="testimonial-card">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={fit === "contain" ? "is-contain" : undefined}
      />
      <p>
        “{expanded || !isLong ? quote : preview}”
        {isLong && (
          <button
            type="button"
            className="testimonial-toggle"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
          >
            {expanded ? "Ler menos" : "Ler mais..."}
          </button>
        )}
      </p>
      <strong>{name}</strong>
      <div className="stars" aria-label="5 estrelas">
        <Star aria-hidden="true" />
        <Star aria-hidden="true" />
        <Star aria-hidden="true" />
        <Star aria-hidden="true" />
        <Star aria-hidden="true" />
      </div>
    </article>
  );
}
