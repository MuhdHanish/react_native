import { View } from "react-native";
import { AddRandomNumber, RandomNumber } from "../components/prop-drilling";
import { AuthProvider } from "../context/useAuth";
import { RandomNumbersProvider } from "../context/useRandomNumber";

export default function Index() {
    return (
        <AuthProvider>
            <RandomNumbersProvider>
                <View style={{ padding: 10 }}>
                    <RandomNumber />
                    <AddRandomNumber />
                </View>
            </RandomNumbersProvider>
        </AuthProvider>
    );
};