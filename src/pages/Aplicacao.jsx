import { useState } from 'react';
import data from '../data/agroorbit.json';

function Aplicacao() {
  const [aberto, setAberto] = useState(null);

  const toggle = (id) => {
    setAberto((atual) => (atual === id ? null : id));
  };

  return (
    <>
      <section className="hero">
        <div className="hero__container">
          <span className="hero__badge">● Aplicação no dia a dia</span>
          <h1 className="hero__title">
            A AgroOrbit na rotina do{' '}
            <span className="hero__title-accent">agricultor familiar.</span>
          </h1>
          <p className="hero__subtitle">
            Conheça o João — pequeno produtor do interior do Brasil — e veja, passo a passo, como a
            plataforma transforma dados de satélite em decisões reais na sua propriedade.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section__container">
          <div className="section__header">
            <h2 className="section__title">A história do João</h2>
            <p className="section__subtitle">
              Uma narrativa fictícia, mas baseada na realidade de milhões de agricultores familiares
              brasileiros.
            </p>
          </div>

          <div className="story">
            <div className="story__avatar" aria-hidden="true">
              👨‍🌾
            </div>
            <span className="story__meta">João, 47 anos · agricultor familiar · Sertão da Bahia</span>
            <p className="story__text">
              "Antes da AgroOrbit, eu plantava no escuro. A roça era no instinto, no calendário do
              avô, no aplicativo de previsão do tempo que não acertava. Hoje, abro o celular de
              manhã e vejo se a chuva está vindo, se o solo está seco, se a lavoura está bem. É
              como se o satélite trabalhasse pra mim — e em português."
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__container">
          <div className="section__header">
            <h2 className="section__title">Como funciona, na prática</h2>
            <p className="section__subtitle">
              Cinco passos simples — do toque no celular à decisão na lavoura.
            </p>
          </div>

          <ol className="steps">
            {data.passos.map((passo) => (
              <li className="step" key={passo.id}>
                <span className="step__number">{passo.id}</span>
                <div className="step__content">
                  <h3 className="step__title">{passo.titulo}</h3>
                  <p className="step__desc">{passo.descricao}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="section__container">
          <div className="section__header">
            <h2 className="section__title">E quando a internet falha?</h2>
            <p className="section__subtitle">
              Em regiões remotas, um sensor ESP32 local complementa os dados orbitais via MQTT.
            </p>
          </div>

          <div className="hardware">
            <div className="hardware__visual" aria-hidden="true">📡</div>
            <div className="hardware__content">
              <h3 className="hardware__title">ESP32 + MQTT no campo</h3>
              <p className="hardware__text">
                Um pequeno dispositivo, instalado na propriedade, mede umidade do solo, temperatura
                e umidade do ar localmente — e envia os dados via MQTT mesmo em redes lentas.
                Combinado às imagens de satélite, o sistema oferece uma visão completa, da órbita
                até a raiz.
              </p>
              <div className="hardware__tags">
                <span className="tag">ESP32</span>
                <span className="tag">MQTT</span>
                <span className="tag">Sensor de solo</span>
                <span className="tag">Offline-first</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__container">
          <div className="section__header">
            <h2 className="section__title">Perguntas frequentes</h2>
            <p className="section__subtitle">
              As dúvidas mais comuns sobre como a AgroOrbit funciona — respondidas em linguagem
              simples.
            </p>
          </div>

          <div className="faq">
            {data.faq.map((item) => {
              const ativo = aberto === item.id;
              return (
                <div
                  className={`faq__item${ativo ? ' faq__item--active' : ''}`}
                  key={item.id}
                >
                  <button
                    className="faq__question"
                    onClick={() => toggle(item.id)}
                    aria-expanded={ativo}
                  >
                    {item.pergunta}
                    <span className="faq__icon" aria-hidden="true">
                      +
                    </span>
                  </button>
                  <div className="faq__answer">
                    <p>{item.resposta}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Aplicacao;
