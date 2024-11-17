import React, { useReducer, useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

type Todo = {
    id: string;
    todo: string;
};

type State = {
    todos: Todo[];
};

const initialState: State = {
    todos: []
};

type Action = {
    type: "ADD_TODO",
    payload: {
        id: string;
        todo: string;
    }
} | {
    type: "REMOVE_TODO",
    payload: {
        id: string;
    }
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: action.payload.id,
                        todo: action.payload.todo
                    }]
            };
        case "REMOVE_TODO":
            return {
                ...state,
                todos: state.todos.filter(item => item?.id !== action.payload.id)
            }; 
        default:
            return state;
    }
}

export const UseReducerTodo = () => {
    const [input, setInput] = useState("");
    const [state, dispatch] = useReducer(reducer, initialState);
    const addTodo = () => {
        if (!input) return;
        dispatch({
            type: "ADD_TODO",
            payload: {
                id: Date.now()?.toString(),
                todo: input.trim()
            }
        });
        setInput("");
    }
    const handleSubmit = () => {
        addTodo();
    };
    const removedTodo = (id: string) => {
        dispatch({
            type: "REMOVE_TODO",
            payload: {
                id
            }
        });
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
                data={state.todos}
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