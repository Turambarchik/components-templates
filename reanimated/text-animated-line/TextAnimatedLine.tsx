import React, { FC } from "react";
import { Easing } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";

import { DEVICE_WIDTH } from "helpers/constants";
import { moderateScale } from "helpers/scaling";
import theme from "theme/theme";

import * as S from "./TextAnimatedLine.styles";

const { TextContainer, Container, DiscountText } = S;

type TextAnimatedLineProps = {
  text: string;
  isReverse?: boolean;
};

const TextAnimatedLine: FC<TextAnimatedLineProps> = ({
  isReverse = false,
  text,
}) => {
  return (
    <Container>
      <Carousel
        data={[...new Array(text.length).keys()]}
        style={[
          {
            width: DEVICE_WIDTH,
            backgroundColor: theme.colors.cardinal,
          },
        ]}
        width={DEVICE_WIDTH / 2}
        height={moderateScale(60)}
        snapEnabled={false}
        pagingEnabled={false}
        enabled={false}
        loop
        autoPlay
        autoPlayReverse={isReverse}
        autoPlayInterval={0}
        withAnimation={{
          type: "timing",
          config: {
            duration: 10000,
            easing: Easing.linear,
          },
        }}
        renderItem={() => (
          <TextContainer>
            <DiscountText uppercase={false} color="white" fz="fz20">
              {text}
            </DiscountText>
          </TextContainer>
        )}
      />
    </Container>
  );
};

export default TextAnimatedLine;
