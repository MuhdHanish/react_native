import { Pressable, Text } from "react-native";

export const PressableComponent = () => {
  return (
    <Pressable
      onPress={() => alert("Pressable Pressed")}
      onPressIn={() => alert("Pressable Press In")}
      onPressOut={() => alert("Pressable Press Out")}
      onLongPress={() => console.log("Pressable Long Press")}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? 'lightgrey' : 'teal',
          padding: 10,
          borderRadius: 5,
        },
      ]}
    >
      <Text style={{ color: "white" }}>Press Me</Text>
    </Pressable>
  );
};