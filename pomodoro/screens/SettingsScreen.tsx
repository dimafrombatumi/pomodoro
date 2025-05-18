import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { workTimeStore } from '../store/store';
const SettingsScreen = () => {
  const workTime = workTimeStore((state) => state.workTime);
  const increeseWorkTime = workTimeStore((state) => state.increaseWorkTime);
  const decreeseWorkTime = workTimeStore((state) => state.decreaseWorkTime);

  const smallPause = workTimeStore((state) => state.smallPause);
  const increaseSmallPause = workTimeStore((state) => state.increaseSmallPause);
  const decreaseSmallPause = workTimeStore((state) => state.decreaseSmallPause);

  const handleIncreaseTime = (num) => {
    increeseWorkTime(num);
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.timeBlocks}>
        <View style={styles.timeBlockItem}>
          <Text style={styles.smText}>Work Time</Text>
          <Text style={styles.timeText}>{workTime}</Text>
          <View style={styles.timeConrtols}>
            <Ionicons name="add" size={24} color="#fff" onPress={() => handleIncreaseTime(1)} />
            <Ionicons name="remove" size={24} color="#fff" onPress={() => decreeseWorkTime(1)} />
          </View>
        </View>
        <View style={styles.timeBlockItem}>
          <Text style={styles.smText}>Small Pause</Text>

          <Text style={styles.timeText}>{smallPause}</Text>
          <View style={styles.timeConrtols}>
            <Ionicons name="add" size={24} color="#fff" onPress={() => increaseSmallPause(1)} />
            <Ionicons name="remove" size={24} color="#fff" onPress={() => decreaseSmallPause(1)} />
          </View>
        </View>
        <View style={styles.timeBlockItem}>
          <Text style={styles.smText}>Long Pause</Text>
          <Text style={styles.timeText}>{smallPause}</Text>
          <View style={styles.timeConrtols}>
            <Ionicons name="add" size={24} color="#fff" onPress={() => increaseSmallPause(1)} />
            <Ionicons name="remove" size={24} color="#fff" onPress={() => decreaseSmallPause(1)} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  timeBlockItem: {
    alignItems: 'center',
    backgroundColor: '#cce1',
    height: 'auto',
    padding: 10,
    justifyContent: 'center',
    width: '29%',
  },

  smText: {
    fontSize: 16,
    color: '#fff',
  },

  timeBlocks: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 40,
  },

  timeConrtols: {
    flexDirection: 'row',
    gap: 20,
  },

  timeText: {
    color: '#fff',
    fontSize: 40,
  },

  wrapper: {
    alignItems: 'center',
    backgroundColor: '#000000',
    flex: 1,
    justifyContent: 'flex-start',
  },
});
