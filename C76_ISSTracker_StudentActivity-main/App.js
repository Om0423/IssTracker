import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigation} from "@react-navigation/stack";

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const stack = createStackNavigator();

function App (){
<NavigationContainer>
<Stack.Navigator initailRuteName "Home" screenOptions = {{
 headerShown:false
 
}}>
  <Stack.Screen name = "Home" component = {HomeScreen}/>
  <Stack.Screen name = "IssLocation"component = {IssLocationScreen}/>
  <Stack.Screen name = "Meteors"component = {MeteorScreen}/>
  </Stack.Navigator>
</NavigationContainer>
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
