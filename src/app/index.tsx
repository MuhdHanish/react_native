import { View } from "react-native";
import { AddRandomNumber, RandomNumber } from "../components/prop-drilling";
import { AuthProvider } from "../context/useAuth";
import { RandomNumbersProvider } from "../context/useRandomNumber";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    return (
        <AuthProvider>
            <RandomNumbersProvider>
                <View style={{ padding: 10 }}>
                    <SafeAreaView>
                        <RandomNumber />
                        <AddRandomNumber />
                    </SafeAreaView>
                </View>
            </RandomNumbersProvider>
        </AuthProvider>
    );
};