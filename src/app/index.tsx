import React from "react";
import { Text, View } from "react-native";
import { InternalStyle } from "../components";
import { style } from "../utils/style";

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
            <Text style={style?.textStyle}>External Style</Text>
        </View>
    );
};