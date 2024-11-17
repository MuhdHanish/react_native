import React from 'react'
import { Text, View } from 'react-native';
import { D } from './d';

export const C = () => {
    return (
        <View style={{ display: "flex", flexDirection: "row" }}>
            <Text>C {"->"} </Text><D />
        </View>
    );
};
