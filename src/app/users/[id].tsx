import { Link, useLocalSearchParams } from "expo-router";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
export default function User() {
    const { id } = useLocalSearchParams();
    
    return (
        <SafeAreaView>
            <StatusBar
                barStyle={"light-content"}
                backgroundColor="transparent"
                translucent
            />
            <Text className="bg-purple-100 p-4 text-purple-500 m-4 rounded">
                User {id}
            </Text>
            <View className="p-4 m-4 flex flex-col gap-4">
                <Link className="text-xs text-red-400 hover:text-red-800 hover:underline w-fit" href={`/`}>Home</Link>
                <Link className="text-xs text-red-400 hover:text-red-800 hover:underline w-fit" href={`/about`}>About</Link>
                <Link className="text-xs text-red-400 hover:text-red-800 hover:underline w-fit" href={`/contact`}>Contact</Link>
                <Link className="text-xs text-red-400 hover:text-red-800 hover:underline w-fit" href={`/users/10`}>User</Link>
            </View>
        </SafeAreaView>
    );
}