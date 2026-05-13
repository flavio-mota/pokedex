# Pokédex (SPA em React)

Projeto da disciplina **Programação Frontend** do curso de **Sistemas de Informação** da **UNIVAS** (Universidade do Vale do Sapucaí). Os alunos constroem uma **SPA (Single Page Application)** em React para aplicar os conceitos básicos do framework na prática, usando uma Pokédex como tema.

## Propósito

- Explorar **composição de componentes**, **propriedades (props)** e **gerenciamento de estado** (`useState`).
- Evoluir o código em sala a partir de uma base comum (lista de Pokémon, busca por nome, cartões reutilizáveis).

## Tecnologias

| Ferramenta | Uso |
|------------|-----|
| [React](https://react.dev/) | Biblioteca de interface (componentes, JSX, hooks). |
| [React DOM](https://react.dev/reference/react-dom) | Renderização no navegador. |
| [Vite](https://vite.dev/) | Bundler e servidor de desenvolvimento (HMR). |
| [ESLint](https://eslint.org/) | Análise estática do código (`eslint .`). |

Tipagens opcionais para arquivos `.tsx` são suportadas pelos pacotes `@types/react` e `@types/react-dom` listados no `package.json`.

## Como executar

Requisito: [Node.js](https://nodejs.org/) (LTS recomendado).

```bash
npm install
npm run dev
```

Outros scripts:

- `npm run build` — gera a versão de produção em `dist/`.
- `npm run preview` — serve a build localmente.
- `npm run lint` — executa o ESLint no projeto.

## Estrutura principal

- `src/main.jsx` — ponto de entrada da aplicação.
- `src/App.jsx` — componente raiz que compõe layout e áreas da página.
- `src/components/` — componentes reutilizáveis (por exemplo, lista, cartão, cabeçalho).

As imagens dos Pokémon utilizam sprites públicos do [PokeAPI](https://pokeapi.co/).
