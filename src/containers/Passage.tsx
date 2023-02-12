import { TextPassage } from "../components/TextPassage";
import { useLanguageLevel } from "../contexts/LanguageLevelContext";
import { useWordsMarker } from "../contexts/WordMarkerContext";
import { usePassage } from "../contexts/PassageContext";
import { useWordLookup } from "../hooks/useWordLookup";

export function Passage() {
  const { languageLevel } = useLanguageLevel();
  const { passage, isGenerating } = usePassage({ languageLevel });
  const { words: markedWords, toggleWordMark } = useWordsMarker();
  const { lookup } = useWordLookup();

  const handleWordMark = (word: string) => {
    toggleWordMark(word);
    lookup(word);
  };

  return (
    <TextPassage
      text={passage}
      isLoading={isGenerating}
      markedWords={markedWords}
      onWordMark={handleWordMark}
    />
  );
}
