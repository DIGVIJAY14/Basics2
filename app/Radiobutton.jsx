import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
const Radiobutton = () => {
  const [rad, setrad] = useState(99);
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => setrad(98)}>
        <View style={styles.subset}>
          <View style={styles.ViewRadioA}>
            {rad === 98 ? <View style={styles.inner}></View> : null}
          </View>
          <Text style={styles.textA}>GROUP A</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setrad(99)}>
        <View style={styles.subset}>
          <View style={styles.ViewRadioA}>
            {rad === 99 ? <View style={styles.inner}></View> : null}
          </View>
          <Text style={styles.textA}>GROUP B</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Radiobutton;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "cyan",
  },
  textA: {
    fontSize: 30,
  },
  ViewRadioA: {
    height: 40,
    width: 40,
    backgroundColor: "orange",
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 20,
    margin: 10,
  },
  subset: {
    flexDirection: "row",
    alignItems: "center",
  },
  inner: {
    height: 20,
    width: 20,
    backgroundColor: "cyan",
    borderRadius: 10,
    margin: 7,
  },
});
