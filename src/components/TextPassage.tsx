import { ComponentProps } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Card } from "../ui";
import { TextPick } from "../ui/TextPick";

interface Props extends ComponentProps<typeof Card> {
  isLoading?: boolean;
  text: string;
  markedWords: string[];
  onWordMark: (word: string) => void;
}

export function TextPassage({
  isLoading,
  text,
  style,
  markedWords,
  onWordMark,
  ...rest
}: Props) {
  return (
    <Card style={[styles.container, style]} {...rest}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <TextPick
          variant="medium"
          pickedWords={markedWords}
          onWordPick={onWordMark}
        >
          {text}
        </TextPick>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
