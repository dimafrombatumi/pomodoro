import { View } from 'react-native';
import React from 'react';
import PomodoroTimer from '../components/PomodoroTimer';
import SettingsButton from '../components/SettingsButton';
const HomeScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <SettingsButton />
      <PomodoroTimer />
    </View>
  );
};

export default HomeScreen;
