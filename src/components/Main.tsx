import { StyleSheet } from "react-native";
import { useLanguageLevel } from "../contexts/LanguageLevelContext";
import { usePassage } from "../hooks/usePassage";
import { theme } from "../ui/theme";
import { LanguageLevel } from "./LanguageLevel";
import { Layout } from "./Layout";
import { Passage } from "./Passage";

export function Main() {
  const { languageLevel } = useLanguageLevel();
  const { passage, generate, isGenerating } = usePassage({ languageLevel });

  return (
    <Layout
      button={{
        onPress: generate,
        title: "Generate",
        disabled: isGenerating,
      }}
    >
      <LanguageLevel style={styles.languageLevel} />
      <Passage text={passage} isLoading={isGenerating} style={styles.passage} />
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
