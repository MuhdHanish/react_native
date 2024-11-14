import React from "react";
import { View } from "react-native";
import { Age, Counter, Name, SocialMedia, Subject } from "../components";

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
        </View> 
    );
};