export type EventName =
  | "page_view"
  | "cta_click"
  | "language_select"
  | "exit_intent";

export function track(event: EventName, data?: Record<string, any>) {
  if (typeof window === "undefined") return;

  const payload = {
    event,
    data: data || {},
    timestamp: Date.now(),
    url: window.location.href,
  };

  console.log("[PDRP-88 EVENT]", payload);

  // lightweight send (Vercel Analytics auto + optional extension)
  navigator.sendBeacon?.("/api/event", JSON.stringify(payload));
}
