import type { IconProps } from './icon.props';

const ICON_SIZE = 24;
function Icon({ className, src, alt }: IconProps) {
  return <img alt={alt} className={className} height={ICON_SIZE} src={src} width={ICON_SIZE} />;
}

export default Icon;
