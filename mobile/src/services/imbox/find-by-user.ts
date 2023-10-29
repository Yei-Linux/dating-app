import {axiosClient} from '../../config';

export const findImboxByUser = async (userId: string) => {
  try {
    const params = new URLSearchParams({
      userId,
    });
    const {data} = await axiosClient.get(`/imbox?${params.toString()}`);
    return data?.data;
  } catch (error) {
    throw new Error(`Error ${(error as Error).message}`);
  }
};
