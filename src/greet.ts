export function greet(name: string): string {
  const trimmedName = name.trim();
  if (!trimmedName) {
    return "Hi there!";
  }
  return `Hi, ${trimmedName}!`;
}
