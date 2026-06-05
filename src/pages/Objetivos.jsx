import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/agroorbit.json';

function Objetivos() {
  return (
    <>
      <section className="hero">
        <div className="hero__container">
          <span className="hero__badge">● Os Objetivos</span>
          <h1 className="hero__title">
            Tecnologia espacial a serviço de{' '}
            <span className="hero__title-accent">quem alimenta o Brasil.</span>
          </h1>
          <p className="hero__subtitle">
            A AgroOrbit nasce alinhada à Agenda 2030 da ONU, contribuindo diretamente para dois
            Objetivos de Desenvolvimento Sustentável: fome zero e redução das desigualdades.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section__container">
          <div className="section__header">
            <h2 className="section__title">Alinhamento com os ODS</h2>
            <p className="section__subtitle">
              Cada decisão de produto está conectada a um impacto social ou ambiental mensurável.
            </p>
          </div>

          <div className="cards">
            {data.objetivos.map((obj) => (
              <article
                className="ods-card"
                key={obj.id}
                style={{ borderTopColor: obj.cor }}
              >
                <span className="ods-card__badge" style={{ color: obj.cor }}>
                  {obj.ods}
                </span>
                <h3 className="ods-card__title">{obj.titulo}</h3>
                <p className="ods-card__desc">{obj.descricao}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__container">
          <div className="section__header">
            <h2 className="section__title">Linha do tempo do projeto</h2>
            <p className="section__subtitle">
              Da prova de conceito à escala nacional — em quatro fases planejadas.
            </p>
          </div>

          <div className="timeline">
            {data.fases.map((fase, idx) => (
              <Fragment key={fase.id}>
                <div className="timeline__item">
                  <span className="timeline__number">{fase.numero}</span>
                  <h3 className="timeline__title">{fase.titulo}</h3>
                  <p className="timeline__desc">{fase.descricao}</p>
                </div>
                {idx < data.fases.length - 1 && (
                  <span className="timeline__arrow" aria-hidden="true">
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
            <h2 className="section__title">E os benefícios reais?</h2>
            <p className="section__subtitle">
              Veja quem ganha — e como — com a chegada da AgroOrbit ao campo brasileiro.
            </p>
            <Link to="/beneficios" className="btn btn--primary">
              Ver benefícios →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Objetivos;
