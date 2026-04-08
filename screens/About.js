import { View, Text } from "react-native";
import style from "../style.js";

export default function About({ navigation }) {
  return (
    <View style={style.appView}>
      <Text style={style.title}>About</Text>
    </View>
  );
}
