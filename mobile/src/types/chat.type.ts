export type TMessage = {
  owner: 'mine' | 'yours';
  text: string;
  timestamp: number;
};

export type TSocketMessage = {
  senderId: number;
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

export type TSendMessageRequest = {
  message: string;
  userId: number;
  chatId: number;
};
