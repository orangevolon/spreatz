import "react-native-url-polyfill/auto";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Sentence } from "./src/components/Sentence";

export default function App() {
  return (
    <View style={styles.container}>
      <Sentence />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
