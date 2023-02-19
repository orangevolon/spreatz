import { useNavigation } from "@react-navigation/native";
import { Layout } from "../components/Layout";
import { WordChest } from "../containers/WordChest";

function WordChestScreen() {
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

export { WordChestScreen as WordChest };
