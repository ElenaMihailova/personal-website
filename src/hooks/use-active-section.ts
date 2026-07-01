import { useEffect, useState } from 'react';

import type { SectionId } from '@/data/section-id';

const ROOT_MARGIN = '-50% 0px -50% 0px';

export function useActiveSection(ids: SectionId[]): SectionId {
  const [activeId, setActiveId] = useState<SectionId>(ids[0]);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section) => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id as SectionId);
          }
        });
      },
      { rootMargin: ROOT_MARGIN },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
