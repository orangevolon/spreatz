export function sanitizeWord(word: string) {
  const [sanitizedWord] = word.match(/[A-Za-z\u00C0-\u00FF]+/);
  return sanitizedWord;
}
