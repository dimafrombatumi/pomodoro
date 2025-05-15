import React, { useEffect, useState, useRef } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function PomodoroTimer() {
  const POMODORO_TIME = 25 * 60;

  const refInterval = useRef<NodeJS.Timeout | null>(null);
  const [leftTime, setLeftTime] = useState<number>(POMODORO_TIME);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, "0")}:
          ${sec.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    if (isRunning) {
      refInterval.current = setInterval(() => {
        setLeftTime((prev) => {
          if (prev <= 1) {
            clearInterval(refInterval.current!);
            setIsRunning(false);
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
      <Text style={styles.timerText}>{formatTime(leftTime)}</Text>
      <Button
        onPress={handleStartPause}
        title={isRunning ? "Pause" : "Start"}
      />
      <View style={{ height: 10 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  timerText: {
    fontSize: 60,
    marginBottom: 20,
  },
});
