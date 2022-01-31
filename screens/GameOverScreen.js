import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Colors from "../constant/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>The game is over!!🏆</Text>
      <Text style={{ marginTop: 10 }}>
        Number of rounds: {props.roundNumber}
      </Text>
      <Text style={{ marginVertical: 10 }}>Number was: {props.userNumber}</Text>
      <Button
        title="New Game"
        color={Colors.buttonPrimary}
        onPress={props.onRestart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: Colors.buttonSecondary,
  },
});

export default GameOverScreen;
