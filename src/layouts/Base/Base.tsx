import React from 'react';
import {BaseStyleSheet} from './styles';
import {View} from 'react-native';

export interface IBaseLayout {
  children: React.ReactNode;
}
export const BaseBody = ({children}: IBaseLayout) => (
  <View style={BaseStyleSheet.body}>{children}</View>
);
export const BaseHeader = ({children}: IBaseLayout) => (
  <View style={BaseStyleSheet.header}>{children}</View>
);

export const BaseLayout = ({children}: IBaseLayout) => {
  return <View style={BaseStyleSheet.wrapper}>{children}</View>;
};

BaseLayout.Header = BaseHeader;
BaseLayout.Body = BaseBody;
