import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useWordsRegistry } from "../hooks/useWordsRegistry";
import { useWordsMarker } from "./WordMarkerContext";

export interface WordsContextType {
  pickedWords: string[];
  markedWords: string[];
  pickNewWords: () => string[];
  toggleWordMark: (word: string) => void;
}

const WORD_PICK_THRESHOLD = 1;

const defualtValue: WordsContextType = {
  pickedWords: [],
  markedWords: [],
  pickNewWords: () => [],
  toggleWordMark: () => {},
};

export const WordsContext = createContext(defualtValue);

export function WordsProvider({ children }: PropsWithChildren) {
  const [pickedWords, setPickedWords] = useState<string[]>([]);
  const { words: savedWords, promoteWords, demoteWords } = useWordsRegistry();
  const { words: markedWords, toggleWordMark, clearMarks } = useWordsMarker();

  const updateRegistry = () => {
    const wordsToPromote = markedWords;
    promoteWords(wordsToPromote);

    const wordsToDemote = pickedWords.filter(
      (word) => !markedWords.includes(word)
    );
    demoteWords(wordsToDemote);
  };

  const pickNewWords = () => {
    updateRegistry();

    const newWords = [...savedWords.entries()]
      .sort(([word1, weight1], [word2, weight2]) => weight2 - weight1)
      .slice(0, WORD_PICK_THRESHOLD)
      .map(([word]) => word);

    setPickedWords(newWords);
    clearMarks();

    return pickedWords;
  };

  return (
    <WordsContext.Provider
      value={{
        pickedWords,
        markedWords,
        pickNewWords,
        toggleWordMark,
      }}
    >
      {children}
    </WordsContext.Provider>
  );
}

export const useWords = () => useContext(WordsContext);
