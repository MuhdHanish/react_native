import React from "react";
import { View } from "react-native";
import { CarCard } from "../components";

const cars = [
    // {
    //     id: 1,
    //     price: 200_000,
    //     imageUri: "https://img.freepik.com/free-photo/front-view-black-sedan-sport-car-bridge_114579-4068.jpg?ga=GA1.1.1279576087.1717824931&semt=ais_hybrid",
    //     name: "Sedan X200",
    //     rating: 4.5,
    //     description: "A compact sedan with excellent fuel efficiency and modern features."
    // },
    // {
    //     id: 2,
    //     price: 450_000,
    //     imageUri: "https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?ga=GA1.1.1279576087.1717824931&semt=ais_hybrid",
    //     name: "SUV MaxPro",
    //     rating: 4.8,
    //     description: "A spacious SUV with advanced safety features and all-wheel drive."
    // },
    {
        id: 3,
        price: 350_000,
        imageUri: "https://img.freepik.com/free-photo/yellow-sport-sedan-road-side-view_114579-5041.jpg?ga=GA1.1.1279576087.1717824931&semt=ais_hybrid",
        name: "Coupe SportZ",
        rating: 4.7,
        description: "A stylish coupe offering top performance and sleek design."
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
                gap: "10px"
            }}
        >
            {
                cars?.map((car, index) => (
                    <CarCard {...car} key={`${car?.id}-${index}`} />
                ))
            }
        </View>
    );
};