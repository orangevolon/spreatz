import "react-native-url-polyfill/auto";

import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Passage } from "./src/components/Passage";
import { theme } from "./src/ui/theme";
import { Main } from "./src/components/Main";
import { LanguageLevelProvider } from "./src/contexts/LanguageLevelContext";
import { WordsProvider } from "./src/contexts/WordsContext";

export default function App() {
  return (
    <LanguageLevelProvider>
      <WordsProvider>
        <SafeAreaView style={styles.container}>
          <Main />
        </SafeAreaView>
      </WordsProvider>
    </LanguageLevelProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.background,
    alignItems: "stretch",
  },
});
