import { Text, TextStyle, StyleProp } from "react-native";

type TextComponentProps = {
    style?: StyleProp<TextStyle>;
    text: string;
}

export const TextComponent: React.FC<TextComponentProps> = ({ style, text }) => {
    return <Text style={style}>{text}</Text>;
};
