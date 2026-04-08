import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import style from "./style.js";

import Home from "./screens/Main.js";
import Browse from "./screens/Browse.js";
import ExerciseDetail from "./screens/ExerciseDetail.js";
import Favourites from "./screens/Favourites.js";
import About from "./screens/About.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={style.appView}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Browse" component={Browse} />
          <Stack.Screen name="Exercise Detail" component={ExerciseDetail} />
          <Stack.Screen name="Favourites" component={Favourites} />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
