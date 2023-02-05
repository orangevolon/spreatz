import { ComponentProps } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "../ui";
import { theme } from "../ui/theme";

interface Props extends ComponentProps<typeof View> {
  button: {
    onPress: () => void;
    title: string;
    disabled?: boolean;
  };
}

export function Layout({ children, style, button, ...rest }: Props) {
  return (
    <View style={[styles.container, style]} {...rest}>
      <View style={styles.content}>{children}</View>
      <Button style={styles.button} {...button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.m,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  button: {
    marginTop: theme.spacing.m,
  },
});
