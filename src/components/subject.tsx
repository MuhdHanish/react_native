import { style } from "../utils/style";
import { TextComponent } from "./text-component";

export const Subject = ({ subject }: { subject: string }) => {
    return <TextComponent style={style.shadowStyle} text={`I love ${subject}.`} />;
};