import { getVariant } from "./experiment";
import { track } from "./events";
import { scoreClick } from "./scoring";

type Action = "keep" | "weaken" | "promote";

let memory: Record<string, number[]> = {};

export function recordDecision(key: string, actionScore: number) {
  if (!memory[key]) memory[key] = [];
  memory[key].push(actionScore);
}

export function evaluateVariant(key: string): Action {
  const scores = memory[key] || [];

  if (scores.length < 5) return "keep";

  const avg = scores.reduce((a, b) => a + b, 0) / scores.length;

  if (avg > 8) return "promote";
  if (avg < 4) return "weaken";
  return "keep";
}

export function autoTrackDecision(key: string, type: string) {
  const score = scoreClick(type);

  recordDecision(key, score);

  const action = evaluateVariant(key);

  track("auto_decision", {
    key,
    type,
    score,
    action,
  });

  return action;
}
