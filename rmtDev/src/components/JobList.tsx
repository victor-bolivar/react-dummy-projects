import SortingControls from './controls/SortingControls'
import JobListItem from './JobListItem'
import { PiSpinnerGapThin } from "react-icons/pi";
import { useJobs } from '../hooks/useJobs';
import { useSearchParams } from 'react-router';
import PaginationControls from './controls/PaginationControls';
import useCurrentPage from '../hooks/useCurrentPage'
import { NUMBER_JOBS_PER_PAGE } from '../lib/constants';
import useSort from '../hooks/useSort';

const JobList = () => {

    const [searchParams] = useSearchParams()
    const search = searchParams.get("search") ?? ''

    const { jobsQuery } = useJobs(search)
    const totalSearchResults = jobsQuery.data?.length 

    const { currentPage } = useCurrentPage()
    const { isSortAsc } = useSort()

  return (
    <div className='w-80 bg-white flex flex-col'>
        <div className='h-10 text-sm flex justify-between px-4 items-center border-b-2'>
            
            {totalSearchResults ? <span><span className='font-semibold'>{totalSearchResults}</span> results</span>
              : <span></span> }

            <SortingControls />
        </div>
        
        {
          jobsQuery.isLoading && (
            <div className="flex flex-col gap-2 pl-2 pr-4 mt-2 h-[calc(100%-3rem)] justify-start">
              <div className='h-full flex items-center justify-center'>
                <PiSpinnerGapThin className='animate-spin self-center text-7xl' />
              </div>
            </div>
          )
        }
        
        {
          jobsQuery.data && (
            <>
              <div className="flex flex-col gap-2 pl-2 pr-4 my-4 justify-between h-full">
                {jobsQuery.data.slice((currentPage-1)*NUMBER_JOBS_PER_PAGE, currentPage*NUMBER_JOBS_PER_PAGE).map(job => <JobListItem job={job} key={job.id}/>)}
              </div>

              <PaginationControls />
            </>
          )
        }

        
      </div>
  )
}

export default JobList