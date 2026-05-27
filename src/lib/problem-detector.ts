import { KPI } from "./kpi-engine";

export function detectProblems(kpis: KPI[]) {
  return kpis
    .filter(k => k.value < k.target)
    .map(k => ({
      issue: `Low ${k.name}`,
      severity: k.target - k.value,
    }));
}
