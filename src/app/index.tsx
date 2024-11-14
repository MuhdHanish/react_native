import React from "react";
import { Text, View } from "react-native";

const TextComponent = ({ text }: { text: string }) => {
    return <Text>{text}</Text>;
};

const Greet = ({ name }: { name: string }) => { 
    return <TextComponent text={`Welcome ${name} 👋!!!`} />
};

export default function Index() {
    return (
        <View>
            <Greet name="Hanish"/>
        </View>
    );
};