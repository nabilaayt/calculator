import { View, Text } from "react-native";
import React from "react";
import Button from "./Button";
import Feather from 'react-native-vector-icons/Feather';
// import { Colors } from "@/utils/Colors";

export default function Calculator() {
  return (
    <View className="flex-1">
      <View className="flex-1 bg-gray py-10 px-10 justify-end items-end">
        <Text className="text-6xl font-medium text-black">7894650</Text>
      </View>

      <View className="flex-[2] bg-light flex-row flex-wrap justify-center gap-2 py-6">
        <Button icon={<Feather name="divide" size={34} />} type="top"/>
        <Button icon={<Feather name="percent" size={34} />} type="top"/>
        <Button icon={<Feather name="delete" size={34} />} type="top"/>
        <Button title="AC" type="top"/>
        <Button title="7" type="number"/>
        <Button title="8" type="number"/>
        <Button title="9" type="number"/>
        <Button title="x" type="right"/>
        <Button title="4" type="number"/>
        <Button title="5" type="number"/>
        <Button title="6" type="number"/>
        <Button title="-" type="right"/>
        <Button title="1" type="number"/>
        <Button title="2" type="number"/>
        <Button title="3" type="number"/>
        <Button title="+" type="right"/>
        <Button title="0" type="number"/>
        <Button title="," type="number"/>
        <Button title="=" type="right" className="h-48 w-24"/>
      </View>
    </View>
  );
};