import { Reducer, useReducer } from "react";

type WordPickAction =
  | {
      type: "ADD_WORD";
      word: string;
    }
  | {
      type: "REMOVE_WORD";
      word: string;
    }
  | {
      type: "TOGGLE_WORD";
      word: string;
    };

const defaultValue = new Set<string>();

function wordReducer(state: Set<string>, action: WordPickAction) {
  const newSet = new Set(state);

  switch (action.type) {
    case "ADD_WORD": {
      newSet.add(action.word);
      return newSet;
    }
    case "REMOVE_WORD": {
      newSet.delete(action.word);
      return newSet;
    }
    case "TOGGLE_WORD": {
      if (newSet.has(action.word)) {
        newSet.delete(action.word);
      } else {
        newSet.add(action.word);
      }
      return newSet;
    }
  }
}

export function useWordPick() {
  const [state, dispatch] = useReducer(wordReducer, defaultValue);

  const words = Array.from(state);
  const addWord = (word) => dispatch({ type: "ADD_WORD", word });
  const removeWord = (word) => dispatch({ type: "REMOVE_WORD", word });
  const toggleWord = (word) => dispatch({ type: "TOGGLE_WORD", word });

  return {
    words,
    addWord,
    removeWord,
    toggleWord,
  };
}
