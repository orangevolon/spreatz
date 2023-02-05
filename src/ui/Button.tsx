import { ComponentProps } from "react";
import { Pressable, StyleSheet, ViewStyle } from "react-native";
import { Text } from "./Text";
import { theme } from "./theme";

type OmitProps = "children" | "style";

interface Props extends Omit<ComponentProps<typeof Pressable>, OmitProps> {
  title: string;
  style?: ViewStyle;
}

export function Button({ title, style, ...rest }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed ? styles.buttonPressed : undefined,
        style,
      ]}
      {...rest}
    >
      <Text variant="caption" style={styles.text}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: theme.spacing.l,
    paddingVertical: theme.spacing.m,
    backgroundColor: theme.color.buttonBackground,
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
    color: theme.color.buttonForeground,
  },
});
