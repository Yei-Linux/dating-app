/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Card} from '../../components/ui/Card/Card';
import {SafeAreaView, View} from 'react-native';
import {DiscoverStyleSheet} from './styles';
import {Button} from '../../components/ui/Button/Button';
import {Title} from '../../components/ui/Title/Title';
import {UserActions} from '../../components/Discover/UserActions/UserActions';

const userProfileImg =
  'https://img.asmedia.epimg.net/resizer/6PGLeILjDug_Fm3k2n2FXOltLcI=/1472x1104/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/YO3EXANZVFB6RBQVH5AT4NSTTY.png';
export const Discover = () => {
  return (
    <SafeAreaView>
      <View style={[DiscoverStyleSheet.discoverWrapper]}>
        <View style={[DiscoverStyleSheet.discoverTitle]}>
          <Title text="Discover" level="h1" />
        </View>

        <Card coverSrc={userProfileImg} maxHeight={500}>
          <Card.Info style={DiscoverStyleSheet.userInfo}>
            <View>
              <Card.Title>Mike, 25</Card.Title>
              <Card.Description>Sr. UX Research at Tesla</Card.Description>
            </View>
            <Button
              maxWidth={100}
              colors={['#000000', '#2f2f2f']}
              text="2.5 mil"
              styles={{
                borderRadius: 30,
              }}
            />
          </Card.Info>
        </Card>

        <UserActions />
      </View>
    </SafeAreaView>
  );
};
