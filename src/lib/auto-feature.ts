export function generateFix(issue: string) {
  if (issue.includes("CTR")) {
    return "Improve CTA hierarchy + reduce friction";
  }

  if (issue.includes("Retention")) {
    return "Add onboarding loop + return triggers";
  }

  if (issue.includes("Conversion")) {
    return "Optimize landing message clarity + urgency";
  }

  return "Generic optimization layer";
}
