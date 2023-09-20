import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {DiscoverStyleSheet} from './styles';
import {Title} from '../../components/ui/Title/Title';
import {LikeOrNot} from '../../components/Discover/LikeOrNot/LikeOrNot';

export const Discover = () => {
  return (
    <SafeAreaView>
      <View style={[DiscoverStyleSheet.discoverWrapper]}>
        <View style={[DiscoverStyleSheet.discoverTitle]}>
          <Title text="Discover" level="h1" />
        </View>

        <LikeOrNot />
      </View>
    </SafeAreaView>
  );
};
