import { useJobs } from "../hooks/useJobs"

const Footer = () => {

  const { jobsQuery } = useJobs('')
  const jobsAvailable = jobsQuery.data?.length 

  return (
    <footer className='flex justify-between'>
        <span>&copy;Copyright by Victor Bolivar</span>

        {jobsAvailable && <span><span className='font-semibold'>{jobsAvailable}</span> total jobs available</span>}
    </footer>
  )
}

export default Footer