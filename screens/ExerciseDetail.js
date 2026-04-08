import { useEffect, useState } from "react";
import { View, Text, ScrollView, Button, Alert } from "react-native";

import { doc, getDoc, setDoc } from "firebase/firestore";
import firestore from "../firebase.js";

import style from "../style.js";

const COLLECTION = "fitlife";
const DOCUMENT = "favourites";

const favouritesDoc = () => doc(firestore, COLLECTION, DOCUMENT);

export default function ExerciseDetail({ navigation, route }) {
  const { exercise } = route.params;

  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFavourites();
  }, []);

  const loadFavourites = async () => {
    try {
      const result = await getDoc(favouritesDoc());
      if (result.exists()) {
        const data = result.data();
        setFavourites(data.list || []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const isFavourited = favourites.some((fav) => fav.name === exercise.name);

  const toggleFavourite = async () => {
    try {
      let updatedList;
      if (isFavourited) {
        updatedList = favourites.filter((fav) => fav.name !== exercise.name);
      } else {
        updatedList = [...favourites, exercise];
      }
      await setDoc(favouritesDoc(), { list: updatedList });
      setFavourites(updatedList);
    } catch (e) {
      console.error(e);
      Alert.alert("Error", "Could not update favourites.");
    }
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={style.title}>{exercise.name}</Text>

      <Text style={style.detailLabel}>Body Part</Text>
      <Text style={style.detailValue}>{exercise.body_part}</Text>

      <Text style={style.detailLabel}>Primary Muscle</Text>
      <Text style={style.detailValue}>{exercise.primary_muscle_group}</Text>

      <Text style={style.detailLabel}>Secondary Muscle</Text>
      <Text style={style.detailValue}>{exercise.secondary_muscle_group}</Text>

      <Text style={style.detailLabel}>Movement Type</Text>
      <Text style={style.detailValue}>{exercise.movement_type}</Text>

      <Text style={style.detailLabel}>Mechanics</Text>
      <Text style={style.detailValue}>{exercise.mechanics}</Text>

      <Text style={style.detailLabel}>Difficulty</Text>
      <Text style={style.detailValue}>{exercise.difficulty}</Text>

      <Text style={style.detailLabel}>Accessories</Text>
      <Text style={style.detailValue}>{exercise.accessories.join(", ")}</Text>

      <Text style={style.detailLabel}>Safety Level</Text>
      <Text style={style.detailValue}>
        {exercise.safety_level} / 5 — {exercise.safety_level_reason}
      </Text>

      <Text style={style.detailLabel}>Notes</Text>
      <Text style={style.detailValue}>{exercise.notes}</Text>

      <View style={{ marginTop: 24 }}>
        {!loading && (
          <View style={style.button}>
            <Button
              title={
                isFavourited ? "Remove from Favourites" : "Add to Favourites"
              }
              onPress={toggleFavourite}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
}
