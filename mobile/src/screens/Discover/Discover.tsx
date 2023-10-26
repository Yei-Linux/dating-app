import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {DiscoverStyleSheet} from './styles';
import {Title} from '../../components/ui/Title/Title';
import {LikeOrNot} from '../../components/Discover/LikeOrNot/LikeOrNot';
import {useFetchDiscoverPeople} from './useFetchDiscoverPeople';
import {UnavailableUsers} from '../../components/Discover/UnavailableUsers';

export const DiscoverScreen = () => {
  const {data} = useFetchDiscoverPeople();

  return (
    <SafeAreaView>
      <View style={[DiscoverStyleSheet.discoverWrapper]}>
        <View style={[DiscoverStyleSheet.discoverTitle]}>
          <Title text="Discover" level="h1" />
        </View>

        {data?.length ? (
          <LikeOrNot peopleToDiscover={data} />
        ) : (
          <UnavailableUsers />
        )}
      </View>
    </SafeAreaView>
  );
};
