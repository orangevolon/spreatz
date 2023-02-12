import { LanguageLevel } from "../containers/LanguageLevel";
import { Layout } from "../components/Layout";
import { WordLookup } from "../containers/WordLookup";
import { Passage } from "../containers/Passage";
import { Section } from "../ui/Section";
import { useGenerate } from "../hooks/useGenerate";

function HomeSection({ children }) {
  return <Section gap="m">{children}</Section>;
}

export function Home() {
  const { isGenerating, generate } = useGenerate();

  return (
    <Layout
      button={{
        onPress: generate,
        title: "Generate",
        disabled: isGenerating,
      }}
    >
      <HomeSection>
        <LanguageLevel />
      </HomeSection>
      <HomeSection>
        <Passage />
      </HomeSection>
      <HomeSection>
        <WordLookup />
      </HomeSection>
    </Layout>
  );
}
