import React from 'react'
import { Text, View } from 'react-native';
import { D } from './d';

export const C = ({ username }: { username: string }) => {
    return (
        <View style={{ display: "flex", flexDirection: "row" }}>
            <Text>C {"->"} </Text><D username={username}/>
        </View>
    );
};
