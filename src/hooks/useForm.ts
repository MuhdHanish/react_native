import { ChangeEvent, useState } from "react";

export const useForm = (initialState: any) => {
    const [state, setState] = useState(initialState);
    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        setState((prev: any) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }
    const clearForm = () => setState(initialState);
    const setValues = (values: any) => setState(values);
    return { state, handleInput, clearForm, setValues };
}