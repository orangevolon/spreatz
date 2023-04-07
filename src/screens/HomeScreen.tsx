import { LanguageLevel } from '../containers/LanguageLevel';
import { AppLayout } from '../components/AppLayout';
import { WordLookup } from '../containers/WordLookup';
import { Passage } from '../containers/Passage';
import { Section } from '../ui/Section';
import { useGenerate } from '../hooks/useGenerate';
import { useNavigation } from '@react-navigation/native';

function HomeSection({ children }) {
  return <Section gap='m'>{children}</Section>;
}

export function HomeScreen() {
  const { isGenerating, generate } = useGenerate();
  const navigate = useNavigation();

  const handleNavigateToWordChest = () => {
    // @ts-ignore
    navigate.navigate('WordChest');
  };

  return (
    <AppLayout
      button={{
        onPress: generate,
        title: 'Generate',
        disabled: isGenerating,
      }}
      secondaryButton={{
        onPress: handleNavigateToWordChest,
        title: 'Word Chest',
      }}
    >
      <HomeSection>
        <LanguageLevel />
      </HomeSection>
      <HomeSection>
        <Passage />
      </HomeSection>
      <HomeSection>
        <WordLookup />
      </HomeSection>
    </AppLayout>
  );
}
