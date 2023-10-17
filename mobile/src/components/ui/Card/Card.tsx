import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {CardStyles} from './styles';

export type TCardElement = {
  children: React.ReactNode;
  style?: Record<string, any>;
};

export type TDescription = TCardElement;
export const Description = ({children}: TDescription) => {
  return <Text style={[CardStyles.description]}>{children}</Text>;
};

export type TTitle = TCardElement;
export const Title = ({children}: TTitle) => {
  return <Text style={[CardStyles.title]}>{children}</Text>;
};

export type TInfo = TCardElement;
export const Info = ({children, style}: TInfo) => {
  return <View style={[CardStyles.info, style]}>{children}</View>;
};

export type TCard = TCardElement & {
  coverSrc?: string;
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
};
export const Card = ({
  children,
  coverSrc,
  minHeight = 100,
  maxHeight,
  minWidth,
}: TCard) => {
  const cardStyles = {
    minHeight,
    maxHeight,
    minWidth,
  };
  return (
    <View style={[CardStyles.card, cardStyles]}>
      <ImageBackground
        style={[CardStyles.cover]}
        source={{
          uri: coverSrc,
        }}
        resizeMode="cover">
        <View style={[CardStyles.coverContainer]}>{children}</View>
      </ImageBackground>
    </View>
  );
};

Card.Title = Title;
Card.Description = Description;
Card.Info = Info;
