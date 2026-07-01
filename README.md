# Personal Website — Elena Mihailova

Single-page personal website (business card) of Elena Mihailova, Frontend Developer.

🔗 **Live:** <https://your-site.vercel.app>

## Tech stack

- **React 19** + **TypeScript**
- **Vite**
- **SCSS** — mobile-first, design tokens, BEM
- **ESLint / Prettier / Stylelint**

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