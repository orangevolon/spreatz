import { Text, StyleSheet, View } from "react-native";
import { WordLookupEntry } from "../types/wordLookup";
import { theme } from "../ui/theme";
import RenderHtml from "react-native-render-html";
import { Card } from "../ui";

interface Props {
  entry: WordLookupEntry;
}

export function WordLookupEntryItem({ entry }: Props) {
  return (
    <Card style={styles.container}>
      <Text style={[styles.word, styles.block]}>{entry.word}</Text>
      <View style={styles.block}>
        <RenderHtml source={{ html: entry.details }} />
      </View>
      <View style={styles.block}>
        <RenderHtml source={{ html: entry.meaning }} />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.m,
    marginBottom: theme.spacing.s,
  },
  word: {
    ...theme.typography.large,
  },
  block: {
    marginBottom: theme.spacing.s,
  },
});
