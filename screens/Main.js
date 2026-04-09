import { View, Text, ScrollView, Button } from "react-native";
import style from "../style.js";

export default function Home({ navigation }) {
  return (
    <ScrollView
      style={{ backgroundColor: "#f5f9f6" }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View
        style={{
          backgroundColor: "#00b894",
          padding: 28,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#ffffff", fontSize: 28, fontWeight: "bold" }}>
          FitLife Hub
        </Text>
        <Text
          style={{
            color: "#ffffff",
            fontSize: 15,
            marginTop: 6,
            textAlign: "center",
          }}
        >
          Your all-in-one destination for health, fitness, and wellbeing.
        </Text>
      </View>

      <View style={{ padding: 20 }}>
        <View style={style.card}>
          <Text style={style.cardTitle}>Browse Exercises</Text>
          <Text style={style.cardBody}>
            Search and filter a full library of resistance training exercises by
            muscle group, difficulty, and more.
          </Text>
          <View style={style.button}>
            <Button
              title="Browse"
              onPress={() => navigation.navigate("Browse")}
              color="#00b894"
            />
          </View>
        </View>

        <View style={style.card}>
          <Text style={style.cardTitle}>My Favourites</Text>
          <Text style={style.cardBody}>
            View your saved exercises. Attach progress photos and revisit your
            go-to movements.
          </Text>
          <View style={style.button}>
            <Button
              title="Favourites"
              onPress={() => navigation.navigate("Favourites")}
              color="#00b894"
            />
          </View>
        </View>

        <View style={style.card}>
          <Text style={style.cardTitle}>About</Text>
          <Text style={style.cardBody}>
            Learn more about this app and who made it.
          </Text>
          <View style={style.button}>
            <Button
              title="About"
              onPress={() => navigation.navigate("About")}
              color="#00b894"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
