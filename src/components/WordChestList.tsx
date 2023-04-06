import React from 'react';
import { FlatList } from 'react-native';
import { WordChestEmpty } from './WordChestEmpty';
import { WordChestListItem } from './WordChestListItem';

interface Props {
  words: string[];
  onRemove: (word: string) => void;
}

export function WordChestList({ words, onRemove }: Props) {
  return (
    <FlatList
      data={words}
      ListEmptyComponent={<WordChestEmpty />}
      renderItem={({ item }) => (
        <WordChestListItem word={item} onRemove={() => onRemove(item)} />
      )}
      keyExtractor={item => item}
    />
  );
}
