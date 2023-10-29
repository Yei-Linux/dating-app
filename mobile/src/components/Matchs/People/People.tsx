import {atom, useAtom} from 'jotai';
import React from 'react';
import {View} from 'react-native';
import {IPeopleInteractionComponent, PeopleInteraction} from '../../shared';

const peopleAtom = atom<Array<IPeopleInteractionComponent>>([]);

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
