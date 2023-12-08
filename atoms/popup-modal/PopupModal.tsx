import type { ReactNode } from "react";
import { Dimensions, View } from "react-native";
import Modal from "react-native-modal";
import { useTheme } from "styled-components/native";

type Props = {
  children: ReactNode;
  isVisible: boolean;
  withSwiped?: boolean;
  onModalHide?: () => void;
};
const PopupModal = ({
  children,
  isVisible,
  withSwiped = false,
  onModalHide,
}: Props) => {
  const theme = useTheme();
  return (
    <Modal
      backdropColor={theme.colors.disabled}
      statusBarTranslucent
      isVisible={isVisible}
      onModalHide={onModalHide}
      swipeDirection={withSwiped ? "down" : undefined}
      onSwipeComplete={onModalHide}
      onBackdropPress={onModalHide}
      onBackButtonPress={onModalHide}
      propagateSwipe
      customBackdrop={
        <View
          style={{
            backgroundColor: theme.colors.black,
            ...Dimensions.get("screen"),
          }}
        />
      }
    >
      {children}
    </Modal>
  );
};

export default PopupModal;
