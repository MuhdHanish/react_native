import { TextComponent } from "./text-component";

export const Age = ({ age }: { age: number }) => {
    return <TextComponent text={`I'm ${age} years old.`} />
};