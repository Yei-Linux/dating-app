export type TDiscoverInteraction = 'like' | 'reject';

export type IDiscoverInteractionRequest = {
  userIdTransmitter: number;
  userIdReceiver: number;
  interaction: TDiscoverInteraction;
};

export type IDiscoverPeopleResponse = Array<{
  id: number;
  profileImg: string;
  name: string;
  age: string;
  description: string;
  distance: string;
}>;
