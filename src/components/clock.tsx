import { useEffect, useState } from "react";
import { Text } from "react-native";

export const Clock = () => {
    const timeString = (date: Date) => date.toLocaleTimeString("en-US", {
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