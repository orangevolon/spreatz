import { WordLookupEntry as WordLookupEntryType } from "../types/wordLookup";
import { Card, Text } from "../ui";
import RenderHtml from "react-native-render-html";
import { ScrollView, useWindowDimensions, StyleSheet } from "react-native";
import { theme } from "../ui/theme";

interface Props {
  entry: WordLookupEntryType;
}

export function WordLookupEntry({ entry }: Props) {
  const { width } = useWindowDimensions();

  return (
    <ScrollView>
      <Card style={styles.section}>
        <Text variant="large">{entry.word}</Text>
        <RenderHtml contentWidth={width} source={{ html: entry.details }} />
      </Card>
      {entry.meanings.map((meaning) => (
        <Card style={styles.section}>
          <RenderHtml contentWidth={width} source={{ html: meaning.title }} />
          {meaning.definitions.map((definition) => (
            <RenderHtml contentWidth={width} source={{ html: definition }} />
          ))}
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: theme.spacing.m,
    marginVertical: theme.spacing.s,
  },
});
