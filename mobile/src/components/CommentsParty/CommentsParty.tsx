import React from 'react';
import {BaseLayout} from '../../layouts';
import {ScrollView} from 'react-native';
import {Comments} from './Comments/Comment';
import {CommmentsHeader} from './CommentsHeader';
import {Publisher} from './Publisher';

export const CommentsParty = () => {
  return (
    <BaseLayout>
      <BaseLayout.Header>
        <CommmentsHeader />
      </BaseLayout.Header>
      <BaseLayout.Body>
        <Publisher />
        <ScrollView>
          <Comments />
        </ScrollView>
      </BaseLayout.Body>
    </BaseLayout>
  );
};
