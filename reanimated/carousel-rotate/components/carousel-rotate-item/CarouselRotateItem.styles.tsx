import { Image, View } from "react-native";
import styled from "styled-components";

import { Button, Typography } from "components/atoms";
import { moderateScale } from "helpers/scaling";

const imageHeight = moderateScale(485);

export const Container = styled(View)`
  flex: 1;
  width: ${moderateScale(520)}px;
  justify-content: center;
  border-radius: ${moderateScale(16)}px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ImageContainer = styled(View)`
  width: 100%;
  height: ${imageHeight}px;
`;

export const ImageItem = styled(Image)`
  width: 100%;
  height: ${imageHeight}px;
`;

export const CenterContainer = styled(View)`
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-vertical: ${moderateScale(36)}px;
`;

export const ButtonsContainer = styled(View)`
  flex-direction: row;

  margin-vertical: ${moderateScale(36)}px;
`;

export const ProductsButton = styled(Button)<{ isActive?: boolean }>`
  height: ${moderateScale(35)};
  border-radius: 0.6px;
  margin-horizontal: ${moderateScale(4)}px;
  border: ${moderateScale(1)}px solid
    ${({ theme, isActive }) =>
      isActive ? theme.colors.myrtle : theme.colors.black};
`;

export const StartCustomization = styled(Button)`
  align-self: center;
  align-items: center;
  justify-content: center;
  height: ${moderateScale(35)};
  padding: ${moderateScale(8)}px ${moderateScale(10)}px ${moderateScale(8)}px
    ${moderateScale(10)}px;
  border: ${moderateScale(1)}px solid ${({ theme }) => theme.colors.myrtle};
  background-color: ${({ theme }) => theme.colors.myrtle};
`;

export const ItemTitle = styled(Typography)``;

export const PriceText = styled(Typography)`
  margin-vertical: ${moderateScale(5)}px;
`;

export const ButtonTitle = styled(Typography)``;
