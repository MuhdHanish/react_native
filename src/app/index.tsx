import React from "react";
import { View } from "react-native";
import { Weather } from "../components";

export default function Index() {
    return (
        <View style={{ padding: 10 }}>
            <Weather />
        </View>
    );
};
