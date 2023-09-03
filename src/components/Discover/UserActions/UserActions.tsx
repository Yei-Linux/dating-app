import React from 'react';
import {GestureResponderEvent, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {UserActionsStyleSheet} from './styles';
export const UserActions = () => {
  const handlePressClose = (event: GestureResponderEvent) => {
    return event;
  };
  const handlePressHeart = (event: GestureResponderEvent) => {
    return event;
  };
  const handlePressWeChat = (event: GestureResponderEvent) => {
    return event;
  };

  return (
    <View style={[UserActionsStyleSheet.wrapper]}>
      <View
        style={[
          UserActionsStyleSheet.iconWrapper,
          UserActionsStyleSheet.closeWrapper,
        ]}>
        <Icon.Button
          style={UserActionsStyleSheet.closeIcon}
          iconStyle={UserActionsStyleSheet.closeIconContent}
          backgroundColor="transparent"
          name="close"
          onPress={handlePressClose}
        />
      </View>

      <View
        style={[
          UserActionsStyleSheet.iconWrapper,
          UserActionsStyleSheet.heartWrapper,
        ]}>
        <Icon.Button
          style={UserActionsStyleSheet.heartIcon}
          iconStyle={UserActionsStyleSheet.heartIconContent}
          color="black"
          backgroundColor="transparent"
          name="heart"
          onPress={handlePressHeart}
        />
      </View>
      <View
        style={[
          UserActionsStyleSheet.iconWrapper,
          UserActionsStyleSheet.chatWrapper,
        ]}>
        <Icon.Button
          style={UserActionsStyleSheet.chatIcon}
          iconStyle={UserActionsStyleSheet.chatIconContent}
          color="black"
          backgroundColor="transparent"
          name="wechat"
          onPress={handlePressWeChat}
        />
      </View>
    </View>
  );
};
