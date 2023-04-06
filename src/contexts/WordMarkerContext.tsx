import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from 'react';

export interface WordMarkerContextType {
  words: string[];
  addWord: (word: string) => void;
  removeWord: (word: string) => void;
  toggleWordMark: (word: string) => void;
  clearMarks: () => void;
}

const defaultValue: WordMarkerContextType = {
  words: [],
  addWord: () => {},
  removeWord: () => {},
  toggleWordMark: () => {},
  clearMarks: () => {},
};

export const WordMarkerContext = createContext(defaultValue);

type WordPickAction =
  | {
      type: 'ADD_WORD_MARK';
      word: string;
    }
  | {
      type: 'REMOVE_WORD_MARK';
      word: string;
    }
  | {
      type: 'TOGGLE_WORD_MARK';
      word: string;
    }
  | {
      type: 'CLEAR_MARKS';
    };

function wordReducer(state: Set<string>, action: WordPickAction) {
  const newSet = new Set(state);

  switch (action.type) {
    case 'ADD_WORD_MARK': {
      newSet.add(action.word);
      return newSet;
    }
    case 'REMOVE_WORD_MARK': {
      newSet.delete(action.word);
      return newSet;
    }
    case 'TOGGLE_WORD_MARK': {
      if (newSet.has(action.word)) {
        newSet.delete(action.word);
      } else {
        newSet.add(action.word);
      }
      return newSet;
    }
    case 'CLEAR_MARKS': {
      return new Set<string>();
    }
  }
}

export function WordMarkerProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(wordReducer, new Set<string>());

  const words = Array.from(state);
  const addWord = word => dispatch({ type: 'ADD_WORD_MARK', word });
  const removeWord = word => dispatch({ type: 'REMOVE_WORD_MARK', word });
  const toggleWordMark = word => dispatch({ type: 'TOGGLE_WORD_MARK', word });
  const clearMarks = () => dispatch({ type: 'CLEAR_MARKS' });

  const value = {
    words,
    addWord,
    removeWord,
    toggleWordMark,
    clearMarks,
  };

  return (
    <WordMarkerContext.Provider value={value}>
      {children}
    </WordMarkerContext.Provider>
  );
}

export const useWordsMarker = () => useContext(WordMarkerContext);
