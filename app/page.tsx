import {
  ArrowDown,
  Camera,
  Clock,
  Handshake,
  HeartPulse,
  MapPin,
  PackageCheck,
  Phone,
  ShieldCheck,
  Star,
  ThumbsUp,
  Tractor,
  Wheat,
  Wrench,
} from "lucide-react";
import { LeadForm } from "../components/lead-form";

export default function Home() {
  return (
    <main className="landing-page">
      <section className="hero-section" id="inicio">
        <div className="section-shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Nossa Lavoura</p>
            <h1>
              Tradição de mais de <strong>40 anos em Jaru.</strong>
            </h1>
            <p>
              Cultivando confiança e prosperidade no campo com atendimento
              próximo, produtos certos e parceria de verdade.
            </p>
            <a className="primary-cta" href="#formulario">
              <span>Junte-se à família Nossa Lavoura</span>
            </a>
          </div>

          <div className="hero-media" aria-hidden="true">
            <img
              src="/assets/hero-farmer.webp"
              alt=""
              width="790"
              height="720"
            />
          </div>
        </div>
      </section>

      <section className="solutions-section" id="solucoes">
        <div className="section-shell">
          <div className="section-heading section-heading--center">
            <h2>
              Nascemos e crescemos entendendo as necessidades do produtor rural.
            </h2>
            <p>
              Reunimos soluções para o dia a dia da lavoura, da criação e da
              propriedade em um atendimento simples, direto e confiável.
            </p>
          </div>

          <div className="solution-grid">
            <article className="solution-card">
              <Wheat aria-hidden="true" />
              <h3>Nutrição Animal</h3>
            </article>
            <article className="solution-card">
              <HeartPulse aria-hidden="true" />
              <h3>Saúde Animal</h3>
            </article>
            <article className="solution-card">
              <ShieldCheck aria-hidden="true" />
              <h3>Herbicidas e Defensivos</h3>
            </article>
            <article className="solution-card">
              <Wrench aria-hidden="true" />
              <h3>Arames e Estacas</h3>
            </article>
            <article className="solution-card solution-card--wide">
              <Tractor aria-hidden="true" />
              <h3>Maquinários e Equipamentos</h3>
            </article>
          </div>
        </div>
      </section>

      <section className="history-section" id="historia">
        <div className="history-image" aria-hidden="true">
          <img
            src="/assets/handshake-clean.webp"
            alt=""
            width="760"
            height="520"
          />
        </div>
        <div className="section-shell history-content">
          <div className="history-copy">
            <p className="eyebrow">Antes Casa da Lavoura</p>
            <h2>Uma história construída junto com o campo de Jaru.</h2>
            <p>
              A Nossa Lavoura tem mais de quatro décadas de presença regional.
              Nossa história é feita com dedicação, compromisso e confiança ao
              lado de quem produz.
            </p>
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="section-shell trust-grid">
          <article className="trust-card trust-card--green">
            <ShieldCheck aria-hidden="true" />
            <h3>Tradição e Confiança</h3>
            <p>
              Mais de 40 anos de atuação com credibilidade construída no campo.
            </p>
          </article>
          <article className="trust-card trust-card--brown">
            <MapPin aria-hidden="true" />
            <h3>Raízes Regionais</h3>
            <p>
              Somos de Jaru, conhecemos a realidade local e estamos sempre
              próximos.
            </p>
          </article>
          <article className="trust-card trust-card--cream">
            <Handshake aria-hidden="true" />
            <h3>Atendimento Parceiro</h3>
            <p>
              Indicamos soluções de acordo com a necessidade de cada produtor.
            </p>
          </article>
        </div>
      </section>

      <section className="products-section" id="produtos">
        <div className="section-shell products-grid">
          <div className="products-copy">
            <h2>
              Tudo o que o campo precisa em <span>um só lugar.</span>
            </h2>
            <a className="down-button" href="#localizacao" aria-label="Ver localização">
              <ArrowDown aria-hidden="true" />
            </a>
            <p>
              Nutrição animal, sementes, fertilizantes, herbicidas, vacinas e
              muito mais para manter sua propriedade pronta para produzir.
            </p>
          </div>

          <div className="contact-panel" id="localizacao">
            <ul>
              <li>
                <MapPin aria-hidden="true" />
                <span>Av. J.K., 1121 - Centro</span>
              </li>
              <li>
                <Phone aria-hidden="true" />
                <span>(69) 3521-2801</span>
              </li>
              <li>
                <Clock aria-hidden="true" />
                <span>Aberto a partir das 7h</span>
              </li>
            </ul>
          </div>

          <div className="map-frame">
            <img src="/assets/map.webp" alt="Mapa da Nossa Lavoura em Jaru" />
          </div>
        </div>
      </section>

      <section className="testimonials-section" id="depoimentos">
        <div className="section-shell">
          <div className="testimonial-grid">
            <article className="testimonial-card">
              <img
                src="/assets/testimonial-1.webp"
                alt="Cliente produtor rural"
                width="345"
                height="520"
              />
              <p>“Sou cliente há mais de 15 anos, nunca me deixou na mão.”</p>
              <strong>Fulano de Oliveira</strong>
              <div className="stars" aria-label="5 estrelas">
                <Star aria-hidden="true" />
                <Star aria-hidden="true" />
                <Star aria-hidden="true" />
                <Star aria-hidden="true" />
                <Star aria-hidden="true" />
              </div>
            </article>
            <article className="testimonial-card">
              <img
                src="/assets/testimonial-2.webp"
                alt="Cliente produtora rural"
                width="352"
                height="520"
              />
              <p>“Sempre encontro orientação certa e produto de qualidade.”</p>
              <strong>Fulano de Oliveira</strong>
              <div className="stars" aria-label="5 estrelas">
                <Star aria-hidden="true" />
                <Star aria-hidden="true" />
                <Star aria-hidden="true" />
                <Star aria-hidden="true" />
                <Star aria-hidden="true" />
              </div>
            </article>
            <article className="testimonial-card">
              <img
                src="/assets/testimonial-3.webp"
                alt="Cliente pecuarista"
                width="352"
                height="520"
              />
              <p>“A equipe conhece a região e entende a nossa realidade.”</p>
              <strong>Fulano de Oliveira</strong>
              <div className="stars" aria-label="5 estrelas">
                <Star aria-hidden="true" />
                <Star aria-hidden="true" />
                <Star aria-hidden="true" />
                <Star aria-hidden="true" />
                <Star aria-hidden="true" />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-section" id="formulario">
        <div className="section-shell cta-grid">
          <div className="cta-copy">
            <h2>Junte-se à família Nossa Lavoura</h2>
            <p>
              Nossa equipe está pronta para te atender e oferecer as melhores
              soluções para o seu negócio.
            </p>
          </div>

          <LeadForm variant="footer" />
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-shell footer-grid">
          <a className="brand-mark" href="#inicio" aria-label="Nossa Lavoura">
            <PackageCheck aria-hidden="true" />
            <span>
              Nossa
              <br />
              Lavoura
            </span>
          </a>
          <div className="social-links">
            <a href="https://www.instagram.com/" aria-label="Instagram">
              <Camera aria-hidden="true" />
            </a>
            <a href="https://www.facebook.com/" aria-label="Facebook">
              <ThumbsUp aria-hidden="true" />
            </a>
          </div>
        </div>
        <p>Desenvolvido por Agência Premium</p>
      </footer>
    </main>
  );
}
