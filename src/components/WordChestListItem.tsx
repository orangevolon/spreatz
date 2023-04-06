import { StyleSheet } from 'react-native';
import { Card, Text } from '../ui';
import { FlatButton } from '../ui/FlatButton';
import { theme } from '../ui/theme';

interface Props {
  word: string;
  onRemove: () => void;
}

export function WordChestListItem({ word, onRemove }: Props) {
  return (
    <Card style={styles.container}>
      <Text variant='medium' style={styles.text}>
        {word}
      </Text>
      <FlatButton onPress={onRemove} title='Remove' />
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.m,
    marginVertical: theme.spacing.s,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    flex: 1,
  },
});
