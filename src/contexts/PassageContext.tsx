import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { LanguageLevel } from '../types';
import { handleError } from '../utils/errors';
import { useOpenaiPassage } from '../hooks/useOpenaiPassage';

const DEFAULT_LANGUAGE_LEVEL: LanguageLevel = 'A1';

interface Props {
  useFake?: boolean;
}

export function PassageProvider({
  children,
  useFake,
}: PropsWithChildren<Props>) {
  const [sourceWords, setSourceWords] = useState<string[]>();
  const [passage, setPassage] = useState<string>();
  const [isGenerating, setIsGenerating] = useState(false);
  const { generate: generateOpenaiText } = useOpenaiPassage({ useFake });

  const generate = async ({ words, languageLevel }: GenerateProps) => {
    try {
      if (words && words.length) {
        console.log(
          `Generating ${languageLevel} passage with words: ${words.join(', ')}`
        );
      } else {
        console.log(
          `Generating ${languageLevel} passage with no initial words`
        );
      }

      setSourceWords(words);
      setIsGenerating(true);
      const text = await generateOpenaiText({
        level: languageLevel ?? DEFAULT_LANGUAGE_LEVEL,
        words,
      });
      setPassage(text);
    } catch (error) {
      handleError(error);
    } finally {
      setIsGenerating(false);
    }
  };

  const value = {
    sourceWords,
    generate,
    passage,
    isGenerating,
  };

  return (
    <PassageContext.Provider value={value}>{children}</PassageContext.Provider>
  );
}

interface GenerateProps {
  words?: string[];
  languageLevel?: LanguageLevel;
}

export interface PassageContextType {
  generate: (props?: GenerateProps) => Promise<void>;
  sourceWords: string[] | undefined;
  passage: string | undefined;
  isGenerating: boolean;
}

const defaultValue: PassageContextType = {
  generate: () => Promise.resolve(),
  sourceWords: undefined,
  passage: undefined,
  isGenerating: false,
};

export const PassageContext = createContext(defaultValue);
export const usePassage = () => useContext(PassageContext);
