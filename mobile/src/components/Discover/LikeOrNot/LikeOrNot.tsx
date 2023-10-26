import React, {Fragment, useCallback} from 'react';
import {Animated} from 'react-native';
import {SwipeCard} from '../../ui/SwipeCard/SwipeCard';
import {LikeOrNotStyleSheet} from './styles';
import Choice from '../Choise/Choise';
import {UserActions} from '../UserActions/UserActions';
import {useUsersDiscover} from '../../../hooks/useUsersDiscover';
import {SwipeCardChildren} from './SwipeCardChildren';
import {usePostInteraction} from './usePostSwipe';

export interface IUser {
  id: number;
  profileImg: string;
  name: string;
  age: string;
  description: string;
  distance: string;
}

export interface ILikeOrNot {
  peopleToDiscover: IUser[];
}
export const LikeOrNot = ({peopleToDiscover}: ILikeOrNot) => {
  const {mutate} = usePostInteraction();
  const {users, setUsers} = useUsersDiscover({peopleToDiscover});

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

  const handleSwipeUserMatching = (
    swipe: Animated.ValueXY,
    prevState: IUser[],
  ) => {
    const isLike = Number(JSON.stringify(swipe.x)) > 0;
    const userIdReceiver = prevState?.[0]?.id;

    mutate({
      interaction: isLike ? 'like' : 'reject',
      userIdReceiver,
      userIdTransmitter: 1,
    });
  };

  return (
    <SwipeCard<IUser>
      onSwipeUser={handleSwipeUserMatching}
      items={users}
      setItems={setUsers}
      renderActionBar={handleChoice => (
        <UserActions
          onLike={() => handleChoice(1)}
          onReject={() => handleChoice(-1)}
        />
      )}>
      {(item, swipe, isFirst) => (
        <SwipeCardChildren
          item={item}
          swipe={swipe}
          isFirst={isFirst}
          renderChoice={renderChoice}
        />
      )}
    </SwipeCard>
  );
};
