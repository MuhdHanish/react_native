import { View } from "react-native";
import { AuthProvider } from "../context/useAuth";
import { RandomNumbersProvider } from "../context/useRandomNumber";
import { MyForm } from "../components";

export default function Index() {
    return (
        <AuthProvider>
            <RandomNumbersProvider>
                <View style={{ padding: 10 }}>
                    <MyForm />
                </View>
            </RandomNumbersProvider>
        </AuthProvider>
    );
};