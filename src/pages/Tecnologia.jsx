import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/agroorbit.json';

function Tecnologia() {
  return (
    <>
      <section className="hero">
        <div className="hero__container">
          <span className="hero__badge">● A Tecnologia</span>
          <h1 className="hero__title">
            Dados orbitais abertos,{' '}
            <span className="hero__title-accent">traduzidos em decisões no campo.</span>
          </h1>
          <p className="hero__subtitle">
            A AgroOrbit consome APIs satelitais públicas e gratuitas — da NASA, INPE, ESA e
            Copernicus — e entrega ao agricultor um painel simples com índice de vegetação, umidade
            do solo e alertas climáticos.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section__container">
          <div className="section__header">
            <h2 className="section__title">Do satélite ao agricultor</h2>
            <p className="section__subtitle">
              Cinco etapas que transformam uma órbita a 700 km de altitude em uma decisão prática na
              propriedade.
            </p>
          </div>

          <div className="flow">
            {data.fluxo.map((step, idx) => (
              <Fragment key={step.id}>
                <div className="flow__step">
                  <span className="flow__icon" aria-hidden="true">
                    {step.icon}
                  </span>
                  <span className="flow__label">{step.label}</span>
                  <span className="flow__desc">{step.desc}</span>
                </div>
                {idx < data.fluxo.length - 1 && (
                  <span className="flow__arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__container">
          <div className="section__header">
            <h2 className="section__title">As 4 fontes que alimentam o sistema</h2>
            <p className="section__subtitle">
              Todas abertas, gratuitas e mantidas por agências espaciais e institutos públicos.
            </p>
          </div>

          <div className="cards">
            {data.tecnologias.map((t) => (
              <article className="api-card" key={t.id}>
                <div className="api-card__logo">{t.nome}</div>
                <span className="api-card__dado">{t.dado}</span>
                <p className="api-card__desc">{t.descricao}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__container">
          <div className="section__header">
            <h2 className="section__title">Quer ver o impacto?</h2>
            <p className="section__subtitle">
              Conheça os objetivos sociais e ambientais que sustentam a AgroOrbit.
            </p>
            <Link to="/objetivos" className="btn btn--primary">
              Ver objetivos →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tecnologia;
