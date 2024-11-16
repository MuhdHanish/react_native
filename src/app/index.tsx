import React from "react";
import { FlatList, View } from "react-native";
import { Product2 } from "../components";

const products2 = [
    {
        id: 1,
        name: "Wireless Headphones",
        imageUri: "https://img.freepik.com/free-photo/recording-human-icon-stereo-wireless_1232-3551.jpg?ga=GA1.1.1279576087.1717824931&semt=ais_hybrid",
        price: 99.99,
        rating: 4.5,
        isFeatured: true
    },
    {
        id: 2,
        name: "Smartphone",
        imageUri: "https://img.freepik.com/free-photo/creative-reels-composition_23-2149711507.jpg?ga=GA1.1.1279576087.1717824931&semt=ais_hybrid",
        price: 699.99,
        rating: 4.8,
        isFeatured: true
    },
    {
        id: 3,
        name: "Fitness Tracker",
        imageUri: "https://img.freepik.com/premium-photo/smart-bracelet-background-white-sneakers-blue_94064-3373.jpg?ga=GA1.1.1279576087.1717824931&semt=ais_hybrid",
        price: 49.99,
        rating: 4.2,
        isFeatured: true
    }
];

export default function Index() {
    return (
        <View style={{ padding: 10 }}>
            <FlatList
                data={products2}
                keyExtractor={(item) => item?.id?.toString()}
                renderItem={({ item }) => (
                    <Product2 {...item} />
                )}
            />
        </View>
    );
};
