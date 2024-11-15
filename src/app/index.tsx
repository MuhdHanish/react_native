import React from "react";
import { View } from "react-native";
import { InternalStyle } from "../components";

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
            <InternalStyle />
        </View>
    );
};