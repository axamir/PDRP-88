import { analyzeCodebase } from "./code-introspector";
import { rewritePlan } from "./code-rewriter";

export function selfReflectSystem() {
  const insights = analyzeCodebase();
  const plan = rewritePlan(insights);

  const score = plan.filter(p => p.risk === "high").length;

  return {
    insights,
    plan,
    systemHealth: score > 0 ? "DEGRADED" : "OPTIMAL",
  };
}
