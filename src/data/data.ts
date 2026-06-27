import type { SiteData } from './type';

export const data: SiteData = {
  about: {
    title: 'About me',
    description: [
      'Frontend developer (React, TypeScript) building payment and checkout experiences in money-critical products — subscriptions, one-time payments, promo pricing, admin payment flows.',
      'Before tech, I spent 15 years as a chief accountant, so I read payment and financial logic from the inside.',
      'Day to day: React, TypeScript, Next.js, config-driven architecture, testing-first (Jest, Playwright) — and I ship features with AI coding agents as a force multiplier, making the design calls and validating every change.',
      'Outside work, I run long distance. Same thing I look for in code: steady, deliberate, honest about the numbers.',
    ],
    education: [
      {
        degree: 'JavaScript / Frontend',
        period: '2022 – 2023',
        school: 'The Rolling Scopes School',
      },
      {
        degree: 'Frontend Development',
        period: '2021 – 2022',
        school: 'HTML Academy',
      },
      {
        degree: 'Accounting, Analysis and Audit',
        period: '1997 – 2002',
        school: 'Petrozavodsk State University',
      },
    ],
  },
  contacts: {
    subtitle: 'I will be glad to meet you!',
    title: "We'll be in touch",
  },
  hero: {
    greeting: 'My name is',
    name: 'Elena!',
    role: "I'm Frontend Developer",
  },
  links: [
    { id: 'start', label: 'Start' },
    { id: 'about', label: 'About me' },
    { id: 'portfolio', label: 'Skills' },
    { id: 'contact', label: 'Contacts' },
  ],
  skills: {
    hard: [
      'TypeScript (strict)',
      'React 19 — hooks, context, modern patterns',
      'State management: Redux Toolkit, MobX',
      'REST API integration',
      'Responsive, cross-browser, accessible layout (SCSS, Tailwind)',
      'Payment integrations (Stripe, Klarna)',
      'Config-driven UI architecture',
      'Performance optimization (Core Web Vitals, loading speed)',
      'Unit & component testing (Jest, React Testing Library)',
      'Build tooling: Vite, Webpack, npm-scripts',
      'Git & CI/CD',
      'Building production features with AI coding agents',
      'SVG graphics, Figma',
    ],
    soft: [
      'Decomposing vague requirements into clear, shippable tasks',
      'Ownership: features from idea to production',
      'Critical evaluation of AI-generated code',
      'Cross-domain communication (15 years in finance → business language)',
      'Fast, self-driven learning of new tools',
    ],
    title: 'Skills',
  },
  socials: [
    { href: 'https://github.com/ElenaMihailova', label: 'ElenaMihailova', type: 'github' },
    { href: 'https://t.me/Elena_Mihailova_dev', label: 'Elena_Mihailova_dev', type: 'telegram' },
    {
      href: 'https://www.linkedin.com/in/elena-mikhailova-dev',
      label: 'elena-mikhailova-dev',
      type: 'linkedin',
    },
    { href: 'mailto:mihailova.dev@gmail.com', label: 'mihailova.dev@gmail.com', type: 'email' },
  ],
};
