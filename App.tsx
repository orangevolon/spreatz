import "react-native-url-polyfill/auto";

import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Passage } from "./src/components/Passage";
import { theme } from "./src/ui/theme";
import { Main } from "./src/components/Main";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Main />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.background,
    alignItems: "stretch",
  },
});
