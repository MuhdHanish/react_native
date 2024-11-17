import { Link } from "expo-router";
import "../../global.css";
import { Button, SafeAreaView, StatusBar, Text, View } from "react-native";
import { useCounterStore } from "../store";
export default function Index() {
    const { count, func } = useCounterStore();
    return (
        <SafeAreaView>
            <StatusBar
                barStyle={"light-content"}
                backgroundColor="transparent"
                translucent
            />
            <Text className="bg-green-100 p-4 text-green-500 m-4 rounded">
                Home
            </Text>
            <View className="p-4 m-4 flex flex-col gap-4">
                <Link className="text-xs text-red-400 hover:text-red-800 hover:underline w-fit" href={`/`}>Home</Link>
                <Link className="text-xs text-red-400 hover:text-red-800 hover:underline w-fit" href={`/about`}>About</Link>
                <Link className="text-xs text-red-400 hover:text-red-800 hover:underline w-fit" href={`/contact`}>Contact</Link>
                <Link className="text-xs text-red-400 hover:text-red-800 hover:underline w-fit" href={`/users/10`}>User</Link>
            </View>
            <View className="flex flex-col gap-5 items-center justify-center">
                <Text className="font-bold">{count}</Text>
                <View className="flex gap-5">
                    <Button title="Increment" onPress={() => func("INC")} />
                    <Button title="Decrement" onPress={() => func("DEC")} />
                </View>
            </View>
        </SafeAreaView>
    );
}