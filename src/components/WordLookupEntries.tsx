import { FlatList, ScrollView } from "react-native";
import { WordLookupEntry } from "../types/wordLookup";
import { WordLookupEntryItem } from "./WordLookupEntryItem";

interface Props {
  entries: WordLookupEntry[];
}

export function WordLookupEntries({ entries }: Props) {
  return (
    <FlatList
      data={entries}
      renderItem={({ item }) => <WordLookupEntryItem entry={item} />}
    />
  );
}
