import React, { useState } from "react";
import { View } from "react-native";
import type { FastImageProps } from "react-native-fast-image";

import Image from "components/atoms/image/Image";

import { ImageWithLoaderStyles } from "./imageWithLoader.styles";

type ImageProps = {
  width?: string | number;
  height?: string | number;
  borderRadius?: number;
  borderRadiusLeft?: number;
};

const { ActivityLoader, ActivityLoaderWrapper } = ImageWithLoaderStyles;

export const ImageWithLoader = (props: ImageProps & FastImageProps) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View>
      {isLoading && (
        <ActivityLoaderWrapper>
          <ActivityLoader />
        </ActivityLoaderWrapper>
      )}
      <Image
        onLoadStart={setIsLoading.bind(this, true)}
        onLoadEnd={setIsLoading.bind(this, false)}
        {...props}
      />
    </View>
  );
};
