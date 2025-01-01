import JobList from './JobList'
import JobDetail from './JobDetail'

const Container = () => {
  return (
    <div className='min-h-[calc(100vh-20rem)] rounded-md border border-gray-200 shadow-lg -translate-y-4 flex'>
      <JobList />
      <JobDetail />
    </div>
  )
}

export default Container