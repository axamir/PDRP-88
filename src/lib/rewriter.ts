import { getAvg } from "./memory";

type UIState = {
  headline: string;
  subtitle: string;
  cta: string;
};

export function rewriteUI(intent: string): UIState {
  const ctr = getAvg("ctr");
  const exit = getAvg("exit_rate");

  // Low engagement → more emotional
  if (ctr < 3) {
    return {
      headline: "You are not lost. You are just disconnected.",
      subtitle: "This system helps you re-enter step by step.",
      cta: intent === "fa_user" ? "شروع بازیابی" : "Start Recovery",
    };
  }

  // Medium engagement → neutral clarity
  if (ctr < 7) {
    return {
      headline: "PDRP-88",
      subtitle: "A structured recovery interface for digital re-entry.",
      cta: intent === "fa_user" ? "ورود" : "Enter",
    };
  }

  // High engagement → product mode
  return {
    headline: "Recovery System Active",
    subtitle: "Optimized experience enabled based on your behavior.",
    cta: intent === "fa_user" ? "ادامه" : "Continue",
  };
}
