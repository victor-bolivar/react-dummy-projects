import { useQuery } from '@tanstack/react-query';
import { getJobs } from '../actions/get-jobs';

export const useJobs = (searchQuery: string) => {

  const jobsQuery = useQuery({
    queryKey: ['jobs', searchQuery],
    queryFn: () => getJobs(searchQuery),
    staleTime: 1000 * 60,
  });

	// You could also just return { data, isFetching, error }
  return {
    jobsQuery,

  };
};