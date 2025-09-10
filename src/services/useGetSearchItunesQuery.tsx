import { useQuery } from "@tanstack/react-query";
import podcastService from "./podcast.service";

const useGetSearchItunesQuery = (term: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["podcasts", term],
    queryFn: () => podcastService.getPodcasts(term),
    enabled: !!term, // Only run query when term is not empty
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return {
    data,
    isLoading,
    error,
  };
};

export default useGetSearchItunesQuery;
