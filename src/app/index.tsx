import React from "react";
import { View } from "react-native";
import { Clock, Greet, TextComponent } from "../components";

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
    };
    return (
        <View
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
                gap: "10px"
            }}
        >
            <Greet name="Hanish" />
            <TextComponent text={`Good ${getCurrentTime(currentHour)}`} />
            <Clock />
        </View>
    );
};