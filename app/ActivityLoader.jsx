import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Button,
} from "react-native";
import React, { useState } from "react";

const ActivityLoader = () => {
  const [use, setuse] = useState(false);
  const [use1, setuse1] = useState(false);
  const [use2, setuse2] = useState(false);
  const [use3, setuse3] = useState(false);

  const one = () => {
    setuse(true);

    setTimeout(() => {
      setuse(false);
    }, 2000);
  };
  const two = () => {
    setuse1(true);

    setTimeout(() => {
      setuse1(false);
    }, 2000);
  };
  const three = () => {
    setuse2(true);

    setTimeout(() => {
      setuse2(false);
    }, 2000);
  };
  const four = () => {
    setuse3(true);

    setTimeout(() => {
      setuse3(false);
    }, 2000);
  };

  return (
    <>
      <View className="items-center justify-center ">
        <Text className="text-3xl font-extrabold mt-[40] mb-[70]">
          ACTIVITY INDICATOR
        </Text>
      </View>
      <View style={styles.main}>
        <View style={styles.subset}>
          <ActivityIndicator
            size={50}
            color="red"
            style={styles.AI}
            animating={use}
          />
          <View style={styles.button}>
            <Button title="red" color="red" onPress={() => setuse(one)} />
          </View>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.subset}>
          <ActivityIndicator
            size={50}
            color="black"
            style={styles.AI}
            animating={use1}
          />
          <View style={styles.button}>
            <Button title="Black" color="black" onPress={() => setuse1(two)} />
          </View>
        </View>
      </View>
      {/* second method to implement this on blue color with conditonal property (commented)  */}
      <View style={styles.main}>
        <View style={styles.subset}>
          <ActivityIndicator
            size={50}
            color="blue"
            style={styles.AI}
            animating={use2}
          />
          <View style={styles.button}>
            <Button title="BLUE" color="blue" onPress={() => setuse2(three)} />
            {/* {use2 ? (
              <ActivityIndicator
                size={50}
                color="blue"
                style={styles.AI}   
              />
            ) : null} */}
          </View>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.subset}>
          <ActivityIndicator
            size={50}
            color="green"
            style={styles.AI}
            animating={use3}
          />
          <View style={styles.button}>
            <Button title="green" color="green" onPress={() => setuse3(four)} />
          </View>
        </View>
      </View>
    </>
  );
};

export default ActivityLoader;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  subset: {
    flexDirection: "row",
  },
  button: {
    width: 200,
    marginLeft: 50,
  },
  AI: {
    marginLeft: 30,
  },
  AIblue: {},
});
