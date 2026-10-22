import { useEffect, useState } from 'react';

import type { SectionId } from '@/data/section-id';

const ACTIVATION_LINE = 0.4;

function findActiveSection(ids: readonly SectionId[]): SectionId | null {
  const scrollBottom = window.scrollY + window.innerHeight;

  if (scrollBottom >= document.documentElement.scrollHeight - 1) {
    return ids.at(-1) ?? null;
  }

  const line = window.innerHeight * ACTIVATION_LINE;
  let activeId: SectionId | null = null;

  for (const id of ids) {
    const section = document.getElementById(id);

    if (section && section.getBoundingClientRect().top <= line) {
      activeId = id;
    }
  }

  return activeId;
}

export function useActiveSection(ids: readonly SectionId[]): SectionId | null {
  const [activeId, setActiveId] = useState<SectionId | null>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setActiveId(findActiveSection(ids));
    };

    const scheduleUpdate = () => {
      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, [ids]);

  return activeId;
}
