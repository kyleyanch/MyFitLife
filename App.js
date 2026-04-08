import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as ImagePicker from "expo-image-picker";

import style from "./style.js";

import Home from "./screens/Main.js";
import Browse from "./screens/Browse.js";
import ExerciseDetail from "./screens/ExerciseDetail.js";
import Favourites from "./screens/Favourites.js";
import About from "./screens/About.js";

const Stack = createNativeStackNavigator();

export default function App() {
  const [permissionsGranted, setPermissionsGranted] = useState(false);

  const requestPermissions = async () => {
    const cameraResult = await ImagePicker.requestCameraPermissionsAsync();
    const mediaResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    setPermissionsGranted(cameraResult.granted && mediaResult.granted);
  };

  useEffect(() => {
    requestPermissions();
  }, []);

  return (
    <SafeAreaView style={style.appView}>
      <NavigationContainer>
        {permissionsGranted ? (
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Browse" component={Browse} />
            <Stack.Screen name="Exercise Detail" component={ExerciseDetail} />
            <Stack.Screen name="Favourites" component={Favourites} />
            <Stack.Screen name="About" component={About} />
          </Stack.Navigator>
        ) : (
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={style.title}>Permissions Required</Text>
            <Text style={style.subtitle}>
              Camera and media library access are required to use this app.
            </Text>
          </View>
        )}
      </NavigationContainer>
    </SafeAreaView>
  );
}
