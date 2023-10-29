export type IFindImboxByUserItem = {
  id: number;
  friend: {
    id: number;
    email: string;
    name: string;
    lastName: string;
    profileImg: string | null;
  };
  lastMessage: {
    id: number;
    isMine: boolean;
    message: string;
    createdAt: string;
  } | null;
};

export type IFindImboxByUserResponse = IFindImboxByUserItem[];
