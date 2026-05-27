export function allowDeploy(): boolean {
  // safety rule: prevent infinite loops
  const hour = new Date().getHours();

  // only allow deploy between controlled windows
  return hour >= 9 && hour <= 22;
}
