import { TextPassage } from "../components/TextPassage";
import { useWordsMarker } from "../contexts/WordMarkerContext";
import { usePassage } from "../contexts/PassageContext";
import { useWordLookup } from "../hooks/useWordLookup";

export function Passage() {
  const { passage, isGenerating, sourceWords } = usePassage();
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
      sourceWords={sourceWords}
      onWordMark={handleWordMark}
    />
  );
}
