import { useQuery } from '@tanstack/react-query';
import { getJobDetail } from '../actions/get-job-detail';

export const useJobDetail = (jobId: string | undefined) => {

    if (jobId === undefined) return

  const jobDetailQuery = useQuery({
    queryKey: ['jobDetail', jobId],
    queryFn: () => getJobDetail(jobId),
    staleTime: 1000 * 60,
    retry: false
  });

  return jobDetailQuery;
};