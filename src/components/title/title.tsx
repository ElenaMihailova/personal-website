import './title.scss';

import classNames from 'classnames';

import type { TitleProps } from './title.props';

function Title({ className, children, id }: TitleProps) {
  return (
    <h2 className={classNames('title', className)} id={id}>
      {children}
    </h2>
  );
}

export default Title;
