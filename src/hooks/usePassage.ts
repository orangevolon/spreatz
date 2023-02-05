import { useState } from "react";
import { openai } from "../openai";

export function usePassage() {
  const [passage, setPassage] = useState<string>();
  const [isGenerating, setIsGenerating] = useState(false);

  const generate = async () => {
    try {
      setIsGenerating(true);

      const { data } = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Write something in German!",
      });

      const { text } = data.choices[0];
      setPassage(text);
    } catch (error) {
      // Will add an error handler later
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
