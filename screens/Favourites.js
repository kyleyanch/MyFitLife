import { View, Text } from "react-native";
import style from "../style.js";

export default function Favourites({ navigation }) {
  return (
    <View style={style.appView}>
      <Text style={style.title}>Favourites</Text>
    </View>
  );
}
