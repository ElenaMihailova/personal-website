import './action-link.scss';

import classNames from 'classnames';

import type { ActionLinkProps } from './action-link.props';

function ActionLink({ action, className, download, icon: Icon, variant }: ActionLinkProps) {
  return (
    <a
      className={classNames('action-link', `action-link_${variant}`, className)}
      download={download}
      href={action.href}
    >
      {Icon && <Icon aria-hidden="true" className="action-link__icon" />}
      {action.label}
    </a>
  );
}

export default ActionLink;
