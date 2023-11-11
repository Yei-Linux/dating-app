import { IResponse } from '../../shared';

export type TFindAllCountriesResponse = IResponse<
  Array<{
    id: number;
    name: string;
  }>
>;
