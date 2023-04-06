import { FlatList } from 'react-native';
import { LookupEntry } from '../types/wordLookup';
import { WordLookupEntryItem } from './WordLookupEntryItem';

interface Props {
  entries: LookupEntry[];
  onEntryPress: (entry: LookupEntry) => void;
}

export function WordLookupEntries({ entries, onEntryPress }: Props) {
  return (
    <FlatList
      data={entries}
      renderItem={({ item }) => (
        <WordLookupEntryItem entry={item} onPress={() => onEntryPress(item)} />
      )}
    />
  );
}
