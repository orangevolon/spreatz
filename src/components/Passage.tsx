import { ComponentProps } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { usePassage } from "../hooks/usePassage";
import { Button, Text, Card } from "../ui";

interface Props extends ComponentProps<typeof Card> {
  isLoading?: boolean;
  text: string;
}

export function Passage({ isLoading, text, style, ...rest }: Props) {
  return (
    <Card style={[styles.container, style]} {...rest}>
      {isLoading ? <ActivityIndicator /> : <Text variant="medium">{text}</Text>}
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
