import { useState } from "react";
import { LanguageLevel } from "../types";
import { useOpenaiPassage } from "./useOpenaiPassage";

interface Props {
  languageLevel: LanguageLevel;
}

export function usePassage({ languageLevel }: Props) {
  const [passage, setPassage] = useState<string>();
  const [isGenerating, setIsGenerating] = useState(false);

  const { generate: generateOpenaiText } = useOpenaiPassage({ useFake: true });

  const generate = async () => {
    try {
      setIsGenerating(true);
      const text = await generateOpenaiText({
        level: languageLevel,
        words: ["gesundheit", "menschen"],
      });
      setPassage(text);
    } catch (error) {
      // TODO: add error handling later
      console.error(error);
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
