import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { Layout } from "../components/Layout";

export function WordChest() {
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
      <Text>WordChest</Text>
    </Layout>
  );
}
