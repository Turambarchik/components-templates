import { Image, View } from "react-native";
import styled from "styled-components";

import { ReanimatedView } from "helpers/constants";
import { moderateScale } from "helpers/scaling";

export const imageHeight = moderateScale(245);
export const imagePadding = moderateScale(10);
export const imageMarginTop = moderateScale(6);

export const Container = styled(View)`
  flex: 1;
`;

export const ImageItem = styled(Image)`
  width: 100%;
  height: ${imageHeight}px;
`;

type ImageContainerProps = {
  withoutTopMargin?: boolean;
  key: number;
  children?: React.ReactNode;
};

export const ImageContainer: React.FC<ImageContainerProps> = styled(
  ReanimatedView
)<ImageContainerProps>`
  width: 100%;
  height: ${imageHeight}px;
  padding: ${imagePadding}px;
  padding-top: ${({ withoutTopMargin }) =>
    withoutTopMargin ? 0 : imagePadding}px;
  margin-top: ${({ withoutTopMargin }) =>
    withoutTopMargin ? 0 : imageMarginTop}px;
`;
