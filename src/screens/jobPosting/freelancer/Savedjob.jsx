import React from 'react'
import imgref from '../../../components/imgref'

const Savedjob = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[60vh]'>
      <img src={imgref.freelancerbox} alt="box" />
      <p className="text-[#FF7A60] font-semibold text-2xl"> No saved job yet</p>
      <p className='text-[#9E9E9E] text-lg font-normal'>Your saved jobs will be shown here </p>
    </div>
  )
}

export default Savedjob
