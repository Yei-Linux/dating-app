import { IResponse } from '../../shared';

export type TDiscoverInteraction = 'like' | 'reject';

export interface IDiscoverInteractionRequest {
  userId: string;

  interaction: TDiscoverInteraction;
  date: string;
}

export type IDiscoverInteractionResponse = IResponse<{
  userId: string;
  interaction: TDiscoverInteraction;
}>;
