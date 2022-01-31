import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constant/colors";

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    padding: 5,
  },
  number: {
    fontSize: 22,
    color: Colors.primary,
  },
});

export default NumberContainer;
