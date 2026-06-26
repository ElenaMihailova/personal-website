import type { TitleProps } from './title.props';

function Title({ className, children, id }: TitleProps) {
  return (
    <h2 className={className} id={id}>
      {children}
    </h2>
  );
}

export default Title;
