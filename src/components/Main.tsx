import { StyleSheet } from "react-native";
import { usePassage } from "../hooks/usePassage";
import { Layout } from "./Layout";
import { Passage } from "./Passage";

export function Main() {
  const { passage, generate, isGenerating } = usePassage();

  return (
    <Layout
      button={{
        onPress: generate,
        title: "Generate",
        disabled: isGenerating,
      }}
    >
      <Passage text={passage} isLoading={isGenerating} style={styles.passage} />
    </Layout>
  );
}

const styles = StyleSheet.create({
  passage: {
    flex: 0.5,
  },
});
