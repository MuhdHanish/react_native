import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

const TextComponent = ({ text }: { text: string }) => {
    return <Text>{text}</Text>;
};

const Greet = ({ name }: { name: string }) => { 
    return <TextComponent text={`Welcome ${name} 👋!!!`} />
};

const Clock = () => {
    const timeString = (date: Date) => date.toLocaleTimeString("en-US",{
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    })
    const [time, setTime] = useState(timeString(new Date));
    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(timeString(new Date));
        }, 1000);
        return () => clearInterval(timerId);
    }, []);
    return (
        <Text>{time}</Text>
    );
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