import React from "react";
import { View, type ViewProps } from "react-native";
import styled from "styled-components/native";

import { defaultZero } from "helpers/functions";
import type theme from "theme/theme";

export type SectionProps = {
  row?: boolean;
  marginTop?: number;
  marginBottom?: number;
  marginHorizontal?: number;
  centerVertical?: boolean;
  centerHorizontal?: boolean;
  horizontalPadding?: number;
  bgColor?: keyof typeof theme.colors;
};

const Section = ({
  row,
  children,
  centerVertical,
  centerHorizontal,
  marginHorizontal,
  bgColor,
  ...props
}: ViewProps & SectionProps) => (
  <SectionView
    bgColor={bgColor}
    centerVertical={centerVertical}
    centerHorizontal={centerHorizontal}
    marginHorizontal={marginHorizontal}
    row={row}
    {...props}
  >
    {children}
  </SectionView>
);

const SectionView = styled(View)<ViewProps & SectionProps>`
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  align-items: ${({ centerVertical }) =>
    centerVertical ? "center" : "flex-start"};
  justify-content: ${({ centerHorizontal }) =>
    centerHorizontal ? "center" : "flex-start"};
  margin-top: ${({ marginTop }) => defaultZero(marginTop)}px;
  margin-bottom: ${({ marginBottom }) => defaultZero(marginBottom)}px;
  margin-horizontal: ${({ marginHorizontal }) =>
    defaultZero(marginHorizontal)}px;
  background-color: ${({ bgColor, theme }) =>
    bgColor ? theme.colors[bgColor] : "inherit"};
`;

export default Section;
