import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { useLanguageLevel } from "../contexts/LanguageLevelContext";
import { useWords } from "../contexts/WordsContext";
import { usePassage } from "../hooks/usePassage";
import { useWordLookup } from "../hooks/useWordLookup";
import { theme } from "../ui/theme";
import { LanguageLevel } from "./LanguageLevel";
import { Layout } from "./Layout";
import { Passage } from "./Passage";

export function Main() {
  const { languageLevel } = useLanguageLevel();
  const { markedWords, toggleWordMark, pickNewWords } = useWords();
  const { passage, generate, isGenerating } = usePassage({ languageLevel });
  const { lookup } = useWordLookup();

  const handleGeneratePress = () => {
    const newWords = pickNewWords();
    generate(newWords);
  };

  const handleWordMark = async (word: string) => {
    toggleWordMark(word);

    await lookup(word);
  };

  return (
    <Layout
      button={{
        onPress: handleGeneratePress,
        title: "Generate",
        disabled: isGenerating,
      }}
    >
      <LanguageLevel style={styles.languageLevel} />
      <Passage
        text={passage}
        isLoading={isGenerating}
        style={styles.passage}
        markedWords={markedWords}
        onWordMark={handleWordMark}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  languageLevel: {
    marginBottom: theme.spacing.m,
  },
  passage: {
    flex: 0.5,
  },
});
