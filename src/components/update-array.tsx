import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

export const UpdateArray = () => {
    const [friends, setFriends] = useState(['Alex', 'Jhon', 'Jordan']);
    const addFriend = () => setFriends(prev => [...prev, "Huxn"]);
    const removeFriend = () => setFriends(prev => prev.filter(item => item !== 'Jhon'));
    const updateFriend = () => setFriends(prev => prev.map(item => item === 'Alex' ? 'Alex Smith' : item));

    return (
        <View style={styles.container}>
            <FlatList
                data={friends}
                keyExtractor={item => item}
                renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
            />
            <View style={styles.buttonContainer}>
                <Button title="Add Friend" onPress={addFriend} />
                <Button title="Remove Friend" onPress={removeFriend} />
                <Button title="Update Friend" onPress={updateFriend} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    text: {
        fontSize: 16,
        marginVertical: 5
    },
    buttonContainer: {
        marginTop: 20,
        gap: 10 
    }
});
