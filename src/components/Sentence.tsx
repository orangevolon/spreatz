import { useState } from "react";
import { Button, Text, View } from "react-native";
import { openai } from "../openai";

export function Sentence() {
  const [text, setText] = useState("Press generate!");

  const handlePress = async () => {
    const { data } = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Write something in German!",
    });

    const { text } = data.choices[0];
    setText(text);
  };

  return (
    <View>
      <Text>{text}</Text>
      <Button onPress={handlePress} title="Generate" />
    </View>
  );
}
