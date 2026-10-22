function isReload(): boolean {
  const [navigation] = performance.getEntriesByType('navigation');

  return navigation instanceof PerformanceNavigationTiming && navigation.type === 'reload';
}

export function resetScrollOnReload(): void {
  if (!isReload()) {
    return;
  }

  history.scrollRestoration = 'manual';

  if (location.hash) {
    history.replaceState(history.state, '', location.pathname + location.search);
  }

  window.scrollTo(0, 0);
}

export function scrollToInitialHash(): void {
  const id = decodeURIComponent(location.hash.slice(1));

  if (id) {
    document.getElementById(id)?.scrollIntoView();
  }
}
