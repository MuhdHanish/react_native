import { View } from "react-native";
import { AuthProvider } from "../context/useAuth";
import { RandomNumbersProvider } from "../context/useRandomNumber";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFetch } from "../hooks/useFetch";

export default function Index() {
    const { data, loading } = useFetch(`https://jsonplaceholder.typicode.com/users`);
    if(loading) return <View>Loading...</View>
    return (
        <AuthProvider>
            <RandomNumbersProvider>
                <View style={{ padding: 10 }}>
                    <SafeAreaView>
                        {JSON.stringify(data)}
                    </SafeAreaView>
                </View>
            </RandomNumbersProvider>
        </AuthProvider>
    );
};