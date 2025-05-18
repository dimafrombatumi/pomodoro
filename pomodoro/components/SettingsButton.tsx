import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const SettingsButton = () => {
  type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'SettingsScreen'>;
  const navigation = useNavigation<NavigationProps>();

  return (
    <TouchableOpacity style={styles.wrapper} onPress={() => navigation.navigate('SettingsScreen')}>
      <Ionicons name="settings-outline" size={24} color="white" />
    </TouchableOpacity>
  );
};

export default SettingsButton;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'flex-end',
    backgroundColor: '#000',
    justifyContent: 'center',
    paddingRight: 20,
    paddingTop: 20,
  },
});
