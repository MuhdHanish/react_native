import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

export const RandomUsers = () => {
    const [data, setDatas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://randomuser.me/api/?results=10`);
                const data = await response.json();
                setDatas(data?.results);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) {
        return <Text style={styles.loadingText}>Loading...</Text>;
    }

    if (error) {
        return <Text style={styles.errorText}>Error: {error}</Text>;
    }

    const renderItem = ({ item }: any) => (
        <View style={styles.itemContainer}>
            <Image source={{ uri: item.picture.thumbnail }} style={styles.avatar} />
            <View style={styles.infoContainer}>
                <Text
                    style={styles.name}
                >{`${item.name.first} ${item.name.last}`}</Text>
                <Text style={styles.email}>{item.email}</Text>
            </View>
        </View>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item: any) => item.login.uuid}
        />
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: "row",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        alignItems: "center",
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
    },
    email: {
        fontSize: 14,
        color: "#666",
    },
    loadingText: {
        textAlign: "center",
        marginTop: 20,
    },
    errorText: {
        textAlign: "center",
        marginTop: 20,
        color: "red",
    },
});
