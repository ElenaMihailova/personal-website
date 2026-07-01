import type { ResumeData } from '@/data/type';

export interface ResumeLinkProps {
  label?: string;
  resume: ResumeData;
  variant: 'contact' | 'primary';
}
