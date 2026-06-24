import type { TitleProps } from './title.props';

function Title({ className, children }: TitleProps) {
  return <h2 className={className}>{children}</h2>;
}

export default Title;
