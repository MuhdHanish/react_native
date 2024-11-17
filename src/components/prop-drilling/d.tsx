import React from 'react'
import { Text, View } from 'react-native';
import { useAuth } from '@/src/context/useAuth';

export const D = () => {
    const authState = useAuth()?.authState;
    return (
        <View>
            <Text>{authState?.username}</Text>
        </View>
    );
};
