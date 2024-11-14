import { Image, View } from "react-native";

export const ImageComponent = () => {
    return (
        <View>
            <Image
                source={require(`../assets/Wavy_Bus-43_Single-12.jpg`)}
                alt="react-icon"
                style={{ width: 200, height: 200 }}
            />
            <Image
                source={{ uri: 'https://img.freepik.com/free-vector/flat-design-api-illustration_23-2149364434.jpg?t=st=1731590988~exp=1731594588~hmac=1421aa41a17f9b59cd8acbbc9cf456e1a8e9ddb65609d5ef786ecdab85504a20&w=1060' }}
                alt="react-icon"
                style={{ width: 200, height: 200 }}
            />
        </View>
    );
}