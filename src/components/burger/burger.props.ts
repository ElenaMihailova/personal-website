import type { Ref } from 'react';

export interface BurgerProps {
  controls: string;
  isOpen: boolean;
  onToggle: () => void;
  ref?: Ref<HTMLButtonElement>;
}
