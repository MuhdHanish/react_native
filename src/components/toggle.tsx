import { useState } from "react";
import { Pressable, Text } from "react-native";

export const Toggle = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <Pressable
            style={{
                padding: 8,
                backgroundColor: toggle ? 'red' : 'green',
                borderRadius: 8,
            }}
            onPress={() => setToggle(prev => !prev)}
        >
            <Text
                style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white"
                }}
            >
                {toggle ? "Off" : "On"}
            </Text>
        </Pressable>
    );
};