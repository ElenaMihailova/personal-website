import { type RefObject, useEffect } from 'react';

const KEY_ESCAPE = 'Escape';

export type DismissReason = 'escape' | 'outside-click';

export function useDismiss(
  ref: RefObject<HTMLElement | null>,
  isActive: boolean,
  onDismiss: (reason: DismissReason) => void,
): void {
  useEffect(() => {
    if (!isActive) {
      return;
    }

    const handleOutsideClick = (event: PointerEvent) => {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        onDismiss('outside-click');
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === KEY_ESCAPE) {
        onDismiss('escape');
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
