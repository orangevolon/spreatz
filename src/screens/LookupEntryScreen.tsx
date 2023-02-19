import { useNavigation } from "@react-navigation/native";
import { Layout } from "../components/Layout";
import { Text } from "../ui";

export function LookupEntryScreen() {
  const { goBack } = useNavigation();

  return (
    <Layout button={{ onPress: goBack, title: "Back" }}>
      <Text>Look up entry</Text>
    </Layout>
  );
}
