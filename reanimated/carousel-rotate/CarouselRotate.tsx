import * as React from "react";
import { useDerivedValue, useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";

import { DEVICE_WIDTH } from "helpers/constants";
import { JERSEY_IMAGES_ARRAY } from "helpers/images";
import { moderateScale } from "helpers/scaling";

import * as S from "./CarouselRotate.styles";
import { CarouselRotateItem } from "./components/carousel-rotate-item/CarouselRotateItem";
import PaginationDot from "./components/PagginationDot";
import { parallaxLayout } from "./parallax";

const { Container, PaginationContainer } = S;

type Props = {
  handleNavigate: () => void;
};

const CarouselRotate = ({ handleNavigate }: Props) => {
  const progressValue = useSharedValue<number>(0);
  const derivedProgress = useDerivedValue(() => progressValue.value);

  const handleProgressChange = (_: number, absoluteProgress: number) => {
    progressValue.value = absoluteProgress;
  };

  return (
    <Container>
      <Carousel
        width={DEVICE_WIDTH * 0.62}
        data={JERSEY_IMAGES_ARRAY}
        style={{
          width: DEVICE_WIDTH,
          height: moderateScale(725),
          justifyContent: "center",
          alignItems: "center",
        }}
        loop
        vertical={false}
        pagingEnabled
        snapEnabled
        scrollAnimationDuration={1200}
        onProgressChange={handleProgressChange}
        mode="parallax"
        customAnimation={parallaxLayout(
          {
            size: DEVICE_WIDTH * 0.55,
            vertical: false,
          },
          {
            parallaxScrollingScale: 1,
            parallaxAdjacentItemScale: 0.6,
            parallaxScrollingOffset: 0,
          }
        )}
        renderItem={({ index, item }) => (
          <CarouselRotateItem
            item={item}
            index={index}
            handleNavigate={handleNavigate}
          />
        )}
      />
      <PaginationContainer>
        {JERSEY_IMAGES_ARRAY.map((_, index) => (
          <PaginationDot
            animValue={derivedProgress}
            index={index}
            key={index}
            length={JERSEY_IMAGES_ARRAY.length}
          />
        ))}
      </PaginationContainer>
    </Container>
  );
};

export default CarouselRotate;
