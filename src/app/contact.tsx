import { Link } from "expo-router";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
export default function Contact() {
    return (
        <SafeAreaView>
            <StatusBar
                barStyle={"light-content"}
                backgroundColor="transparent"
                translucent
            />
            <Text className="bg-blue-100 p-4 text-blue-500 m-4 rounded">
                Contact
            </Text>
            <View className="p-4 m-4 flex flex-col gap-4">
                <Link className="text-xs text-red-400 hover:text-red-800 hover:underline w-fit" href={`/`}>Home</Link>
                <Link className="text-xs text-red-400 hover:text-red-800 hover:underline w-fit" href={`/about`}>About</Link>
                <Link className="text-xs text-red-400 hover:text-red-800 hover:underline w-fit" href={`/contact`}>Contact</Link>
            </View>
        </SafeAreaView>
    );
}