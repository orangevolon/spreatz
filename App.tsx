import "react-native-url-polyfill/auto";

import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { theme } from "./src/ui/theme";
import { LanguageLevelProvider } from "./src/contexts/LanguageLevelContext";
import { Home } from "./src/screens/Home";
import { WordMarkerProvider } from "./src/contexts/WordMarkerContext";
import { WordsChestProvider } from "./src/contexts/WordsChestContext";
import { PassageProvider } from "./src/contexts/PassageContext";

export default function App() {
  return (
    <LanguageLevelProvider>
      <WordsChestProvider>
        <WordMarkerProvider>
          <PassageProvider useFake>
            <SafeAreaView style={styles.container}>
              <Home />
            </SafeAreaView>
          </PassageProvider>
        </WordMarkerProvider>
      </WordsChestProvider>
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
