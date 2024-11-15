import { style } from "../utils/style";
import { TextComponent } from "./text-component";

export const SocialMedia = ({
    platform,
    username
}: {
    platform: string;
    username: string
}) => {
    return <TextComponent style={style.shadowStyle} text={`Here is my ${platform} username: ${username}`} />
};