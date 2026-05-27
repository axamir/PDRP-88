type Intent = "fa_user" | "en_user" | "global_user";

type ProductState = {
  message: string;
  funnel: "awareness" | "activation" | "conversion";
  cta: string;
};

export function productBrain(intent: Intent, score: number): ProductState {

  // Cold user → awareness
  if (score < 3) {
    return {
      message: intent === "fa_user"
        ? "شما در حال ورود به یک سیستم بازیابی هستید"
        : "You are entering a recovery environment",
      funnel: "awareness",
      cta: intent === "fa_user" ? "شروع" : "Start",
    };
  }

  // Warm user → activation
  if (score < 7) {
    return {
      message: "System adapting to your behavior...",
      funnel: "activation",
      cta: intent === "fa_user" ? "ادامه" : "Continue",
    };
  }

  // Hot user → conversion
  return {
    message: "Optimized experience unlocked",
    funnel: "conversion",
    cta: intent === "fa_user" ? "ورود نهایی" : "Enter System",
  };
}
