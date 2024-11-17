import { Stack, Tabs } from "expo-router";
export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen name="Index"/>
            <Tabs.Screen name="About"/>
        </Tabs>
    );
}