import { useEffect } from "react";
import { useLanguageLevel } from "../contexts/LanguageLevelContext";
import { usePassage } from "../contexts/PassageContext";
import { useWordsMarker } from "../contexts/WordMarkerContext";
import { useWordsChest } from "../contexts/WordsChestContext";

const WORD_PICK_THRESHOLD = 1;

export function useGenerate() {
  const { languageLevel } = useLanguageLevel();
  const { words: markedWords, clearMarks } = useWordsMarker();
  const { words: savedWords, promoteWords, demoteWords } = useWordsChest();
  const { isGenerating, generate: generatePassage, sourceWords } = usePassage();

  const updateWordsChest = () => {
    const wordsToPromote = markedWords;
    const wordsToDemote =
      sourceWords?.filter((word) => !markedWords.includes(word)) ?? [];

    promoteWords(wordsToPromote);
    demoteWords(wordsToDemote);
  };

  const drawWordsFromChest = () => {
    const newWords = [...savedWords.entries()]
      .sort(([, weight1], [, weight2]) => weight2 - weight1)
      .slice(0, WORD_PICK_THRESHOLD)
      .map(([word]) => word);

    return newWords;
  };

  const generate = () => {
    updateWordsChest();
    clearMarks();
  };

  useEffect(() => {
    const words = drawWordsFromChest();
    generatePassage({ words, languageLevel });
  }, [savedWords]);

  return {
    generate,
    isGenerating,
  };
}
