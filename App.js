import * as Font from 'expo-font';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';

import GameOver from './components/GameOver';
import GameScreen from './components/GameScreen';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}
export default function App() {
  const [usernumber, setUserNumber] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (<AppLoading startAsync={fetchFonts}
      onFinish={() => setDataLoaded(true)}
      onError={(err) => console.log(err)} />);
  }

  const gameRestarter = () => {
    setGameOver(false)
    setUserNumber(null)
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
    setGameOver(false)
  };

  const gameOverHandler = () => {
    setGameOver(true)
  }

  let contentVariable = <StartGameScreen onStartGame={startGameHandler} />

  if (usernumber) {
    contentVariable = <GameScreen userChoice={usernumber} onGameOver={gameOverHandler} />
  }
  if (gameOver) {
    <Text>Ho gayaa</Text>
    contentVariable = <GameOver onRestart={gameRestarter} />
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess a number"></Header>
      {contentVariable}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
});
