/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useRef} from 'react';
import {View, Animated, PanResponder, Dimensions} from 'react-native';
import {SwipeCardStyleSheet} from './styles';

type TPrevStateAct = (state: any) => any;
export interface ISwipeCard<T> {
  children: (item: T) => React.ReactNode;
  items: T[];
  setItems: (fun: TPrevStateAct) => void;
}

const {height} = Dimensions.get('screen');

export const SwipeCard = <T,>({children, items, setItems}: ISwipeCard<T>) => {
  const swipe = useRef(new Animated.ValueXY()).current;
  const titlSign = useRef(new Animated.Value(1)).current;

  const removeTopCard = useCallback(() => {
    setItems(prevState => prevState.slice(1));
    swipe.setValue({x: 0, y: 0});
  }, [swipe, setItems]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, {dx, dy, y0}) => {
        swipe.setValue({x: dx, y: dy});
        titlSign.setValue(y0 > (height * 0.9) / 2 ? 1 : -1);
      },
      onPanResponderRelease: (_, {dx, dy}) => {
        const direction = Math.sign(dx);
        const isSwipedOffScreen = Math.abs(dx) > 100;

        if (isSwipedOffScreen) {
          Animated.timing(swipe, {
            duration: 100,
            toValue: {
              x: direction * 500,
              y: dy,
            },
            useNativeDriver: true,
          }).start(removeTopCard);
          return;
        }

        Animated.spring(swipe, {
          toValue: {
            x: 0,
            y: 0,
          },
          useNativeDriver: true,
          friction: 5,
        }).start();
      },
    }),
  ).current;

  const rotate = Animated.multiply(swipe.x, titlSign).interpolate({
    inputRange: [-100, 0, 100],
    outputRange: ['8deg', '0deg', '-8deg'],
  });

  const animatedCardStyle = {
    transform: [...swipe.getTranslateTransform(), {rotate}],
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      {items
        .map((item, index) => (
          <Animated.View
            key={index}
            style={[
              index === 0 ? animatedCardStyle : {},
              SwipeCardStyleSheet.container,
            ]}
            {...(index === 0 ? panResponder.panHandlers : {})}>
            {children(item)}
          </Animated.View>
        ))
        .reverse()}
    </View>
  );
};
