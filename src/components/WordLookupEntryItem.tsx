import { View, Text, StyleSheet } from "react-native";
import { WordLookupEntry } from "../types/wordLookup";
import { theme } from "../ui/theme";

interface Props {
  entry: WordLookupEntry;
}

export function WordLookupEntryItem({ entry }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.word}>{entry.word}</Text>
      <Text style={styles.meaning}>{entry.meaning}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.m,
  },
  word: {
    ...theme.typography.large,
  },
  meaning: {
    ...theme.typography.medium,
  },
});
