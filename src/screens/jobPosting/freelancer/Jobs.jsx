import React from 'react'
import FilterJobs from '../../freelancer/FilterJobs.jsx'
import JobsButton from './JobsButton.jsx'

const Jobs = () => {

  return (
    <div className='flex flex-row mt-24'>
      <JobsButton/>
      <FilterJobs/>
    </div>
  )
}

export default Jobs
