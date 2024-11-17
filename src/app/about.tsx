import { Link } from "expo-router";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
export default function About() {
    return (
        <SafeAreaView>
            <StatusBar
                barStyle={"light-content"}
                backgroundColor="transparent"
                translucent
            />
            <Text className="bg-red-100 p-4 text-red-500 m-4 rounded">
                About
            </Text>
            <View className="p-4 m-4 flex flex-col gap-4">
                <Link className="text-xs text-red-400 hover:text-red-800 hover:underline w-fit" href={`/`}>Home</Link>
                <Link className="text-xs text-red-400 hover:text-red-800 hover:underline w-fit" href={`/about`}>About</Link>
                <Link className="text-xs text-red-400 hover:text-red-800 hover:underline w-fit" href={`/users/10`}>User</Link>
                <Link className="text-xs text-red-400 hover:text-red-800 hover:underline w-fit" href={`/contact`}>Contact</Link>
            </View>
        </SafeAreaView>
    );
}