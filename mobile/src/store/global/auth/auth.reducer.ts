import {WritableDraft} from 'immer/dist/internal';
import {TAuthInitialState} from './auth.slice';
import {IAction} from '../../../types';

export type IAuthAction = TAuthInitialState;

export const authReducer = {
  setAuthProfile: (
    state: WritableDraft<TAuthInitialState>,
    action: IAction<IAuthAction>,
  ) => {
    const {payload} = action;
    if (!state || !payload) {
      return;
    }

    state.id = payload.id;
    state.email = payload.email;
    state.name = payload.name;
    state.lastName = payload.lastName;
    state.age = payload.age;
    state.token = payload.token;
    state.profileImg = payload.profileImg;
  },
};
