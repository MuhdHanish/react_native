import { ReducerAction, useReducer } from "react";
import { Button, Text, View } from "react-native";

type State = {
    count: number;
};

const initialState: State = {
    count: 0
};

type Action = {
    type: "INCREMENT" | "DECREMENT"
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + 1 };
        case "DECREMENT":
            if (state.count !== 0)
                return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};

export const UseReducerCounter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <View
            style={{
                display: "flex",
                gap: 20
            }}
        >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Count: {state.count}</Text>
            <Button title="Increment" onPress={() => dispatch({ type: "INCREMENT" })} />
            <Button title="Decrement" onPress={() => dispatch({ type: "DECREMENT" })} />
        </View>
    );
};
