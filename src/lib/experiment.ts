type Variant = "A" | "B";

export function getVariant(key: string): Variant {
  if (typeof window === "undefined") return "A";

  const stored = localStorage.getItem(`exp_${key}`);
  if (stored === "A" || stored === "B") return stored;

  const variant: Variant = Math.random() > 0.5 ? "A" : "B";
  localStorage.setItem(`exp_${key}`, variant);

  return variant;
}
