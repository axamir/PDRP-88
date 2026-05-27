import { execSync } from "child_process";

export function autoCommit(message: string) {
  try {
    execSync("git add .");

    execSync(`git commit -m "${message}"`);

    return { success: true };
  } catch (e) {
    return { success: false };
  }
}
