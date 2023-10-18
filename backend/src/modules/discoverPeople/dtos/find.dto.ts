import { IResponse } from '../../shared';

export interface IDiscoverFindRequest {
  userId: string;
}

export interface IDiscoverFind {
  userId: number;
  age: number;
  description?: string | null;
  name: string;
  lastName: string;
}
export type IDiscoverFindResponse = IResponse<Array<IDiscoverFind>>;
