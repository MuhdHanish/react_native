import { useState } from "react";
import { Button } from "react-native";
import { TextComponent } from "./text-component";

export const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);
    return (
        <>
            <Button color={"teal"} title="Increment" onPress={increment} />
            <TextComponent text={`Count: ${count}`} />
            <Button color={"teal"} title="Decrement" onPress={decrement} disabled={count === 0} />
        </>
    );
};