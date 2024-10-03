import React from "react";
import { Image, StyleSheet } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import Main from "../screens/MainComponent";
import HomeScreen from ".";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return <HomeScreen />;
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
