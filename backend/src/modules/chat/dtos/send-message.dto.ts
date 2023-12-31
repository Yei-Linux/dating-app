import { IResponse } from '../../shared';

export type TSendMessageRequest = {
  message: string;
  chatId: number;
};

export type TSocketMessage = {
  senderId: number;
  text: string;
  timestamp: number;
};

export type TSendMessageResponse = IResponse<TSocketMessage>;
