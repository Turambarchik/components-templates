import * as React from "react";
import { View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

import { ReanimatedView } from "helpers/constants";
import { moderateScale } from "helpers/scaling";
import theme from "theme/theme";

const DOT_WIDTH = moderateScale(12);

type Props = {
  index: number;
  length: number;
  animValue: Animated.SharedValue<number>;
};

const PaginationDot = ({ animValue, index, length }: Props) => {
  const animStyle = useAnimatedStyle(() => {
    const inputRange = [index - 1, index, index + 1];
    const outputRange = [-DOT_WIDTH, 0, DOT_WIDTH];

    let finalOutput = 0;

    if (index === 0 && animValue.value > length - 1) {
      const lastInputRange = [length - 1, length, length + 1];
      const lastOutputRange = [-DOT_WIDTH, 0, DOT_WIDTH];

      finalOutput = interpolate(
        animValue.value,
        lastInputRange,
        lastOutputRange,
        Extrapolate.CLAMP
      );
    } else {
      finalOutput = interpolate(
        animValue.value,
        inputRange,
        outputRange,
        Extrapolate.CLAMP
      );
    }

    return {
      transform: [
        {
          translateX: finalOutput,
        },
      ],
    };
  }, [animValue, index, length]);

  return (
    <View
      style={{
        backgroundColor: theme.colors.grey,
        width: DOT_WIDTH,
        marginHorizontal: moderateScale(8),
        height: DOT_WIDTH,
        borderRadius: 50,
        overflow: "hidden",
        transform: [
          {
            rotateZ: "0deg",
          },
        ],
      }}
    >
      <ReanimatedView
        style={[
          {
            borderRadius: 50,
            backgroundColor: theme.colors.myrtle,
            flex: 1,
          },
          animStyle,
        ]}
      />
    </View>
  );
};

export default PaginationDot;
