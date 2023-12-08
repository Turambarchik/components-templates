import styled from "styled-components/native";

export const ImageWithLoaderStyles = {
  ActivityLoader: styled.ActivityIndicator.attrs(({ theme }) => ({
    size: 36,
    color: theme.components.button.primaryColor,
  }))``,
  ActivityLoaderWrapper: styled.View`
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    align-items: center;
    justify-content: center;
  `,
};
