// src/utils.ts
export const short = (s: string, n = 100) => (s.length > n ? s.slice(0, n) + "..." : s);
export const nowIso = () => new Date().toISOString();
