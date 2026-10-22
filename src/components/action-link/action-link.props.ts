import type { ComponentType, SVGProps } from 'react';

import type { CallToAction } from '@/data/type';

export interface ActionLinkProps {
  action: CallToAction;
  className?: string;
  download?: boolean;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  variant: 'primary' | 'secondary' | 'text';
}
