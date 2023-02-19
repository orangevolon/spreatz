import { FlatList } from "react-native";
import { WordLookupEntry } from "../types/wordLookup";
import { WordLookupEntryItem } from "./WordLookupEntryItem";

interface Props {
  entries: WordLookupEntry[];
  onEntryPress: (entry: WordLookupEntry) => void;
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
