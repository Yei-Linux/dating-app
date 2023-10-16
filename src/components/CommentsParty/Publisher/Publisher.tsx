import React from 'react';
import {TextInput, View} from 'react-native';
import {PublisherStyleSheet} from './styles';
import {Button} from '../../ui/Button/Button';

export const Publisher = () => {
  return (
    <View style={[PublisherStyleSheet.wrapper]}>
      <TextInput
        style={[PublisherStyleSheet.publisher]}
        multiline={true}
        numberOfLines={4}
        value=""
        placeholder="What do you think?..."
      />
      <View style={[PublisherStyleSheet.submit]}>
        <Button text="Publish" />
      </View>
    </View>
  );
};
