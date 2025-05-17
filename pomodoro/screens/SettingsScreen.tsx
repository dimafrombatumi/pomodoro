import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useRef, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { workTimeStore } from "../store/store";
const SettingsScreen = () => {
  const [workTimeValue, setWorkTimeValue] = useState<number>(0);

  const workTime = workTimeStore((state) => state.workTime);
  const increeseWorkTime = workTimeStore((state) => state.increaseWorkTime);
  const decreeseWorkTime = workTimeStore((state) => state.decreaseWorkTime);
  const handleIncreaseTime = () => {
    increeseWorkTime(1);
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
  wrapper: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#000",
  },

  timeBlocks: {
    marginTop: 40,

    flexDirection: "row",
    gap: 10,
  },

  timeBlockItem: {
    backgroundColor: "#cce1",
    width: "30%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },

  timeText: {
    fontSize: 40,
    color: "#fff",
  },

  timeConrtols: {
    flexDirection: "row",
    gap: 20,
  },
});
