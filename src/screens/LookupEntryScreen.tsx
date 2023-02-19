import { useNavigation, useRoute } from "@react-navigation/native";
import { Layout } from "../components/Layout";
import { WordLookupEntry } from "../components/WordLookupEntry";

export function LookupEntryScreen() {
  const { goBack } = useNavigation();
  const { params } = useRoute();

  return (
    <Layout button={{ onPress: goBack, title: "Back" }}>
      <WordLookupEntry entry={params.entry} />
    </Layout>
  );
}
