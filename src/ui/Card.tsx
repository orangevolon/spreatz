import { ComponentProps } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { theme } from './theme';

interface Props extends ComponentProps<typeof View> {
  onPress?: ComponentProps<typeof Pressable>['onPress'];
}

export function Card({ style, onPress, ...rest }: Props) {
  const card = <View style={[styles.card, style]} {...rest} />;

  if (onPress) {
    return (
      <Pressable
        style={({ pressed }) => (pressed ? styles.cardPressed : undefined)}
        onPress={onPress}
      >
        {card}
      </Pressable>
    );
  } else {
    return card;
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.color.elevatedBackground,
    borderRadius: theme.radius.crisp,
    padding: theme.spacing.m,
  },
  cardPressed: {
    opacity: 0.6,
  },
});
