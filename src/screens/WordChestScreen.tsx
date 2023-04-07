import { useNavigation } from '@react-navigation/native';
import { AppLayout } from '../components/AppLayout';
import { WordChest } from '../containers/WordChest';

export function WordChestScreen() {
  const { goBack } = useNavigation();

  return (
    <AppLayout
      button={{
        onPress: goBack,
        title: 'Back',
      }}
    >
      <WordChest />
    </AppLayout>
  );
}
