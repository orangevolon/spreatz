import { ComponentProps } from "react";
import { StyleSheet } from "react-native";
import { Button } from "./Button";
import { ButtonBase } from "./ButtonBase";
import { theme } from "./theme";

type Props = ComponentProps<typeof Button>;

export function FlatButton({ style, ...rest }: Props) {
  return (
    <ButtonBase
      style={[styles.flatButton, style]}
      textStyle={styles.textStyle}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  flatButton: {
    paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.s,
  },
  textStyle: {
    color: theme.color.foreground,
  },
});
