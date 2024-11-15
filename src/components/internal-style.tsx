import { View, Text, StyleSheet } from 'react-native'

export const InternalStyle = () => {
    return (
        <View>
            <Text style={styles.textStyle}>InternalStyle</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        color: 'crimson',
        fontSize: 30,
        backgroundColor: "yellow",
        margin: 20,
        padding: 20
    }
});