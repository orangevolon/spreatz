import { ComponentProps } from "react";
import { Text as RNText, StyleSheet } from "react-native";
import { theme } from "./theme";

interface Props extends ComponentProps<typeof RNText> {
  variant?: "small" | "medium" | "large" | "caption";
  textAlign?: "left" | "center" | "right";
}

export function Text({ variant = "medium", textAlign, style, ...rest }: Props) {
  const baseStyle = buildStyle(theme.typography[variant], textAlign);

  return <RNText style={[baseStyle.text, style]} {...rest} />;
}

type ValueOf<T> = T[keyof T];
type Typography = ValueOf<typeof theme["typography"]>;

function buildStyle(typography: Typography, textAlign: Props["textAlign"]) {
  return StyleSheet.create({
    text: {
      ...typography,
      textAlign,
    },
  });
}
