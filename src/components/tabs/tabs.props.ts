import type { ReactNode } from 'react';

interface TabItem {
  content: ReactNode;
  id: string;
  label: string;
}

export interface TabsProps {
  activeId: string;
  items: TabItem[];
  onChange: (id: string) => void;
}
