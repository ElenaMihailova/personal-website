# Personal Website — Elena Mihailova

Single-page personal website (business card) of Elena Mihailova, Frontend Developer.

🔗 **Live:** <https://personal-website-flame-one.vercel.app/>

## Tech stack

- **React 19** + **TypeScript**
- **Vite**
- **SCSS** — mobile-first, design tokens, BEM
- **ESLint / Prettier / Stylelint**

## Project structure

- `src/components` — reusable UI components
- `src/sections` — page sections
- `src/layout` — page layout, header and footer
- `src/hooks` — reusable interaction logic
- `src/data` — navigation, contacts and content data


## Highlights

- Responsive, mobile-first layout (mobile → tablet → desktop)
- Accessibility-focused: semantic HTML, full keyboard navigation, `:focus-visible`, `aria-current`
- Scrollspy navigation on native anchor scrolling — no router, no scroll libraries
- No UI kits: hand-written components and custom hooks (`useActiveSection`, `useDismiss`)

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview the production build locally

```

## Quality checks

```bash
npm run check
npm run build
npm run preview
