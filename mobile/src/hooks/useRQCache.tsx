import {useQueryClient} from '@tanstack/react-query';

export const useRQCache = () => {
  const queryClient = useQueryClient();

  const getFromRQMutation = (mutationKey: (string | number)[]) =>
    queryClient.getMutationCache().find({
      mutationKey,
    });

  const getFromRQQuery = (queryKey: string) =>
    queryClient.getQueryCache().get(queryKey);

  const setToQRCache = <T,>(
    queryKey: (string | number)[],
    fnCacheUpdater: (cache: T) => T,
  ) => {
    queryClient.setQueryData(queryKey, fnCacheUpdater);
  };

  return {setToQRCache, getFromRQMutation, getFromRQQuery};
};
