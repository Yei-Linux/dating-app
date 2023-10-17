export interface IDiscoverFindRequest {
  userId: string;
}

export interface IDiscoverFind {
  userId: string;
  userName: string;
  age: number;
  description: string;
  fullName: string;
}
export type IDiscoverFindResponse = Array<IDiscoverFind>;
