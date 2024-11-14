import { TextComponent } from "./text-component";

export const Greet = ({ name }: { name: string }) => {
    return <TextComponent text={`Welcome ${name} 👋!!!`} />
};