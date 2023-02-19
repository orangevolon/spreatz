import { useNavigation } from "@react-navigation/native";
import { Layout } from "../components/Layout";
import { WordChest } from "../containers/WordChest";

export function WordChestScreen() {
  const navigate = useNavigation();

  const handleBackPress = () => {
    navigate.goBack();
  };

  return (
    <Layout
      button={{
        onPress: handleBackPress,
        title: "Back",
      }}
    >
      <WordChest />
    </Layout>
  );
}
