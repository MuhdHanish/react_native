import React from "react";
import { FlatList, View } from "react-native";
import { Product } from "../components";

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        imageUri: "https://img.freepik.com/free-photo/recording-human-icon-stereo-wireless_1232-3551.jpg?ga=GA1.1.1279576087.1717824931&semt=ais_hybrid",
        price: 99.99,
        rating: 4.5
    },
    {
        id: 2,
        name: "Smartphone",
        imageUri: "https://img.freepik.com/free-photo/creative-reels-composition_23-2149711507.jpg?ga=GA1.1.1279576087.1717824931&semt=ais_hybrid",
        price: 699.99,
        rating: 4.8
    },
    {
        id: 3,
        name: "Fitness Tracker",
        imageUri: "https://img.freepik.com/premium-photo/smart-bracelet-background-white-sneakers-blue_94064-3373.jpg?ga=GA1.1.1279576087.1717824931&semt=ais_hybrid",
        price: 49.99,
        rating: 4.2
    }
];

export default function Index() {
    return (
        <View
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
            }}
        >
            <FlatList
                data={products}
                keyExtractor={(item) => item?.id?.toString()}
                renderItem={({ item }) => (
                    <Product {...item} />
                )}
            />
        </View>
    );
};
