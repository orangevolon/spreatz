import { useEffect, useState } from "react";
import { useWords } from "../contexts/WordsContext";
import { LanguageLevel } from "../types";
import { handleError } from "../utils/errors";
import { useOpenaiPassage } from "./useOpenaiPassage";

interface Props {
  languageLevel: LanguageLevel;
}

export function usePassage({ languageLevel }: Props) {
  const [passage, setPassage] = useState<string>();
  const [isGenerating, setIsGenerating] = useState(false);
  const { generate: generateOpenaiText } = useOpenaiPassage({ useFake: false });

  const generate = async (words: string[]) => {
    try {
      setIsGenerating(true);
      const text = await generateOpenaiText({
        level: languageLevel,
        words,
      });
      setPassage(text);
    } catch (error) {
      handleError(error);
    } finally {
      setIsGenerating(false);
    }
  };

  return {
    generate,
    passage,
    isGenerating,
  };
}
