import { useEffect, useState } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

import { doc, getDoc } from "firebase/firestore";
import firestore from "../firebase.js";

import style from "../style.js";

const COLLECTION = "fitlife";
const DOCUMENT = "favourites";

const favouritesDoc = () => doc(firestore, COLLECTION, DOCUMENT);

export default function Favourites({ navigation }) {
  const [favourites, setFavourites] = useState([]);

  const loadFavourites = async () => {
    try {
      const result = await getDoc(favouritesDoc());
      if (result.exists()) {
        const data = result.data();
        setFavourites(data.list || []);
      } else {
        setFavourites([]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadFavourites();
    }, []),
  );

  const renderListItem = ({ item }) => (
    <Pressable
      onPress={() => navigation.navigate("Exercise Detail", { exercise: item })}
    >
      <View style={style.listItem}>
        <Text style={style.listItemText}>{item.name}</Text>
        <Text style={style.listItemSub}>
          {item.body_part} — {item.difficulty}
        </Text>
      </View>
    </Pressable>
  );

  return (
    <View style={style.appView}>
      {favourites.length === 0 ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={style.title}>No Favourites Yet</Text>
          <Text style={style.subtitle}>
            Browse exercises and add them to your favourites.
          </Text>
        </View>
      ) : (
        <FlatList
          data={favourites}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderListItem}
          nestedScrollEnabled
        />
      )}
    </View>
  );
}
