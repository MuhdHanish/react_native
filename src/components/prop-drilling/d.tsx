import React from 'react'
import { Text, View } from 'react-native';

export const D = ({ username }: { username: string }) => {
    return (
        <View>
            <Text>{username}</Text>
        </View>
    );
};
