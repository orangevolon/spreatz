import { ComponentProps, useMemo } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { sanitizeWord } from "../utils/sanitizeWord";
import { Text } from "./Text";
import { theme } from "./theme";

interface Props extends ComponentProps<typeof Text> {
  pickedWords?: string[];
  onWordPick?: (word: string, index: number) => void;
}

const WHITESPACE = " ";
const MARKER_PADDING = theme.spacing.xxs;

export function TextPick({
  children,
  pickedWords,
  onWordPick,
  ...rest
}: Props) {
  const sanitizedPickedWords = useMemo(
    () => pickedWords?.map(sanitizeWord),
    [pickedWords]
  );

  const handleWordPick = (word: string, index: number) => {
    const sanitizedWord = sanitizeWord(word);
    onWordPick(sanitizedWord, index);
  };

  const words = useMemo(() => {
    if (typeof children !== "string") {
      return children;
    }

    const words = children.split(/\s/);

    return words.map((word, index) => {
      const pickedWord = sanitizedPickedWords?.includes(sanitizeWord(word));
      const arrayKey = `${word}-${index}`;

      return (
        <>
          <Pressable
            onPress={() => handleWordPick(word, index)}
            key={arrayKey}
            style={({ pressed }) => [
              styles.wordBase,
              pressed ? styles.wordPressed : undefined,
              pickedWord ? [styles.wordSelected] : undefined,
            ]}
          >
            {pickedWord ? <View style={styles.wordSelectedMarker} /> : null}
            <Text>{word}</Text>
          </Pressable>
          {WHITESPACE}
        </>
      );
    });
  }, [children, pickedWords]);

  return <Text {...rest}>{words}</Text>;
}

const styles = StyleSheet.create({
  wordSelectedMarker: {
    position: "absolute",
    left: -MARKER_PADDING,
    top: -MARKER_PADDING,
    right: -MARKER_PADDING,
    bottom: -MARKER_PADDING,
    backgroundColor: theme.color.selectedWord,
    borderRadius: theme.radius.crisp,
  },
  wordBase: {
    position: "relative",
  },
  wordSelected: {
    // nothing yet
  },
  wordPressed: {
    opacity: 0.5,
  },
});
