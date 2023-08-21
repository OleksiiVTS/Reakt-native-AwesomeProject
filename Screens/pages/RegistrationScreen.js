import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import PhotoBG from "../images/PhotoBG.jpg";
import { useNavigation } from "@react-navigation/native";
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import {
  View,
  StyleSheet,
  Alert,
  Text,
  TextInput,
  Pressable,
  Image,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Keyboard,
  ImageBackground,
} from "react-native";
import { usePhonebook } from "redux/usePhonebook";
// import add from '../images/add.svg';
import addPhoto from "../images/addPhoto.jpg";

export default function RegistrationScreen() {
  const { getUser } = usePhonebook();
  const [login, setLogin] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [visiblePassword, setVisiblePassword] = React.useState(true);
  const navigation = useNavigation();
  const onLogin = () => {
    Alert.alert("Credentials", `${login} + ${email} + ${password}`);
    getUser({ login, email, password });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={PhotoBG}
        resizeMode="cover"
        imageStyle={styles.imageBack}
      >
        <View alignItems="center" style={styles.form}>
          <View style={styles.containerImage}>
            <Image alignToCenter style={styles.image} source={addPhoto}></Image>
            <Pressable
              style={
                true
                  ? styles.buttonImage
                  : [styles.buttonImage, styles.buttonAddImage]
              }
            >
              <View
                style={true ? styles.plus : [styles.plus, styles.iconAddImage]}
              />
              <View
                style={
                  true ? styles.minus : [styles.minus, styles.iconAddImage]
                }
              />
            </Pressable>
          </View>
          <Text style={styles.text}>Реєстрація</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <TextInput
              autoFocus
              style={styles.input}
              onChangeText={setLogin}
              value={login}
              placeholder="Логін"
            />
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              dataDetectorTypes="address"
              inputMode="email"
              keyboardType="email-address"
              placeholder="Адреса електронної пошти"
            />
            <View>
              <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                autoComplete="new-password"
                secureTextEntry={visiblePassword && true}
                maxLength={20}
                placeholder="Пароль"
              ></TextInput>
              <Pressable
                onPress={() => setVisiblePassword(!visiblePassword)}
                style={styles.showButton}
              >
                <Text style={styles.showText}>
                  {/* <Text style={{ fontFamily: "Roboto-Black", fontSize: 16 }}> */}
                  {visiblePassword ? "Показати" : "Сховати"}
                </Text>
              </Pressable>
            </View>
            <TouchableOpacity onPress={onLogin} style={styles.button}>
              <Text style={styles.textButton}>Зареєстуватися</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("LoginScreen")}
            dataDetectorType="link"
          >
            Вже є акаунт? Увійти
          </Text>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
  imageBack: {
    flex: 1,
    margin: 0,
    minHeight: 812,
    // width: '100%',
    justifyContent: "center",
  },
  containerImage: {
    position: "absolute",
    left: "50%",
    marginLeft: -60,
    top: -60,
    zIndex: 1,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  showText: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
    textAlign: "right",
    color: "#1B4371",
  },
  showButton: {
    position: "absolute",
    right: 16,
    bottom: 15,
    minWidth: 10,
    // backgroundColor: 'red',
  },
  buttonImage: {
    zIndex: 2,
    position: "absolute",
    bottom: 14,
    right: -12.5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 25,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#FF6C00",
    borderRadius: 25,
  },
  plus: {
    position: "absolute",
    height: 13,
    borderLeftWidth: 2,
    borderStyle: "solid",
    borderColor: "#FF6C00",
  },
  minus: {
    position: "absolute",
    width: 13,
    borderTopWidth: 2,
    borderStyle: "solid",
    borderColor: "#FF6C00",
  },
  buttonAddImage: {
    transform: [{ rotate: "45deg" }],
    borderColor: "#E8E8E8",
  },
  iconAddImage: {
    borderColor: "#E8E8E8",
  },
  text: {
    marginTop: 92,
    color: "#212121",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35.16,
    textAlign: "center",
    marginRight: "auto",
    marginLeft: "auto",
  },
  button: {
    width: 343,
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: 43,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  textButton: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  link: {
    justifyContent: "center",
    marginTop: 16,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#1B4371",
    textAlign: "center",
  },

  form: {
    flex: 1,
    // alignItems: 'center',
    marginTop: 293,
    // marginTop: 240,
    width: "100%",
    minHeight: 549,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#FFFFFF",
  },

  input: {
    width: 343,
    height: 50,
    padding: 16,
    marginTop: 32,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },
});
