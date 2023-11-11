import { Link } from "react-router-dom";
import Button from "../../components/shared/Button";
import Todos from "../../components/contract/Todos";
import imgref from "../../components/imgref";


const ContractOverview = () => {
  return (
    <>
       <div className="mx-2 md:mx-4 lg:mx-8 xl:mx-16 mt-4  mb-8 w-90%">
        <div className="border-2 border-[#5870A8] rounded-[20px] w-full flex flex-col md:flex-row justify-between items-center bg-[#f0f7ff] py-4 px-2 md:px-8">

          <div>
            <p className="font-semibold text-3xl text-[#000000AB]">Earnings this week</p>
            <div className="py-4">
               <p className="font-semibold text-[#042268] text-xl ">$0.00</p>
               <div className="w-full md:max-w-[300px]">
                  <div className="bg-[#CDD4E5] h-4 rounded-[10px] w-full py-1"></div>
                  <div className="font-semibold text-[#000000AB] flex justify-between">
                    <p>0:00hrs</p>
                    <p>20 hrs limit</p>
                  </div>
               </div>

            </div>
            <div>
              <p className="w-full md:w-[70%]">You will get paid for these hours on Monday (FlexGig’s billing timezone). <span className="text-[#fd8a74]">Learn more</span></p>
            </div>
          </div>
          <div className="flex flex-col  justify-between md:justify-center md:items-center w-full md:w-auto">
            <div className="flex justify-between flex-row md:flex-col gap-4  w-full mt-4">
            <div>
            <Button text="Open time Tracker" rounded="rounded-[32px]" width="w-full md:w-[200px] lg:w-[250px]" fontSize="text-[13px] md:text-[14px]"/>
            </div>
        
            <div  >
            <Button text="Add time Manually" rounded="rounded-[32px]" backgroundColor="transparent" textColor="black" width="w-full md:w-[200px] lg:w-[250px]" fontSize="text-[13px] md:text-[14px]"/>
            </div>
            </div>
            
            <div className="mt-4 md:mt-0">
              <Link to="/dashboard/contracts/info/timesheet">
                <button className="font-semibold  text-[#042268]">View Timesheet</button>
              </Link>
            </div>
          
            
          </div>
          
        </div>
       
      </div>
      <Todos/>

      <div className="border-b border-t border-[#B2ADAD] py-3 mt-8 hidden md:flex justify-between items-center px-6">
                <h2 className="text-[#000000AB] font-semibold text-2xl">Hourly Project</h2>               
      </div>
      <div className="hidden md:flex justify-between mx-6 pb-16" >
      <table className="flex-1 mt-6 me-8 pb-4">
        <thead>
          <tr className="text-[#A6A6A8] font-normal text-sm">
            <th className="text-left pb-4">S/N</th>
            <th className="text-left pb-4">Description</th>
            <th className="text-left pb-4">Hourly</th>
            <th className="text-left pb-4">Weekly Limit</th>
            <th className="text-left pb-4">Status</th>
          </tr>
        </thead>
        <tbody  className="pt-4">
          <tr>
            <td>1.</td>
            <td className="flex  font-medium"> <img src={imgref.payment} alt="" /><span>Create authentication pages</span></td>
            <td>$2.50</td>
            <td className="font-semibold text-[#000000AB]">20hours</td>
            <td className="text-[#168250] bg-[#E9F7F0] mx-auto w-4 px-3 rounded-[30px] text-sm font-semibold">Active</td>
           
          </tr>
          
        </tbody>
      </table>
      <Link to="/dashboard/contracts/info/timesheet" className="self-end">
           <button className=" bg-[#042268] text-white text-[12px] font-medium py-1 px-6 rounded-3xl">See Timesheet</button>
      </Link>
      </div>
      
    </>
  )
}

export default ContractOverview