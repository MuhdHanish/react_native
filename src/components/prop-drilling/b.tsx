import React from 'react'
import { Text, View } from 'react-native';
import { C } from './c';

export const B = () => {
    return (
        <View style={{ display: "flex", flexDirection: "row" }}>
            <Text>B {"->"} </Text><C />
        </View>
    );
};
