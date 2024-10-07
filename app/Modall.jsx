import { StyleSheet, Text, View, Button, Modal } from "react-native";
import React, { useState } from "react";

const Modall = () => {
  const [db, setdb] = useState(false);
  return (
    <View style={styles.main}>
      <Text className="ml-[100] text-3xl font-extrabold mt-[40]">
        DIALOGBOX
      </Text>
      <View style={styles.changes}>
        <Modal transparent={true} visible={db} animationType="slide">
          <View style={styles.subset1}>
            <View style={styles.subset2}>
              <Text style={styles.text}>Want to Continue</Text>
              <View style={styles.buttonn}>
                <Button title="cancel" onPress={() => setdb(false)} />
              </View>
            </View>
          </View>
        </Modal>
      </View>

      <View style={styles.lbut}>
        <Button title="CLICK HERE" onPress={() => setdb(true)} />
      </View>
    </View>
  );
};

export default Modall;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "cyan",
    flex: 1,
    backgroundColor: "red",
  },
  lbut: {
    flex: 1,
    justifyContent: "flex-end",
  },
  subset2: {
    height: 150,
    width: 200,
    backgroundColor: "orange",
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    margin: 10,
    marginLeft: 28,
  },
  subset1: {
    padding: 80,
  },
  buttonn: {
    margin: 40,
  },
});
