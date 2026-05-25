export function add(a: number, b: number): number {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new Error("Arguments must be finite numbers");
  }
  return a + b;
}
