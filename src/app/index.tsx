import React from "react";
import { Pressable, Text, View } from "react-native";
import { Age, Counter, Name, SocialMedia, Subject, TextComponent } from "../components";

export default function Index() {
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
            <Name name="Hanish" />
            <Age age={19} />
            <SocialMedia platform="Instagram" username="hanish.dev" />
            <Subject subject="Computer Science" />
            <Counter />
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
        </View>
    );
};