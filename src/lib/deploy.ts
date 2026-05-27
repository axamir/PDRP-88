import { execSync } from "child_process";

export function deploy() {
  try {
    // assumes Vercel CLI linked already
    execSync("vercel --prod --yes");

    return {
      status: "DEPLOYED",
    };
  } catch (e) {
    return {
      status: "FAILED",
    };
  }
}
