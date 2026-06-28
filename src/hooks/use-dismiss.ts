import { type RefObject, useEffect } from 'react';

const KEY_ESCAPE = 'Escape';

export function useDismiss(
  ref: RefObject<HTMLElement | null>,
  isActive: boolean,
  onDismiss: () => void,
): void {
  useEffect(() => {
    if (!isActive) {
      return;
    }

    const handleOutsideClick = (event: PointerEvent) => {
      if (ref.current && !ref.current?.contains(event.target as Node)) {
        onDismiss();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === KEY_ESCAPE) {
        onDismiss();
      }
    };

    document.addEventListener('pointerdown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActive, onDismiss, ref]);
}
