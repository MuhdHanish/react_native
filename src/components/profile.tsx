import { Button, Image, Text, View } from "react-native";
import { style } from "../utils/style";

type ProfileProps = {
    profile?: any;
    name: string;
    bio?: string;
};

export const Profile = ({
    profile,
    name,
    bio
}: ProfileProps) => {
    return (
        <View
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 15,
                ...style?.shadowStyle
            }}
        >
            <Image
                source={profile || {
                    uri: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?ga=GA1.1.1279576087.1717824931&semt=ais_hybrid"
                }
                }
                alt="react-icon"
                style={{
                    width: 200,
                    height: 200,
                    borderRadius: 100,
                    borderColor: "black",
                    borderWidth: 1,
                }}
            />
            <View
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 5
                }}
            >
                <Text style={{ fontWeight: "bold" }}>{name}</Text>
                {bio && <Text>{bio}</Text>}
            </View>
            <Button title={`${"Follow"}`} />
        </View>
    );
}