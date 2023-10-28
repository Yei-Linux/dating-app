import { IResponse } from '../../shared';

export type IFindImboxByUserResponse = IResponse<
  {
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
      createdAt: Date;
    } | null;
  }[]
>;
