import { jobsApi } from "../api/jobsApi";
import { TJob } from "../lib/types";

type TDataResponse = {
    public: boolean,
    jobItem: TJob
} 

export const getJobDetail = async (jobId: string): Promise<TJob> => {
    const { data } = await jobsApi.get<TDataResponse>(`/data/${jobId}`);
    return data.jobItem;
  };