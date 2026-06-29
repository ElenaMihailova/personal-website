import './illustration.scss';

import classNames from 'classnames';

import type { IllustrationProps } from './illustration.props';

function Illustration({ alt = '', className, src }: IllustrationProps) {
  return (
    <img alt={alt} className={classNames('illustration', className)} loading="lazy" src={src} />
  );
}

export default Illustration;
