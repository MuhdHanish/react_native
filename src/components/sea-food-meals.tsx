import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

export const SeaFoodMeals = () => {
  const [data, setDatas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${"chicken"}`);
      const data = await response.json();
      setDatas(data?.meals);
    }
    fetchData();
  }, []);
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item: any) => item.idMeal}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.strMealThumb }} style={styles.image} />
            <Text style={styles.title}>{item.strMeal}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  text: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
  },
});