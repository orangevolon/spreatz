import { ComponentProps } from "react";
import { View } from "react-native";
import { theme } from "./theme";

interface Props extends ComponentProps<typeof View> {
  gap: keyof typeof theme.spacing;
}

export function Section({ style, gap, ...rest }: Props) {
  const marginBottom = theme.spacing[gap];
  return <View style={[{ marginBottom }, style]} {...rest} />;
}
