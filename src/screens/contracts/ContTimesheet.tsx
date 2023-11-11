import {useState} from 'react'
import imgref from '../../components/imgref'
import Button from '../../components/shared/Button'
import Calendar from 'react-calendar'


// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

const ContractTimesheet = () => {

  const [date, setDate] = useState(new Date()); 

  const onChange = (date)=>{
      setDate(date)
  }

  return (
    <>
       
      <div className='flex justify-between  gap-1 mx-2 md:mx-3 flex-wrap'>
        <div className='flex flex-col gap-1 bg-[#e9f0fe] justify-center items-center rounded-[20px] my-4  w-[48%] md:w-[165px]'>
          <p className='font-semibold text-[#042268] text-2xl  md:text-3xl '>0:40hrs</p>
          <p className='text-[#042268] font-semibold text-lg'>Last 24 hours</p>
          <p className='text-[10px] md:text-[12px] text-[#000000AB]'>Last worked 45 minutes ago</p>
        </div>
        <div className='flex flex-col gap-1 bg-[#f3f1ff] justify-center items-center rounded-[20px] my-4 px-2 py-3  w-[48%] md:w-[165px]'>
          <p className='font-semibold text-2xl  md:text-3xl  text-[#5A3FFF]'>0:40hrs</p>
          <p className='font-semibold text-lg text-[#5A3FFF]'>Last 24 hours</p>
          <p className='text-[10px] md:text-[12px] text-[#000000AB]'>Last worked 45 minutes ago</p>
        </div>
        <div className='flex flex-col gap-1 bg-[#f3f1ff] justify-between items-center rounded-[20px] my-4 p-3   w-[48%] md:w-[160px]'>
          <p className='font-semibold text-[#2C1E88] text-2xl  md:text-3xl '>0:40hrs</p>
          <p className='text-[#2C1E88] font-semibold text-lg'>Last 24 hours</p>
          
        </div>
        <div className='flex flex-col gap-1 bg-[#F0F7FF] justify-between items-center rounded-[20px] my-4 p-3   w-[48%] md:w-[160px]'>
          <p className='font-semibold text-[#0E599E] text-2xl  md:text-3xl '>0:40hrs</p>
          <p className='text-[#0E599E] font-semibold text-lg'>Last 24 hours</p>
          
        </div>
      </div>
      
      <div className="border-b border-t border-[#B2ADAD] py-3 mt-8 flex justify-between items-center px-3 md:px-6">
                <h2 className="text-[#000000AB] font-semibold text-xl md:text-2xl">Work Dairy</h2>
                <button className="flex gap-2 border py-1 px-3 rounded-3xl justify-center items-center">
                    <img src={imgref.plus} alt="" className="h-[24px]"/>
                    <span className=" text-sm md:text-lg font-medium text-[#042268]">Add Time</span>
                </button>
            </div>

    
      {/* <Calendar onChange={onChange} value={date}  className="w-[400px]"/> */}
  
      <div className="border-b border-t border-[#B2ADAD] py-3 mt-8  px-4 md:px-6">
          <h2 className="text-[#000000AB] font-semibold text-xl md:text-2xl">Recent Transactions</h2>     
      </div>
      <div className='flex justify-between items-center bg-[#fbfcff] p-4  rounded-lg mx-2 md:mx-12 border my-6'>
        <div className='flex flex-col '>
          <p className='text-sm md:text-lg text-[#05297D] font-semibold'>Last 7 days</p>
          <p className='text-2xl md:text-3xl font-semibold text-[#000000AB]'>$0:00</p>
        </div>
        <div className='flex flex-col '>
          <p className='text-sm md:text-lg text-[#05297D] font-semibold'>Last 30 days</p>
          <p className='text-2xl md:text-3xl font-semibold text-[#000000AB]'>$0:00</p>
        </div>
        <div className='flex flex-col '>
          <p className='text-sm md:text-lg text-[#05297D] font-semibold'>Since start</p>
          <p className='text-2xl md:text-3xl font-semibold text-[#000000AB]'>$0:00</p>
        </div>
      </div>


      <div className="flex flex-col justify-center items-center py-8 md:py-28">
                <img src={imgref.box} alt="" />
                <div className="flex justify-center py-2 mb-4 md:mb-8" >
                    <p className="text-base md:text-lg text-[#9E9E9E] w-[90%] md:w-[70%] text-center leading-6">There haven’t been any transactions in the past 30 days. Older transactions can be viewed on the transactions report </p>
                </div>
                <Button text='View Transaction Report'  width = "w-[70%] md:w-[280px] lg:w-[300px] " backgroundColor='transparent' textColor='#042268'  rounded='rounded-3xl' font="font-medium"/>
            </div>
    </>
  ) 
}

export default ContractTimesheet