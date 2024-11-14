import React from "react";
import { Text, View } from "react-native";

const TextComponent = ({ text }: { text: string }) => {
    return <Text>{text}</Text>;
}

export default function Index() {
    return (
        <View>
            <TextComponent text="Hello World" />
        </View>
    );
};