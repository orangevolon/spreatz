import { ComponentProps } from "react";
import { StyleSheet, View } from "react-native";
import { theme } from "./theme";

interface Props extends ComponentProps<typeof View> {}

export function Card({ style, ...rest }: Props) {
  return <View style={[styles.card, style]} {...rest} />;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.color.elevatedBackground,
    borderRadius: theme.radius.crisp,
    padding: theme.spacing.m,
  },
});
