import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

const weatherData = [
    { city: "New York", weather: "25°C, Sunny" },
    { city: "London", weather: "18°C, Cloudy" },
    { city: "Tokyo", weather: "22°C, Clear" },
    { city: "Mumbai", weather: "30°C, Humid" },
    { city: "Paris", weather: "20°C, Rainy" },
    { city: "Sydney", weather: "28°C, Sunny" },
    { city: "Cairo", weather: "35°C, Hot and Dry" },
    { city: "Moscow", weather: "10°C, Snowy" },
];

export const Weather = () => {
    const [prompt, setPrompt] = useState("");
    const [weather, setWeather] = useState<null | { city: string; weather: string; }>(null);
    const handleSubmit = () => {
        if (!prompt) return;
        const data = weatherData?.find(item => item?.city?.toLowerCase()?.includes(prompt?.toLocaleLowerCase()));
        if (!data) return;
        setWeather(data);
    }
    return (
        <View style={{ padding: 10 }}>
            <View
                style={{
                    flex: 1,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 20
                }}
            >
                <Text
                    style={{
                        fontWeight: "bold",
                        marginBottom: 20,
                        fontSize: 24
                    }}
                >
                    Weather App
                </Text>
                <View>
                    <input
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        style={{
                            height: 40,
                            borderColor: "gray",
                            borderWidth: 1,
                            width: '100%',
                            paddingLeft: 10,
                            paddingRight: 10,
                            borderRadius: 4
                        }}
                    />
                    {weather && <Text
                        style={{
                            fontSize: 18,
                            marginTop: 20,
                        }}
                    >
                        {weather?.weather}
                    </Text>}
                </View>
                <Pressable
                    style={{
                        padding: 8,
                        backgroundColor: 'blue',
                        borderRadius: 5,
                        marginTop: 10
                    }}
                    onPress={handleSubmit}
                >
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: "bold",
                            textAlign: "center",
                            color: "white"
                        }}
                    >
                        Get Weather
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};
