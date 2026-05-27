import { evaluateKPIs } from "./kpi-engine";
import { detectProblems } from "./problem-detector";
import { generateFix } from "./auto-feature";

export function runStartupLoop() {
  const kpis = evaluateKPIs();

  const problems = detectProblems(kpis);

  const actions = problems.map(p => ({
    problem: p.issue,
    fix: generateFix(p.issue),
    priority: p.severity,
  }));

  return {
    kpis,
    problems,
    actions,
    status: actions.length > 0 ? "OPTIMIZING" : "STABLE",
  };
}
