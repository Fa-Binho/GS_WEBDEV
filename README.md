# AgroOrbit Web — Global Solution 2026

## Resumo do Projeto
Plataforma React de dados satelitais para agricultura de precisão em regiões remotas do Brasil.
Consome dados fictícios de um JSON local simulando APIs da NASA, INPE, ESA e Copernicus.

A aplicação possui 5 páginas navegáveis via React Router DOM:

- **/** — O Problema
- **/tecnologia** — A Tecnologia
- **/objetivos** — Os Objetivos (ODS 2 e ODS 10)
- **/beneficios** — Os Benefícios
- **/aplicacao** — Aplicação no dia a dia

## Stack Técnica

- **React 18** + **Vite** como bundler
- **React Router DOM v6** (`BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`)
- **CSS puro** com variáveis e media queries para responsividade
- **Google Fonts**: Syne (títulos) + Inter (corpo)
- Dados centralizados em `src/data/agroorbit.json`

## Instalação

1. `npm install`
2. `npm run dev`
3. Abrir o navegador em `http://localhost:5173`

## Build de Produção

```
npm run build
npm run preview
```

## Estrutura de Arquivos

```
agroorbit-web/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── agroorbit.json
    ├── components/
    │   ├── Header.jsx
    │   ├── Footer.jsx
    │   └── Card.jsx
    └── pages/
        ├── Problema.jsx
        ├── Tecnologia.jsx
        ├── Objetivos.jsx
        ├── Beneficios.jsx
        └── Aplicacao.jsx
```

## Identidade Visual

| Token            | Valor      |
|------------------|------------|
| `--bg-primary`   | `#0a0f1e`  |
| `--bg-card`      | `#111827`  |
| `--color-primary`| `#00c896`  |
| `--color-secondary` | `#e8315b` |
| `--text-main`    | `#f0f4f8`  |
| `--text-muted`   | `#8892a4`  |

## Deploy

https://gs-webdev-drab.vercel.app/

## Integrantes

- Fábio Alexandre Barbosa Filho 567419
- Wenderson da Silva Santos - RM: 567847
- Igor Davi Avelar Rosa Cesário- RM: 568163
- Gilberto Hideaki Matsunaga RM 568191
- Douglas Taveira Vilella Roberto RM 567846
