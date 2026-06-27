import './tabs.scss';

import classNames from 'classnames';
import { useState } from 'react';

import type { TabsProps } from './tabs.props';

function Tabs({ items }: TabsProps) {
  const [activeId, setActiveId] = useState(items[0].id);

  return (
    <div className="tabs">
      <ul className="tabs__list">
        {items.map((item) => (
          <button
            key={item.id}
            className={classNames('tabs__button', { tabs__button_active: item.id === activeId })}
            aria-selected={item.id === activeId}
            role="tab"
            type="button"
            onClick={() => setActiveId(item.id)}
          >
            {item.label}
          </button>
        ))}
      </ul>
      <div className="tabs__panels">
        {items.map((item) => (
          <div
            key={item.id}
            className="tabs_panel"
            role="tabpanel"
            aria-hidden={item.id !== activeId}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
