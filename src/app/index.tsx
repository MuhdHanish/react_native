import React, { useState } from "react";
import { Button, View } from "react-native";
import { Age, Name, SocialMedia, Subject, TextComponent } from "../components";

export default function Index() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);
    return (
        <View
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
                gap: "10px"
            }}
        >
            <Name name="Hanish" />
            <Age age={19} />
            <SocialMedia platform="Instagram" username="hanish.dev" />
            <Subject subject="Computer Science" />
            <Button color={"teal"} title="Increment" onPress={increment} />
            <TextComponent text={`Count: ${count}`} />
            <Button color={"teal"} title="Decrement" onPress={decrement} disabled={count === 0} />
        </View>
    );
};