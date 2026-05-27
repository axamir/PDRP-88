export type CodeInsight = {
  file: string;
  risk: "low" | "medium" | "high";
  suggestion: string;
};

export function analyzeCodebase(): CodeInsight[] {
  // simulated analysis engine (in real world → AST parser)
  return [
    {
      file: "src/app/page.tsx",
      risk: "medium",
      suggestion: "Extract UI into components for reuse",
    },
    {
      file: "src/lib/startup-loop.ts",
      risk: "low",
      suggestion: "Add deterministic KPI evaluation instead of random",
    },
  ];
}
