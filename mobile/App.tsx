import React from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from './src/store/global';

import {PersistGate} from 'redux-persist/integration/react';

import {decode, encode} from 'base-64';
import {Wrapper} from './src/screens/Wrapper';

if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Wrapper />
      </PersistGate>
    </Provider>
  );
};
