import { useState } from "react";
import { useOpenaiPassage } from "./useOpenaiPassage";

export function usePassage() {
  const [passage, setPassage] = useState<string>();
  const [isGenerating, setIsGenerating] = useState(false);

  const { generate: generateOpenaiText } = useOpenaiPassage({
    level: "A1",
    words: ["gesundheit", "menschen"],
  });

  const generate = async () => {
    try {
      setIsGenerating(true);
      const text = await generateOpenaiText();
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
    isLoading: isGenerating,
  };
}
