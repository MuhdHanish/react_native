import { FlatList, Text, View } from "react-native";

const ValidPassword = () => <Text>Valid Password</Text>;
const InvalidPassword = () => <Text>Invalid Password</Text>;

const Password = ({ isValid }: { isValid?: boolean }) => {
    if (isValid) return <ValidPassword />;
    return <InvalidPassword />;
};

const TernaryPassword = ({ isValid }: { isValid?: boolean }) => {
    return isValid? <ValidPassword /> : <InvalidPassword />;
};

const groceries = ['milk', 'bread', 'eggs', 'cheese'];

export const ConditionalStatement = () => {
    return (
        <View>
            <Password isValid />
            <View style={{ marginVertical: 20 }}>
                <Text style={{marginBottom: 10 }}>Cart 🛒</Text>
                {groceries?.length > 0 && <FlatList
                    data={groceries}
                    keyExtractor={item => item}
                    renderItem={({ item }) => <Text>{item}</Text>}
                />}
            </View>
            <TernaryPassword />
        </View>
    );
};