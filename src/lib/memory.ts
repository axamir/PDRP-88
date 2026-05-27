type MemoryKey = "intent" | "ctr" | "exit_rate";

const store: Record<string, any[]> = {};

export function pushMemory(key: MemoryKey, value: any) {
  if (!store[key]) store[key] = [];
  store[key].push({
    value,
    t: Date.now(),
  });
}

export function getMemory(key: MemoryKey) {
  return store[key] || [];
}

export function getAvg(key: MemoryKey) {
  const data = store[key] || [];
  if (!data.length) return 0;

  return data.reduce((a, b) => a + (b.value || 0), 0) / data.length;
}
