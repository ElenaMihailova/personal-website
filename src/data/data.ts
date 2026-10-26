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
      'Day to day, I take features from a rough request to production and keep them running. React, TypeScript and Node.js, config-driven architecture, AI coding agents for speed — and every design call and every merge is still mine.',
      'Outside work, I’m a long-distance runner and do CrossFit.',
    ],
    principlesTitle: 'How I work',
    principles: [
      {
        title: 'Built for the next change.',
        text: 'What will change lives in config, so the next request is a settings change, not a new deploy.',
      },
      {
        title: 'Launch is the midpoint.',
        text: 'I watch what real users do with a feature and turn every failed or rejected case into the next improvement.',
      },
      {
        title: 'Reconcile, then trust.',
        text: 'Fifteen years of closing books taught me that totals add up before anyone signs off. My checkout flows and AI features answer to the same rule.',
      },
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
      },
      {
        role: 'Frontend Developer',
        company: 'All Funeral Services',
        period: 'Dec 2024 – Jul 2026',
      },
      {
        role: 'Frontend Developer',
        company: 'Missis Laser',
        period: 'May 2024 – Nov 2024',
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
    title: 'I build the features a product can’t afford to get wrong.',
    lead: 'Checkout, sign-in, real-time chat, bookings and AI pipelines in React, TypeScript and Node.js — shipped to production and kept running after launch.',
    primaryAction: { href: `#${SectionId.WORK}`, label: 'See selected work' },
    secondaryAction: { href: `#${SectionId.CONTACTS}`, label: 'Get in touch' },
  },
  resume: {
    href: '/elena-mikhailova-cv.pdf',
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
    intro: 'Products I built and kept answering for after launch.',
    items: [
      {
        title: 'An AI content pipeline that checks its own output',
        company: 'HeroContent.ai',
        period: 'Dec 2025 – present',
        summary:
          'A social media platform for restaurants generates posts with AI. Manual visual review was rejecting about 40% of the content.',
        contributions: [
          'Built a vision-model review step with issue-specific rules, so only real defects get blocked',
          'Built a monitoring agent that watches every client’s plans, calendars and approvals and alerts the team in Telegram',
          'Turned rejection reasons into analytics that feed back into prompts and templates',
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
    intro: 'Grouped by what I deliver.',
    groups: [
      {
        title: 'AI product engineering',
        description:
          'LLM features in production, built with their own measurement: vision-model review, error analysis and a monitoring agent.',
        tools: [
          'Vision-model review',
          'Error analysis',
          'Prompt & template routing',
          'Read-only tool-using agents',
          'LLM APIs: Claude, OpenAI',
          'Node.js',
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
        title: 'Delivery & reliability',
        description:
          'I ship and support what I build: tests on critical flows, CI, and AI-written code reviewed before it merges.',
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
