import type { SiteData } from './type';

export const data: SiteData = {
  about: {
    title: 'About me',
    description: `I am a frontend developer with a passion for creating beautiful and functional web applications. I have experience working with React, TypeScript, and other modern web technologies. I am always eager to learn new skills and take on new challenges.`,
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        school: 'Moscow State University of Economics, Statistics and Informatics',
      },
      {
        degree: 'Bachelor of Science in Computer Science',
        school: 'Moscow State University of Economics, Statistics and Informatics',
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
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
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
