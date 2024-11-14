import { TextComponent } from "./text-component";

export const SocialMedia = ({
    platform,
    username
}: {
    platform: string;
    username: string
}) => {
    return <TextComponent text={`Here is my ${platform} username: ${username}`} />
};