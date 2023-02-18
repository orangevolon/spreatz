import { createContext, useContext, useEffect, useReducer } from "react";
import { useStorage } from "../hooks/useStorage";

type WordsRegistryAction =
  | {
      type: "PROMOTE_WORDS";
      words: string[];
    }
  | {
      type: "DEMOTE_WORDS";
      words: string[];
    }
  | {
      type: "SET_WORDS";
      words: Map<string, number>;
    }
  | {
      type: "REMOVE_WORD";
      word: string;
    };

const MIN_WORD_WEIGHT = 1;
const defaultState = new Map<string, number>();

function wordsRegistryReducer(
  state: Map<string, number>,
  action: WordsRegistryAction
) {
  switch (action.type) {
    case "PROMOTE_WORDS": {
      const newMap = new Map(state);
      for (const word of action.words) {
        const wordWeight = newMap.get(word);

        if (wordWeight) {
          newMap.set(word, wordWeight + 1);
        } else {
          newMap.set(word, MIN_WORD_WEIGHT);
        }
      }

      return newMap;
    }

    case "DEMOTE_WORDS": {
      const newMap = new Map(state);
      for (const word of action.words) {
        if (!newMap.has(word)) {
          return newMap;
        }

        const wordWeight = newMap.get(word);

        if (wordWeight > MIN_WORD_WEIGHT) {
          newMap.set(word, wordWeight - 1);
        } else {
          newMap.delete(word);
        }
      }

      return newMap;
    }

    case "REMOVE_WORD": {
      const newMap = new Map(state);
      newMap.delete(action.word);
      return newMap;
    }

    case "SET_WORDS": {
      return new Map(action.words);
    }
  }
}
export interface WordsChestContextType {
  words: Map<string, number>;
  promoteWords: (words: string[]) => void;
  demoteWords: (words: string[]) => void;
  removeWord: (word: string) => void;
}

const defaultValue: WordsChestContextType = {
  words: new Map<string, number>(),
  promoteWords: () => {},
  demoteWords: () => {},
  removeWord: () => {},
};

export function WordsChestProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [words, dispatch] = useReducer(wordsRegistryReducer, defaultState);
  const { saveIfChanged, retrieve } = useStorage("WORDS_CHEST");

  const promoteWords = (words: string[]) =>
    dispatch({ type: "PROMOTE_WORDS", words });
  const demoteWords = (words: string[]) =>
    dispatch({ type: "DEMOTE_WORDS", words });
  const removeWord = (word: string) => dispatch({ type: "REMOVE_WORD", word });
  const setWords = (words: Map<string, number>) =>
    dispatch({ type: "SET_WORDS", words });

  useEffect(() => {
    const topTenWords = [...words.entries()]
      .sort(([, weight1], [, weight2]) => weight2 - weight1)
      .slice(0, 10);

    console.table(topTenWords);
  }, [words]);

  useEffect(() => {
    retrieveWords();
  }, []);

  useEffect(() => {
    saveIfChanged(Object.fromEntries(words));
  }, [words]);

  const retrieveWords = async () => {
    const wordsObject = await retrieve();
    const wordsMap = new Map(Object.entries(wordsObject));
    setWords(wordsMap);
  };

  const value = {
    words,
    removeWord,
    promoteWords,
    demoteWords,
  };

  return (
    <WordsChestContext.Provider value={value}>
      {children}
    </WordsChestContext.Provider>
  );
}

export const WordsChestContext = createContext(defaultValue);
export const useWordsChest = () => useContext(WordsChestContext);
