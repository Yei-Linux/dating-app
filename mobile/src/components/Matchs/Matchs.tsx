import React from 'react';
import {MatchHeader} from './MatchHeader';
import {People} from './People';
import {BaseLayout} from '../../layouts';
import {ScrollView} from 'react-native';

export const Matchs = () => {
  return (
    <BaseLayout>
      <BaseLayout.Header>
        <MatchHeader />
      </BaseLayout.Header>
      <BaseLayout.Body>
        <ScrollView>
          <People />
        </ScrollView>
      </BaseLayout.Body>
    </BaseLayout>
  );
};
