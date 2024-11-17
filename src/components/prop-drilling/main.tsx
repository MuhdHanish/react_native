import React from 'react'
import { Text, View } from 'react-native';
import { A } from './a';

export const Main = () => {
    return (
        <View style={{ display: "flex", flexDirection: "row" }}>
            <Text>Main {"->"} </Text><A />
        </View>
    );
};
