import { IResponse } from '../../shared';

export type TDiscoverInteraction = 'like' | 'reject';

export interface IDiscoverInteractionRequest {
  userIdReceiver: number;
  interaction: TDiscoverInteraction;
}

export type IDiscoverInteractionResponse = IResponse<{
  id: number;
}>;
