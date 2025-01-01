import { jobsApi } from "../api/jobsApi";
import { TJob } from "../lib/types";

type TDataResponse = {
    public: boolean,
    sorted: boolean,
    jobItems: TJob[]
}

export const getJobs = async (searchQuery: string): Promise<TJob[]> => {
    const endpoint = searchQuery ? `/data?search=${searchQuery}` : '/data'
    const { data } = await jobsApi.get<TDataResponse>(endpoint);
    return data.jobItems;
  };