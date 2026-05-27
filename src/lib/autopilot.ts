import { detectChanges } from "./change-detector";
import { autoCommit } from "./auto-commit";
import { deploy } from "./deploy";

export function runAutopilot() {
  const changes = detectChanges();

  if (!changes.hasChanges) {
    return {
      status: "IDLE",
      message: "No changes detected",
    };
  }

  const commit = autoCommit("AUTO: system evolution checkpoint");

  if (!commit.success) {
    return {
      status: "COMMIT_FAILED",
    };
  }

  const deployment = deploy();

  return {
    status: "ACTIVE",
    commit: commit.success,
    deployment: deployment.status,
  };
}
