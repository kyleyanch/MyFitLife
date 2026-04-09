import { View, Text, ScrollView } from "react-native";
import style from "../style.js";

export default function About() {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        padding: 24,
      }}
    >
      <Text style={style.title}>FitLife Hub</Text>
      <Text style={style.subtitle}>
        Your all-in-one destination for health, fitness, and wellbeing.
      </Text>

      <Text style={style.aboutText}>Developed by Kyle Yanch</Text>
      <Text style={style.aboutText}>
        INFO 3141 — Mobile Application Development
      </Text>
      <Text style={style.aboutText}>Project 2</Text>

      <Text style={[style.aboutText, { marginTop: 24 }]}>
        FitLife Hub is a resistance training reference app. Browse a full
        library of exercises, save your favourites, and attach progress photos
        to track your journey.
      </Text>
    </ScrollView>
  );
}
