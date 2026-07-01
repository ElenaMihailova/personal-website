import './resume-link.scss';

import classNames from 'classnames';

import DownloadIcon from '@/assets/icons/download.svg?react';

import type { ResumeLinkProps } from './resume-link.props';

function ResumeLink({ label, resume, variant }: ResumeLinkProps) {
  return (
    <a className={classNames('resume-link', `resume-link_${variant}`)} download href={resume.href}>
      <span className="resume-link__icon" aria-hidden="true">
        <DownloadIcon className="resume-link__symbol" focusable="false" />
      </span>
      <span className="resume-link__label">{label ?? resume.label}</span>
    </a>
  );
}

export default ResumeLink;
