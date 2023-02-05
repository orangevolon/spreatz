import "react-native-url-polyfill/auto";

import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Passage } from "./src/components/Passage";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Passage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
  },
});
