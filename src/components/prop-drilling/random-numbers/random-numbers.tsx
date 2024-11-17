import { useRandomNumber } from "@/src/context/useRandomNumber";
import { FlatList, StyleSheet, Text, View } from "react-native";

export const RandomNumber = () => {
    const num = useRandomNumber()?.numbers;

    return (
        <View>
            <Text style={styles.header}>Numbers List:</Text>
            <FlatList
                data={num}
                keyExtractor={(item, index) => `${item}-${index}`}
                renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
    item: {
        fontSize: 18,
        marginVertical: 8,
    },
});
