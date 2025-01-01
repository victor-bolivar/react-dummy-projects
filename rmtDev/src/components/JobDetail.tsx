import { useSearchParams } from 'react-router'
import { useJobDetail } from '../hooks/useJobDetail'
import { PiSpinnerGapThin } from "react-icons/pi";
import toast from 'react-hot-toast';
import { useEffect } from 'react';

const JobDetail = () => {

    const [searchParams] = useSearchParams()
    const selectedJobId = searchParams.get("jobId") ?? undefined
    const jobDetailQuery = useJobDetail(selectedJobId)
  
  if(!jobDetailQuery){
    return (
      <div className='bg-gray-100 flex-1 flex flex-col justify-center items-center px-2'>
          <h1 className='font-semibold text-lg text-gray-600'>What are you looking for?</h1>
          <p className='text-gray-700'>Start by searching for any technology your ideal job is working with</p>
      </div>
    )
  }

  useEffect(()=>{
      if(jobDetailQuery.error){
        toast.custom((t) => (
          <div
            className={`max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Error
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {jobDetailQuery.error.message}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-gray-600 hover:text-gray-200 hover:bg-gray-400    00 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Close
              </button>
            </div>
          </div>
        ))
      }
  }, [jobDetailQuery.error])


  return (
    <div className='bg-gray-100 flex-1 flex flex-col justify-center items-center'>
      { jobDetailQuery.isLoading && <PiSpinnerGapThin className='animate-spin self-center text-7xl' /> }

      { jobDetailQuery.error && <p>
          {jobDetailQuery.error.message}
        </p>}
      
      {
        jobDetailQuery.data && <p>
          {JSON.stringify(jobDetailQuery.data)}
        </p>
      }

    </div>
  )
}

export default JobDetail