import type { ReactNode } from 'react';

import type { SectionId } from '@/data/section-id';

export interface SectionProps {
  children: ReactNode;
  className?: string;
  id: SectionId;
  reveal?: boolean;
}
