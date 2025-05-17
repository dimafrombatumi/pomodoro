import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { workTimeStore } from "../store/store";
const SettingsScreen = () => {
  const workTime = workTimeStore((state) => state.workTime);
  const increeseWorkTime = workTimeStore((state) => state.increaseWorkTime);
  const decreeseWorkTime = workTimeStore((state) => state.decreaseWorkTime);

  const handleIncreaseTime = (num) => {
    increeseWorkTime(num);
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.timeBlocks}>
        <View style={styles.timeBlockItem}>
          <Text style={styles.timeText}>{workTime}</Text>
          <View style={styles.timeConrtols}>
            <Ionicons
              name="add"
              size={24}
              color="#fff"
              onPress={() => handleIncreaseTime(1)}
            />
            <Ionicons
              name="remove"
              size={24}
              color="#fff"
              onPress={() => decreeseWorkTime(1)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  timeBlockItem: {
    alignItems: "center",
    backgroundColor: "#cce1",
    height: 80,
    justifyContent: "center",
    width: "30%",
  },

  timeBlocks: {
    flexDirection: "row",
    gap: 10,
    marginTop: 40,
  },

  timeConrtols: {
    flexDirection: "row",
    gap: 20,
  },

  timeText: {
    color: "#fff",
    fontSize: 40,
  },

  wrapper: {
    alignItems: "center",
    backgroundColor: "#000000",
    flex: 1,
    justifyContent: "flex-start",
  },
});
