import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";

const Platformm = () => {
  return (
    <View>
      {/* method 1 */}
      <Text className="text-3xl font-extrabold ml-[70] ">
        Platform : {Platform.OS}
      </Text>
      {/* method 2 */}
      <View>
        {Platform.OS == "android" ? (
          <View className="h-[200] w-[250] bg-cyan-400 ml-[50] mt-[50]"></View>
        ) : (
          <View className="h-[200] w-[250] bg-red-400 ml-[50] mt-[50]"></View>
        )}
      </View>
      <View>
        {/* method 3  */}
        <Text
          className="text-3xl bg-black mt-[150] pl-[130] "
          style={styles.changes}
        >
          CHECK
        </Text>
      </View>
      {/* TO check react native versions and more options  */}
      <Text>{JSON.stringify(Platform.constants.reactNativeVersion.minor)}</Text>
    </View>
  );
};

export default Platformm;

const styles = StyleSheet.create({
  changes: {
    color: Platform.OS == "ios" ? "green" : "red",
  },
});
