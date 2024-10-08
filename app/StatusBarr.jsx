import { StyleSheet, Text, View, StatusBar, Button } from "react-native";
import React, { useState } from "react";

const StatusBarr = () => {
  const [sb, setsb] = useState(false);
  const [bs, setbs] = useState("default");
  return (
    <View>
      <Text className="text-3xl font-extrabold ml-[120] ">StatusBar</Text>
      <StatusBar backgroundColor="cyan" barStyle={bs} hidden={sb}></StatusBar>
      <Button title="set statusbar" onPress={() => setsb(!sb)} />
      <View className="mt-[30]">
        <Button title="set bar-style" onPress={() => setbs("dark-content")} />
      </View>
    </View>
  );
};

export default StatusBarr;

const styles = StyleSheet.create({});
