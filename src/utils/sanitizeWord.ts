export function sanitizeWord(word: string) {
  const matches = word.match(/[A-Za-z\u00C0-\u00FF]+/);
  return matches?.[0];
}
