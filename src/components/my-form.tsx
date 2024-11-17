import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { useForm } from '../hooks';

export const MyForm = () => {
    const initialState = {
        name: "",
        email: ""
    };
    const { state: formState, handleInput, clearForm } = useForm(initialState);
    const handleSubmit = () => {
        if (formState.name && formState.email) {
            console.log({ values: formState });
            clearForm();
        }
    };

    return (
        <View>
            <Text style={styles.label}>Name:</Text>
            <input
                type='text'
                style={styles.input}
                name='name'
                value={formState.name}
                onChange={handleInput}
                placeholder="Enter your name"
            />
            <Text style={styles.label}>Email:</Text>
            <input
                type='email'
                name='email'
                style={styles.input}
                placeholder="Enter your email"
                value={formState.email}
                onChange={handleInput}
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        fontSize: 18,
        marginBottom: 8,
    },
    input: {
        height: 40,
        paddingLeft: 10,
        borderColor: "#ccc",
        borderWidth: 1,
        marginBottom: 16,
    },
});
