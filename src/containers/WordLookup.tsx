import { useEffect, useState } from "react";
import { WordLookupEntries } from "../components/WordLookupEntries";
import { useWordsMarker } from "../contexts/WordMarkerContext";
import { useWordLookup } from "../hooks/useWordLookup";
import { WordLookupEntry } from "../types/wordLookup";

export function WordLookup() {
  const { words } = useWordsMarker();
  const { lookup } = useWordLookup();

  const [entries, setEntries] = useState<WordLookupEntry[]>([]);

  const fetchEntries = async () => {
    const newWords = words.filter(
      (word) => !entries.find((e) => e.word === word)
    );
    const newEntries = await Promise.all(newWords.map((word) => lookup(word)));

    setEntries((entries) => {
      const remainingEntries = entries.filter((entry) =>
        words.includes(entry.word)
      );

      return [...remainingEntries, ...newEntries];
    });
  };

  useEffect(() => {
    if (words.length > 0) {
      fetchEntries();
    }
  }, [words]);

  return <WordLookupEntries entries={entries} />;
}
