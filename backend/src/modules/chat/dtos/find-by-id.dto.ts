import { IResponse } from '../../shared';

export type TMessage = {
  owner: 'mine' | 'yours';
  text: string;
  timestamp: number;
};

export type TFindChatById = {
  id: number;
  friend: {
    id: number;
    name: string;
    lastName: string;
    profileImg: string | null;
  };
  messages: Array<TMessage>;
};

export type TFindChatByIdResponse = IResponse<TFindChatById>;
