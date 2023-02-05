import { Pressable, StyleSheet, Text, View } from "react-native";
import { usePassage } from "../hooks/usePassage";

export function Passage() {
  const { passage, generate } = usePassage();

  return (
    <View style={style.container}>
      <View style={style.passageContainer}>
        <Text>{passage}</Text>
      </View>
      <Pressable onPress={generate} style={style.button}>
        <Text style={style.buttonText}>Generate</Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  passageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: "#222",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 16,
  },
  buttonText: {
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#eee",
  },
});
