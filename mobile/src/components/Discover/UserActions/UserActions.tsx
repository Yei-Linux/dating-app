import React, {FC} from 'react';
import {GestureResponderEvent, View} from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/AntDesign';
import {UserActionsStyleSheet} from './styles';

export interface IUserActions {
  onReject: () => void;
  onLike: () => void;
}

export const UserActions: FC<IUserActions> = ({onReject, onLike}) => {
  const handlePressReject = (event: GestureResponderEvent) => {
    onReject();
    return event;
  };
  const handlePressHeart = (event: GestureResponderEvent) => {
    onLike();
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
        <IconFA.Button
          style={UserActionsStyleSheet.closeIcon}
          iconStyle={UserActionsStyleSheet.closeIconContent}
          backgroundColor="transparent"
          name="close"
          onPress={handlePressReject}
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
