import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Svg, { Circle } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { interpolate } from "react-native-reanimated";
import Ionicons from "@expo/vector-icons/Ionicons";
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type Props = {
  radius: number;
  strokeWidth: number;
  progress: number;
  time: string;
  isRunning: boolean;
  onStartPause: () => void;
};

export default function AnimatedCircularProgress({
  radius,
  strokeWidth,
  progress,
  time,
  isRunning,
  onStartPause,
}: Props) {
  const size = radius * 2 + strokeWidth;
  const circumference = 2 * Math.PI * radius;

  const animatedProgress = useSharedValue(progress);

  // каждый раз, когда progress обновляется — анимируем
  React.useEffect(() => {
    animatedProgress.value = withTiming(progress, {
      duration: 200,
      easing: Easing.out(Easing.ease),
    });
  }, [progress]);

  const animatedProps = useAnimatedProps(() => {
    const strokeDashoffset = interpolate(
      animatedProgress.value,
      [0, 1],
      [circumference, 0]
    );
    return {
      strokeDashoffset,
    };
  });

  const handleOnStartPause = () => {
    onStartPause();
  };

  return (
    <>
      <View style={styles.wrapper}>
        <Svg width={size} height={size}>
          <Circle
            stroke="#e6e6e6"
            fill="none"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <AnimatedCircle
            stroke="#f54e4e"
            fill="none"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            animatedProps={animatedProps}
            strokeLinecap="round"
            rotation="-90"
            origin={`${size / 2}, ${size / 2}`}
          />
        </Svg>
        <View style={styles.textWrapper}>
          <Text style={styles.timeText}>{time}</Text>
          <TouchableOpacity onPress={handleOnStartPause}>
            <Ionicons
              name={!isRunning ? "play" : "pause"}
              size={40}
              color="red"
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  textWrapper: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  timeText: {
    color: "#fff",
    fontSize: 60,
    fontWeight: "100",
  },
  wrapper: {
    alignItems: "center",
    backgroundColor: "#000",
    flex: 1,
    justifyContent: "center",
  },
});
