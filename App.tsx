import "react-native-url-polyfill/auto";

import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { theme } from "./src/ui/theme";
import { LanguageLevelProvider } from "./src/contexts/LanguageLevelContext";
import { WordsProvider } from "./src/contexts/WordsContext";
import { Home } from "./src/screens/Home";
import { WordMarkerProvider } from "./src/contexts/WordMarkerContext";

export default function App() {
  return (
    <LanguageLevelProvider>
      <WordMarkerProvider>
        <WordsProvider>
          <SafeAreaView style={styles.container}>
            <Home />
          </SafeAreaView>
        </WordsProvider>
      </WordMarkerProvider>
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
