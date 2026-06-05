import { Link } from 'react-router-dom';
import Card from '../components/Card.jsx';
import data from '../data/agroorbit.json';

function Problema() {
  return (
    <>
      <section className="hero">
        <div className="hero__container">
          <span className="hero__badge">● O Problema</span>
          <h1 className="hero__title">
            O espaço já tem os dados.
            <br />
            <span className="hero__title-accent">O campo ainda não os recebe.</span>
          </h1>
          <p className="hero__subtitle">
            No Brasil, 3,8 milhões de pequenos agricultores tomam decisões diárias sem acesso a dados
            de precisão. Enquanto satélites mapeiam cada hectare do país, a tecnologia orbital ainda
            não chega às mãos de quem realmente alimenta o Brasil.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section__container">
          <div className="section__header">
            <h2 className="section__title">Três falhas críticas</h2>
            <p className="section__subtitle">
              A distância entre os dados orbitais e o produtor rural gera prejuízos diários —
              humanos, econômicos e ambientais.
            </p>
          </div>

          <div className="cards">
            {data.problemas.map((p) => (
              <Card
                key={p.id}
                icon={p.icon}
                titulo={p.titulo}
                descricao={p.descricao}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__container">
          <div className="section__header">
            <h2 className="section__title">O Brasil em números</h2>
            <p className="section__subtitle">
              Estatísticas que mostram o tamanho do gargalo entre os dados orbitais e quem produz
              alimento no país.
            </p>
          </div>

          <div className="stats">
            {data.stats.map((s) => (
              <div className="stat-card" key={s.id}>
                <span className="stat-card__icon" aria-hidden="true">
                  {s.icon}
                </span>
                <span className="stat-card__value">{s.value}</span>
                <span className="stat-card__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__container">
          <div className="section__header">
            <h2 className="section__title">Mas existe uma saída orbital.</h2>
            <p className="section__subtitle">
              A AgroOrbit conecta dados satelitais abertos da NASA, INPE, ESA e Copernicus
              diretamente ao agricultor brasileiro — em uma interface simples, em português, e que
              funciona até offline.
            </p>
            <Link to="/tecnologia" className="btn btn--primary">
              Como funciona →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Problema;
