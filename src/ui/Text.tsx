import { ComponentProps } from "react";
import { Text as RNText, StyleSheet } from "react-native";
import { theme } from "./theme";

interface Props extends ComponentProps<typeof RNText> {
  variant?: "small" | "medium" | "large" | "caption";
}

export function Text({ variant = "medium", style, ...rest }: Props) {
  const baseStyle = buildStyle(theme.typography[variant]);

  return <RNText style={[baseStyle.text, style]} {...rest} />;
}

type ValueOf<T> = T[keyof T];
type Typography = ValueOf<typeof theme["typography"]>;

function buildStyle(typography: Typography) {
  return StyleSheet.create({
    text: typography,
  });
}
