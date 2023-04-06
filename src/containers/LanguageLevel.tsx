import { ComponentProps, useEffect } from 'react';
import { Pressable } from 'react-native';
import { useLanguageLevel } from '../contexts/LanguageLevelContext';
import { useSelector } from '../hooks/useSelector';
import { LanguageLevel as LanguageLevelType } from '../types';
import { Card, Text } from '../ui';

interface Props extends ComponentProps<typeof Card> {}

const languageLevels = [
  'A1',
  'A2',
  'B1',
  'B2',
  'C1',
  'C2',
] as LanguageLevelType[];

export function LanguageLevel(props: Props) {
  const { languageLevel, setLanguageLevel } = useLanguageLevel();
  const { selectedValue, show } = useSelector<LanguageLevelType>();

  const handleCardPress = () => {
    show(languageLevels);
  };

  useEffect(() => {
    if (selectedValue) {
      setLanguageLevel(selectedValue);
    }
  }, [selectedValue]);

  const text = `Your language level: ${languageLevel || 'unspecified'}`;

  return (
    <Pressable onPress={handleCardPress}>
      <Card {...props}>
        <Text variant='medium'>{text}</Text>
      </Card>
    </Pressable>
  );
}
