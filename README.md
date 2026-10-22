# Elena Mikhailova — Frontend & AI Product Engineer

Personal portfolio site: selected work, experience, skills and contacts on a single page.

**Live:** <https://personal-website-flame-one.vercel.app/>

![Site preview](public/og-image.png)

## Stack

- React 19, TypeScript (strict)
- Vite
- SCSS with design tokens and BEM
- ESLint, Stylelint, Prettier
- Deployed on Vercel

## Project structure

```text
src/
  components/  reusable UI: action link, burger, education, nav, section, social links, title, work card
  sections/    page sections: hero, work, experience, skills, about, contacts
  layout/      page shell: header, footer, skip link
  data/        site content and its types
  hooks/       scrollspy and dismiss-on-outside-click / Escape
  styles/      tokens, base styles, breakpoints and mixins
  utils/       scroll handling on first load and reload
```

## How it is built

- **Content as typed data.** All copy lives in `src/data/data.ts` and is typed in `src/data/type.ts`. Sections only render data, so text changes never touch components.
- **Design system in SCSS.** Colors, type sizes, spacing, control heights and motion come from CSS custom properties in `src/styles/tokens.scss`. Buttons, text links, labels and lists share mixins. Base section styles sit in a cascade layer, so section overrides do not depend on import order.
- **No UI kit, router or scroll library.** The scrollspy reads section positions on scroll with `requestAnimationFrame`. Sections fade in once via `IntersectionObserver`. Shared links like `/#work` land on their section, and a reload always starts from the top.
- **Accessibility.** Skip link, one visible focus style, a keyboard-friendly mobile menu that returns focus on Escape, `aria-current` in navigation, WCAG AA contrast, touch targets of at least 40 px and `prefers-reduced-motion` support.
- **Strict tooling.** TypeScript runs with `strict` and `noUncheckedIndexedAccess`. Stylelint enforces BEM class names and alphabetical properties. ESLint sorts imports.

## Getting started

```bash
npm install
npm run dev
```

| Command             | What it does                                    |
| ------------------- | ----------------------------------------------- |
| `npm run dev`       | Start the dev server                            |
| `npm run build`     | Type-check and build for production             |
| `npm run preview`   | Serve the production build locally              |
| `npm run check`     | Prettier, TypeScript, ESLint and Stylelint      |
| `npm run fix`       | Auto-fix formatting, lint and style issues      |
