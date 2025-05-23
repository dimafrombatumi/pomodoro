import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CircularProgress from './AnimatedCircularProgress';
import { workTimeStore } from '../store/store';

export default function PomodoroTimer() {
  const workTime = workTimeStore((state) => state.workTime);
  const roundsAll = workTimeStore((state) => state.roundsAll);
  const roundsDone = workTimeStore((state) => state.roundsDone);
  const goalsDone = workTimeStore((state) => state.goalsDone);
  const increaseRoundsDone = workTimeStore((state) => state.increaseRoundsDone);
  const POMODORO_TIME = workTime * 5; // 5 mins for dev needs
  const refInterval = useRef<NodeJS.Timeout | null>(null);
  const [leftTime, setLeftTime] = useState<number>(POMODORO_TIME);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (leftTime === 0 && isRunning) {
      setIsRunning(false);
      increaseRoundsDone(1);
      setLeftTime(POMODORO_TIME);
    }
  }, [leftTime]);

  useEffect(() => {
    if (isRunning) {
      refInterval.current = setInterval(() => {
        setLeftTime((prev) => {
          if (prev <= 1) {
            clearInterval(refInterval.current!);

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
          <Text style={styles.bottomTextScore}>{goalsDone}</Text>
        </View>
        <View style={styles.bottomItem}>
          <Text style={styles.bottomText}>Today</Text>
          <Text style={styles.bottomTextScore}></Text>
        </View>
        <View style={styles.bottomItem}>
          <Text style={styles.bottomText}>Lifetime</Text>
          <Text style={styles.bottomTextScore}></Text>
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
  bottom: {
    backgroundColor: '#000',
    flexDirection: 'row',
    gap: 30,
    height: 'auto',
    justifyContent: 'center',
    marginBottom: 100,
  },
  bottomItem: {
    alignItems: 'center',
    backgroundColor: '#cce1',
    flexDirection: 'column',
    height: 'auto',
    justifyContent: 'center',
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
  container: {
    height: '90%',
    justifyContent: 'center',
  },
});
