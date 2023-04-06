import { ComponentProps } from 'react';
import { StyleSheet } from 'react-native';
import { ButtonBase } from './ButtonBase';
import { theme } from './theme';
interface Props extends ComponentProps<typeof ButtonBase> {
  variant?: 'primary' | 'secondary';
}

export function Button({
  style,
  textStyle,
  variant = 'primary',
  ...rest
}: Props) {
  const baseStyle = styles.base;
  const variantStyle = styles[variant];

  return (
    <ButtonBase
      style={[baseStyle.button, variantStyle.button, style]}
      textStyle={[variantStyle.text, textStyle]}
      {...rest}
    />
  );
}

const styles = {
  base: StyleSheet.create({
    button: {
      paddingHorizontal: theme.spacing.l,
      paddingVertical: theme.spacing.m,
      borderRadius: theme.radius.round,
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
