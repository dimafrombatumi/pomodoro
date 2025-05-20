import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CircularProgress from './AnimatedCircularProgress';
import { workTimeStore } from '../store/store';

export default function PomodoroTimer() {
  const workTime = workTimeStore((state) => state.workTime);
  const roundsAll = workTimeStore((state) => state.roundsAll);
  const roundsDone = workTimeStore((state) => state.roundsDone);
  const increaseRoundsDone = workTimeStore((state) => state.increaseRoundsDone);

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
            increaseRoundsDone(1);
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
      <View style={styles.bottom}>
        <View style={styles.bottomItem}>
          <Text style={styles.bottomText}>Rounds</Text>
          <Text style={styles.bottomTextScore}>
            {roundsDone} / {roundsAll}
          </Text>
        </View>
        <View style={styles.bottomItem}>
          <Text style={styles.bottomText}>Goals</Text>
          <Text style={styles.bottomTextScore}>
            {roundsDone} / {roundsAll}
          </Text>
        </View>
        <View style={styles.bottomItem}>
          <Text style={styles.bottomText}>Today</Text>
          <Text style={styles.bottomTextScore}>{roundsDone}</Text>
        </View>
        <View style={styles.bottomItem}>
          <Text style={styles.bottomText}>Lifetime</Text>
          <Text style={styles.bottomTextScore}>{roundsDone}</Text>
        </View>
      </View>
      <CircularProgress
        radius={140}
        strokeWidth={20}
        progress={leftTime / POMODORO_TIME}
        time={formatTime(leftTime)}
        isRunning={isRunning}
        onStartPause={handleStartPause}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '90%',
    justifyContent: 'center',
  },
  bottom: {
    marginBottom: 100,
    height: 'auto',
    backgroundColor: '#000',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 30,
  },
  bottomItem: {
    flexDirection: 'column',
    backgroundColor: '#cce1',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 500,
  },
  bottomTextScore: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 500,
  },
});
