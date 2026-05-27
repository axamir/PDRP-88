import { runAutopilot } from "./autopilot";
import { allowDeploy } from "./safety-guard";

export function safeAutopilot() {
  if (!allowDeploy()) {
    return {
      status: "BLOCKED",
      reason: "Outside safe deployment window",
    };
  }

  return runAutopilot();
}
