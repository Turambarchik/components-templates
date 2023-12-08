import React, { FC } from "react";
import { ImageSourcePropType } from "react-native";
import { Easing } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";

import { DEVICE_WIDTH } from "helpers/constants";

import * as S from "./ImagesLineCarousel.styles";

const { ImageContainer, ImageItem, Container } = S;

type Props = {
  /**
   * @description Represents images in line. For smooth animation images length MUST be >= 6 .
   */
  imagesData: ImageSourcePropType[];
  isReverse?: boolean;
  height?: number;
  withoutTopMargin?: boolean;
};

const ImagesLineCarusel: FC<Props> = ({
  imagesData,
  height = S.imageHeight,
  isReverse = false,
  withoutTopMargin = false,
}) => {
  const adjustedImagesData =
    imagesData.length >= 6
      ? imagesData.slice(0, 6)
      : imagesData.concat(imagesData.slice(0, 6 - imagesData.length));

  return (
    <Container>
      <Carousel
        data={adjustedImagesData}
        loop
        autoPlay
        autoPlayReverse={isReverse}
        autoPlayInterval={0}
        snapEnabled={false}
        pagingEnabled={false}
        enabled={false}
        width={DEVICE_WIDTH / 3}
        height={height}
        style={[
          {
            width: DEVICE_WIDTH,
          },
        ]}
        withAnimation={{
          type: "timing",
          config: {
            duration: 10000,
            easing: Easing.linear,
          },
        }}
        renderItem={(el) => (
          <ImageContainer withoutTopMargin={withoutTopMargin} key={el.index}>
            <ImageItem source={el.item} resizeMode="cover" />
          </ImageContainer>
        )}
      />
    </Container>
  );
};

export default ImagesLineCarusel;
