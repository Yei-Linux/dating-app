/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Animated, View} from 'react-native';
import {DiscoverStyleSheet} from '../../../screens/Discover/styles';
import {Card} from '../../ui/Card/Card';
import {Button} from '../../ui/Button/Button';
import {IUser} from '../Discover';

export interface ISwipeCardChildren {
  item: IUser;
  swipe: Animated.ValueXY;
  isFirst: boolean;
  renderChoice: (swipe: any) => React.JSX.Element;
}

export const SwipeCardChildren = ({
  item,
  swipe,
  isFirst,
  renderChoice,
}: ISwipeCardChildren) => {
  return (
    <Card
      profileImg={item.profileImg}
      minWidth={400}
      maxHeight={400}
      minHeight={400}>
      <Card.Info style={DiscoverStyleSheet.userInfo}>
        {isFirst && renderChoice(swipe)}
        <View>
          <Card.Title>
            {item.name}, {item.age}
          </Card.Title>
          <Card.Description>{item.description}</Card.Description>
        </View>
        <Button
          maxWidth={100}
          colors={['#000000', '#2f2f2f']}
          text={item.distance}
          styles={{
            borderRadius: 30,
          }}
        />
      </Card.Info>
    </Card>
  );
};
