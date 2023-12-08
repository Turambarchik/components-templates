import React from "react";
import type { SafeAreaViewProps } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

import type theme from "theme/theme";

type ScreenProps = {
  horizontalPadding?: number;
  verticalPadding?: number;
  showsVerticalScrollIndicator?: boolean;
  color?: keyof typeof theme.colors;
};

type SafeAreaViewScreenProps = SafeAreaViewProps & ScreenProps;

const Screen = ({
  children,
  horizontalPadding,
  verticalPadding,
  color = "white",
  ...props
}: SafeAreaViewScreenProps) => (
  <Wrapper
    edges={["right", "left"]}
    horizontalPadding={horizontalPadding}
    verticalPadding={verticalPadding}
    color={color}
    {...props}
  >
    {children}
  </Wrapper>
);

const Wrapper = styled(SafeAreaView)<SafeAreaViewScreenProps>`
  flex: 1;
  align-items: center;
  background-color: ${({ color = "white", theme }) => theme.colors[color]};
`;

export default Screen;
