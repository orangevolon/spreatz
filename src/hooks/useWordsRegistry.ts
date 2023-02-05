import { useReducer } from "react";

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

export function useWordsRegistry() {
  const [state, dispatch] = useReducer(wordsRegistryReducer, defaultState);

  const words = state;
  const promoteWords = (words: string[]) =>
    dispatch({ type: "PROMOTE_WORDS", words });
  const demoteWords = (words: string[]) =>
    dispatch({ type: "DEMOTE_WORDS", words });

  return {
    words,
    promoteWords,
    demoteWords,
  };
}
