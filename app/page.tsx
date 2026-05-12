import {
  ArrowDown,
  Clock,
  HandHeart,
  ListChecks,
  MapPin,
  PackageCheck,
  Phone,
  Ribbon,
  Star,
} from "lucide-react";
import { LeadForm } from "../components/lead-form";

export default function Home() {
  return (
    <main className="landing-page">
      <section className="hero-section" id="inicio">
        <picture className="hero-banner">
          <source media="(max-width: 760px)" srcSet="/banner-mobile.webp" />
          <img
            src="/banner-desktop.webp"
            alt="A história que o agro de Jaru conhece - Nossa Lavoura"
          />
        </picture>
        <a
          className="primary-cta hero-cta"
          href="https://share.google/AmBusRLB3GY5XS4QU"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Venha nos visitar</span>
        </a>
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
              <img
                className="solution-icon"
                src="/assets/nutricao_animal.svg"
                alt=""
                aria-hidden="true"
              />
              <h3>Nutrição Animal</h3>
              <p>Rações, suplementos e orientação para fortalecer o rebanho.</p>
            </article>
            <article className="solution-card">
              <img
                className="solution-icon"
                src="/assets/saude_animal.svg"
                alt=""
                aria-hidden="true"
              />
              <h3>Saúde Animal</h3>
              <p>Vacinas, medicamentos e cuidados para manter a criação segura.</p>
            </article>
            <article className="solution-card">
              <img
                className="solution-icon"
                src="/assets/sementes.svg"
                alt=""
                aria-hidden="true"
              />
              <h3>Sementes</h3>
              <p>Variedades selecionadas para plantar com mais segurança.</p>
            </article>
            <article className="solution-card">
              <img
                className="solution-icon"
                src="/assets/herbicidas_e_defensivos.svg"
                alt=""
                aria-hidden="true"
              />
              <h3>Herbicidas e Defensivos</h3>
              <p>Produtos certos para proteger a lavoura com responsabilidade.</p>
            </article>
            <article className="solution-card">
              <img
                className="solution-icon"
                src="/assets/arames_e_estacas.svg"
                alt=""
                aria-hidden="true"
              />
              <h3>Arames e Estacas</h3>
              <p>Estrutura para cercas, manejo e manutenção da propriedade.</p>
            </article>
            <article className="solution-card">
              <img
                className="solution-icon"
                src="/assets/fertilizantes.svg"
                alt=""
                aria-hidden="true"
              />
              <h3>Fertilizantes</h3>
              <p>Nutrição para lavouras mais fortes e produtivas.</p>
            </article>
            <article className="solution-card solution-card--wide">
              <img
                className="solution-icon"
                src="/assets/maquinarios_e_equipamentos.svg"
                alt=""
                aria-hidden="true"
              />
              <h3>Maquinários e Equipamentos</h3>
              <p>Ferramentas e equipamentos para facilitar a rotina no campo.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="history-section" id="historia">
        <div className="section-shell history-feature">
          <div className="history-photo">
            <img
              src="/assets/handshake-clean.webp"
              alt="Aperto de mãos no campo"
              width="760"
              height="520"
            />
          </div>

          <div className="history-intro">
            <PackageCheck aria-hidden="true" />
            <p>
              Em Jaru, a <strong>verdadeira história do agronegócio</strong> é
              contada por mãos que trabalham a terra e o rebanho.
            </p>
          </div>
        </div>

        <div className="section-shell history-story">
          <p>
            A Nossa Lavoura, antes conhecida como Casa da Lavoura, tem sido essa
            parceira fiel por mais de quatro décadas, acompanhando o produtor em
            cada etapa da sua jornada.
          </p>
          <p>
            Nossa história é a sua história, construída com dedicação,
            conhecimento e compromisso com o produtor.
          </p>
        </div>
      </section>

      <section className="trust-section">
        <div className="section-shell trust-grid">
          <article className="trust-card trust-card--green">
            <Ribbon aria-hidden="true" />
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
          <article className="trust-card trust-card--brown">
            <HandHeart aria-hidden="true" />
            <h3>Verdadeiro Parceiro</h3>
            <p>
              Enquanto outros vêm e vão, nós sempre estivemos aqui.
            </p>
          </article>
          <article className="trust-card trust-card--brown">
            <ListChecks aria-hidden="true" />
            <h3>Valorização das Pessoas</h3>
            <p>
              Nosso maior patrimônio são nossos clientes e colaboradores.
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
            <iframe
              title="Mapa da Nossa Lavoura em Jaru"
              src="https://maps.google.com/maps?hl=pt-BR&q=Nossa%20Lavoura%20-%20Jaru%2C%20Av.%20J.K.%2C%201121%20-%20Centro%2C%20Jaru%20RO&z=17&iwloc=B&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
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
            <img
              src="/assets/logo_nossa_lavoura.webp"
              alt="Nossa Lavoura"
              width="220"
              height="88"
            />
          </a>
          <div className="social-links">
            <a href="https://www.instagram.com/" aria-label="Instagram">
              <svg aria-hidden="true" viewBox="0 0 24 24" role="img">
                <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 7.25A4.75 4.75 0 1 1 12 16.75 4.75 4.75 0 0 1 12 7.25Zm0 2A2.75 2.75 0 1 0 12 14.75 2.75 2.75 0 0 0 12 9.25Zm5-2.45a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/" aria-label="Facebook">
              <svg aria-hidden="true" viewBox="0 0 24 24" role="img">
                <path d="M14.25 8.25V6.7c0-.73.52-1.2 1.35-1.2H18V2h-3.2c-3.3 0-5.05 1.85-5.05 4.85v1.4H7v3.7h2.75V22h4.5V11.95h3.05l.7-3.7h-3.75Z" />
              </svg>
            </a>
          </div>
        </div>
        <p>Desenvolvido por Agência Premium</p>
      </footer>
    </main>
  );
}
