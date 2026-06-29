/**
 * 1001 Nuits — Business Hours Logic
 *
 * Hours (Montreal local time, UTC-4/UTC-5):
 *   Monday:    11:00–22:00
 *   Tuesday:   11:00–15:00, 16:00–22:00
 *   Wednesday: 11:00–15:00, 16:00–22:00
 *   Thursday:  11:00–15:00, 16:00–22:00
 *   Friday:    11:00–22:00
 *   Saturday:  11:00–22:00
 *   Sunday:    11:00–15:00, 16:00–22:00
 */

export type DaySchedule =
  | { closed: true; slots?: never }
  | { closed: false; slots: [number, number][] }; // [openHour, closeHour] in 24h

/** Sunday=0 … Saturday=6 (same as Date.getDay()) */
const HOURS: Record<number, DaySchedule> = {
  0: { closed: false, slots: [[11, 15], [16, 22]] }, // Sunday
  1: { closed: false, slots: [[11, 22]] },           // Monday
  2: { closed: false, slots: [[11, 15], [16, 22]] }, // Tuesday
  3: { closed: false, slots: [[11, 15], [16, 22]] }, // Wednesday
  4: { closed: false, slots: [[11, 15], [16, 22]] }, // Thursday
  5: { closed: false, slots: [[11, 22]] },           // Friday
  6: { closed: false, slots: [[11, 22]] },           // Saturday
};

/** Human-readable day names */
export const DAY_NAMES_EN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const DAY_NAMES_FR = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

export function getSchedule(day: number): DaySchedule {
  return HOURS[day];
}

/** Returns true if the restaurant is open right now */
export function isOpenNow(): boolean {
  const now = new Date();
  const day = now.getDay();
  const schedule = HOURS[day];
  if (schedule.closed) return false;

  const hour = now.getHours();
  const min = now.getMinutes();
  const currentMinutes = hour * 60 + min;

  return schedule.slots.some(
    ([open, close]) =>
      currentMinutes >= open * 60 && currentMinutes < close * 60
  );
}

/** Returns a human-readable label for a day's hours */
export function formatSlots(schedule: DaySchedule, lang: "en" | "fr" = "en"): string {
  if (schedule.closed) return lang === "fr" ? "Fermé" : "Closed";
  return schedule.slots
    .map(([open, close]) => {
      const fmt = (h: number) => {
        const suffix = h >= 12 ? (lang === "fr" ? " p.m." : " p.m.") : (lang === "fr" ? " a.m." : " a.m.");
        const display = h > 12 ? h - 12 : h === 0 ? 12 : h;
        return `${display}${suffix}`;
      };
      return `${fmt(open)}–${fmt(close)}`;
    })
    .join(", ");
}

/** Returns the next open time as a string, or null if no more opening today */
export function nextOpenToday(lang: "en" | "fr" = "en"): string | null {
  const now = new Date();
  const day = now.getDay();
  const schedule = HOURS[day];
  if (schedule.closed) return null;

  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  for (const [open, close] of schedule.slots) {
    if (currentMinutes < open * 60) {
      const display = open > 12 ? open - 12 : open;
      const suffix = open >= 12 ? (lang === "fr" ? " p.m." : " p.m.") : (lang === "fr" ? " a.m." : " a.m.");
      return `${display}${suffix}`;
    }
  }
  return null; // Past all slots today
}
