import { Button, Image, Pressable, Text, View } from "react-native";

export const CarCard = ({
    name,
    price,
    imageUri,
    rating = 0,
    description
}: {
    name: string;
    price: number;
    imageUri: string;
    rating?: number;
    description: string;
}) => {
    return (
        <View
            style={{
                display: "flex",
                flexDirection: "column",
                gap: 10
            }}
        >
            <Text
                style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: 8,
                    textAlign: "center",
                    alignSelf: "flex-start",
                    fontSize: 20,
                    borderRadius: 4
                }}
            >
                ${(price)?.toFixed(2)}
            </Text>
            <Image
                source={{ uri: imageUri }}
                style={{
                    width: 400,
                    height: 300,
                    objectFit: "contain"
                }}
            />
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <Text
                    style={{
                        fontWeight: "600",
                        fontSize: 25,
                    }}
                >
                    {name}
                </Text>
                <Text>
                    Rating{" "}{rating}
                </Text>
            </View>
            <Text>
                {description?.length > 10
                    ? description?.substring(0, 50) + "..."
                    : description
                }
            </Text>
            <Pressable
                style={{
                    marginTop: 15,
                    backgroundColor: "black",
                    borderRadius: 4,
                    padding: 8
            }}
            >
                <Text
                    style={{
                        fontSize: 21,
                        color: "white",
                        textAlign: "center"
                    }}
                >
                    Add To Cart
                </Text>
            </Pressable>
        </View>
    );
};