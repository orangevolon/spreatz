import { Text, StyleSheet, View, useWindowDimensions } from "react-native";
import { LookupEntry } from "../types/wordLookup";
import { theme } from "../ui/theme";
import RenderHtml from "react-native-render-html";
import { Card } from "../ui";

interface Props {
  entry: LookupEntry;
  onPress: () => void;
}

export function WordLookupEntryItem({ entry, onPress }: Props) {
  const { width } = useWindowDimensions();

  return (
    <Card style={styles.container} onPress={onPress}>
      <Text style={[styles.word, styles.block]}>{entry.word}</Text>
      <View style={styles.block}>
        <RenderHtml contentWidth={width} source={{ html: entry.details }} />
      </View>
      <View style={styles.block}>
        <RenderHtml contentWidth={width} source={{ html: entry.topDefinition }} />
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
