import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {DiscoverStyleSheet} from './styles';

import {Title} from '../../modules/ui/Title/Title';
import {Discover} from '../../modules/Discover';
import {UnavailableUsers} from '../../modules/Discover/UnavailableUsers';

import {TScreenProp} from '../../types';
import {useFindPeopleQuery} from '../../rtk-query';

export type IDiscoverScreen = TScreenProp;
export const DiscoverScreen = ({}: IDiscoverScreen) => {
  const {data: peopleToDiscover, refetch} = useFindPeopleQuery({userId: '1'});

  return (
    <SafeAreaView>
      <View style={[DiscoverStyleSheet.discoverWrapper]}>
        <View style={[DiscoverStyleSheet.discoverTitle]}>
          <Title text="Discover" level="h1" />
        </View>

        {peopleToDiscover?.length ? (
          <Discover peopleToDiscover={peopleToDiscover} refetch={refetch} />
        ) : (
          <UnavailableUsers />
        )}
      </View>
    </SafeAreaView>
  );
};
