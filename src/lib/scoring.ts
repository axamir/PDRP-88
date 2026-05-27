export function scoreClick(type: string) {
  const weights: Record<string, number> = {
    enter_en: 10,
    enter_fa: 8,
    scroll: 2,
    exit: -5,
  };

  return weights[type] || 1;
}
