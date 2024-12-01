import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { useState } from 'react';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import { SafeAreaView } from 'react-native';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";


export default function App() {
  const [usernumber, setusernumber] = useState();
  const [gameover, setgameover] = useState(true)
  const [numberofrounds, setnumberofrounds] = useState(0)
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
  if (!fontsLoaded) {
    return <AppLoading />
  }
  function pickednumber(choosennumber) {
    setusernumber(choosennumber)
    setgameover(false)
  }
  function roundcount(roundnumber) {
    setnumberofrounds(roundnumber)
  }
  function gameOverHandler() {
    setgameover(true)
  }
  function startnewgame() {
    setusernumber(null);
    setnumberofrounds(0)
  }
  let screen = <StartGameScreen onpickednumber={pickednumber} />
  if (usernumber) {
    screen = <GameScreen choosennumber={usernumber} ongameover={gameOverHandler} round={roundcount} />
  }
  if (usernumber && gameover) {
    screen = <GameOverScreen userNumber={usernumber} rounds={numberofrounds} onstartnewgame={startnewgame} />
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground source={require("./assets/background.png")} resizeMode="cover" style={styles.rootScreen} imageStyle={styles.transparency}>
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  transparency: {
    opacity: 0.15
  },
});
