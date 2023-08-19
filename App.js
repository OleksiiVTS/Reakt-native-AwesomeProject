import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import RegistrationScreen from "./Screens/pages/RegistrationScreen";
import LoginScreen from "./Screens/pages/LoginScreen";
import PhotoBG from "./Screens/images/PhotoBG.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={PhotoBG} resizeMode="cover" style={styles.image}>
        <RegistrationScreen />
        {/* <LoginScreen /> */}
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    margin: 0,
    height: 812,
    // width: '100%',
    justifyContent: "center",
  },
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
