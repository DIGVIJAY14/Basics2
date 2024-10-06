import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const DynamicRadioBut = () => {
  const [rad, setrad] = useState(1);
  const values = [
    { id: 1, namee: "HTML" },
    { id: 2, namee: "CSS" },
    { id: 3, namee: "JS" },
    { id: 4, namee: "REDUX" },
    { id: 5, namee: "REACT NATIVE" },
  ];

  return (
    <View style={styles.main}>
      {values.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => setrad(item.id)}>
          <View style={styles.subset}>
            <View style={styles.ViewRadioA}>
              {rad == item.id ? <View style={styles.inner}></View> : null}
            </View>
            <Text style={styles.textA}>{item.namee}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default DynamicRadioBut;

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
