import './burger.scss';

import classNames from 'classnames';

import type { BurgerProps } from './burger.props';

function Burger({ controls, isOpen, onToggle, ref }: BurgerProps) {
  return (
    <button
      aria-controls={controls}
      aria-expanded={isOpen}
      aria-label="Menu"
      className={classNames('burger', { burger_open: isOpen })}
      onClick={onToggle}
      ref={ref}
      type="button"
    >
      <span className="burger__line" />
      <span className="burger__line" />
      <span className="burger__line" />
    </button>
  );
}

export default Burger;
