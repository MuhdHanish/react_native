import { FlatList, Text } from "react-native";

export const FlatListComponent = () => {
    return <FlatList
        data={['apple', 'orange', 'pineapple']}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
            return <Text style={{ marginVertical: 5 }}>{item}</Text>;
        }}
    />
}