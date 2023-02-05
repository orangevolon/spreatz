import { openai } from "../openai";
import { LanguageLevel } from "../types";

interface Props {
  useFake?: boolean;
}

interface GenerateProps {
  level: LanguageLevel;
  words: string[];
}

const MAX_TOKENS = 4097;
const TEXT_MODEL = "text-davinci-003";

export function useOpenaiPassage({ useFake = false } = {}) {
  const generateFake = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return FAKE_TEXT;
  };

  const generate = async ({ level, words }: GenerateProps) => {
    if (useFake) {
      return generateFake();
    }

    const prompt = buildPrompt(words, level);
    const maxTokens = MAX_TOKENS - prompt.length;

    const { data } = await openai.createCompletion({
      model: TEXT_MODEL,
      prompt,
      max_tokens: maxTokens,
    });

    return data.choices[0].text;
  };

  return { generate };
}

function buildPrompt(words: string[], level: LanguageLevel) {
  if (!words.length) {
    return `Write one paragraph of German text at level ${level}`;
  }

  const concatenatedWords = words.join(",");
  return `Write one paragraph of German text with words: ${concatenatedWords} at level ${level}`;
}

const FAKE_TEXT =
  "\n\nGesundheit ist sehr wichtig für alle Menschen. Es ist wichtig, dass Menschen gesund bleiben, um ein glückliches und erfülltes Leben zu führen.";
