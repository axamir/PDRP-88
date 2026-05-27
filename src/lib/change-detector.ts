import { execSync } from "child_process";

export function detectChanges() {
  const status = execSync("git status --porcelain").toString();

  return {
    hasChanges: status.trim().length > 0,
    raw: status,
  };
}
