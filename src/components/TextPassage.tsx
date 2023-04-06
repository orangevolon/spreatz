import { ComponentProps } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Card, Text } from '../ui';
import { TextPick } from '../ui/TextPick';
import { theme } from '../ui/theme';

interface Props extends ComponentProps<typeof Card> {
  isLoading?: boolean;
  text: string;
  markedWords: string[];
  sourceWords: string[];
  onWordMark: (word: string) => void;
}

export function TextPassage({
  isLoading,
  text,
  style,
  markedWords,
  sourceWords,
  onWordMark,
  ...rest
}: Props) {
  return (
    <Card style={[styles.container, style]} {...rest}>
      <Text style={styles.sourceWords} variant='small'>
        {/* ISSUE: sourceWords can be undefined but TS returns wrong type on useState */}
        Source: {sourceWords?.join(', ')}
      </Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <TextPick
          variant='medium'
          pickedWords={markedWords}
          onWordPick={onWordMark}
        >
          {text}
        </TextPick>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  sourceWords: {
    marginBottom: theme.spacing.m,
    color: theme.color.foregroundSubdued,
  },
});
