import { Image, StyleSheet, Text, View } from "react-native";
import { ProductProps } from "./product";

type Product2Props = ProductProps & {
    isFeatured: boolean
}

export const Product2 = ({
    name,
    price,
    imageUri,
    isFeatured,
    rating
}: Product2Props) => {
    return (
        <View style={style.productContainer}>
            <View style={style.imageContainer}>
                <Image
                    style={style.productImage}
                    source={{ uri: imageUri }}
                />
            </View>
            <View style={style.contentContainer}>
                <Text style={style.productName}>{name}</Text>
                <Text style={style.productPrice}>${price}</Text>
                {isFeatured && <Text style={style.featureTag}>Featured</Text>}
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    productContainer: {
        flexDirection: "row",
        padding: 16,
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 16
    },
    imageContainer: {
        flex: 1,
        marginRight: 16
    },
    productImage: {
        width: 100,
        height: 100,
        borderRadius: 8
    },
    contentContainer: {
        flex: 2
    },
    productName: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8
    },
    productPrice: {
        fontSize: 16,
        color: "#666",
        marginBottom: 8
    },
    featureTag: {
        backgroundColor: "#f0f0f0",
        paddingHorizontal: 6,
        paddingVertical: 4,
        borderRadius: 4,
        marginBottom: 8,
        alignSelf: "flex-start"
    },
})