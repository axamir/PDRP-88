import { selfReflectSystem } from "./self-reflect";

export function simulateDeployment() {
  const system = selfReflectSystem();

  return {
    willDeploy: system.systemHealth === "OPTIMAL",
    changes: system.plan.length,
    riskLevel: system.systemHealth,
  };
}
