export function greet(name: string): string {
  if (!name || name.trim().length === 0) {
    throw new Error("Name cannot be empty");
  }
  return `Hello, ${name}!`;
}
