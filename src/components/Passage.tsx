import { ComponentProps } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useWordPick } from "../hooks/useWordPick";
import { Card } from "../ui";
import { TextPick } from "../ui/TextPick";

interface Props extends ComponentProps<typeof Card> {
  isLoading?: boolean;
  text: string;
}

export function Passage({ isLoading, text, style, ...rest }: Props) {
  const { toggleWord, words: pickedWords } = useWordPick();

  return (
    <Card style={[styles.container, style]} {...rest}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <TextPick
          variant="medium"
          pickedWords={pickedWords}
          onWordPick={toggleWord}
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
