import React from "react";
import { Text, View } from "react-native";

const TextComponent = ({ text }: { text: string }) => {
    return <Text>{text}</Text>;
};

const Greet = ({ name }: { name: string }) => { 
    return <TextComponent text={`Welcome ${name} 👋!!!`} />
};

export default function Index() {
    const today = new Date();
    const currentHour = today?.getHours();
    const getCurrentTime = (hour: number) => {
        switch (true) {
            case (hour < 12):
                return "Morning";
            case (hour < 16):
                return "Afternoon";
            default:
                return "Evening";
        }
    }
    return (
        <View>
            <Greet name="Hanish" />
            <TextComponent text={`Good ${getCurrentTime(currentHour)}`} />
        </View>
    );
};