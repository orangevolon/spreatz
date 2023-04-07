import { useNavigation, useRoute } from '@react-navigation/native';
import { AppLayout } from '../components/AppLayout';
import { WordLookupEntry } from '../components/WordLookupEntry';

export function LookupEntryScreen() {
  const { goBack } = useNavigation();
  const { params } = useRoute();

  return (
    <AppLayout button={{ onPress: goBack, title: 'Back' }}>
      {/* @ts-ignore */}
      <WordLookupEntry entry={params.entry} />
    </AppLayout>
  );
}
