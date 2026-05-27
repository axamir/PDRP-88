import { CodeInsight } from "./code-introspector";

export function rewritePlan(insights: CodeInsight[]) {
  return insights.map(i => ({
    file: i.file,
    action: "REWRITE",
    reason: i.suggestion,
    risk: i.risk,
    patch: generatePatch(i),
  }));
}

function generatePatch(insight: CodeInsight) {
  if (insight.file.includes("page.tsx")) {
    return "Split UI into: Hero, KPI, ActionPanel components";
  }

  if (insight.file.includes("startup-loop")) {
    return "Replace Math.random with real telemetry-based scoring";
  }

  return "Refactor module for clarity";
}
