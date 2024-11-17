import { Stack } from "expo-router";
export default function Layout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    title: "Home Screen",
                    headerStyle: {
                        backgroundColor: "crimson"
                    }
                }}
            />
            <Stack.Screen
                name="contact"
                options={{ headerShown: false }} 
            />
        </Stack>
    );
}