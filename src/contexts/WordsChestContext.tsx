import { createContext, useContext, useReducer } from "react";

type WordsRegistryAction =
  | {
      type: "PROMOTE_WORDS";
      words: string[];
    }
  | {
      type: "DEMOTE_WORDS";
      words: string[];
    };

const MIN_WORD_WEIGHT = 1;
const defaultState = new Map<string, number>();

function wordsRegistryReducer(
  state: Map<string, number>,
  action: WordsRegistryAction
) {
  const newMap = new Map(state);

  switch (action.type) {
    case "PROMOTE_WORDS": {
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
  }
}
export interface WordsChestContextType {
  words: Map<string, number>;
  promoteWords: (words: string[]) => void;
  demoteWords: (words: string[]) => void;
}

const defaultValue: WordsChestContextType = {
  words: new Map<string, number>(),
  promoteWords: () => {},
  demoteWords: () => {},
};

export function WordsChestProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [words, dispatch] = useReducer(wordsRegistryReducer, defaultState);
  console.log("here", "words", words);

  const promoteWords = (words: string[]) =>
    dispatch({ type: "PROMOTE_WORDS", words });
  const demoteWords = (words: string[]) =>
    dispatch({ type: "DEMOTE_WORDS", words });

  const value = {
    words,
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
