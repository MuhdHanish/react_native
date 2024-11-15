import { style } from "../utils/style";
import { TextComponent } from "./text-component";

export const Age = ({ age }: { age: number }) => {
    return <TextComponent style={style.shadowStyle} text={`I'm ${age} years old.`} />
};