/* eslint-disable react-native/no-inline-styles */
import React, {Fragment, useCallback, useEffect, useState} from 'react';
import {Animated, View} from 'react-native';
import {Card} from '../../ui/Card/Card';
import {Button} from '../../ui/Button/Button';
import {SwipeCard} from '../../ui/SwipeCard/SwipeCard';
import {USERS_ON_SWIPPING} from '../../../constants';
import {DiscoverStyleSheet} from '../../../screens/Discover/styles';
import {LikeOrNotStyleSheet} from './styles';
import Choice from '../Choise/Choise';
import {UserActions} from '../UserActions/UserActions';

export interface IUser {
  coverSrc: string;
  name: string;
  age: string;
  description: string;
  distance: string;
}

export const LikeOrNot = () => {
  const [users, setUsers] = useState(USERS_ON_SWIPPING);

  useEffect(() => {
    if (users.length > 0) {
      return;
    }

    setUsers(USERS_ON_SWIPPING);
  }, [users.length]);

  const likeOpacity = (swipe: any) =>
    swipe.x.interpolate({
      inputRange: [25, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });

  const nopeOpacity = (swipe: any) =>
    swipe.x.interpolate({
      inputRange: [-100, -25],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

  const renderChoice = useCallback(
    (swipe: any) => (
      <Fragment>
        <Animated.View
          style={[
            LikeOrNotStyleSheet.choiceContainer,
            LikeOrNotStyleSheet.likeContainer,
            {opacity: likeOpacity(swipe)},
          ]}>
          <Choice type="like" />
        </Animated.View>
        <Animated.View
          style={[
            LikeOrNotStyleSheet.choiceContainer,
            LikeOrNotStyleSheet.nopeContainer,
            {opacity: nopeOpacity(swipe)},
          ]}>
          <Choice type="nope" />
        </Animated.View>
      </Fragment>
    ),
    [],
  );

  return (
    <SwipeCard<IUser>
      items={users}
      setItems={setUsers}
      renderActionBar={handleChoice => (
        <UserActions
          onLike={() => handleChoice(1)}
          onReject={() => handleChoice(-1)}
        />
      )}>
      {(item, swipe, isFirst) => (
        <Card
          coverSrc={item.coverSrc}
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
      )}
    </SwipeCard>
  );
};
