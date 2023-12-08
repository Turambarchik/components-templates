import { useNavigation } from "@react-navigation/native";
import { and, defaultTo, equals, isNil } from "ramda";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useTheme } from "styled-components";

import { HeaderBackButton } from "components/atoms/header-back-button/HeaderBackButton";
import { HeaderBackground } from "components/atoms/header-background/HeaderBackground";
import { SVGIcon } from "components/atoms/icon/Icon";
import { addressNameConverter } from "helpers/converter";
import { Routes } from "modules/app/Routes";
import { useAmplitude } from "services/amplitude/amplitude-hooks";
import { useStoreState } from "store/store";

import {
  callGlobalModal,
  globalModalKeys,
} from "../global-modal-sheet/globalModalSheet.helpers";
import { ModalSheetType } from "../modal-sheet/modalSheet.types";
import { StickyHeaderStyles } from "./spaceHeader.styles";

const {
  HeaderText,
  LeftWrapper,
  RightWrapper,
  CenterWrapper,
  NotificationCountWrapper,
  NotificationCountText,
  NotificationCountIcon,
} = StickyHeaderStyles;

export type useSpaceHeaderProps = {
  isTransparent?: boolean;
  withLeft?: boolean;
  withNotifs?: boolean;
  withLeftArrow?: boolean;
  withDropdown?: boolean;
  // TODO -  BottomTabNavigationOptions && NativeStackNavigationOptions
};

export const useSpaceHeader = ({
  isTransparent = false,
  withNotifs = false,
  withLeft = false,
  withLeftArrow = false,
  withDropdown = false,
}: useSpaceHeaderProps) => {
  const [isOpenObjectsModal, setIsOpenObjectsModal] = useState<boolean>(false);
  const navigation = useNavigation();
  const theme = useTheme();
  const { trackEvent } = useAmplitude();
  const {
    notification: { totalItemsUnread },
    app: { currentSpace, mySpaces },
  } = useStoreState((state) => state);

  const goToTheNotificationScreen = useCallback(() => {
    navigation.navigate(Routes.Notification);
    trackEvent("notifications_btn_header_icon_tap", {
      new: totalItemsUnread > 0,
    });
  }, [navigation, totalItemsUnread, trackEvent]);

  const currentHeaderTitle = useMemo(() => {
    if (isNil(currentSpace)) {
      return "";
    }
    return addressNameConverter(currentSpace.address);
  }, [currentSpace]);

  const handleOpenObjectsModal = useCallback(() => {
    callGlobalModal({
      modalType: ModalSheetType.objects,
      modalKey: globalModalKeys.objectsModalCalled,
      skipQueue: false,
    });
    trackEvent("object_switcher_btn_header_tap");
  }, [trackEvent]);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerBackVisible: false,
      headerTitleAlign: "center",
      headerTitle: () =>
        and(withDropdown, defaultTo([], mySpaces).length > 1) ? (
          <CenterWrapper onPress={handleOpenObjectsModal}>
            <HeaderText numberOfLines={1}>{currentHeaderTitle}</HeaderText>
            <SVGIcon type="arrowDown" />
          </CenterWrapper>
        ) : (
          <HeaderText numberOfLines={1}>{currentHeaderTitle}</HeaderText>
        ),
      headerLeft: () =>
        withLeft ? (
          <LeftWrapper>
            <SVGIcon type="logo" />
          </LeftWrapper>
        ) : withLeftArrow ? (
          <HeaderBackButton />
        ) : (
          <></>
        ),
      headerRight: () =>
        withNotifs ? (
          <RightWrapper onPress={goToTheNotificationScreen}>
            {!equals(totalItemsUnread, 0) ? (
              <>
                <NotificationCountIcon type="notificatiosWithText" />
                <NotificationCountWrapper>
                  <NotificationCountText>
                    {totalItemsUnread > 99 ? 99 : totalItemsUnread}
                  </NotificationCountText>
                </NotificationCountWrapper>
              </>
            ) : (
              <SVGIcon type="notifications" />
            )}
          </RightWrapper>
        ) : (
          <></>
        ),
      headerBackground: () => <HeaderBackground />,
      headerTransparent: isTransparent,
      headerStyle: {
        backgroundColor: theme.colors.opacityBg,
      },
    });
  }, [
    currentHeaderTitle,
    goToTheNotificationScreen,
    isOpenObjectsModal,
    navigation,
    theme.colors.primaryBg,
    totalItemsUnread,
    isTransparent,
    withDropdown,
    withLeft,
    withLeftArrow,
    withNotifs,
    theme.colors.opacityBg,
    mySpaces,
    handleOpenObjectsModal,
  ]);
};
