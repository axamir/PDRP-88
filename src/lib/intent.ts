export function detectIntent() {
  if (typeof window === "undefined") return "unknown";

  const lang = navigator.language;

  if (lang.includes("fa")) return "fa_user";
  if (lang.includes("en")) return "en_user";

  return "global_user";
}
