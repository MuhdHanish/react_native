import React from "react";
import { FlatList, Text, View } from "react-native";

export default function Index() {
    return (
        <View
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
            }}
        >
            <FlatList
                data={['apple', 'orange', 'pineapple']}
                keyExtractor={(item) => item}
                renderItem={({ item }) => {
                    return <Text style={{ marginVertical: 5 }}>{item}</Text>;
                }}
            />
        </View>
    );
};
