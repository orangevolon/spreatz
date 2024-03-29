import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { WordLookupEntries } from '../components/WordLookupEntries';
import { usePassage } from '../contexts/PassageContext';
import { useWordsMarker } from '../contexts/WordMarkerContext';
import { useWordLookup } from '../hooks/useWordLookup';
import { LookupEntry } from '../types/wordLookup';

export function WordLookup() {
  const { words } = useWordsMarker();
  const { lookup } = useWordLookup();
  const { passage } = usePassage();
  const { navigate } = useNavigation();

  const [entries, setEntries] = useState<LookupEntry[]>([]);

  const fetchNewlyMarkedWords = async () => {
    const newWords = words.filter(word => !entries.find(e => e.word === word));
    const newEntries = await Promise.all(newWords.map(word => lookup(word)));

    setEntries(entries => {
      const remainingEntries = entries.filter(entry =>
        words.includes(entry.word)
      );

      return [...remainingEntries, ...newEntries];
    });
  };

  const handleEntityPress = (entry: LookupEntry) => {
    // @ts-ignore
    navigate('LookupEntry', { entry });
  };

  useEffect(() => {
    if (words.length > 0) {
      fetchNewlyMarkedWords();
    } else {
      setEntries([]);
    }
  }, [words]);

  useEffect(() => {
    setEntries([]);
  }, [passage]);

  return (
    <WordLookupEntries entries={entries} onEntryPress={handleEntityPress} />
  );
}
