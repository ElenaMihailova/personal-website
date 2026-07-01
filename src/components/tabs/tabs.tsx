import './tabs.scss';

import classNames from 'classnames';
import type { KeyboardEvent } from 'react';
import { useRef } from 'react';

import type { TabsProps } from './tabs.props';

const NEXT_KEYS = ['ArrowRight', 'ArrowDown'];
const PREVIOUS_KEYS = ['ArrowLeft', 'ArrowUp'];

function Tabs({ activeId, idPrefix, items, onChange }: TabsProps) {
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    const lastIndex = items.length - 1;
    let nextIndex: number | null = null;

    if (NEXT_KEYS.includes(event.key)) {
      nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
    }

    if (PREVIOUS_KEYS.includes(event.key)) {
      nextIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
    }

    if (event.key === 'Home') {
      nextIndex = 0;
    }

    if (event.key === 'End') {
      nextIndex = lastIndex;
    }

    if (nextIndex === null) {
      return;
    }

    event.preventDefault();

    const nextItem = items[nextIndex];
    onChange(nextItem.id);
    requestAnimationFrame(() => tabRefs.current[nextItem.id]?.focus());
  };

  return (
    <div className="tabs">
      <div className="tabs__list" role="tablist">
        {items.map((item, index) => {
          const isActive = item.id === activeId;
          const panelId = `${idPrefix}-${item.id}-panel`;
          const tabId = `${idPrefix}-${item.id}-tab`;

          return (
            <button
              key={item.id}
              ref={(element) => {
                tabRefs.current[item.id] = element;
              }}
              className={classNames('tabs__button', { tabs__button_active: isActive })}
              aria-controls={panelId}
              aria-selected={isActive}
              id={tabId}
              role="tab"
              tabIndex={0}
              type="button"
              onClick={() => onChange(item.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="tabs__panels">
        {items.map((item) => {
          const isActive = item.id === activeId;
          const panelId = `${idPrefix}-${item.id}-panel`;
          const tabId = `${idPrefix}-${item.id}-tab`;

          return (
            <div
              key={item.id}
              className={classNames('tabs__panel', {
                tabs__panel_active: isActive,
                'motion-slide-in': isActive,
              })}
              aria-hidden={!isActive}
              aria-labelledby={tabId}
              id={panelId}
              role="tabpanel"
              tabIndex={isActive ? 0 : -1}
            >
              {item.content}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tabs;
