import { useState } from "react";
import { View, Text, FlatList, TextInput, Pressable } from "react-native";

import exerciseData from "../exercises.json";
import style from "../style.js";

export default function Browse({ navigation }) {
  const allExercises = exerciseData.exercises;

  const [query, setQuery] = useState("");

  const filtered = allExercises.filter(
    (ex) =>
      ex.name.toLowerCase().includes(query.toLowerCase()) ||
      ex.body_part.toLowerCase().includes(query.toLowerCase()),
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
      <TextInput
        style={style.searchInput}
        placeholder="Search by name or body part..."
        value={query}
        onChangeText={(text) => setQuery(text)}
      />
      <FlatList
        data={filtered}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderListItem}
        nestedScrollEnabled
      />
    </View>
  );
}
