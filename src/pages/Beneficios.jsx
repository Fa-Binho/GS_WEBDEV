import { Link } from 'react-router-dom';
import Card from '../components/Card.jsx';
import data from '../data/agroorbit.json';

function Beneficios() {
  return (
    <>
      <section className="hero">
        <div className="hero__container">
          <span className="hero__badge">● Os Benefícios</span>
          <h1 className="hero__title">
            Cada hectare monitorado é{' '}
            <span className="hero__title-accent">uma família mais segura.</span>
          </h1>
          <p className="hero__subtitle">
            A AgroOrbit beneficia quatro grandes grupos — do agricultor familiar ao meio ambiente —
            transformando dados orbitais abertos em ganho concreto no dia a dia.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section__container">
          <div className="section__header">
            <h2 className="section__title">Quem ganha com a AgroOrbit</h2>
            <p className="section__subtitle">
              Quatro perfis de beneficiários impactados diretamente pela plataforma.
            </p>
          </div>

          <div className="cards">
            {data.beneficiarios.map((b) => (
              <Card
                key={b.id}
                icon={b.icon}
                titulo={b.grupo}
                descricao={b.beneficio}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__container">
          <div className="section__header">
            <h2 className="section__title">Antes vs. depois da AgroOrbit</h2>
            <p className="section__subtitle">
              O que muda na rotina de um pequeno produtor quando os dados orbitais finalmente chegam
              ao campo.
            </p>
          </div>

          <div className="compare">
            <div className="compare__col compare__col--before">
              <h3 className="compare__title">Antes</h3>
              <ul className="compare__list">
                {data.comparativo.antes.map((item, idx) => (
                  <li className="compare__item" key={idx}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="compare__col compare__col--after">
              <h3 className="compare__title">Depois</h3>
              <ul className="compare__list">
                {data.comparativo.depois.map((item, idx) => (
                  <li className="compare__item" key={idx}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__container">
          <div className="section__header">
            <h2 className="section__title">Como isso aparece no dia a dia?</h2>
            <p className="section__subtitle">
              Acompanhe a jornada do João, agricultor familiar fictício que usa a AgroOrbit todos os
              dias.
            </p>
            <Link to="/aplicacao" className="btn btn--primary">
              Ver aplicação no dia a dia →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Beneficios;
