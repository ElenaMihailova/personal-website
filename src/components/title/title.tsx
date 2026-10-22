import './title.scss';

import type { TitleProps } from './title.props';

function Title({ children, intro }: TitleProps) {
  return (
    <header className="title">
      <h2 className="title__heading">{children}</h2>
      {intro && <p className="title__intro">{intro}</p>}
    </header>
  );
}

export default Title;
