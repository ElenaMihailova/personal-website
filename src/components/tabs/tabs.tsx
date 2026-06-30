import './tabs.scss';

import classNames from 'classnames';

import type { TabsProps } from './tabs.props';

function Tabs({ activeId, items, onChange }: TabsProps) {
  return (
    <div className="tabs">
      <div className="tabs__list" role="tablist">
        {items.map((item) => (
          <button
            key={item.id}
            className={classNames('tabs__button', { tabs__button_active: item.id === activeId })}
            aria-selected={item.id === activeId}
            role="tab"
            type="button"
            onClick={() => onChange(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="tabs__panels">
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <div
              key={item.id}
              className={classNames('tabs__panel', {
                tabs__panel_active: isActive,
                'motion-slide-in': isActive,
              })}
              aria-hidden={!isActive}
              role="tabpanel"
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
