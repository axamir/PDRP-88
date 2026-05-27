import { getMemory } from "./memory";

export function computeScore(): number {
  const intents = getMemory("intent");
  const ctr = getMemory("ctr");

  const intentScore = intents.length * 1.5;
  const ctrScore = ctr.reduce((a, b) => a + (b.value || 0), 0) / 10;

  return intentScore + (ctrScore || 0);
}
