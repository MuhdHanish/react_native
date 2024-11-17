import "../../global.css";
import { SafeAreaView, StatusBar, Text, useColorScheme } from "react-native";
export default function Index() {
    return (
        <SafeAreaView>
            <StatusBar
                barStyle={"light-content"}
                backgroundColor="transparent"
                translucent
            />
            <Text className="bg-green-100 p-4 text-green-500 m-4 rounded">
                Tailwind CSS in React Native (NativeWind)
            </Text>
        </SafeAreaView>
    );
}