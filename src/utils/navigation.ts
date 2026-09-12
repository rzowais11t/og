/**
 * Reusable navigation and smooth scrolling utility
 */

export function scrollToSection(sectionId: string, smooth = true): void {
  if (typeof window === 'undefined') return;

  const id = sectionId.replace(/^#\/?/, '').replace(/^\//, '');

  if (!id || id === 'home') {
    window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
    if (window.history && window.history.pushState) {
      window.history.pushState(null, '', '#home');
    }
    return;
  }

  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' });
    if (window.history && window.history.pushState) {
      window.history.pushState(null, '', `#${id}`);
    }
  } else {
    // If element is not currently in DOM (e.g. from subpage), navigate to / with hash
    window.location.href = `/#${id}`;
  }
}

export function navigateTo(path: string): void {
  if (typeof window === 'undefined') return;

  if (path.startsWith('#')) {
    scrollToSection(path);
    return;
  }

  if (window.history && window.history.pushState) {
    window.history.pushState(null, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    window.location.href = path;
  }
}
