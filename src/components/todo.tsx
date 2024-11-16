import React, { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

type Todo = {
    id: string;
    todo: string;
}

export const Todo = () => {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState<Todo[]>([]);
    const addTodo = () => {
        if (!input) return;
        setTodos(prev => [...prev, { id: Date.now()?.toString(), todo: input.trim() }]);
        setInput("");
    }
    const handleSubmit = () => {
        addTodo();
    };
    const removedTodo = (id: string) => {
        setTodos(prev => prev.filter(todo => id !== todo?.id));
    }
    return (
        <View style={{ marginHorizontal: 'auto', width: '75%', marginTop: 20 }}>
            <Text style={styles.header}>To-Do List</Text>
            <TextInput
                style={styles.input}
                value={input}
                onChangeText={setInput}
                placeholder="Add a new task"
                onSubmitEditing={handleSubmit}
                returnKeyType="done"
            />
            <Button title="Add Todo" onPress={addTodo} />
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => removedTodo(item.id)}
                            style={styles.todoItem}
                        >
                            <Text style={styles.todoText}>{item.todo}</Text>
                        </TouchableOpacity>

                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    todoItem: {
        padding: 15,
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    todoText: {
        fontSize: 18,
    },
});