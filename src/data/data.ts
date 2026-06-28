import { SectionId } from './section-id';
import type { SiteData } from './type';

export const data: SiteData = {
  about: {
    title: 'About me',
    description: [
      'Frontend developer (React, TypeScript) building payment and checkout features in money-critical products — subscriptions, one-time payments, promo pricing, admin payment flows.',
      'Before tech, I spent 15 years as a chief accountant, so I read payment and financial logic from the inside.',
      'Day to day: React, TypeScript, Next.js, config-driven architecture, testing-first (Jest, Playwright). I use AI coding agents to work faster — but I make the decisions and check every change.',
      'Outside work, I run long distance — the same steadiness I bring to code.',
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
    { id: SectionId.HERO, label: 'Start' },
    { id: SectionId.ABOUT, label: 'About me' },
    { id: SectionId.SKILLS, label: 'Skills' },
    { id: SectionId.CONTACTS, label: 'Contacts' },
  ],
  skills: {
    hard: [
      'React — hooks, context, modern patterns',
      'TypeScript',
      'Next.js (SSR/SSG, routing)',
      'State management: Redux Toolkit, MobX',
      'REST API integration',
      'Payment integrations (Stripe, Klarna)',
      'Config-driven UI architecture',
      'Responsive, cross-browser, accessible layout (SCSS, Tailwind)',
      'Figma → code (design handoff)',
      'i18n / localization',
      'Performance optimization (Core Web Vitals, loading speed)',
      'Unit, component & E2E testing (Jest, React Testing Library, Playwright)',
      'Storybook / component-driven development',
      'Git, CI/CD & build tooling (Vite, Webpack, npm-scripts)',
      'Building production features with AI coding agents',
    ],
    soft: [
      'Strong on payment & money logic (15 years in finance)',
      'Turning vague requirements into clear, workable tasks',
      'Questioning assumptions, not taking specs at face value',
      'Care with detail on money-critical UI',
      'Direct, constructive feedback in code review',
      'Reliable delivery, end to end',
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
