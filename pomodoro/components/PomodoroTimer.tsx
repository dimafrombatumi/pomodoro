import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CircularProgress from './AnimatedCircularProgress';
import { workTimeStore } from '../store/store';

export default function PomodoroTimer() {
  const workTime = workTimeStore((state) => state.workTime);
  const roundsAll = workTimeStore((state) => state.roundsAll);
  const roundsDone = workTimeStore((state) => state.roundsDone);

  const POMODORO_TIME = workTime * 60; // 5 mins for dev needs

  const refInterval = useRef<NodeJS.Timeout | null>(null);
  const [leftTime, setLeftTime] = useState<number>(POMODORO_TIME);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    setLeftTime(POMODORO_TIME);
  }, [workTime]);

  useEffect(() => {
    if (isRunning) {
      refInterval.current = setInterval(() => {
        setLeftTime((prev) => {
          if (prev <= 1) {
            clearInterval(refInterval.current!);
            setIsRunning(false);
            setLeftTime(POMODORO_TIME);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      return clearInterval(refInterval.current!);
    }
  }, [isRunning]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  return (
    <View style={styles.container}>
      <CircularProgress
        radius={140}
        strokeWidth={20}
        progress={leftTime / POMODORO_TIME}
        time={formatTime(leftTime)}
        isRunning={isRunning}
        onStartPause={handleStartPause}
      />
      <View style={styles.bottom}>
        <Text style={styles.bottomText}>
          {roundsDone} / {roundsAll}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  bottom: {
    height: '10%',
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  bottomText: { color: '#fff', fontSize: 24, fontWeight: 500, padding: 5 },
});
