/** Minneapolis runs on America/Chicago, which is UTC-5 in late summer. */
export const APPLICATION_DEADLINE = new Date("2026-08-30T23:59:59-05:00");

export const COURSE_START = new Date("2026-09-01T00:00:00-05:00");

export type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function remainingUntil(target: Date, from: number): Remaining | null {
  const diff = target.getTime() - from;
  if (diff <= 0) return null;

  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

export function formatRemaining(remaining: Remaining) {
  const pad = (value: number) => String(value).padStart(2, "0");
  return `${remaining.days}d ${pad(remaining.hours)}h ${pad(remaining.minutes)}m ${pad(remaining.seconds)}s`;
}

/** Drops the seconds so narrow screens keep the bar on a single line. */
export function formatRemainingShort(remaining: Remaining) {
  const pad = (value: number) => String(value).padStart(2, "0");
  return `${remaining.days}d ${pad(remaining.hours)}h ${pad(remaining.minutes)}m`;
}
