import React from "react";
import { View } from "react-native";
import { Profile } from "../components";

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
            <Profile
                name="hanish.dev"
                bio={`
                • Software Engineer
                • https://github.com/MuhdHanish
                • https://www.linkedin.com/in/muhdhanish
                `}
                profile={require("../assets/Decrease_3.jpg")}
            />
        </View>
    );
};