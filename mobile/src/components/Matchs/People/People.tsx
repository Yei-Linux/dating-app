import {atom, useAtom} from 'jotai';
import React from 'react';
import {View} from 'react-native';
import {PeopleLikesMock} from './mock';
import {IPeopleInteractionComponent, PeopleInteraction} from '../../shared';

const peopleAtom = atom<Array<IPeopleInteractionComponent>>(PeopleLikesMock);

export const People = () => {
  const [peopleLikes] = useAtom(peopleAtom);

  return (
    <View>
      {peopleLikes.map(user => (
        <PeopleInteraction {...user} />
      ))}
    </View>
  );
};
