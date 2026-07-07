export function greet(name: string): string {
  if (!name || name.trim() === "") {
    return "Hi there!";
  }
  return `Hi, ${name.trim()}!`;
}
