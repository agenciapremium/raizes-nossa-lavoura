import { LeadForm } from "../components/lead-form";

export default function Home() {
  return (
    <main className="landing-page">
      <h1 className="sr-only">
        Nossa Lavoura - tradicao de mais de 40 anos em Jaru
      </h1>

      <section className="landing-stage" aria-label="Landing page Nossa Lavoura">
        <img
          src="/landing-model.webp"
          alt=""
          width="1440"
          height="8420"
          className="landing-model"
          aria-hidden="true"
        />
        <LeadForm variant="overlay" />
      </section>

      <section className="mobile-form-section" aria-label="Formulario de contato">
        <LeadForm variant="mobile" />
      </section>
    </main>
  );
}
