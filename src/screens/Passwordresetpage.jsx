import imgref from "../components/imgref";
import { useNavigate } from "react-router-dom";

function Passwordresetpage(props) {
  let navigate = useNavigate();
  return (
    <div className='flex flex-col gap-9 justify-center items-center'>
      <div className='pt-12'>
        <div className="relative">
          <div className="w-3 rounded-[50%] absolute -left-10 top-28 h-3 bg-[#1EAE6B]"></div>
          <div className="w-2 rounded-[50%] top-20 absolute h-2 bg-[#1EAE6B]"></div>
          <div className="w-2 rounded-[50%] -left-5 top-14 absolute h-2 bg-[#1EAE6B]"></div>
          <div className="w-3 rounded-[50%] -top-4 left-5 absolute h-3 bg-[#1EAE6B]"></div>
          <div className="w-2 rounded-[50%] absolute left-40 top-28 h-2 bg-[#1EAE6B]"></div>
          <div className="w-2 rounded-[50%] left-52 top-14 absolute h-2 bg-[#1EAE6B]"></div>
          <div className="w-3 rounded-[50%] -top-3 left-28 absolute h-3 bg-[#1EAE6B]"></div>
          <div className="w-1 rounded-[50%] left-56 top-20  absolute h-1 bg-[#1EAE6B]"></div>
        </div>
        <img src={imgref.checkmark} alt="checkmark" className='bg-[#DBFFEE] p-7 rounded-full ' />
      </div>
      <div className='text-center'>
        <p className='text-[#292B30] font-medium text-[1.375rem] md:text-2xl '>Password Reset</p>
        <p className='text-[#646566] font-normal text-sm mb-10 md:text-lg'>Your password has been reset successfully.<br /> Continue to sign in to your account</p>
      </div>
      <button onClick={() => {
        navigate("/signin");
      }} className=" p-3 w-[90vw] md:w-full text-base text-white  rounded-lg bg-[#042268] lg:p-3  lg:w-[508px] lg:h-[50px]">
        Continue to sign in
      </button>
    </div>
  )
}

export default Passwordresetpage
