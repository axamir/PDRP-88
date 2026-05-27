type Intent = "fa_user" | "en_user" | "global_user";

type Feature = {
  id: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
};

export function generateFeatures(intent: Intent, score: number): Feature[] {

  const base: Feature[] = [
    {
      id: "f1",
      title: "Simplified Onboarding",
      description: "Reduce cognitive load for returning users",
      priority: "high",
    },
    {
      id: "f2",
      title: "Language Adaptive UI",
      description: "Auto-switch UI language based on intent",
      priority: "medium",
    },
  ];

  if (score > 5) {
    base.push({
      id: "f3",
      title: "Conversion Acceleration Mode",
      description: "Optimize CTA flow for high intent users",
      priority: "high",
    });
  }

  if (intent === "fa_user") {
    base.push({
      id: "f4",
      title: "RTL Emotional Messaging",
      description: "Localized emotional recovery language in Persian",
      priority: "high",
    });
  }

  return base;
}
