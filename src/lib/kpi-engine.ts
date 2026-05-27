export type KPI = {
  name: string;
  value: number;
  target: number;
};

export function evaluateKPIs(): KPI[] {
  return [
    { name: "CTR", value: Math.random() * 10, target: 5 },
    { name: "Retention", value: Math.random() * 10, target: 7 },
    { name: "Conversion", value: Math.random() * 10, target: 6 },
  ];
}
