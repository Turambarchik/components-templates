import { View } from "react-native";
import styled from "styled-components";

import { Typography } from "components/atoms";
import { ReanimatedView } from "helpers/constants";

export const Container = styled(View)``;

export const TextContainer = styled(ReanimatedView)`
  margin-top: auto;
  margin-bottom: auto;
`;

export const DiscountText = styled(Typography)`
  align-self: center;
`;
