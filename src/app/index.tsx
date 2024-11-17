import { View } from "react-native";
import { Main } from "../components/prop-drilling";
import { AuthProvider } from "../context/useAuth";

export default function Index() {
    return (
        <AuthProvider>
            <View style={{ padding: 10 }}>
                <Main />
            </View>
        </AuthProvider>
    );
};