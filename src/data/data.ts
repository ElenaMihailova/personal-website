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
      'Before tech, I spent 15 years as a chief accountant, so payment logic is second nature to me — edge cases included.',
      'Day to day, I work with React, TypeScript and Next.js, favoring config-driven architecture and writing tests first. I use AI coding agents to move faster, but I make the design calls and review every change.',
      'Outside work, I’m a long-distance runner and do CrossFit. Both reward what good engineering does: steady, consistent effort.',
    ],
    principlesTitle: 'How I work',
    principles: [
      'Turning vague requirements into clear, workable tasks',
      'Challenging assumptions instead of taking specs at face value',
      'Sweating the details in money-critical UI',
      'Giving direct, constructive code review',
    ],
    educationTitle: 'Education',
    education: [
      {
        degree: 'JavaScript / Frontend',
        period: '2022–2023',
        school: 'The Rolling Scopes School',
      },
      {
        degree: 'Frontend Development',
        period: '2021–2022',
        school: 'HTML Academy',
      },
      {
        degree: 'Accounting, Analysis and Audit',
        period: '1997–2002',
        school: 'Petrozavodsk State University',
      },
    ],
    languagesTitle: 'Languages',
    languages: [
      { name: 'English', level: 'B2' },
      { name: 'Russian', level: 'Native' },
      { name: 'Serbian', level: 'B1' },
    ],
  },
  contacts: {
    title: 'Let’s talk',
    subtitle: 'Open to frontend and AI product engineering roles, remote or with relocation.',
  },
  experience: {
    title: 'Experience',
    items: [
      {
        role: 'AI Product Engineer',
        company: 'HeroContent.ai',
        meta: 'part-time',
        period: 'Dec 2025 – present',
        description: 'Built automated quality control for an AI content pipeline.',
      },
      {
        role: 'Frontend Developer',
        company: 'All Funeral Services',
        period: 'Dec 2024 – Jul 2026',
        description: 'Shipped payments, sign-in and real-time features across four products.',
      },
      {
        role: 'Frontend Developer',
        company: 'Missis Laser',
        period: 'May 2024 – Nov 2024',
        description: 'Delivered booking, partner and e-contract apps for the web and React Native.',
      },
      {
        role: 'Frontend Developer',
        company: 'FullV, WebImpulse Studio, Raketa',
        meta: 'contract',
        period: 'Mar 2022 – Dec 2023',
        description:
          'Built React Native and responsive web interfaces for three clients, including a Boston-based startup.',
      },
    ],
  },
  hero: {
    bubble: 'Shipped!',
    name: 'Elena Mikhailova',
    role: 'Frontend & AI Product Engineer',
    status: 'Based in Novi Sad, Serbia · Open to remote work and relocation',
    title: 'I build interfaces people trust with money and decisions.',
    lead: 'Checkout and subscription flows in React and TypeScript. AI content pipelines with automated quality control. And an accountant’s eye for the numbers.',
    primaryAction: { href: `#${SectionId.WORK}`, label: 'See selected work' },
    secondaryAction: { href: `#${SectionId.CONTACTS}`, label: 'Get in touch' },
  },
  resume: {
    href: '/elena-mihailova-cv.pdf',
    label: 'Download CV (PDF)',
  },
  links: [
    { id: SectionId.WORK, label: 'Work' },
    { id: SectionId.EXPERIENCE, label: 'Experience' },
    { id: SectionId.SKILLS, label: 'Skills' },
    { id: SectionId.ABOUT, label: 'About' },
    { id: SectionId.CONTACTS, label: 'Contact' },
  ],
  work: {
    title: 'Selected work',
    intro: 'Production work where correctness comes first.',
    items: [
      {
        title: 'Automated quality control for an AI content pipeline',
        company: 'HeroContent.ai',
        period: 'Dec 2025 – present',
        summary:
          'A social media platform for restaurants generates posts with AI. Manual visual review was rejecting about 40% of the content.',
        contributions: [
          'Automated Vision QA audit with issue-specific gates to cut false positives',
          'Read-only, tool-using agent that audits plans, calendars and approvals and posts alerts to Telegram',
          'Rejection-reason analytics feeding back into prompts and templates',
        ],
        result: 'Manual image review down to zero.',
        tags: ['Claude API', 'OpenAI API', 'TypeScript', 'Python', 'AI agents'],
      },
      {
        title: 'Payments and sign-in across a four-product platform',
        company: 'All Funeral Services',
        period: 'Dec 2024 – Jul 2026',
        summary:
          'Four products: an internal operations system, a white-label memorial site, a subscriptions and payments app and a configurable sign-in service.',
        contributions: [
          'Stripe and Klarna checkout: subscriptions, one-time payments and promo pricing',
          'Runtime config for SSO sign-in methods and a config-driven checkout flow',
          'Real-time chat, four-provider Firebase auth and Hebrew (RTL) localization',
        ],
        tags: ['React', 'TypeScript', 'Stripe', 'Klarna', 'Firebase', 'Playwright'],
      },
      {
        title: 'Web and mobile apps for a six-clinic chain',
        company: 'Missis Laser',
        period: 'May 2024 – Nov 2024',
        summary:
          'Digital tools for a chain of six clinics: bookings, partners and contracts, on the web and on mobile.',
        contributions: [
          'Partner program and e-contract web apps',
          'Online booking on the web and in a React Native mobile app',
          'amoCRM integration and bots that automate booking and request handling',
        ],
        tags: ['React', 'React Native', 'amoCRM'],
      },
    ],
  },
  skills: {
    title: 'Skills',
    intro: 'Grouped by what I deliver, not by what I’ve installed.',
    groups: [
      {
        title: 'AI product engineering',
        description:
          'Quality control for a production AI content pipeline: automated visual review, error analysis and a monitoring agent — so output is measured, not eyeballed.',
        tools: [
          'Automated visual QA (vision models)',
          'Error analysis',
          'Prompt & template routing',
          'Read-only tool-using agents',
          'LLM APIs: Claude, OpenAI',
          'Python',
        ],
      },
      {
        title: 'Product UI',
        description:
          'Responsive, accessible web and mobile interfaces from Figma to production, including right-to-left languages.',
        tools: [
          'TypeScript',
          'React',
          'Next.js',
          'React Native',
          'Redux Toolkit',
          'Tailwind CSS / SCSS',
          'Accessibility (WCAG)',
          'i18n & RTL',
        ],
      },
      {
        title: 'Payments, auth & real-time',
        description:
          'Checkout, subscriptions and promo pricing, sign-in and live chat across four products — backed by 15 years in accounting.',
        tools: [
          'Stripe subscriptions & checkout',
          'Klarna',
          'Config-driven checkout',
          'Firebase Auth / SSO',
          'Stream Chat / WebSocket',
          'Analytics & deep links',
        ],
      },
      {
        title: 'Quality & delivery',
        description:
          'Every change tested and reviewed — including code written with AI assistants.',
        tools: [
          'Jest',
          'React Testing Library',
          'Playwright',
          'Storybook component library',
          'GitHub Actions',
          'Vite',
          'AI-assisted coding: Claude Code, Cursor, Copilot',
        ],
      },
    ],
  },
  socials: [
    { href: 'mailto:mihailova.dev@gmail.com', label: 'mihailova.dev@gmail.com', type: 'email' },
    { href: 'https://t.me/Elena_Mikhailova_dev', label: 'Elena_Mikhailova_dev', type: 'telegram' },
    {
      href: 'https://www.linkedin.com/in/elena-mikhailova-dev',
      label: 'elena-mikhailova-dev',
      type: 'linkedin',
    },
    { href: 'https://github.com/ElenaMihailova', label: 'Elena Mikhailova', type: 'github' },
  ],
};
