export type TDiscoverInteraction = 'like' | 'reject';

export interface IDiscoverInteractionRequest {
  userIdTransmitter: number;
  userIdReceiver: number;
  interaction: TDiscoverInteraction;
}
