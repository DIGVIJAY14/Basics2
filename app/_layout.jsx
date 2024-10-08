import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Radiobutton from "./Radiobutton";
import DynamicRadioBut from "./DynamicRadioBut";
import ActivityLoader from "./ActivityLoader";
import Modall from "./Modall";
import PressTypes from "./PressTypes";
import StatusBarr from "./StatusBarr";
import Platformm from "./Platformm";

const _Layout = () => {
  return (
    <SafeAreaView className="h-full w-full bg-orange-600">
      <View className="h-full w-full">
        <Text className="text-3xl mt-[30] ml-[130] font-extrabold">
          Basics2
        </Text>
        {/* // {"\n"} for line break */}
        <Text className="font-extrabold text-2xl">
          ****************************************
        </Text>

        {/* STARTT########## */}
        {/* - */}
        {/* - */}
        {/* - */}
        {/* - */}
        {/* - */}
        {/* <Radiobutton /> */}
        {/* <DynamicRadioBut /> */}
        {/* <ActivityLoader /> */}
        {/* <Modall /> */}
        {/* <PressTypes /> */}
        {/* <StatusBarr /> */}
        {/* <Platformm /> */}
      </View>
    </SafeAreaView>
  );
};

export default _Layout;

const styles = StyleSheet.create({});
