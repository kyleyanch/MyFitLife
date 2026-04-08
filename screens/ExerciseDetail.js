import { useEffect, useState } from "react";
import { View, Text, ScrollView, Button, Alert, Image } from "react-native";

import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";

import { doc, getDoc, setDoc } from "firebase/firestore";
import firestore from "../firebase.js";

import style from "../style.js";

const COLLECTION = "fitlife";
const DOCUMENT = "favourites";

const favouritesDoc = () => doc(firestore, COLLECTION, DOCUMENT);

export default function ExerciseDetail({ route }) {
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
        setFavourites(result.data().list || []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const currentFav = favourites.find((fav) => fav.name === exercise.name);
  const isFavourited = !!currentFav;

  const toggleFavourite = async () => {
    try {
      let updatedList;
      if (isFavourited) {
        updatedList = favourites.filter((fav) => fav.name !== exercise.name);
      } else {
        updatedList = [...favourites, { ...exercise, photoUri: null }];
      }
      await setDoc(favouritesDoc(), { list: updatedList });
      setFavourites(updatedList);
    } catch (e) {
      console.error(e);
      Alert.alert("Error", "Could not update favourites.");
    }
  };

  const attachPhoto = async (fromCamera) => {
    try {
      let result;

      if (fromCamera) {
        result = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
      } else {
        result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
      }

      if (result.canceled) return;

      const { uri } = result.assets[0];

      await MediaLibrary.createAssetAsync(uri);

      const updatedList = favourites.map((fav) =>
        fav.name === exercise.name ? { ...fav, photoUri: uri } : fav,
      );

      await setDoc(favouritesDoc(), { list: updatedList });
      setFavourites(updatedList);
    } catch (e) {
      console.error(e);
      Alert.alert("Error", "Could not attach photo.");
    }
  };

  const promptPhotoSource = () => {
    Alert.alert("Attach Photo", "Choose a source", [
      { text: "Camera", onPress: () => attachPhoto(true) },
      { text: "Media Library", onPress: () => attachPhoto(false) },
      { text: "Cancel" },
    ]);
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

      {!loading && (
        <View style={{ marginTop: 24 }}>
          <View style={style.button}>
            <Button
              title={
                isFavourited ? "Remove from Favourites" : "Add to Favourites"
              }
              onPress={toggleFavourite}
            />
          </View>
          {isFavourited && (
            <View>
              {currentFav.photoUri ? (
                <View>
                  <Image
                    source={{ uri: currentFav.photoUri }}
                    style={style.image}
                  />
                  <View style={style.button}>
                    <Button title="Change Photo" onPress={promptPhotoSource} />
                  </View>
                </View>
              ) : (
                <View style={style.button}>
                  <Button title="Attach Photo" onPress={promptPhotoSource} />
                </View>
              )}
            </View>
          )}
        </View>
      )}
    </ScrollView>
  );
}
