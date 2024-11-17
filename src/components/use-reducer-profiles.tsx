import React, { useReducer, useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

type User = {
    id: string;
    name: string;
    age: number;
};

type State = {
    profiles: User[];
};

const initialState: State = {
    profiles: []
};

type Action = {
    type: "ADD_PROFILE" | "UPDATE_PROFILE",
    payload: {
        id: string;
        name: string;
        age: number;
    }
} | {
    type: "REMOVE_PROFILE",
    payload: {
        id: string;
    }
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "ADD_PROFILE":
            return {
                ...state,
                profiles: [
                    ...state.profiles,
                    {
                        id: action.payload.id,
                        name: action.payload.name,
                        age: action.payload.age
                    }
                ]
            };
        case "UPDATE_PROFILE":
            const { id, name, age } = action.payload;
            return {
                ...state,
                profiles: state.profiles.map((item) => item?.id === id ? { ...item, name, age } : item)
            };
        case "REMOVE_PROFILE":
            return {
                ...state,
                profiles: state.profiles.filter(item => item?.id !== action.payload.id)
            };
        default:
            return state;
    }
}

export const UseReducerProfiles = () => {
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<string>("");
    const [editingId, setEditingId] = useState<string | null>(null);
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleAddProfile = () => {
        if (name.trim() && age.trim() && !isNaN(parseInt(age, 10))) {
            dispatch({
                type: "ADD_PROFILE",
                payload: { id: Date.now()?.toString(), name, age: parseInt(age, 10) },
            });
            setName("");
            setAge("");
        }
    };
    const handleUpdateProfile = (id: string) => {
        if (name.trim() && age.trim() && !isNaN(parseInt(age, 10))) {
            dispatch({
                type: "UPDATE_PROFILE",
                payload: { id, name, age: parseInt(age, 10) },
            });
            setName("");
            setAge("");
            setEditingId(null);
        }
    };
    const handleSubmit = () => {
        if (editingId) {
            handleUpdateProfile(editingId);
        } else {
            handleAddProfile();
        }
    };
    const handleRemoveProfile = (id: string) => {
        dispatch({ type: "REMOVE_PROFILE", payload: { id } });
    };
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Enter name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter age"
                keyboardType="numeric"
                value={age}
                onChangeText={setAge}
            />
            {editingId ? (
                <Button
                    title="Update Profile"
                    onPress={() => handleUpdateProfile(editingId)}
                />
            ) : (
                <Button title="Add Profile" onPress={handleAddProfile} />
            )}
            <FlatList
                data={state.profiles}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.profileItem}>
                        <Text style={styles.profileText}>
                            {item.name}, {item.age} years old
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                setName(item.name);
                                setAge(item.age.toString());
                                setEditingId(item.id);
                            }}
                        >
                            <Text style={styles.editButton}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleRemoveProfile(item.id)}>
                            <Text style={styles.removeButton}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    profileItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    profileText: {
        fontSize: 16,
        flex: 1,
    },
    editButton: {
        color: "blue",
        marginRight: 10,
    },
    removeButton: {
        color: "red",
    },
});
