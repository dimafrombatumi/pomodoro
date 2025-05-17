import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
const SettingsScreen = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.timeBlocks}>
        <View style={styles.timeBlockItem}>
          <Text style={styles.timeText}>25</Text>
          <View style={styles.timeConrtols}>
            <Ionicons name="add" size={24} color="#fff" />
            <Ionicons name="remove" size={24} color="#fff" />
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
