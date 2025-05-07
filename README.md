# Feedback Form Challenge

## Visão Geral
Este projeto é uma pequena aplicação **React 18** + **TypeScript** criada para o desafio de frontend que consiste em desenvolver um formulário com três campos — **Full Name**, **Email** e **Feedback** — seguindo o layout fornecido no Figma.

O objetivo é demonstrar:
* Componentização genérica e reutilizável (Clean Architecture)
* Validação de formulários com **React Hook Form** + **Zod**
* Estilização rápida e consistente com **Tailwind CSS**
* Código limpo, organizado e fácil de entender

---

## Tecnologias
| Ferramenta | Uso |
|------------|-----|
| React 18   | Biblioteca UI principal |
| TypeScript | Tipagem estática |
| Vite       | Bundler/dev-server super-rápido |
| Tailwind CSS | Utilitários de estilo |
| PostCSS + Autoprefixer | Pipeline CSS + compatibilidade de browsers |
| React Hook Form | Gerência de estado/validação do form |
| Zod        | Schemas de validação tipados |
| @hookform/resolvers | Integra Zod ao React Hook Form |

---

## Estrutura de Pastas (Sugerida)
```
src/
├── components/
│   ├── ui/              
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── TextField.tsx
│   └── index.ts          
├── screens/
│   └── FeedbackForm/
│       ├── FeedbackForm.tsx   # Tela principal
│       └── index.ts
├── hooks/
├── types/                # Tipagens globais
├── App.tsx               # Entry da UI
└── main.tsx             
```

### Componentes Genéricos
| Componente | Responsabilidade |
|------------|------------------|
| `Card`     | Container visual com padding, borda, sombra opcional |
| `Button`   | Botão estilizado (`variant` primary/secondary etc.) |
| `TextField`| Wrapper de `<input>`/`<textarea>` com label, erro, integração RHF |

---

## Critérios de Validação
| Campo | Regras |
|-------|--------|
| Full Name | Obrigatório |
| Email | Obrigatório + formato de e-mail *(bonus)* |
| Feedback | Obrigatório |

A validação é declarada em um **schema Zod** e conectada ao React Hook Form via `zodResolver`. Mensagens de erro são exibidas próximo ao campo correspondente.

---

## Scripts
```bash
# instala dependências
npm install

# ambiente de desenvolvimento
npm run dev

# build de produção
npm run build

# preview do build
npm run preview

# lint
npm run lint
```

---

## Como Rodar
1. `git clone <repo>`
2. `cd feedback-form-challenge && npm install`
3. `npm run dev`
4. Acesse `http://localhost:5173` no navegador.

---

## Próximos Passos
* Testes unitários de componentes (React Testing Library + Vitest)
* A11y: gerenciar foco, `aria-*` etc.
* Deploy em Vercel / Netlify

---
**Happy coding!**
