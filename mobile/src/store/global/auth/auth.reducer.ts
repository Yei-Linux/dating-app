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
    if (!payload) {
      return;
    }

    (state as any).token = payload.token;
    (state as any).user = payload.user;
  },
  clear: (state: WritableDraft<TAuthInitialState>) => {
    state = null;
    return state;
  },
};
