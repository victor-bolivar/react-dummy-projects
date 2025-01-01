import { TJob } from '../lib/types'
import useSelectedJobId from '../hooks/useSelectedJobId';

const JobListItem = ({ job }:{ job:TJob }) => {

  const { setThisAsSelectedJobId, isCurrentlySelected} = useSelectedJobId(job.id.toString())

  return (
    <div className={`flex gap-2 ${isCurrentlySelected && 'bg-gray-300'}`} onClick={setThisAsSelectedJobId}>
        <div className='bg-gray-400 flex items-center justify-center text-2xl w-10'>
            <p>{job.badgeLetters}</p>
        </div>
        <div className='flex flex-col text-sm'>
            <p className='font-semibold'>{job.title}</p>
            <p className='FaSortAmountUp'>{job.company}</p>
        </div>
    </div>
  )
}

export default JobListItem