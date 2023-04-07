import { ComponentProps } from 'react';
import { StyleSheet, View } from 'react-native';
import { theme } from '../ui/theme';

interface Props extends ComponentProps<typeof View> {
  contentStyle?: ComponentProps<typeof View>['style'];
}

export function AuthLayout({ children, style, contentStyle, ...rest }: Props) {
  return (
    <View style={[styles.container, style]} {...rest}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.m,
    flex: 1,
  },
});
