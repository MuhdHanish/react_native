import { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export type ProductProps = {
    name: string;
    imageUri: string;
    price: number;
    rating?: number;
}

export const Product = ({
    name,
    imageUri,
    price,
    rating = 0
}: ProductProps) => {
    return (
        <View
            style={style.productContainer}
        >
            <Image
                source={{ uri: imageUri }}
                style={style.producutImage}
            />
            <View
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 5,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text
                    style={{
                        fontSize: 24, fontWeight: "700"
                    }}
                >
                    {name}
                </Text>
                <Text
                >
                    Rating:{" "}{rating}
                </Text>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 1,
                        alignItems: "center"
                    }}
                >
                    <Text>Price:</Text>
                    <Text style={{
                        fontWeight: "700"
                    }}
                    >
                        ${price}
                    </Text>
                </View>
            </View>
        </View>
    );
};


const style = StyleSheet.create({
    productContainer: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
        marginBottom: 20,
    },
    producutImage: {
        width: 300,
        height: 400,
        borderRadius: 9,
        objectFit: "cover"
    }
});