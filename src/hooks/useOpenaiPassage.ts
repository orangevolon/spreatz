import { openai } from "../openai";

interface Props {
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  words: string[];
}

const MAX_TOKENS = 4097;

export function useOpenaiPassage({ level, words }: Props) {
  const generate = async () => {
    const prompt = buildPrompt(words, level);
    const maxTokens = MAX_TOKENS - prompt.length;

    const { data } = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: maxTokens,
    });

    return data.choices[0].text;
  };

  return { generate };
}

function buildPrompt(words: Props["words"], level: Props["level"]) {
  return `Write a paragraph of text in German with words: ${words.join(
    ","
  )} at level ${level}`;
}
