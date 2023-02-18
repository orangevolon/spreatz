import { ComponentProps } from "react";
import { Pressable, StyleSheet, ViewStyle } from "react-native";
import { Text } from "./Text";
import { theme } from "./theme";

type OmitProps = "children" | "style";

interface Props extends Omit<ComponentProps<typeof Pressable>, OmitProps> {
  title: string;
  style?: ViewStyle;
  variant?: "primary" | "secondary";
}

export function Button({ title, style, variant = "primary", ...rest }: Props) {
  const baseStyle = styles.base;
  const variantStyle = styles[variant];

  return (
    <Pressable
      style={({ pressed }) => [
        baseStyle.button,
        variantStyle.button,
        pressed ? baseStyle.buttonPressed : undefined,
        style,
      ]}
      {...rest}
    >
      <Text variant="caption" style={[baseStyle.text, variantStyle.text]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = {
  base: StyleSheet.create({
    button: {
      paddingHorizontal: theme.spacing.l,
      paddingVertical: theme.spacing.m,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      borderRadius: theme.radius.round,
    },
    buttonPressed: {
      opacity: 0.6,
    },
    text: {
      fontWeight: "bold",
      textTransform: "uppercase",
    },
  }),
  primary: StyleSheet.create({
    button: {
      backgroundColor: theme.color.primaryButton.background,
    },
    text: {
      color: theme.color.primaryButton.foreground,
    },
  }),
  secondary: StyleSheet.create({
    button: {
      backgroundColor: theme.color.secondaryButton.background,
    },
    text: {
      color: theme.color.secondaryButton.foreground,
    },
  }),
};
