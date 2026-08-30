const DURATION = 1100;

function easeInOutCubic(progress: number) {
  return progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
}

/** Long, eased scroll. Falls back to the native jump when motion is reduced. */
export function smoothScrollTo(id: string) {
  const target = document.getElementById(id);
  if (!target) {
    window.location.hash = id;
    return;
  }

  const setHash = () => window.history.replaceState(null, "", `#${id}`);
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReduced) {
    target.scrollIntoView();
    setHash();
    return;
  }

  const start = window.scrollY;
  const end = start + target.getBoundingClientRect().top;
  const distance = end - start;
  if (Math.abs(distance) < 2) {
    setHash();
    return;
  }

  let startedAt: number | null = null;

  const step = (now: number) => {
    startedAt ??= now;
    const progress = Math.min((now - startedAt) / DURATION, 1);
    window.scrollTo(0, start + distance * easeInOutCubic(progress));
    if (progress < 1) {
      window.requestAnimationFrame(step);
      return;
    }
    setHash();
  };

  window.requestAnimationFrame(step);
}
