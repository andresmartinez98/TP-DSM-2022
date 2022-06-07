import "react-native-gesture-handler";
import React from "react";

import AlbumList from "./src/components/AlbumList";
import PhotoList from "./src/components/PhotoList";
import ViewImage from "./src/components/ViewImage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

// Create a component
export default App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: "#fff" } }}>
      <Stack.Screen
        name="albumList"
        component={AlbumList}
        options={{ title: "Albums" }}
      />
      <Stack.Screen
        name="photoList"
        component={PhotoList}
        options={{ title: "Photos" }}
      />

      <Stack.Screen
        name="viewImage"
        component={ViewImage}
        options={{ title: "Photo" }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
