import { useMemo } from 'react';
import { WordChestList } from '../components/WordChestList';
import { useWordsChest } from '../contexts/WordsChestContext';

export function WordChest() {
  const { words, removeWord } = useWordsChest();

  const wordsList = useMemo(() => {
    return [...words.entries()]
      .sort(([, weight1], [, weight2]) => (weight1 > weight2 ? -1 : 1))
      .map(([word]) => word);
  }, [words]);

  return <WordChestList words={wordsList} onRemove={removeWord} />;
}
