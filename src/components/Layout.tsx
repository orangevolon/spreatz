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
  secondaryButton?: {
    onPress: () => void;
    title: string;
    disabled?: boolean;
  };
  contentStyle?: ComponentProps<typeof View>["style"];
}

export function Layout({
  children,
  style,
  contentStyle,
  button,
  secondaryButton,
  ...rest
}: Props) {
  return (
    <View style={[styles.container, style]} {...rest}>
      <View style={[styles.content, contentStyle]}>{children}</View>
      <View style={styles.buttonsContainer}>
        {secondaryButton ? (
          <Button style={styles.secondaryButton} {...secondaryButton} />
        ) : null}
        <Button style={styles.button} {...button} />
      </View>
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
  buttonsContainer: {
    marginTop: theme.spacing.m,
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
  secondaryButton: {
    flex: 1,
    marginRight: theme.spacing.s,
  },
});
