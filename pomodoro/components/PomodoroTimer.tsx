import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CircularProgress from "./AnimatedCircularProgress";

export default function PomodoroTimer() {
  const POMODORO_TIME = 5 * 60; // 5 mins for dev needs

  const refInterval = useRef<NodeJS.Timeout | null>(null);
  const [leftTime, setLeftTime] = useState<number>(POMODORO_TIME);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, "0")}:${sec
      .toString()
      .padStart(2, "0")}`;
  };

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
    <View style={styles.circularWrapper}>
      <CircularProgress
        radius={140}
        strokeWidth={20}
        progress={leftTime / POMODORO_TIME}
        time={formatTime(leftTime)}
        isRunning={isRunning}
        onStartPause={handleStartPause}
      />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={handleStartPause}
          style={styles.StartPauseButton}
        >
          <Text>{isRunning ? "Pause" : "Start"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circularWrapper: {
    backgroundColor: "#111",
  },
  StartPauseButton: {
    padding: 10,
    backgroundColor: "#03ffaf",
  },
});
