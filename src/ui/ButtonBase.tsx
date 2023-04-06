import { ComponentProps } from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { Text } from './Text';
import { theme } from './theme';

type OmitProps = 'children' | 'style';

interface Props extends Omit<ComponentProps<typeof Pressable>, OmitProps> {
  title: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export function ButtonBase({ title, style, textStyle, ...rest }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed ? styles.buttonPressed : undefined,
        style,
      ]}
      {...rest}
    >
      <Text variant='caption' style={[styles.text, textStyle]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: theme.spacing.s,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.6,
  },
  text: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
