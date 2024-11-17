import React from 'react'
import { Text, View } from 'react-native';
import { B } from './b';

export const A = () => {
    return (
        <View style={{ display: "flex", flexDirection: "row" }}>
            <Text>A {"->"} </Text><B />
        </View>
    );
};
