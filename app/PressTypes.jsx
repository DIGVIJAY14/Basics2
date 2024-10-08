import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const PressTypes = () => {
  return (
    <View style={styles.view}>
      <Pressable
        onPress={() => console.warn("normal press")}
        onLongPress={() => console.warn("long press")}
        // in milliseconds
        delayLongPress={2000}
        onPressIn={() => console.warn("press in")}
        onPressOut={() => console.warn("press out")}
      >
        <Text style={styles.text}>PressTypes</Text>
      </Pressable>
    </View>
  );
};

export default PressTypes;

const styles = StyleSheet.create({
  text: {
    color: "cyan",
    fontSize: 40,
    backgroundColor: "black",
    padding: 10,
    paddingLeft: 60,
    paddingTop: 20,
    borderRadius: 50,
    width: 300,
    height: 100,
  },
  view: {
    paddingLeft: 30,
    paddingTop: 150,
  },
});
