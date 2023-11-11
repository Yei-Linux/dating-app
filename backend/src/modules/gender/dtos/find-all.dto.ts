import { IResponse } from '../../shared';

export type TFindAllGendersResponse = IResponse<
  Array<{
    id: number;
    name: string;
  }>
>;
