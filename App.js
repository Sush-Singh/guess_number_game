import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import GameScreen from "./screens/GameScreen";
import Colors from "./components/constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  function pickedNumberHandler(pickedNumber) {
    setGameIsOver(false);
    setUserNumber(pickedNumber);
  }

  function gameOverHandler(numberOfRound) {
    setGameIsOver(true);
    setGuessRounds(numberOfRound);
  }

  function newGameStartHandler() {
    setUserNumber(null);
    setGameIsOver(true);
    setGuessRounds(0);
  }
  return (
    <LinearGradient
      colors={[Colors.linearGradient1, Colors.linearGradient2]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        style={styles.rootScreen}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {userNumber && gameIsOver ? (
            <GameOverScreen
              userNumber={userNumber}
              roundsNumber={guessRounds}
              onStartNewGame={newGameStartHandler}
            />
          ) : userNumber ? (
            <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
          ) : (
            <StartGameScreen onCPickNumber={pickedNumberHandler} />
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
  },
});
