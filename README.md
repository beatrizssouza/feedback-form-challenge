# Feedback Form Challenge

## Visão Geral
Este projeto é uma pequena aplicação **React 18** + **TypeScript** criada para o desafio de frontend que consiste em desenvolver um formulário com três campos — **Full Name**, **Email** e **Feedback** — seguindo o layout fornecido no Figma.

O objetivo é demonstrar:
* Componentização genérica e reutilizável (Clean Architecture)
* Validação de formulários com **React Hook Form** + **Zod**
* Estilização rápida e consistente com **Tailwind CSS**

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

## Estrutura de Pastas
```
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── FeedbackMessage.tsx
│   │   ├── TextField.tsx
│   │   └── ToggleSwitch.tsx
│   └── index.ts
├── hooks/
│   └── useFeedbackForm.ts
├── screens/
│   └── FeedbackForm/
│       └── index.tsx
├── types/
│   └── feedbackMessage.ts
├── tasks/
├── assets/
├── tailwind.css
├── App.tsx
└── main.tsx
```

### Componentes Genéricos
| Componente | Responsabilidade |
|------------|------------------|
| `Card`              | Container visual com padding, borda e sombra opcional |
| `Button`            | Botão estilizado com variantes e estados de hover/disabled |
| `TextField`         | Wrapper de `<input>`/`<textarea>` com label, mensagem de erro e integração com RHF |
| `FeedbackMessage`   | Toast de sucesso/erro com animação de fade-in/out e auto-hide |
| `ToggleSwitch`      | Componente de alternância booleano (on/off) estilizado |

---

## Critérios de Validação
| Campo | Regras |
|-------|--------|
| Full Name | Obrigatório |
| Email | Obrigatório + formato de e-mail *(bonus)* |
| Feedback | Obrigatório |


## Scripts
```bash
# instala dependências
npm install
# ambiente de desenvolvimento
npm run dev
```

---

## Como Rodar
1. `git clone <repo>`
2. `cd feedback-form-challenge && npm install`
3. `npm run dev`
4. Acesse `http://localhost:5173` no navegador.

---

