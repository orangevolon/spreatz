import { View, StyleSheet } from "react-native";
import { Text } from "../ui";
import { theme } from "../ui/theme";

export function WordChestEmpty() {
  return (
    <View style={styles.container}>
      <Text variant="large" textAlign="center">
        There's nothing you don't know
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.xl,
    justifyContent: "center",
    alignItems: "center",
  },
});
