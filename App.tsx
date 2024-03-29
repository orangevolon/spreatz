import "react-native-url-polyfill/auto";

import { SafeAreaView, StyleSheet } from "react-native";
import { theme } from "./src/ui/theme";
import { LanguageLevelProvider } from "./src/contexts/LanguageLevelContext";
import { WordMarkerProvider } from "./src/contexts/WordMarkerContext";
import { WordsChestProvider } from "./src/contexts/WordsChestContext";
import { PassageProvider } from "./src/contexts/PassageContext";
import { AppNavigator } from "./src/containers/AppNavigator";

export default function App() {
  return (
    <LanguageLevelProvider>
      <WordsChestProvider>
        <WordMarkerProvider>
          <PassageProvider useFake={false}>
            <SafeAreaView style={styles.container}>
              <AppNavigator />
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
