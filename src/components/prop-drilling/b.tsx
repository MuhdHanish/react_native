import React from 'react'
import { Text, View } from 'react-native';
import { C } from './c';

export const B = ({ username }: { username: string }) => {
    return (
        <View style={{ display: "flex", flexDirection: "row" }}>
            <Text>B {"->"} </Text><C username={username} />
        </View>
    );
};
