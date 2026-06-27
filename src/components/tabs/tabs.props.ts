import type { ReactNode } from 'react';

interface TabItem {
  content: ReactNode;
  id: string;
  label: string;
}

export interface TabsProps {
  items: TabItem[];
}
