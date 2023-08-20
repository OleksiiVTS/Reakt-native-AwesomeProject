import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import RegistrationScreen from "./Screens/pages/RegistrationScreen";
import LoginScreen from "./Screens/pages/LoginScreen";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{
            title: "Registration",
            headerStyle: { height: 0 },
            headerTitleStyle: {
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        />
        <MainStack.Screen name="LoginScreen" component={LoginScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
