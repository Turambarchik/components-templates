import { equals } from "ramda";
import React, { useState } from "react";
import { type ImageSourcePropType } from "react-native";
import Animated from "react-native-reanimated";

import * as S from "./CarouselRotateItem.styles";

const {
  Container,
  ImageContainer,
  ImageItem,
  ButtonsContainer,
  CenterContainer,
  PriceText,
  ItemTitle,
  ProductsButton,
  StartCustomization,
  ButtonTitle,
} = S;

type Props = {
  item: ImageSourcePropType;
  index: number;
  handleNavigate: () => void;
  animationValue?: Animated.SharedValue<number>;
  currentItemIndex?: number;
};

const TEST_BUTTONS_ARRAY = ["Mens", "Womens", "Kids", "Infants"];

export const CarouselRotateItem = ({ index, item, handleNavigate }: Props) => {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  const selectProduct = (idx: number) => {
    setSelectedButtonIndex(idx);
  };

  return (
    <Container>
      <ImageContainer key={index}>
        <ImageItem source={item} resizeMode="cover" />
      </ImageContainer>
      <CenterContainer>
        <ItemTitle color="myrtle" fz="fz20">
          2023 Team Polo
        </ItemTitle>
        <PriceText color="extraBlack" fz="fz16">
          $160.00
        </PriceText>
      </CenterContainer>
      <ButtonsContainer>
        {TEST_BUTTONS_ARRAY.map((el, idx) => (
          <ProductsButton
            key={idx}
            onPress={selectProduct.bind(null, idx)}
            isActive={equals(idx, selectedButtonIndex)}
          >
            <ButtonTitle
              fz="fz14"
              color={equals(idx, selectedButtonIndex) ? "myrtle" : "black"}
            >
              {el}
            </ButtonTitle>
          </ProductsButton>
        ))}
        <StartCustomization>
          <ButtonTitle color="white" onPress={handleNavigate}>
            Start Customization
          </ButtonTitle>
        </StartCustomization>
      </ButtonsContainer>
    </Container>
  );
};
