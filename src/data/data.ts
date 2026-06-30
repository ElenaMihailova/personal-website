import { SectionId } from './section-id';
import type { SiteData, SocialType } from './type';

export const SOCIAL_LABEL: Record<SocialType, string> = {
  email: 'Email',
  github: 'GitHub',
  linkedin: 'LinkedIn',
  telegram: 'Telegram',
};

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
  experience: {
    title: 'Experience',
    items: [
      {
        role: 'Frontend Developer',
        company: 'All Funeral Services',
        period: '12/2024 – 07/2026',
        description:
          'Payment & checkout in a money-critical product — Stripe/Klarna subscriptions, one-time and promo pricing — on a config-driven SSO/checkout architecture.',
      },
      {
        role: 'AI Product Engineer',
        company: 'HeroContent.ai',
        period: '12/2025 – present',
        meta: 'part-time',
        description:
          'AI content pipeline: automated Vision-QA review, read-only audit agent with actionable alerts, and decline-reason analytics feeding back into generation.',
      },
      {
        role: 'Frontend Developer',
        company: 'Earlier projects',
        period: '2022 – 2024',
        description:
          'Web & React Native across e-commerce, booking and startup products: Missis Laser, FullV, WebImpulse, Raketa.',
      },
    ],
  },
  hero: {
    greeting: 'My name is',
    name: 'Elena!',
    role: "I'm Frontend Developer",
  },
  links: [
    { id: SectionId.ABOUT, label: 'About me' },
    { id: SectionId.EXPERIENCE, label: 'Experience' },
    { id: SectionId.SKILLS, label: 'Skills' },
    { id: SectionId.CONTACTS, label: 'Contacts' },
  ],
  skills: {
    hard: [
      'React & TypeScript — hooks, context, modern frontend patterns',
      'Next.js — SSR/SSG, routing, production application structure',
      'State & data flow — Redux Toolkit, MobX, REST API integration',
      'Payments & checkout — Stripe, Klarna, subscriptions, promo pricing',
      'Responsive, accessible UI — SCSS, Tailwind, Figma-to-code, i18n',
      'Performance & quality — Core Web Vitals, loading speed, production UX',
      'Testing — Jest, React Testing Library, Playwright, unit/component/E2E coverage',
      'Tooling & delivery — Storybook, Git, CI/CD, Vite, Webpack, npm scripts, AI coding agents',
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
