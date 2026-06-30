import { useState } from 'react';

export function useActiveTab<T extends { id: string }>(tabs: T[], initialId: string) {
  const [activeTabId, setActiveTabId] = useState(initialId);
  const activeTab = tabs.find((tab) => tab.id === activeTabId) ?? tabs[0];
  return {
    activeTabId,
    activeTab,
    setActiveTabId,
  };
}
