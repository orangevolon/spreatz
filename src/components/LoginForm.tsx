import { StyleSheet, View } from 'react-native';
import { Button, Card, Text } from '../ui';
import { theme } from '../ui/theme';

interface Props {
  onLoginByGoogle: () => void;
}

export function LoginForm({ onLoginByGoogle }: Props) {
  return (
    <Card style={styles.container}>
      <View style={styles.textContainer}>
        <Text variant='large'>Wilkommen bei Spreatz!</Text>
        <Text>Wort für Wort lernen!</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button onPress={onLoginByGoogle} title='Login by Google' />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 0,
  },
  textContainer: {
    marginVertical: theme.spacing.l,
  },
  buttonsContainer: {
    alignSelf: 'stretch',
  },
});
