export type Locale =
  | "en"
  | "es"
  | "fr"
  | "pt"
  | "de"
  | "ar"
  | "hi"
  | "vi"
  | "zh";

export const LOCALES: { value: Locale; label: string }[] = [
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
  { value: "pt", label: "Portuguese" },
  { value: "de", label: "German" },
  { value: "ar", label: "Arabic" },
  { value: "hi", label: "Hindi" },
  { value: "vi", label: "Vietnamese" },
  { value: "zh", label: "Mandarin" },
];

/** Blog language options: Spanish default, English excluded from dropdown. */
export const BLOG_LOCALES = LOCALES.filter((l) => l.value !== "en");

export const DEFAULT_LOCALE: Locale = "es";

export function getLocaleLabel(locale: Locale): string {
  return LOCALES.find((l) => l.value === locale)?.label ?? locale;
}
