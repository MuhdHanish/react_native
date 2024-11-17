import { useContext } from "react";
import { Button } from "react-native";
import { useRandomNumber } from "@/src/context/useRandomNumber";

export const AddRandomNumber = () => {
    const addNumber = useRandomNumber()?.addRandomNumber;

    const handleAddNumber = () => {
        addNumber && addNumber(Math.floor(Math.random() * 100));
    };

    return <Button title="Add Random Number" onPress={handleAddNumber} />;
};