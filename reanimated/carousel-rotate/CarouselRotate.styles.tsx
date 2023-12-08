import { View } from "react-native";
import styled from "styled-components";

import { moderateScale } from "helpers/scaling";

export const Container = styled(View)`
  flex: 1;
  align-items: center;
`;
export const PaginationContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin-vertical: ${moderateScale(24)}px;
`;
