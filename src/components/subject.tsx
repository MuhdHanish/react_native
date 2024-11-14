import { TextComponent } from "./text-component";

export const Subject = ({ subject }: { subject: string }) => {
    return <TextComponent text={`I love ${subject}.`} />;
};