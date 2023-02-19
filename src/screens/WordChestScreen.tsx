import { useNavigation } from "@react-navigation/native";
import { Layout } from "../components/Layout";
import { WordChest } from "../containers/WordChest";

export function WordChestScreen() {
  const { goBack } = useNavigation();

  return (
    <Layout
      button={{
        onPress: goBack,
        title: "Back",
      }}
    >
      <WordChest />
    </Layout>
  );
}
