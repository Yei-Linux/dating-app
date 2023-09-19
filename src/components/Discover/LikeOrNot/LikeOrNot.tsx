/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Card} from '../../ui/Card/Card';
import {Button} from '../../ui/Button/Button';
import {SwipeCard} from '../../ui/SwipeCard/SwipeCard';
import {USERS_ON_SWIPPING} from '../../../constants';
import {DiscoverStyleSheet} from '../../../screens/Discover/styles';
import {LikeOrNotStyleSheet} from './styles';

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

  return (
    <View style={LikeOrNotStyleSheet.wrapper}>
      <SwipeCard<IUser> items={users} setItems={setUsers}>
        {item => (
          <Card
            coverSrc={item.coverSrc}
            minWidth={400}
            maxHeight={400}
            minHeight={400}>
            <Card.Info style={DiscoverStyleSheet.userInfo}>
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
    </View>
  );
};
